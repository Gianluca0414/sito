
// link navbar responsive (se clicco sul link si chiude il menu)
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var check = document.getElementById('check');
    var backToHome = document.querySelector('.arrow-up');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            check.checked = false;
        });
    });

    // Aggiunge/rimuove la classe 'active' ai link di navigazione in base alla sezione visibile
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    }, { threshold: 0.9 });

    document.querySelectorAll('section').forEach(function (section) {
        observer.observe(section);
    });

    // Freccetta su 
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight) {
            backToHome.style.display = 'block';
        } else {
            backToHome.style.display = 'none';
        }
    });
});

// change button 
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tap-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            // Rimuovi la classe attiva da tutti i bottoni
            buttons.forEach(btn => btn.classList.remove('active'));

            // Aggiungi la classe attiva al bottone cliccato
            this.classList.add('active');

            // Mostra il contenuto corrispondente e nascondi gli altri
            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// Gallery
document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            number: "01",
            title: "Progetto FORM",
            description: "Piccolo progetto di un form di contatto che ha lo scopo di far vedere delle mie piccole skills: Grafica, controlli di sicurezza e gestione del database.",
            languages: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            ],
            projectLink: "#",
            codeLink: "#",
            img: "images/application-form-employment-document-concept.jpg"
        },
        {
            number: "02",
            title: "Progetto 2",
            description: "Progetto in arrivo.",
            languages: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            ],
            projectLink: "#",
            codeLink: "#info",
            img: "images/60031.jpg"
        },
        {
            number: "03",
            title: "Progetto 3",
            description: "Progetto in arrivo",
            languages: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            ],
            projectLink: "#",
            codeLink: "#",
            img: "images/fondo-in-costruzione-disegnato-a-mano.png"
        }
    ];

    let currentProject = 0;

    const numberElement = document.getElementById('number');
    const titleElement = document.getElementById('portfolio-title');
    const descriptionElement = document.getElementById('portfolio-description');
    const languageContainer = document.querySelector('.sub-box-portfolio');
    const projectLinkElement = document.getElementById('project-link');
    const codeLinkElement = document.getElementById('code-link');
    const imgElement = document.getElementById('project-img');

    function updateProject() {
        const project = projects[currentProject];
        numberElement.textContent = project.number;
        titleElement.textContent = project.title;
        descriptionElement.textContent = project.description;
        languageContainer.innerHTML = project.languages.map(lang => `<img src="${lang}" />`).join('');
        projectLinkElement.href = project.projectLink;
        codeLinkElement.href = project.codeLink;
        imgElement.src = project.img;
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
        updateProject();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
        updateProject();
    });

    updateProject();
});
