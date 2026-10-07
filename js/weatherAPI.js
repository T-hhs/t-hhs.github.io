const url = "https://weerlive.nl/api/weerlive_api_v2.php?key=ec087e38d3&locatie=Denhaag";
const head = document.querySelector("header");

async function getAPIData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const apiText = document.createElement("p");
        apiText.textContent = "het is "+data.liveweer[0].time+" uur, "+data.liveweer[0].temp+" graden(voelt als "+data.liveweer[0].gtemp+") in "+data.liveweer[0].plaats;

        head.appendChild(apiText);
    } catch (error) {
        console.log(error);
    }
}

getAPIData();