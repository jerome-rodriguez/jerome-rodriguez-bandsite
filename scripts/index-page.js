// 1. create data that we can work with locally

const defaultComments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// 2. function to creat HTML for comments

function createCommentCard(comment) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("comments__card");

  const nameElement = document.createElement("p");
  nameElement.classList.add("comments__name");
  nameElement.innerText = comment.name;

  const dateElement = document.createElement("span");
  dateElement.classList.add("comments__date");
  dateElement.innerText = comment.date;

  const commentElement = document.createElement("p");
  commentElement.classList.add("comments__comment");
  commentElement.innerText = comment.comment;

  cardElement.appendChild(nameElement);
  cardElement.appendChild(dateElement);
  cardElement.appendChild(commentElement);

  console.log(cardElement);
  return cardElement;
}

createCommentCard({ name: "Bill", date: "12/19/2024", comment: "text 1" });
createCommentCard({ name: "John", date: "12/24/2024", comment: "text 2" });
createCommentCard({ name: "Sarah", date: "12/12/2024", comment: "text 3" });

//function to create HTML for horizontal line

function createLine() {
  const lineElement = document.createElement("hr");
  lineElement.classList.add("shows__line");

  return lineElement;
}

// 3. function to render HTML to browser

const renderCommentCards = () => {
  const myCommentEl = document.querySelector(".comments__list");

  myCommentEl.innerHTML = "";

  for (let i = 0; i < defaultComments.length; i++) {
    const card = createCommentCard(defaultComments[i]);
    const line = createLine();

    myCommentEl.appendChild(card);
    myCommentEl.appendChild(line);
  }
};

renderCommentCards();

// 4. Submit button

const formEl = document.querySelector(".comments__form");

formEl.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let cardData = {
    name: event.target.name.value,
    date: event.target.date.value,
    comment: event.target.comment.value,
  };

  defaultComments.push(cardData);

  defaultComments.unshift(cardData);

  console.log(defaultComments);

  renderCommentCards();
}

// 5. hidden date input

const hiddenInput = document.getElementById("date");
const currentDate = new Date();

// Extract month, day, and year
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

// Format to MM/DD/YYYY
const formattedDate = `${month}/${day}/${year}`;

hiddenInput.value = formattedDate;
