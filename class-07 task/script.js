// TASK-01:

// Console log the input-related events (input, change, keyup, keydown)
// when changing the value in the Input element.

const inputElement = document.getElementById("myInput");

inputElement.addEventListener("input", (event) => {
  console.log("Input event:", event);
});

// inputElement.addEventListener("change", (event) => {
//   console.log("Change event:", event);
// });

// inputElement.addEventListener("keyup", (event) => {
//   console.log("Keyup event:", event);
// });

// inputElement.addEventListener("keydown", (event) => {
//   console.log("Keydown event:", event);
// });

//-----------------------------------------------------------------------------------------------
// TASK-02:

// On clicking the Select button, select all three boxes using their class
// name and id and console log them.

const selectBtn = document.getElementById("select-btn");

selectBtn.addEventListener("click", () => {
  const boxOne = document.getElementById("box1");
  const boxTwo = document.getElementById("box2");
  const boxThree = document.getElementById("box3");

  console.log(boxOne, boxTwo, boxThree);
});

//-----------------------------------------------------------------------------------------------

//TASK-03:

// On clicking the Modify button, change the text content of box1 to
// “Modified”. Change the color of box2 to Black and change the inner HTML
// of box3 to <strong>Box</strong>.

const modifyingBtn = document.getElementById("modify-btn");

modifyingBtn.addEventListener("click", () => {
  const boxOne = document.getElementById("box1");
  const boxTwo = document.getElementById("box2");
  const boxThree = document.getElementById("box3");

  boxOne.innerText = "Modified";
  boxTwo.style.backgroundColor = "black";
  boxTwo.style.color = "white";
  boxThree.innerHTML = "<strong>Box</strong>";
});

// On clicking the Fetch button, fetch the posts from the JSONPlaceholder
//  API's get post endpoint (https://jsonplaceholder.typicode.com/posts) and
//  console log the first 10 posts.

const fetchButton = document.getElementById("fetch-btn");

fetchButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log("First 10 posts:", data.slice(0, 10));
    })
    .catch((error) => console.error("Error:", error));
});
