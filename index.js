const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

const newsElm = document.querySelector('.news');
newsElm.style.backgroundColor = 'white';
newsElm.style.width = '60rem';

const title = document.querySelector('h1');
title.classList.add('news__title');
title.textContent = 'Aktuální novinky';

const first_news = document.querySelector('#zprava1');
first_news.classList.add('post--main');

const imgNews = document.querySelector('#zprava3 img');
imgNews.src = 'img/zprava3-novy.jpg';
