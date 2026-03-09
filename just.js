// Select cart count span
const cartCountSpan = document.getElementById("cart-count");

// Start with 0 items
let cartCount = 0;

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".product button");

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;

    // Optional: show quick feedback
    button.textContent = "Added!";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1000);
  });
});