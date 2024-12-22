const getIngredients = (meal = {}) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(` ${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

const renderMeal = (meal = {}) => {
  const { strMeal, strMealThumb, strInstructions } = meal;

  const ingredients = getIngredients(meal);
  document.getElementById("app").innerHTML = `
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4">
        <a href="#">
          <img class="rounded-t-lg" src="${strMealThumb}" alt="${strMeal}" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${strMeal}</h5>
          </a>
          <button class="bg-blue-100 rounded text-blue-700 px-2">
            Dessert
          </button>
          <button class="bg-blue-100 rounded text-blue-700 px-2 mx-2">
            Portuguese
          </button>
          <p class="mb-3 font-normal text-gray-700">${strInstructions}</p>
      
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ingredients:</h5>
          <ul class="list-none pl-5">
            ${ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    `;
};

axios
  .get("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((res) => renderMeal(res.data.meals[0]));
