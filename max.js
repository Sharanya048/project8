const mainDiv = document.getElementById('main');

function fetchdata() {
  fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(err => console.log(err));
}

fetchdata();

function displayData(data) {
  console.log(data.recipes);
  data.recipes.forEach(r => {
    // Create card
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe'); // ✅ lowercase matches CSS

    // Image
    const recipeImage = document.createElement('img');
    recipeImage.src = r.image;

    // Title
    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = r.name || r.title;

    // Buttons
    const recipeUpdateButton = document.createElement('button');
    recipeUpdateButton.textContent = "Update";

    const recipeDeleteButton = document.createElement('button');
    recipeDeleteButton.textContent = "Delete";

    // ✅ Update functionality
    recipeUpdateButton.addEventListener("click", () => {
      const newTitle = prompt("Enter new recipe title:", recipeTitle.textContent);
      if (newTitle) {
        recipeTitle.textContent = newTitle;
      }
    });

    // ✅ Delete functionality
    recipeDeleteButton.addEventListener("click", () => {
      recipeDiv.remove(); // removes the card from the page
    });

    // Append everything
    recipeDiv.append(recipeImage, recipeTitle, recipeUpdateButton, recipeDeleteButton);
    mainDiv.appendChild(recipeDiv);
  });
}