# AluGames Board Game Rental

**A simple web application for managing board game rentals.**

This project was developed as part of an Alura course focusing on basic JavaScript DOM manipulation and event handling. It allows users to rent and return board games, with a dynamic display of the rental status.

## Technologies Used

* HTML
* CSS
* JavaScript

## Features

* Dynamically changes the rental status of board games (Rent/Return).
* Displays the number of currently rented games in the console.
* Uses visual cues to indicate rented games (overlay on the image).
* Confirmation prompt before returning a game.
* Uses DOM manipulation to update the page without reloads.

## Installation

1.  Clone the repository: `git clone [repository URL - if you have one on GitHub]`
2.  Navigate to the project directory: `cd [project directory]`
3.  Open the `index.html` file in your web browser.

## Usage

1.  Open the `index.html` file in your web browser.
2.  Click the "Rent" button to rent a game. The button will change to "Return," and the game's image will have a dark overlay, indicating it's rented.
3.  Click the "Return" button to return a rented game. You will be prompted to confirm the return.
4.  The number of rented games is displayed in the browser's console. Open the developer console to view it.

## Challenges and Solutions

* **Challenge:** Managing the state of rented games and updating the UI accordingly.
    * **Solution:** Used JavaScript DOM manipulation to add and remove CSS classes, and to update button text.
* **Challenge:** Keeping track of the number of rented games.
    * **Solution:** Used a global `rentedGames` variable and incremented/decremented it as games were rented or returned.
* **Challenge:** Displaying the initial number of rented games on page load.
    * **Solution:** Used the `DOMContentLoaded` event listener to execute a function that counts and displays the rented games after the DOM is fully loaded.
* **Challenge:** Giving a visual indication that a game is rented.
    * **Solution:** Added a CSS class that places a semi-transparent dark overlay on the image.

## Future Improvements

* Display the number of rented games on the page itself, not just in the console.
* Add more games to the rental list.
* Implement local storage to persist rental status across page reloads.
* Improve the visual design and user experience.
* Add a feature to filter or sort games.
* Add quantity of games available.

## Alura Course

This project was created as part of an Alura course focused on basic JavaScript DOM manipulation and event handling.

## License

[License (e.g., MIT, etc.)]
