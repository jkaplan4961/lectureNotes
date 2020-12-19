console.log("Hello")

const baseURL = 'https://api.spacexdata.com/v2/rockets'; 

//new const to add cards to div
const searchForm = document.querySelector('form');
const spaceships = document.querySelector('ul');
const CardDiv = document.getElementById('main');

searchForm.addEventListener("submit", fetchSpace)

function fetchSpace(e) {
e.preventDefault();

fetch(baseURL)
.then(result => result.json())
.then(json => {
    console.log(json);
displayRockets(json);
})
.catch (err => console.log(err))
}

function displayRockets(rockets){
    rockets.forEach(r => {
        // cardDiv = "card", cBodyDiv = "card-body", h3 "card-title", p "card-text" 
        let rocket = document.createElement('li');
        let card = document.createElement('div');
        let cBodyDiv = document.createElement('div');
        let para = document.createElement("p");
        let title = document.createElement('h3');
        let image = document.createElement("img");

        card.setAttribute("class", "card  border-dark mb-3"
        );
        card.setAttribute("style", "max-width: 18rem;")
        cBodyDiv.setAttribute("class", "card-body text-dark");
        title.setAttribute("class", "card-title");
        para.setAttribute("class", "card-text");
        image.setAttribute("class","imcard-img-top");
        image.setAttribute("src", "https://static01.nyt.com/images/2020/05/26/us/spacex-nasa-promo-1590499638707/spacex-nasa-promo-1590499638707-videoSixteenByNineJumbo1600-v3.jpg");

        // ?come back to this
        // rocket.innerText = r.name + '    -   Cost Per Launch: $' + r.cost_per_launch + ' Million';
        title.textContent =r.name;
        para.textContent = "The History of this rocket is that " +r.description;
        // para.textContent = "The History of this rocket is: " +r.description;
        // title.textContent =r.stages;

        CardDiv.appendChild(card);
        card.appendChild(image);
        card.appendChild(cBodyDiv);
        cBodyDiv.appendChild(title);
        cBodyDiv.appendChild(para);
        //call a div, append the card
        //to card append the cBodyDiv, var for h3, var for p
    })
}

//start a display function, called in fetch and passed json object
function display(passjson) {
    console.log(passjson[0]);
//    console.log(passjson[0]); reference to be able to dive into objects 
//    console.log(passjson[1].author);
//build a forEach to display each object in the array 
    passjson.forEach((photoObject) => {
        //build and create the html tags
        let objectDiv = document.createElement('div');
        let objectImg = document.createElement('img');
        let photographer = document.createElement('h4');
        // set.attribute will give new elements id's or classes
        objectDiv.setAttribute("class", "oDiv");  //oDiv can give margin or padding
        objectImg.setAttribute("class" , "oImg"); //oImg Call to give it a different size
//set image sources 
        objectImg.src = photoObject.download_url;
        objectImg.alt = photoObject.url;
        photographer.textContent = photoObject.author;
        //appendChild items to where they belong in the html
        //thisIsFine was variable name for querySelected div from index.html
        thisIsFine.appendChild(objectDiv);
        objectDiv.appendChild(objectImg);
        objectDiv.appendChild(photographer);
    })
}

