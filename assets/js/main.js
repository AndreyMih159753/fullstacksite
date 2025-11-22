// Все переменные
let btnSearchNode = document.querySelector(`.btn-search`);
let searchNode = document.querySelector(`.search`);
let closeNode = document.querySelector(`.close`);

// Все функции
btnSearchNode.addEventListener(`click`, () => {
    searchNode.style.display = 'block';
});

closeNode.addEventListener(`click`, () => {
    searchNode.style.display = 'none';
});