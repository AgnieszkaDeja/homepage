console.log("Ciao!")

let buttonElement = document.querySelector(".js-button");
let div = document.querySelector(".picture");
let themeName = document.querySelector(".themeName");

buttonElement.addEventListener("click", () => {
    div.classList.toggle("Edek");

    themeName.innerText = div.classList.contains("Edek") ? "Agnieszkę" : "Edka"
});