//Export modules
const homepage = loadHomepage;
const menu = loadMenu;
const about = loadAbout;

export {content, homepage, menu, about};

const content = document.querySelector("div#content");
//Initialise navbar button text content
const navbar = document.querySelector("nav");
const restaurantName = document.createElement("h1");
restaurantName.textContent = "YOMAMA";
navbar.insertBefore(restaurantName,navbar.firstChild);
const navButtons = ["Home", "Menu", "About"];
const navButtonsDom = document.querySelectorAll("nav>button");
for (let i = 0; i < navButtons.length; i++) {
    navButtonsDom[i].textContent = navButtons[i];
    navButtonsDom[i].setAttribute("name", navButtons[i]);
}

//Module for page load
function loadHomepage() {
    //Create new DOM elements to be appended to div#content
    const container = document.createElement("div");
    content.appendChild(container);
    container.classList.add("homeDiv");

    const main = document.createElement("div");
    container.appendChild(main);
    const welcomeMsg = document.createElement("h1");
    welcomeMsg.textContent = "Welcome to YOMAMA's Favourite Restaurant";
    main.appendChild(welcomeMsg);
    const introMsg = document.createElement("h2");
    introMsg.textContent = "Making YO MAMA's favourite dishes since 1969";
    main.appendChild(introMsg);
    main.classList.add("homeMainDiv");
    
    const side = document.createElement("div");
    container.appendChild(side);
    const sideMsg = document.createElement("p");
    side.appendChild(sideMsg);
    sideMsg.textContent = "Follow us on social media";
    side.classList.add("homeSideDiv");
    const logo = document.createElement("svg");
    logo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path></svg>';
    side.appendChild(logo);
}   

function loadMenu() {
    const container = document.createElement("div");
    content.appendChild(container);
    container.classList.add("menuDiv");

    const menu = [
        {
            name: "Double Cheese Burger",
            ingredients: "Buns, cheese, beef patty, no lettuce",
            price: "$69.00",
            img:'https://burgerking.com.cy/sites/default/files/Double%20Cheeseburger-01_1.png',
        },
        {
            name: "Meatlover Pizza",
            ingredients: "Sourdough pizza, cheese, chicken, pepperoni",
            price: "$69.00",
            img: 'https://www.mypizzaheaven.com/wp-content/uploads/2024/08/Margherita-Pizza.png',
        },
        {
            name: "Sweet Potatoe Fries",
            ingredients: "Sweet potatoes",
            price: "$69.00",
            img:'https://www.lordofthefries.com.au/wp-content/uploads/2019/11/sweet-potato-fries-v2.png',
        },
        {
            name: "Quesadilla",
            ingredients: "Tortillas, cheese, meat, salsa",
            price: "$69.00",
            img:'https://www.pikpng.com/pngl/b/283-2832131_quesadillas-png-clipart.png'
        }        
    ]
    const menuList = document.createElement("ul");
    container.appendChild(menuList);
    for (let i = 0; i < menu.length; i++) {
        const menuItem = document.createElement("li");
        menuItem.textContent = menu[i].name;
        menuList.appendChild(menuItem);
        const itemImg = document.createElement("img");
        itemImg.src = menu[i].img;
        menuItem.appendChild(itemImg);
        const itemIngredients = document.createElement("p");
        itemIngredients.textContent = `Ingredients: ${menu[i].ingredients}`;
        menuItem.appendChild(itemIngredients);
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ${menu[i].price}`;
        menuItem.appendChild(itemPrice);
    }
}

function loadAbout() {
    const container = document.createElement("div");
    content.appendChild(container);
    container.classList.add("aboutDiv");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";
    container.appendChild(heading);
    const descriptionBox = document.createElement("div");
    container.appendChild(descriptionBox);
    descriptionBox.classList.add("description");
    const image = document.createElement("img");
    descriptionBox.appendChild(image);
    const description = document.createElement("p");
    const descriptionText = document.createTextNode("YOMAMA is dedicated to making yo mama's favourite food at the best quality.");
    description.appendChild(descriptionText);
    descriptionBox.appendChild(description);
}
