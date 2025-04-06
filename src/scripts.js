//Export modules
const Homepage = loadHomepage;

export {Homepage};

const content = document.querySelector("div#content");

//Module for page load
function loadHomepage() {
    //Initialise navbar button text content
    const navButtons = ["Home", "Menu", "About"];
    const navButtonsDom = document.querySelectorAll("button");
    for (let i = 0; i < navButtons.length; i++) {
        navButtonsDom[i].textContent = navButtons[i];
    }

    //Create new DOM elements to be appended to div#content
    const container = document.createElement("div");
    content.appendChild(container);

    const main = document.createElement("div");
    container.appendChild(main);
    const welcomeMsg = document.createElement("h1");
    welcomeMsg.textContent = "Welcome to YO MAMA's Favourite Restaurant";
    main.appendChild(welcomeMsg);
    const introMsg = document.createElement("h2");
    introMsg.textContent = "Making YO MAMA's favourite dishes since 1969";
    main.appendChild(introMsg);

    const side = document.createElement("div");
    container.appendChild(side);
    const sideMsg = document.createElement("p");
    side.appendChild(sideMsg);
    sideMsg.textContent = "Follow us on social media";
}

function loadMenu() {
    const container = document.createElement("div");
    content.appendChild(container);

    const menu = [
        {
            name: "Double Cheese Burger",
            ingredients: "Buns, cheese, beef patty, no lettuce",
            price: "$69.00",
        },
        {
            name: "Meatlover Pizza",
            ingredients: "Sourdough pizza, cheese, chicken, pepperoni",
            price: "$69.00",
        },
        {
            name: "Sweet Potatoe Fries",
            ingredients: "Sweet potatoes",
            price: "$69.00",
        },        
    ]
    const menuList = document.createElement("ul");
    container.appendChild(menuList);
    for (let i = 0; i < menu.length; i++) {
        const menuItem = document.createElement("li");
        menuItem.textContent = menu[i].name;
        const itemImg = document.createElement("img");
        menuItem.appendChild(itemImg);
        const itemIngredients = document.createElement("p");
        itemIngredients.textContent = `Ingredients: ${menu[i].ingredients}`;
        menuItem.appendChild(itemIngredients);
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ${menu[i].price}`;
        menuItem.appendChild(itemPrice);
    }
}

