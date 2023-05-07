const recipeUrls = [
  "bolo_de_cenoura.html",
  "bolo_de_chocolate.html",
  "bolo_de_laranja.html",
  "mousse_de_chocolate.html",
  "donuts.html",
  "macarons.html",
  "muffin.html",
];

let lastRecipeIndex = -1;


function getRandomRecipeUrl() {
  let randomIndex = Math.floor(Math.random() * recipeUrls.length);
  while (randomIndex === lastRecipeIndex) {
    randomIndex = Math.floor(Math.random() * recipeUrls.length);
  }
  lastRecipeIndex = randomIndex;
  return recipeUrls[randomIndex];
}


const randomRecipeButton = document.getElementById("random-recipe-button");

randomRecipeButton.addEventListener("click", function() {
  const randomRecipeUrl = getRandomRecipeUrl();
  window.location.href = randomRecipeUrl;
});