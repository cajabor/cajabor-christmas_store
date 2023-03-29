//Author: Chinedum Ajabor
//Lab 7
//Java script changes are implemented only on deals.html
class Grid{
    constructor(numberOfColumns, nunmberOfRows, cards, gridStyle){
        this.numberOfColumns = numberOfColumns;
        this.nunmberOfRows = nunmberOfRows;
        this.cards = cards;
        this.gridStyle = gridStyle;
    }
}

class Card{
    cardDiscounted = 0
    constructor(imageSource, 
        cardTitle,
        dealsDetails,
        cardDiscount, 
        cardOriginal, 
        cardStyle){

        this.imageSource = imageSource;
        this.cardTitle = cardTitle;
        this.dealsDetails = dealsDetails;
        this.cardDiscount = cardDiscount;
        this.cardOriginal = cardOriginal;
        this.cardDiscounted = ((100 - this.cardDiscount)/100) * this.cardOriginal;
        this.cardStyle = cardStyle;
    }
}

const choco_card = new Card(
    "hot_chocolate.jpg",
    "Hot chocolate",
    "get 10% of Hot choco", 
    10,
    300,
    "background-color: red"
)

const toy_card = new Card(
    "toy.jpg",
    "toys",
    "get 10% of toys", 
    10,
    3000,
    "background-color: red"
)

const bread_card = new Card(
    "ginger_bread.jpg",
    "ginger_bread",
    "get 10% of bread", 
    16,
    300,
    "background-color: red"
)


//part1
const deals_grid = new Grid(3,1,[choco_card, toy_card, bread_card], "background-color: blue");
let content = ""
for (let i = 0; i < deals_grid.numberOfColumns; i++){
    content += `
    <div id="item${i+1}">
    <img src=${deals_grid.cards[i].imageSource} class = "card_image" alt=${deals_grid.cards[i].dealsDetails}>
    <hr>
    <p style="font-weight: bold;">${deals_grid.cards[i].cardTitle}</p>

    <p>${deals_grid.cards[i].dealsDetails}
        <br>
        <span style="background-color: red; border-radius: 20px; margin-top: 50px;" >&ThickSpace;${deals_grid.cards[i].cardDiscount}% off &ThickSpace;</span>
    </p>
    </div>
    `;
}

const html_grid = document.getElementById("div_grid");
html_grid.innerHTML = content;


//Part 2
const cards_array = [choco_card, toy_card, bread_card];
const table = document.getElementById("deals_table");

for (let i = 0; i < cards_array.length; i++) {
    const row = table.insertRow();
    let cell = row.insertCell();
    cell.textContent = cards_array[i].cardTitle;

    cell = row.insertCell();
    cell.textContent = cards_array[i].cardOriginal;

    cell = row.insertCell();
    cell.textContent = cards_array[i].cardDiscounted;

}

//part 3


const card1 = document.getElementById("item1");
const card2 = document.getElementById("item2");
const card3 = document.getElementById("item3");

const cards = [card1, card2, card3];
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", animate_colors(cards[i]));
}

function animate_colors(card){
    card.style.animation =  "color_change 4s";
}