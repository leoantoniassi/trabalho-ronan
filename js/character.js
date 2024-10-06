const url = window.location.href;
const params = new URLSearchParams(window.location.search);

const fetchData = async (id) => {
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  try {
    const response = await fetch(baseUrl + id);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const id = params.get("id");

const HtmlNome = document.querySelector(".nome");
const HtmlStatus = document.querySelector(".status");
const HtmlSpecie = document.querySelector(".specie");
const HtmlGender = document.querySelector(".gender");
const HtmlOrigin = document.querySelector(".origem");
const HtmlEpisodes = document.querySelector(".episodes");
const HtmlPick = document.querySelector(".charimg");
const HtmlEpisodeEst = document.querySelector(".episodeEst");
const HtmlQtdEpisodes = document.querySelector(".qtdEpisodes");

const updateHtml = async () => {
  const data = await fetchData(id);

  const episodes = data.episode;
  console.log(episodes);

  if (data) {
    console.log(data);
    HtmlPick.src = data.image;
    HtmlNome.textContent = data.name;
    HtmlStatus.textContent = data.status == "Alive" ? "Vivo" : "Morto";

    if (data.status == "Alive") {
      HtmlStatus.classList.add("alive");
    } else {
      HtmlStatus.classList.add("dead");
    }

    HtmlSpecie.textContent = data.species;
    HtmlGender.textContent = data.gender == "Male" ? "Homem" : "Mulher";
    HtmlOrigin.textContent +=
      data.origin.name == "unknown" ? "disconhecido" : data.origin.name;
    
    HtmlEpisodeEst.textContent = episodes[0].split("/").pop()
    

    HtmlQtdEpisodes.textContent = episodes.length


  }
};

updateHtml();
