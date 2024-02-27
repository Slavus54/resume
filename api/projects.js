const projects = [
    {
        id: 'sUI7_ib',
        title: 'Reconquista.com',
        category: 'React SPA',
        description: 'Приложение для защиты Европы',
        year: 2024,
        url: 'https://github.com/Slavus54/reconquista.com',
        technologies: ['React', 'Typescript', 'Context API', 'Cache', 'Notifications', 'ExpressJS', 'GraphQL', 'Apollo', 'MongoDB']
    },
    {
        id: 'sUI6_ib',
        title: 'Resume 2024',
        category: 'HTMX App',
        description: 'Современное резюме на htmx',
        year: 2024,
        url: 'https://github.com/Slavus54/resume',
        technologies: ['htmx', 'ExpressJS', 'REST API']
    },
    {
        id: 'sUI5_ib',
        title: 'Nurtour.IO',
        category: 'React SPA',
        description: 'Платформа для воспитания детей',
        year: 2024,
        url: 'https://github.com/Slavus54/nurtour.io',
        technologies: ['React', 'Typescript', 'Context API', 'Cookies', 'UI/UX', 'Jest', 'NodeJS', 'GraphQL', 'MongoDB']
    },
    {
        id: 'sUI4_ib',
        title: 'Biken.com',
        category: 'React SPA',
        description: 'Социальная сеть для велолюбителей Сибири',
        year: 2024,
        url: 'https://github.com/Slavus54/biken.com',
        technologies: ['React', 'Redux', 'Typescript', 'Context API', 'UI/UX', 'NodeJS', 'ExpressJS', 'GraphQL', 'MongoDB']
    },
    {
        id: 'sUI3_ib',
        title: 'NodeJS',
        category: 'JS Practice',
        description: 'Практика при более глубоком погружении в экосистему серверного JavaScript.',
        year: 2024,
        url: 'https://github.com/Slavus54/nodejs',
        technologies: ['JS', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'Websockets', 'SSE', 'Filesystem', 'REST API']
    },
    {
        id: 'sUI2_ib',
        title: 'Motherland',
        category: 'Template',
        description: 'Посадочная страница о моей малой родине.',
        year: 2024,
        url: 'https://github.com/Slavus54/motherland-template',
        technologies: ['HMTL', 'CSS', 'Flexbox']
    },
    {
        id: 'sUI1_ib',
        title: 'IT-Fields.ru',
        category: 'React SPA',
        description: 'Студенческое пространство для развития и обучению IT в России',
        year: 2024,
        url: 'https://github.com/Slavus54/it-fields.ru',
        technologies: ['React', 'Typescript', 'Context API', 'LocalStorage', 'CSS in JS', 'UI/UX', 'Node', 'GraphQL', 'MongoDB']
    },
    {
        id: 'sUI0_ib',
        title: 'Europe.IO',
        category: 'React PWA',
        description: 'Приложение для ценителей истории и культуры Европейского континента',
        year: 2024,
        url: 'https://github.com/Slavus54/europe.io',
        technologies: ['React', 'Redux', 'Typescript', 'Jest', 'PDF API', 'Node', 'MongoDB', 'GraphQL', 'Context API' ]
    },
    {
        id: 'mPK5_ed',
        title: 'FinApp.IO',
        category: 'Remix',
        description: 'Управления финансами и калькуляторы',
        year: 2024,
        url: 'https://github.com/Slavus54/finappance',
        technologies: ['Remix', 'Routing', 'SSR', 'NodeJS', 'Redis', 'REST API']
    },
    {
        id: 'qFG1_fi',
        title: 'Towns-API',
        category: 'API',
        description: 'Публичное API городов Европы',
        year: 2024,
        url: 'https://github.com/Slavus54/towns-api',
        technologies: ['Node', 'ExpressJS']
    },
    {
        id: 'pUI4_fd',
        title: 'Izba.IO',
        category: 'React SPA',
        description: 'Приложение для сохранения деревянного наследия Восточной Европы',
        year: 2024,
        url: 'https://github.com/Slavus54/izba.io',
        technologies: ['React', 'Typescript', 'Git', 'Node', 'ExpressJS', 'Docker', 'MongoDB', 'GraphQL', 'Context API' ]
    },
    {
        id: 'sKI3_fa',
        title: 'Datus.JS',
        category: 'JS Library',
        description: 'Open-source библиотека для управление календарём (аналог moment.js)',
        year: 2024,
        url: 'https://github.com/Slavus54/datus.js',
        technologies: ['JS', 'Solid Principles', 'Design Patterns']
    },
    {
        id: 'iUI1_oe',
        title: 'Next Portfolio',
        category: 'Next SPA',
        description: 'Новое портфолио на NextJS с примерами проектов и CV',
        year: 2023,
        url: '',
        technologies: ['Next.js', 'Typescript', 'Node', 'ExpressJS', 'SSR', 'Server Actions']
    },
    {
        id: 'sKJ3_eg',
        title: 'Centum.JS Docs',
        category: 'Preact PWA',
        description: 'Документация для open-source ООП библиотеки Centum.js (100 функций) с возможностью попробовать каждый метод',
        year: 2023,
        url: 'https://github.com/Slavus54/modus.io',
        technologies: ['Preact', 'Typescript', 'Vite', 'Node', 'ExpressJS', 'REST API']
    },
    {
        id: 'sEL2_fd',
        title: 'Modus.IO',
        category: 'React PWA',
        description: 'Приложение для эстетизации русскоязычных',
        year: 2023,
        url: 'https://github.com/Slavus54/modus.io',
        technologies: ['React', 'Typescript', 'Redux', 'Node', 'ExpressJS', 'MongoDB', 'GraphQL', 'Context API', 'Jest']
    },
    {
        id: 'sKA1_fd',
        title: 'Лабораторный практикум НГТУ',
        category: 'JS Practice',
        description: 'Лабораторные работы и РГЗ по 100-бальному курсу Computer Science за 2 семестр обучения в НГТУ РЭФ (C/C# и JS версии)',
        year: 2023,
        url: 'https://github.com/Slavus54/sich.io',
        technologies: ['JS', 'C', 'C#']
    },
    {
        id: 'aTF1_pd',
        title: 'Arclabs',
        category: 'Template',
        description: 'Посадачная страница агенства недвижимости Arclabs',
        year: 2023,
        url: 'https://github.com/Slavus54/arclabs-template',
        technologies: ['HMTL', 'CSS', 'SCSS', 'Mixins', 'Flexbox', 'Grid']
    },
    {
        id: 'uOS6_is',
        title: 'States.IO',
        category: 'React SPA',
        description: 'Платформа об истории и культуре США',
        year: 2023,
        url: 'https://github.com/Slavus54/states.io',
        technologies: ['React', 'Zustand', 'Context API', 'Jest', 'Node', 'ExpressJS', 'MongoDB', 'Apollo', 'GraphQL']
    },
    {
        id: 'pKJ9_tb',
        title: 'Fish-Market',
        category: 'Next SPA',
        description: 'Приложение для рыбалки',
        year: 2022,
        url: 'https://github.com/Slavus54/fish-market',
        technologies: ['Next.JS', 'SCSS', 'Node', 'ExpressJS', 'API', 'Heroku']
    },
    {
        id: 'oUX4_yv',
        title: 'Excel-JS',
        category: 'JS App',
        description: 'Excel в браузере',
        year: 2021,
        url: 'https://github.com/Slavus54/excel-js',
        technologies: ['JS', 'Webpack', 'Jest', 'SASS', 'Solid Principles', 'Local Storage']
    },
    {
        id: 'iRT2_pa',
        title: 'Password Generator',
        category: 'React SPA',
        description: 'Простой генератор паролей на Gatsby',
        year: 2020,
        url: 'https://github.com/Slavus54/password-simple-gen',
        technologies: ['Gatsby', 'Jotai', 'Material UI']
    },
    {
        id: 'lOI2_bg',
        title: 'YouTube Main Page',
        category: 'Template',
        description: 'Главная страница YouTube на JS',
        year: 2020,
        url: 'https://github.com/Slavus54/Slavus54.github.io/tree/master/youtube',
        technologies: ['HTML', 'CSS', 'JQuery']
    },
    {
        id: 'lES5_bg',
        title: 'DevConnector',
        category: 'React SPA',
        description: 'Пример аутентификации на стеке MERN',
        year: 2020,
        url: 'https://github.com/Slavus54/Slavus54.React.github.io',
        technologies: ['React', 'ExpressJS', 'MongoDB', 'Firebase', 'Authentication', 'Redux']
    },
    {
        id: 'lFF1_tr',
        title: 'Clothes Main Page',
        category: 'Template',
        description: 'Первый свёрстанный сайт',
        year: 2019,
        url: 'https://github.com/Slavus54/Slavus54.github.io/blob/master/Lorem_firstSite',
        technologies: ['HTML', 'CSS', 'JS']
    }
]

export default projects