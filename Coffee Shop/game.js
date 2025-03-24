document.addEventListener("DOMContentLoaded", () => {
    // Variables to display text for balance and number of ingredients
    const balanceE1 = document.getElementById("balance");
    const beansE1 = document.getElementById("beans");
    const milkE1 = document.getElementById("milk");
    const sugarE1 = document.getElementById("sugar");
    const vanillaE1 = document.getElementById("vanilla");
    const chocolateE1 = document.getElementById("chocolate");
    const strawberryE1 = document.getElementById("strawberry");

    // Variables to get sell buttons
    const sellBlackCoffeeBtn = document.getElementById("sell-black-coffee");
    const sellMilkCoffeeBtn = document.getElementById("sell-milk-coffee");
    const sellSweetCoffeeBtn = document.getElementById("sell-sweet-coffee");
    const sellDeluxeCoffeeBtn = document.getElementById("sell-deluxe-coffee");
    const sellVanillaCoffeeBtn = document.getElementById("sell-vanilla-coffee");
    const sellChocolateCoffeeBtn = document.getElementById("sell-chocolate-coffee");
    const sellStrawberryCoffeeBtn = document.getElementById("sell-strawberry-coffee");
    const sellRegularLatteBtn = document.getElementById("sell-regular-latte");
    const sellVanillaLatteBtn = document.getElementById("sell-vanilla-latte");
    const sellChocolateLatteBtn = document.getElementById("sell-chocolate-latte");
    const sellStrawberryLatteBtn = document.getElementById("sell-strawberry-latte");

    // Variables to get buy buttons
    const buyBeansBtn = document.getElementById("buy-beans");
    const buyMilkBtn = document.getElementById("buy-milk");
    const buySugarBtn = document.getElementById("buy-sugar");
    const buyVanillaSyrupBtn = document.getElementById("buy-vanilla");
    const buyChocolateSyrupBtn = document.getElementById("buy-chocolate");
    const buyStrawberrySyrupBtn = document.getElementById("buy-strawberry");

    // Variables to store the number of each ingredient
    let balance = 50;
    let beans = 10;
    let milk = 5;
    let sugar = 5;
    let vanilla = 3;
    let chocolate = 3;
    let strawberry = 3;

    let unlocks = {
        milk: false,
        sugar: false,
        vanilla: false,
        chocolate: false,
        strawberry: false
    };

    // Variable to keep track of the number of coffees sold
    let coffeeSold = 0;

    // Updates the UI when there is a change to variable values
    // Unlocks coffee ingredients when the player sells enough coffee
    function updateUI() {
        balanceE1.textContent = `$${balance.toFixed(2)}`;
        beansE1.textContent = beans;
        milkE1.textContent = milk;
        sugarE1.textContent = sugar;
        vanillaE1.textContent = vanilla;
        chocolateE1.textContent = chocolate;
        strawberryE1.textContent = strawberry;
        
        // Player must sell 10 black coffees to unlock coffee with milk
        if (coffeeSold >= 10 && !unlocks.milk) {
            unlocks.milk = true;
            sellMilkCoffeeBtn.classList.remove("hidden");
            buyMilkBtn.classList.remove("hidden");
            document.getElementById("milk-container").classList.remove("hidden");
        }

        // Player must sell 15 coffees to unlock lattes
        if (coffeeSold >= 15) {
            sellRegularLatteBtn.classList.remove("hidden");
        }

        // Player must sell 20 coffees/lattes to unlock sweet coffee
        if (coffeeSold >= 20 && !unlocks.sugar) {
            unlocks.sugar = true;
            sellSweetCoffeeBtn.classList.remove("hidden");
            sellDeluxeCoffeeBtn.classList.remove("hidden");
            buySugarBtn.classList.remove("hidden");
            document.getElementById("sugar-container").classList.remove("hidden");
        }

        // Player must sell 30 coffees/lattes to unlock vanilla coffee
        if (coffeeSold >= 30 && !unlocks.vanilla) {
            unlocks.vanilla = true;
            sellVanillaCoffeeBtn.classList.remove("hidden");
            buyVanillaSyrupBtn.classList.remove("hidden");
            document.getElementById("vanilla-container").classList.remove("hidden");
        }

        // Player must sell 35 coffees/lattes to unlock vanilla lattes
        if (coffeeSold >= 35) {
            sellVanillaLatteBtn.classList.remove("hidden");
        }

        // Player must sell 40 coffees/lattes to unlock chocolate coffee
        if (coffeeSold >= 40 && !unlocks.chocolate) {
            unlocks.chocolate = true;
            sellChocolateCoffeeBtn.classList.remove("hidden");
            buyChocolateSyrupBtn.classList.remove("hidden");
            document.getElementById("chocolate-container").classList.remove("hidden");
        }

        // Player must sell 45 coffees/lattes to unlock chocolate lattes
        if (coffeeSold >= 45) {
            sellChocolateLatteBtn.classList.remove("hidden");
        }

        // Player must sell 50 coffees/lattes to unlock strawberry coffee
        if (coffeeSold >= 50 && !unlocks.strawberry) {
            unlocks.strawberry = true;
            sellStrawberryCoffeeBtn.classList.remove("hidden");
            buyStrawberrySyrupBtn.classList.remove("hidden");
            document.getElementById("strawberry-container").classList.remove("hidden");
        }

        // Player must sell 55 coffees/lattes to unlock strawberry lattes
        if (coffeeSold >= 55) {
            sellStrawberryLatteBtn.classList.remove("hidden");
        }
    }

    // Sell button functions
    // Player needs 1 bean to make 1 black coffee and sell for $5
    // If there are no beans left, the player can't sell any black coffee
    sellBlackCoffeeBtn.addEventListener("click", () => {
        if (beans > 0) {
            beans--;
            balance += 5;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough coffee beans!");
        }
    });

    // Player needs 1 bean and 1 milk to make 1 coffee w/ milk and sell for $7
    // If there are no beans or milk left, the player can't sell any coffee w/ milk
    sellMilkCoffeeBtn.addEventListener("click", () => {
        if (beans > 0 && milk > 0) {
            beans--;
            milk--;
            balance += 7;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean and 1 sugar to make 1 coffee w/ sugar and sell for $7
    // If there are no beans or sugar left, the player can't sell any coffee w/ sugar
    sellSweetCoffeeBtn.addEventListener("click", () => {
        if (beans > 0 && sugar > 0) {
            beans--;
            sugar--;
            balance += 7;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean, 1 milk, and 1 sugar to make 1 deluxe coffee
    // If there are no beans, milk, or sugar left, the player can't sell any deluxe coffee
    sellDeluxeCoffeeBtn.addEventListener("click", () => {
        if (beans > 0 && milk > 0 && sugar > 0) {
            beans--;
            milk--;
            sugar--;
            balance += 9;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean and 1 vanilla syrup to make vanilla coffee
    // If there are no beans or vanilla syrup left, the player can't sell any vanilla coffee
    sellVanillaCoffeeBtn.addEventListener("click", () => {
        if (beans > 0 && vanilla > 0) {
            beans--;
            vanilla--;
            balance += 8;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean and 1 chocolate syrup to make chocolate coffee
    // If there are no beans or chocolate syrup left, the player can't sell any chocolate coffee
    sellChocolateCoffeeBtn.addEventListener("click", () => {
        if (beans > 0 && chocolate > 0) {
            beans--;
            chocolate--;
            balance += 8;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean and 1 strawberry syrup to make strawberry coffee
    // If there is no beans or strawberry syrup, the player can't sell strawberry coffee
    sellStrawberryCoffeeBtn.addEventListener("click", () => {
        if (beans > 0 && strawberry > 0) {
            beans--;
            strawberry--;
            balance += 8;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean and 2 milk to make a regular latte
    // If there are no beans or less than 2 milk, the player can't sell regular latte
    sellRegularLatteBtn.addEventListener("click", () => {
        if (beans > 0 && milk > 1) {
            beans--;
            milk -= 2;
            balance += 7;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean, 2 milk, and 1 vanilla syrup to make a vanilla latte
    // If there are no beans, less than 2 milk, or no vanilla syrup, the player can't sell vanilla latte
    sellVanillaLatteBtn.addEventListener("click", () => {
        if (beans > 0 && milk > 1 && vanilla > 0) {
            beans--;
            milk -= 2;
            vanilla--;
            balance += 10;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean, 2 milk, and 1 chocolate syrup to make chocolate latte
    // If there are no beans, less than 2 milk, or no vanilla syrup, player can't sell chocolate latte
    sellChocolateLatteBtn.addEventListener("click", () => {
        if (beans > 0 && milk > 1 && chocolate > 0) {
            beans--;
            milk -= 2;
            chocolate--;
            balance += 10;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Player needs 1 bean, 2 milk, and 1 strawberry syrup to make strawberry latte
    // If there are no beans, less than 2 milk, or no strawberry syrup, player can't sell strawberry latte
    sellStrawberryLatteBtn.addEventListener("click", () => {
        if (beans > 0 && milk > 1 && strawberry > 0) {
            beans--;
            milk -= 2;
            strawberry--;
            balance += 10;
            coffeeSold++;
            updateUI();
        } else {
            alert("Not enough ingredients!");
        }
    });

    // Buy functions
    // The player needs at least $10 to buy 5 coffee beans
    buyBeansBtn.addEventListener("click", () => {
        if (balance >= 10) {
            beans += 5;
            balance -= 10;
            updateUI();
        } else {
            alert("Not enough money to buy beans!");
        }
    });

    // The player needs at least $5 to buy 5 servings of milk
    buyMilkBtn.addEventListener("click", () => {
        if (balance >= 5) {
            milk += 5;
            balance -= 5;
            updateUI();
        } else {
            alert("Not enough money to buy milk!");
        }
    });

    // The player needs at least $5 to buy 5 servings of sugar
    buySugarBtn.addEventListener("click", () => {
        if (balance >= 5) {
            sugar += 5;
            balance -= 5;
            updateUI();
        } else {
            alert("Not enough money to buy sugar!")
        }
    });

    // The player needs at least $6 to buy 3 servings of vanilla syrup
    buyVanillaSyrupBtn.addEventListener("click", () => {
        if (balance >= 6) {
            vanilla += 3;
            balance -= 6;
            updateUI();
        } else {
            alert("Not enough money to buy vanilla syrup!");
        }
    });

    // The player needs at least $6 to buy 3 servings of chocolate syrup
    buyChocolateSyrupBtn.addEventListener("click", () => {
        if (balance >= 6) {
            chocolate += 3;
            balance -= 6;
            updateUI();
        } else {
            alert("Not enough money to buy chocolate syrup!")
        }
    });

    // The player needs at least $6 to buy 3 servings of strawberry syrup
    buyStrawberrySyrupBtn.addEventListener("click", () => {
        if (balance >= 6) {
            strawberry += 3;
            balance -=6;
            updateUI();
        } else {
            alert("Not enough money to buy strawberry syrup!");
        }
    })

    updateUI();
})