import recipes from "./recipes.mjs";
for (let recipe of recipes) {
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

    document.body.querySelector("main").insertAdjacentHTML("beforeend",
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