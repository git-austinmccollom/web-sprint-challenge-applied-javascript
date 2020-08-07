// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( response => {
        console.log(response);

        const articlesObj = response.data.articles
        for ( const topic in articlesObj) {
            articlesObj[topic].forEach( article => {
                let card = cardMaker(article);
                card.setAttribute('id', topic)
                const cardsContainer = document.querySelector('.cards-container');
                cardsContainer.appendChild(card);
            })
        }

        let card = cardMaker(response.data.articles.bootstrap[0]);
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(card);
    })

    .catch( error => {
        console.log(error);
        debugger
    })

function cardMaker( { headline, authorPhoto, authorName } ) {

    // instantiate elements
    const card = document.createElement('div');
    const headlineElement = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');

    // append and organize

    card.appendChild(headlineElement);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(name);

    // dynamically add content

    headlineElement.textContent = headline;
    image.setAttribute('src', authorPhoto);
    name.textContent = authorName;

    // style

    card.classList.add('card');
    headlineElement.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.addEventListener('click', event => {
        console.log(headline);
    })

    return card;
}

const cardsContainer = document.querySelector('.cards-container');

window.setInterval( function filterCards(){
    if ( cardsContainer.id === 'javascript') {
        cards = document.querySelectorAll('.card');
        cards.forEach( card => {
            if ( card.id != 'javascript' ) {
                card.style.display = 'none';
            } else if (card.id === 'javascript') {
                card.style.display = 'block';
            }
        })
    }
    if ( cardsContainer.id === 'bootstrap') {
        cards = document.querySelectorAll('.card');
        cards.forEach( card => {
            if ( card.id != 'bootstrap' ) {
                card.style.display = 'none';
            } else if (card.id === 'bootstrap') {
                card.style.display = 'block';
            }
        })
    }
    if ( cardsContainer.id === 'technology') {
        cards = document.querySelectorAll('.card');
        cards.forEach( card => {
            if ( card.id != 'technology' ) {
                card.style.display = 'none';
            } else if (card.id === 'technology') {
                card.style.display = 'block';
            }
        })
    }
    if ( cardsContainer.id === 'jquery') {
        cards = document.querySelectorAll('.card');
        cards.forEach( card => {
            if ( card.id != 'jquery' ) {
                card.style.display = 'none';
            } else if (card.id === 'jquery') {
                card.style.display = 'block';
            }
        })
    }
    if ( cardsContainer.id === 'node.js') {
        cards = document.querySelectorAll('.card');
        cards.forEach( card => {
            if ( card.id != 'node' ) {
                card.style.display = 'none';
            } else if (card.id === 'node') {
                card.style.display = 'block';
            }
        })
    }
}
, 100);

// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.