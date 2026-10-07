const projContainer = document.getElementsByClassName("projectsContainer")[0];
const search = document.querySelector("#naam");
const button = document.getElementById("searchButton");

const projects = [
    {
        link: "https://github.com/hhs-se-semester-2-onderwijs/klas-4-groep-3",
        imgPath: "/img/Hotel.png",
        imgText: "Foto van hotel simulatie, grid met verschillende kleuren kamers en gasten erin.",
        name: "Hotel Simulator",
        description: "Een project voor de ICT opleiding van de HHS, Semester 2. Simulatie van hotels, gasten en evenementen om de kwaliteit van een hotel-layout in te schatten."
    }
];

function createProjects(searchName){
    if (searchName == "") {return;}
    for (const child of projContainer.children) {
        if (child.localName == "article") {
            child.remove();
        }
    }
    projects.forEach(prj => {
        if (prj.name.includes(searchName)) {
            const art = document.createElement("article");
            projContainer.appendChild(art);

            const imgA = document.createElement("a");
            imgA.href = prj.link;

            const image = document.createElement("img");
            image.classList.add("projImg");
            image.src = prj.imgPath;
            image.alt = prj.imgText;

            imgA.appendChild(image);

            art.appendChild(imgA);

            const head = document.createElement("h3");
            head.textContent = prj.name;

            art.appendChild(head);

            const dsc = document.createElement("p");
            dsc.textContent = prj.description;

            art.appendChild(dsc);

            const repLink = document.createElement("p");
            repLink.textContent = "Link naar ";
            const rep = document.createElement("a");
            rep.href = prj.link;
            rep.textContent = "repository";

            repLink.appendChild(rep);
            art.appendChild(repLink);
        }
    });
}




button.addEventListener("click", () => {
    createProjects(search.value)
});
