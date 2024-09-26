const fetchData = async (id) => {
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  try {
    const data = await fetch(baseUrl + id);
  } catch (err) {
    console.log(err);
  }
};
