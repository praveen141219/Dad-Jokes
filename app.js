const generateBtn = document.querySelector(".generate_btn");
const jokeText = document.querySelector("h1");

const getJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    jokeText.innerHTML = response.data.joke;
  } catch {
    jokeText.innerHTML = `Check You internet or Refresh the page.`;
  }
};

generateBtn.addEventListener("click", getJoke);
