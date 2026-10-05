const products = [
  { name: "Laptop", price: 999, rating: 4.5 },
  { name: "Phone", price: 699, rating: 4.8 },
  { name: "Headphones", price: 150, rating: 4.2 },
  { name: "Keyboard", price: 80, rating: 4.0 }
];

// Sort by price: cheapest → most expensive (ascending)
const byPrice = products.sort((a, b) => a.price - b.price);
console.log("Sorted by price (low to high):");
console.log(byPrice);

// Sort by rating: highest → lowest (descending)
const byRating = products.sort((a, b) => b.rating - a.rating);
console.log("Sorted by rating (high to low):");
console.log(byRating);