const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  function getRecipe(response) {
    console.log("Recipe Generated:");
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 3,
      cursor: "",
    });
  }
  
  function generateRecipe(event) {
    event.preventDefault();
  
    let userInput = document.querySelector("#user-input");
    let apiKey = "4bf39f80fc9d48003o92t3a6c3d6d47a";
    let prompt = `User Instructions: Generate a detailed recipe using ${userInput.value}. Include ingredients and step-by-step instructions.`;
    let context =
      "You are a recipe expert that loves creating delicious and easy-to-follow recipes. Generate a recipe in basic HTML. Include a title, list of ingredients, and step-by-step instructions. Sign the end of the recipe with 'SheCodes AI' inside a <strong> element on the last line. Do not include the word html. Make sure to follow the user instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let showRecipe = document.querySelector("#recipe");
    let loadingCarousel = document.querySelector("#loading-carousel");
  
    showRecipe.classList.add("hidden");
    loadingCarousel.classList.remove("hidden");
  
    axios.get(apiUrl).then((response) => {
      loadingCarousel.classList.add("hidden");
      showRecipe.classList.remove("hidden");
      getRecipe(response);
    });
  }
  
  let recipeForm = document.querySelector("#recipe-generator-form");
  recipeForm.addEventListener("submit", generateRecipe);