let rentedGames = 1;

function countAndExhibitRentedGames() {
    console.log(`Rented Games: ${rentedGames}`);

}

function alterarStatus(id) {
    let selectedGame = document.getElementById(`game-${id}`);
    let image = selectedGame.querySelector('.dashboard__item__img');
    let button = selectedGame.querySelector(`.dashboard__item__button`);
    let gameName = selectedGame.querySelector(`.dashboard__item__name`);

    if (image.classList.contains(`dashboard__item__img--rented`)) {
        if (confirm(`Do you want to return the game ${gameName.textContent}?`)) {
            image.classList.remove(`dashboard__item__img--rented`);
            button.classList.remove(`dashboard__item__button--return`);
            button.textContent = 'Rent';
            rentedGames--;
        }
    } else {
        image.classList.add(`dashboard__item__img--rented`);
        button.classList.add(`dashboard__item__button--return`);
        button.textContent = 'Return';
        rentedGames++;
    }

    countAndExhibitRentedGames();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    countAndExhibitRentedGames();
});