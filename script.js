const validUsername = "user";
const validPassword = "password";

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-message");

    if (user === validUsername && pass === validPassword) {
        localStorage.setItem("currentUser", user);
        window.location.href = "home.html";
    } else if (user === validUsername) {
        errorMsg.textContent = "Invalid Password!";
    } else {
        errorMsg.textContent = "User does not exist!";
    }
}

function navigate(page) {
    if (page) window.location.href = page;
}

const recipes = {
    pasta: {
        name: "Pasta",
        img: "pasta.jpg",
        ingredients: ["200g pasta", "1 cup tomato sauce", "1/2 onion", "2 cloves garlic", "Olive oil", "Salt & pepper"],
        instructions: "Boil pasta until al dente. Sauté onion and garlic in olive oil, add tomato sauce, and mix with pasta."
    },
    pizza: {
        name: "Pizza",
        img: "pizza.jpg",
        ingredients: ["1 pizza base", "1/2 cup tomato sauce", "1 cup mozzarella", "Pepperoni slices", "Oregano"],
        instructions: "Spread tomato sauce on the base, add toppings, and bake at 200°C for 15 minutes."
    },
    burger: {
        name: "Burger",
        img: "burger.jpg",
        ingredients: ["1 burger bun", "1 beef patty", "Lettuce", "Tomato", "Cheese", "Ketchup"],
        instructions: "Grill the beef patty, place it inside the bun with lettuce, tomato, cheese, and ketchup."
    }
};

function loadRecipes() {
    let recipeContainer = document.getElementById("recipe-list");
    recipeContainer.innerHTML = "";
    
    for (let key in recipes) {
        let recipe = recipes[key];
        let div = document.createElement("div");
        div.classList.add("recipe");
        div.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.img}" alt="${recipe.name}" onclick="navigate('recipe.html?recipe=${key}')">
        `;
        recipeContainer.appendChild(div);
    }
}

function loadRecipeDetails() {
    let params = new URLSearchParams(window.location.search);
    let recipeKey = params.get("recipe");
    let recipe = recipes[recipeKey];
    
    if (recipe) {
        document.getElementById("recipe-title").textContent = recipe.name;
        document.getElementById("recipe-img").src = recipe.img;
        document.getElementById("recipe-ingredients").innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
        document.getElementById("recipe-instructions").textContent = recipe.instructions;
    }
}

function filterRecipes() {
    let search = document.getElementById("search").value.toLowerCase();
    let recipeContainer = document.getElementById("recipe-list");
    recipeContainer.innerHTML = "";
    
    for (let key in recipes) {
        let recipe = recipes[key];
        if (recipe.name.toLowerCase().includes(search)) {
            let div = document.createElement("div");
            div.classList.add("recipe");
            div.innerHTML = `
                <h3>${recipe.name}</h3>
                <img src="${recipe.img}" alt="${recipe.name}" onclick="navigate('recipe.html?recipe=${key}')">
            `;
            recipeContainer.appendChild(div);
        }
    }
}

if (document.getElementById("recipe-list")) {
    window.onload = loadRecipes;
}
if (document.getElementById("recipe-title")) {
    window.onload = loadRecipeDetails;
}