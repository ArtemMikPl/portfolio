export default () => {
    const skillsList = [
        {id: 1, title: 'Web-development', img: '/img/webicon.png', items: 'Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.'},
        {id: 2, title: 'UI/UX Design', img: '/img/uiicon.png', items: 'JPhotoshop, Illustrator, Sketch, Axure, XMind, Wireframing.'},
        {id: 3, title: 'Frontend', img: '/img/frontendicon.png', items: 'HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js.'},
        {id: 4, title: 'SEO', img: '/img/seoicon.png', items: 'Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.'},
    ]

    const portfolioItems1 = [
        {id: 1, img: '/img/portfolio/port2.png', link: '#', title: 'Игровой сайт «Старк»'},
        {id: 2, img: '/img/portfolio/port3.png', link: '#', title: 'Интернет магазин «Цифровой»'},
        {id: 3, img: '/img/portfolio/port1.png', link: '#', title: 'Обучающая платформа «Бризли»'},
        {id: 4, img: '/img/portfolio/port2.png', link: '#', title: 'Сайт грузоперевозок «Сервис»'},
        {id: 5, img: '/img/portfolio/port3.png', link: '#', title: 'Интернет-магазин «Лампа»'},
        {id: 6, img: '/img/portfolio/port1.png', link: '#', title: 'Музыкальный сервис «Драйв»'},
    ]
    const portfolioItems2 = [
        {id: 1, img: '/img/portfolio/port1.png', link: '#', title: 'Игровой сайт «Старк»'},
        {id: 2, img: '/img/portfolio/port2.png', link: '#', title: 'Интернет магазин «Цифровой»'},
        {id: 3, img: '/img/portfolio/port3.png', link: '#', title: 'Обучающая платформа «Бризли»'},
        {id: 4, img: '/img/portfolio/port1.png', link: '#', title: 'Сайт грузоперевозок «Сервис»'},
        {id: 5, img: '/img/portfolio/port2.png', link: '#', title: 'Интернет-магазин «Лампа»'},
        {id: 6, img: '/img/portfolio/port3.png', link: '#', title: 'Музыкальный сервис «Драйв»'},
    ]
    const portfolioItems3 = [
        {id: 1, img: '/img/portfolio/port3.png', link: '#', title: 'Игровой сайт «Старк»'},
        {id: 2, img: '/img/portfolio/port1.png', link: '#', title: 'Интернет магазин «Цифровой»'},
        {id: 3, img: '/img/portfolio/port2.png', link: '#', title: 'Обучающая платформа «Бризли»'},
        {id: 4, img: '/img/portfolio/port3.png', link: '#', title: 'Сайт грузоперевозок «Сервис»'},
        {id: 5, img: '/img/portfolio/port1.png', link: '#', title: 'Интернет-магазин «Лампа»'},
        {id: 6, img: '/img/portfolio/port2.png', link: '#', title: 'Музыкальный сервис «Драйв»'},
    ]
    const portfolioItems4 = [
        {id: 1, img: '/img/portfolio/port1.png', link: '#', title: 'Игровой сайт «Старк»'},
        {id: 2, img: '/img/portfolio/port3.png', link: '#', title: 'Интернет магазин «Цифровой»'},
        {id: 3, img: '/img/portfolio/port2.png', link: '#', title: 'Обучающая платформа «Бризли»'},
        {id: 4, img: '/img/portfolio/port1.png', link: '#', title: 'Сайт грузоперевозок «Сервис»'},
        {id: 5, img: '/img/portfolio/port3.png', link: '#', title: 'Интернет-магазин «Лампа»'},
        {id: 6, img: '/img/portfolio/port2.png', link: '#', title: 'Музыкальный сервис «Драйв»'},
    ]
    const hiddenPortfolioItemsArray = [
        {id: 7, img: '/img/portfolio/port1.png', link: '#', title: 'Игровой сайт «Старк»'},
        {id: 8, img: '/img/portfolio/port1.png', link: '#', title: 'Интернет магазин «Цифровой»'},
        {id: 9, img: '/img/portfolio/port1.png', link: '#', title: 'Обучающая платформа «Бризли»'},
        {id: 10, img: '/img/portfolio/port1.png', link: '#', title: 'Сайт грузоперевозок «Сервис»'},
    ]


    return{
        skillsList,
        portfolioItems1,
        portfolioItems2,
        portfolioItems3,
        portfolioItems4,
        hiddenPortfolioItemsArray
    }
}