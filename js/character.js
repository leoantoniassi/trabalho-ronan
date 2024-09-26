const fetchData = async (id) => {
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  try {
    const data = await fetch(baseUrl + id);
  } catch (err) {
    console.log(err);
  }
};

const url = window.location.href;

const params = new URLSearchParams(window.location.search);

const nome = params.get("id");
