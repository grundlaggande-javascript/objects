// Problem: Model an inventory of products.
// Array of product objects representing the inventory
let inventory = [
    { name: 'apples', quantity: 10, price: 1.5 },
    { name: 'oranges', quantity: 5, price: 2.0 },
    { name: 'bananas', quantity: 2, price: 0.75 }
];

// Function to add product´to the inventory
function addToInventory(productName, quantity, price) {
    const newProduct = { name: productName, quantity: quantity, price: price }
    inventory.push(newProduct);
}

// Example usage
addToInventory('apples', 5, 1.6); // Add 5 more apples and update price to 1.6
addToInventory('grapes', 7, 2.5); // Add new product 'grapes' with price 2.5
printInventory(inventory);
