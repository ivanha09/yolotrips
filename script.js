/* Add any JavaScript you need to this file. */

//Used to add the hovering moving image effect and display the fig caption
function cardMouseOver() {
  let topSquare = this.querySelector('.top_card');
  let bottomSquare = this.querySelector('.bottom_card');
  topSquare.classList.add('top_card_move');
  bottomSquare.classList.add('bottom_card_move');
  let figDisplay = this.querySelectorAll('figcaption');
  figDisplay.forEach(figCaption => {
    figCaption.classList.add('displayCaption');
  });
}

//used to remove the hovering moving image effect
function cardMouseLeave() {
  let topSquare = this.querySelector('.top_card');
  let bottomSquare = this.querySelector('.bottom_card');
  topSquare.classList.remove('top_card_move');
  bottomSquare.classList.remove('bottom_card_move');
  let figDisplay = this.querySelectorAll('figcaption');
  figDisplay.forEach(figCaption => {
    figCaption.classList.remove('displayCaption');
  });
}

//creates a single card for the list
function addCard(tour) {
  let testCard = document.querySelector('#list');
  let testDiv = document.createElement('div');
  testDiv.addEventListener('mouseover', cardMouseOver); //links the function to create the moving image effect
  testDiv.addEventListener('mouseleave', cardMouseLeave); //links the function to create remove the moving image effect
  testDiv.classList.add('card_container');
  //create the elements inside of the card
  testDiv.innerHTML = `
<a href="#"> 
  <div class="card_picture"> 
    <div class="child bottom_card">
      <figure>
        <img src="${tour['bottomImageUrl']}" alt="${tour['bottomImageAlt']}" />
        <figcaption class="caption">${tour['bottomImageCredit']}</figcaption>
      </figure>
    </div>
    <div class="child top_card">
      <figure>
      <img src="${tour['topImageUrl']}" alt="${tour['topImageAlt']}" />
      <figcaption class="caption">${tour['topImageCredit']}</figcaption>
    
      </figure>
    </div>
  </div>
  <div class="cardText">
    <h4>${tour['category']}</h4>
    <h3>${tour['name']}</h3>
    <p>$${(tour['price'] / 100).toFixed(2)} <span class="price">/ per person</span></p>
    <p>${tour['description']}</p>
  </div>
</a>
      `;
  testCard.appendChild(testDiv);
}

//clear the list of cards displayed in #list
function clearCards() {
  document.querySelector('#list').innerHTML = '';
}

//Create cards based on the filteredTours function by default it will use window.tourData
function createCards(tourData = window.tourData) {
  let tours = tourData;
  clearCards();
  tours.forEach(tour => {
    addCard(tour);
  });
}

// Create a filtered list of the tours based on the category selected
function filteredTours(category) {
  let tours = window.tourData;
  let filteredTours = []; //array for the filtered list
  tours.forEach(tour => {
    if (tour['category'] === category) {
      filteredTours.push(tour); //pushes the object that matches the filtered category
    }
  });
  return filteredTours;
}

window.onload = function() {
  //Create the List of All cards onload
  createCards(window.tourData);

  //links buttons to filter data and create the list of cards
  //also removes and adds classes to buttons to show current category
  //changes the innerText of the List of h2 in the main section
  document.querySelector('#category_all').addEventListener('click', function() {
    createCards(window.tourData);
    document.querySelector('.button_primary').classList.remove('button_primary');
    document.querySelector('#category_all').classList.add('button_primary');
    document.querySelector('main h2').innerText = 'List of All Tours';
  });
  document.querySelector('#category_night_life').addEventListener('click', function() {
    createCards(filteredTours('night life'));
    document.querySelector('.button_primary').classList.remove('button_primary');
    document.querySelector('#category_night_life').classList.add('button_primary');
    document.querySelector('main h2').innerText = 'List of Night Life Tours';
  });
  document.querySelector('#category_food_drinks').addEventListener('click', function() {
    createCards(filteredTours('food & drinks'));
    document.querySelector('.button_primary').classList.remove('button_primary');
    document.querySelector('#category_food_drinks').classList.add('button_primary');
    document.querySelector('main h2').innerText = 'List of Food & Drinks Tours';
  });
  document.querySelector('#category_city_walk').addEventListener('click', function() {
    document.querySelector('.button_primary').classList.remove('button_primary');
    document.querySelector('#category_city_walk').classList.add('button_primary');
    createCards(filteredTours('city walk'));
    document.querySelector('main h2').innerText = 'List of City Walk Tours';
  });
  document.querySelector('#category_adventure').addEventListener('click', function() {
    document.querySelector('.button_primary').classList.remove('button_primary');
    document.querySelector('#category_adventure').classList.add('button_primary');
    createCards(filteredTours('adventure'));
    document.querySelector('main h2').innerText = 'List of Adventure Tours';
  });
};
