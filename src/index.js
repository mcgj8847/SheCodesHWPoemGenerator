function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let subjectElement = document.querySelector("#subject");
  let apiKey = `501af34b402d4e44o6622bceat198ee8`;
  let prompt = `Generate a  4 line poem about ${subjectElement.value}`;
  let context =
    "You are an AI with vast knowledge of poems. Give a different answers each time. Sign the poem with SheCodes AI in <strong>.Separate each line with <br/>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Please wait while we generate a poem about ${subjectElement.value}<span class=blink>...</span>`;
  axios.get(apiUrl).then(showPoem);
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
