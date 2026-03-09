const mainDiv = document.getElementById('main');

// Fetch products from Fake Store API
function fetchdata(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(err => console.log(err));
}

fetchdata("https://fakestoreapi.com/products");

// Display products
function displayData(data) {
  console.log(data);
  data.forEach(r => {
    // Card container
    const productsDiv = document.createElement('div');
    productsDiv.classList.add('card');

    // Product image
    const productsImage = document.createElement('img');
    productsImage.classList.add("card-img-top"); // ✅ fixed typo
    productsImage.height = 200;
    productsImage.src = r.image;

    // Product title
    const productsTitle = document.createElement('h2');
    productsTitle.classList.add('card-title'); // ✅ lowercase convention
    productsTitle.textContent = r.title;

    // Product price
    const productsPrice = document.createElement('p');
    productsPrice.classList.add("card-text");
    productsPrice.textContent = "Price: $" + r.price;

    // Buttons
    const productsButton1 = document.createElement('button');
    productsButton1.textContent = "Add to Cart";

    const productsButton2 = document.createElement('button');
    productsButton2.textContent = "Buy Now";

    // Add button functionality
    productsButton1.addEventListener("click", () => {
      alert(`${r.title} added to cart!`);
    });

    productsButton2.addEventListener("click", () => {
      alert(`Proceeding to buy ${r.title}`);
    });

    // Append all elements
    productsDiv.append(productsImage, productsTitle, productsPrice, productsButton1, productsButton2);
    mainDiv.appendChild(productsDiv);
  });
}