{
    const welcome = () => {
        console.log("Hi! Hope you like it here!");
    };

    const toggleImage = () => {
        const div = document.querySelector(".picture");
        const themeName = document.querySelector(".themeName");
        div.classList.toggle("Edek");
        themeName.innerText = div.classList.contains("Edek") ? "Agnieszkę" : "Edka";
    };

    const init = () => {
        let buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", toggleImage);

        welcome();
    };

    init();
}