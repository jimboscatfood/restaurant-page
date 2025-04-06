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

