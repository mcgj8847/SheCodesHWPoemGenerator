function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings:
      "O, never say that I was false of heart,Though absence seemed my flame to qualify.",
    autoStart: true,
    cursor: "",
  });
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
