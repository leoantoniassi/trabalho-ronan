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

console.log("Elemento HTML:", HtmlNome);

const updateHtml = async () => {
  const data = await fetchData(id);
  console.log("Dados recebidos:", data);

  const episodes = data.episodes;
  console.log(episodes);

  if (data) {
    HtmlNome.textContent = data.name;
    HtmlStatus.textContent = data.status == "Alive" ? "Vivo" : "Morto";
    HtmlSpecie.textContent = data.species;
    HtmlGender.textContent = data.gender == "Male" ? "Homem" : "Mulher";
    HtmlOrigin.textContent = data.origin.name;
  }
};

updateHtml();
