import recipes from "./recipes.mjs";
const main = document.body.querySelector('main');
const search = document.getElementById('search').querySelector('button');
const queryable = [];
for (let recipe of recipes) {
    queryable.push([recipe.name, recipe.description, ...(recipe.tags), ...(recipe.recipeIngredient)]);
};
displayRecipes(recipes);

function displayRecipe(recipe) {
    let tags = ``;
    for (let tag of recipe.tags) {
        tags += `<a class="tag">${tag}</a>`;
    }

    let rating = `<span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">`;
    for (let i = 1; i <=5; i++) {
        if (recipe.rating >= i) {
            rating += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            rating += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    rating += `</span>`;

    main.insertAdjacentHTML("beforeend",
        `
        <div class="recipe">
            <div class="recipe-img">
                <img src="${recipe.image}" alt="${recipe.name} image">
            </div>
            <div class="tags">
                ${tags}
            </div>
            <h1 class="title">${recipe.name}</h1>
            ${rating}
            <a class="description">${recipe.description}</a>
        </div>
        `
    )
};

function displayRecipes(recipes) {
    main.innerHTML = ``;
    for (let recipe of recipes) {
        displayRecipe(recipe);
    }
}

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// };

// function selectRandomFromList(list) {
//     return list[getRandomInt(list.length)];
// };

// displayRecipe(selectRandomFromList(recipes));

search.addEventListener('click', (e) => {
    e.preventDefault();
    const query = e.target.previousElementSibling.value.toLowerCase();
    if (query == '') {
        displayRecipes(recipes);
        return;
    }
    let toRender = [];
    for (let i in queryable) {
        for (let item of queryable[i]) {
            if (item.toLowerCase().includes(query) && !toRender.includes(recipes[i])) {
                toRender.push(recipes[i]);
            }
        }
    }
    toRender.sort((a, b) => {return a.name.localeCompare(b.name)});
    if (toRender.length > 0) {
        displayRecipes(toRender);
    } else {
        main.innerText = `No recipes found with search term "${query}".`
    }
});