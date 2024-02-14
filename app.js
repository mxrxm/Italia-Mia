let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');  
})

let products = [
    {
        id: 1,
        name: "Cornetto",
        image: "Cornetto.jpg",
        price: 14
    },
    {
        id: 2,
        name: "Panettone",
        image: "Panettone.jpg",
        price: 10
    },
    {
        id: 3,
        name: "Brioche",
        image: "Brioche.jpg",
        price: 13
    },
    {
        id: 4,
        name: "Frittata",
        image: "Frittata.jpg",
        price: 17
    },
    {
        id: 5,
        name: "Caffè Latte",
        image: "Caffè Latte.webp",
        price: 10
    },
    {
        id: 6,
        name: "Espresso",
        image: "Espresso.jpg",
        price: 9
    },
    {
        id: 7,
        name: "Spaghetti Bolognese",
        image: "Spaghetti Bolognese.jpg",
        price: 30
    },
    {
        id: 8,
        name: "MargritaPizza",
        image: "MargritaPizza.jpg",
        price: 27
    },
    {
        id: 9,
        name: "Minestrone Soup",
        image: "Minestrone Soup.jpg",
        price: 34
    },
    {
        id: 10,
        name: "Risotto Milanese",
        image: "Risotto Milanese.jpg",
        price: 37
    },
    {
        id: 11,
        name: "Prosciutto and Melon",
        image: "Prosciutto and Melon.jpg",
        price: 44
    },
    {
        id: 12,
        name: "Zeppole.jpg",
        image: "Zeppole.jpg",
        price: 1600
    },
    {
        id: 13,
        name: "Caprese Salad",
        image: "Caprese Salad.jpg",
        price: 30
    },
    {
        id: 14,
        name: "Gelato",
        image: "Gelato.jpg",
        price: 10
    },
    {
        id: 15,
        name: "Carbonara",
        image: "Carbonara.jpg",
        price: 60
    },
    {
        id: 16,
        name: "Osso Buco",
        image: "Osso Buco.jpg",
        price: 67
    },
    {
        id: 17,
        name: "Panzanella",
        image: "Panzanella.jpg",
        price: 55
    },
    {
        id: 18,
        name: "Panna Cotta",
        image: "Panna Cotta.jpg",
        price: 23
    },
    {
        id: 19,
        name: "Cannoli1",
        image: "Cannoli1.jpg",
        price: 20
    },
    {
        id: 20,
        name: "Eggplant Parmigiana",
        image: "Eggplant Parmigiana.jpg",
        price: 33
    },
    {
        id: 21,
        name: "Chicken Parmigiana2",
        image: "Chicken Parmigiana2.jpg",
        price: 27
    },
    {
        id: 22,
        name: "Zeppole.jpg",
        image: "Zeppole.jpg",
        price: 1600
    },
    {
        id: 23,
        name: "Ravioli di Magro",
        image: "Ravioli di Magro.webp",
        price: 25
    },
    {
        id: 24,
        name: "Fettuccine Alfredo2",
        image: "Fettuccine Alfredo2.webp",
        price: 35
    },
    {
        id: 25,
        name: "Saltimbocca-alla-Romana",
        image: "Saltimbocca-alla-Romana.jpg",
        price: 40
    },
    {
        id: 26,
        name: "Tagliatelle alla Bolognese3",
        image: "Tagliatelle alla Bolognese3.webp",
        price: 55
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}