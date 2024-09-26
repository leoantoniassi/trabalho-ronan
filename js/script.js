const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const characterId = card.dataset.characterId;

  card.addEventListener("click", () => {
    const url = `character.html?id=${characterId}`;
    window.location.href = url;
  });
});
