const recipes = {
    pasta: { 
        name: "Pasta", 
        img: "pasta.png", 
        ingredients: ["200g pasta", "1 cup tomato sauce", "1/2 onion", "2 cloves garlic", "Olive oil", "Salt & pepper"], 
        instructions: "1. Boil pasta until al dente.\n2. Sauté onion and garlic in olive oil.\n3. Add tomato sauce and simmer for 10 minutes.\n4. Mix sauce with pasta and serve.",
        uploadedBy: "ORB"
    },
    pizza: { 
        name: "Pizza", 
        img: "pizza.png", 
        ingredients: ["1 pizza base", "1/2 cup tomato sauce", "1 cup mozzarella", "Pepperoni slices", "Oregano"], 
        instructions: "1. Spread tomato sauce on the base.\n2. Add cheese and toppings.\n3. Bake at 200°C for 15 minutes.",
        uploadedBy: "ORB"
    },
    burger: { 
        name: "Burger", 
        img: "burger.png", 
        ingredients: ["1 burger bun", "1 beef patty", "Lettuce", "Tomato", "Cheese", "Ketchup"], 
        instructions: "1. Grill the beef patty for 5 minutes each side.\n2. Toast the bun lightly.\n3. Assemble with lettuce, tomato, cheese and ketchup.",
        uploadedBy: "ORB"
    },
    salad: { 
        name: "Caesar Salad", 
        img: "salad.png", 
        ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing", "Lemon juice", "Anchovies (optional)"], 
        instructions: "1. Chop lettuce into bite-sized pieces.\n2. Add croutons and grated parmesan.\n3. Drizzle with dressing and lemon juice.\n4. Toss gently and serve.",
        uploadedBy: "ORB"
    },
    sushi: { 
        name: "Sushi Rolls", 
        img: "sushi.png", 
        ingredients: ["Sushi rice", "Nori sheets", "Fresh fish (salmon/tuna)", "Cucumber", "Avocado", "Soy sauce"], 
        instructions: "1. Spread rice on nori sheet.\n2. Add fillings in a line.\n3. Roll tightly using a bamboo mat.\n4. Slice into pieces and serve with soy sauce.",
        uploadedBy: "ORB"
    },
    cake: { 
        name: "Chocolate Cake", 
        img: "cake.png", 
        ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup cocoa powder", "1 tsp baking soda", "1 cup milk", "1/2 cup oil", "2 eggs"], 
        instructions: "1. Mix dry ingredients.\n2. Add wet ingredients and mix well.\n3. Pour into greased pan.\n4. Bake at 180°C for 30 minutes.",
        uploadedBy: "ORB"
    },
    tacos: { 
        name: "Beef Tacos", 
        img: "tacos.png", 
        ingredients: ["Taco shells", "300g ground beef", "Taco seasoning", "Lettuce", "Tomato", "Cheese", "Sour cream"], 
        instructions: "1. Brown the beef and add seasoning.\n2. Warm taco shells.\n3. Fill with beef and toppings.\n4. Serve with sour cream.",
        uploadedBy: "ORB"
    }
};

window.recipes = recipes;