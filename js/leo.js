const htmlstatus= document.querySelector ('.status')
console.log(
    htmlstatus.textContent
)
if ( htmlstatus.textContent && htmlstatus.textContent == "Alive") {
    htmlstatus.classList.add("alive");
  } else {
    htmlstatus.classList.add("dead");
  }