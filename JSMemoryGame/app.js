document.addEventListener('DOMContentLoaded', () => {
  //card options -
  const cardArray = [
    {
      name: 'gal-1',
      img: 'images/gal-1.jpeg'
    },
    {
      name: 'gal-2',
      img: 'images/gal-2.jpeg'
    },
    {
      name: 'gal-3',
      img: 'images/gal-3.jpeg'
    },
    {
      name: 'gal-4',
      img: 'images/gal-4.jpeg'
    },
    {
      name: 'gal-5',
      img: 'images/gal-5.jpeg'
    },
    {
      name: 'gal-6',
      img: 'images/gal-6.jpeg'
    },
    {
      name: 'gal-1',
      img: 'images/gal-1.jpeg'
    },
    {
      name: 'gal-2',
      img: 'images/gal-2.jpeg'
    },
    {
      name: 'gal-3',
      img: 'images/gal-3.jpeg'
    },
    {
      name: 'gal-4',
      img: 'images/gal-4.jpeg'
    },
    {
      name: 'gal-5',
      img: 'images/gal-5.jpeg'
    },
    {
      name: 'gal-6',
      img: 'images/gal-6.jpeg'
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/start.jpeg');
      card.setAttribute('date-id', i);
      card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/logo.png');
      cards[optionTwoId].setAttribute('src', 'images/logo.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/start.jpeg');
      cards[optionTwoId].setAttribute('src', 'images/start.jpeg');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found the items';
    }
  }

  //flip your card
  function flipcard() {
    var cardId = this.getAttribute('date-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
