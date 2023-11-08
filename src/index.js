document.addEventListener('DOMContentLoaded', () => {

  /* Delete below this part and write your code here! 
  or leave the below for a quick start */

  // DOM elements
  const addAnimalForm = document.querySelector('.add-animal-form');
  const animalCollection = document.querySelector('#animal-collection');

  // Event listeners
  addAnimalForm.addEventListener('submit', handleAddAnimal);

  // Fetch and display animals on initial load
  fetchAnimals();

  function fetchAnimals() {
    // TODO: Fetch animals from the server and render them in the DOM
  }

  function handleAddAnimal(event) {
    event.preventDefault();
    // TODO: Handle adding a new animal to the zoo
  }

  function addAnimalToDOM(animal) {
    // TODO: Add the given animal object to the DOM
  }

  function updateAnimalLikes(animal) {
    // TODO: Update the likes of an animal in the DOM and on the server
  }

  function deleteAnimal(animal) {
    // TODO: Remove an animal from the DOM and from the server
  }
});
