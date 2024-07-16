import projects from "./projects.mjs";
const projectDiv = document.getElementById("projects");
function addProjects() {
    for (let project of projects) {
        projectDiv.insertAdjacentHTML("beforeend",
            `<img src="${project.img}" alt="${project.imgAlt}">
            <section>
                <h2>${project.name}</h2>
                ${project.textHTML}
            </section>`
        )
    }
}
addProjects();