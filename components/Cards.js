// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( response => {
        console.log(response);
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

    return card;
}
console.log(cardMaker({}));

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