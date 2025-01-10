// 1. create data that we can work with locally

const defaultComments = [
  {
    name: "Victor Pinto",
    time: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    time: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    time: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// 2. function to creat HTML for comments

function createCommentCard(comment) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("comments-card");

  const imgElement = document.createElement("div");
  imgElement.classList.add("comments-card__img");

  const infoElement = document.createElement("div");
  infoElement.classList.add("comments-card__info");

  const personalElement = document.createElement("div");
  personalElement.classList.add("comments-card__personal");

  const nameElement = document.createElement("p");
  nameElement.classList.add("comments-card__name");
  nameElement.innerText = comment.name;

  const timeElement = document.createElement("p");
  timeElement.classList.add("comments-card__time");
  timeElement.innerText = comment.time;

  const commentElement = document.createElement("p");
  commentElement.classList.add("comments-card__comment");
  commentElement.innerText = comment.comment;

  personalElement.appendChild(nameElement);
  personalElement.appendChild(timeElement);

  infoElement.appendChild(personalElement);
  infoElement.appendChild(commentElement);

  cardElement.appendChild(imgElement);
  cardElement.appendChild(infoElement);

  console.log(cardElement);
  return cardElement;
}

createCommentCard({ name: "Bill", time: "12/19/2024", comment: "text 1" });
createCommentCard({ name: "John", time: "12/24/2024", comment: "text 2" });
createCommentCard({ name: "Sarah", time: "12/12/2024", comment: "text 3" });

//function to create HTML for horizontal line

function createLine() {
  const lineElement = document.createElement("div");
  lineElement.classList.add("comments__line");

  return lineElement;
}

//function to create img placeholder

// function createImg() {
//   const imgElement = document.createElement("div");
//   imgElement.classList.add("comments__ph");

//   return imgElement;
// }

// 3. function to render HTML to browser

const renderCommentCards = () => {
  const myCommentEl = document.querySelector(".comments__default");

  myCommentEl.innerHTML = "";

  for (let i = 0; i < defaultComments.length; i++) {
    const card = createCommentCard(defaultComments[i]);
    const line = createLine();
    // const image = createImg();

    // myCommentEl.appendChild(image);
    myCommentEl.appendChild(card);
    myCommentEl.appendChild(line);
  }
};

renderCommentCards();

// 4. Submit button

const formEl = document.querySelector(".comments-article__form");

formEl.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let cardData = {
    name: event.target.name.value,
    time: event.target.time.value,
    comment: event.target.comment.value,
  };

  defaultComments.unshift(cardData);

  console.log(defaultComments);

  renderCommentCards();
}

// 5. hidden date input

const hiddenInput = document.getElementById("time");
const currentDate = new Date();

// Extract month, day, and year
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

// Format to MM/DD/YYYY
const formattedDate = `${month}/${day}/${year}`;

hiddenInput.value = formattedDate;
