// BandSite API instance

const apiKey = "efa62bde-09f7-40d2-837d-afb350f1503b";
const bandSiteApi = new BandSiteApi(apiKey);

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

  //get from api
  const nameElement = document.createElement("p");
  nameElement.classList.add("comments-card__name");
  nameElement.innerText = comment.name;

  //get from api
  const timeElement = document.createElement("p");
  timeElement.classList.add("comments-card__time");
  const dateObj = new Date(comment.timestamp);
  timeElement.innerText = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  //get from api
  const commentElement = document.createElement("p");
  commentElement.classList.add("comments-card__comment");
  commentElement.innerText = comment.comment;

  personalElement.appendChild(nameElement);
  personalElement.appendChild(timeElement);

  infoElement.appendChild(personalElement);
  infoElement.appendChild(commentElement);

  cardElement.appendChild(imgElement);
  cardElement.appendChild(infoElement);

  return cardElement;
}

// function to create HTML for horizontal line

function createLine() {
  const lineElement = document.createElement("div");
  lineElement.classList.add("comments__line");

  return lineElement;
}

// 3. function to render HTML to browser

async function renderCommentCards() {
  try {
    const defaultComments = await bandSiteApi.getComments();
    const myCommentEl = document.querySelector(".comments__default");

    myCommentEl.innerHTML = "";

    for (let i = 0; i < defaultComments.length; i++) {
      const card = createCommentCard(defaultComments[i]);
      const line = createLine();

      myCommentEl.appendChild(card);
      myCommentEl.appendChild(line);
    }
  } catch (error) {
    console.error("Error rendering comments:".error);
  }
}

renderCommentCards();

// 4. Submit button

const formEl = document.querySelector(".comments-article__form");

//turn into async function
formEl.addEventListener("submit", submitHandler);

async function submitHandler(event) {
  event.preventDefault();

  let cardData = {
    name: event.target.name.value,
    // timestamp: new Date().getTime(),
    comment: event.target.comment.value,
  };

  try {
    const defaultComments = await bandSiteApi.getComments();
    const response = await bandSiteApi.postComment(cardData);

    defaultComments.unshift(response);

    renderCommentCards();
    event.target.reset();
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
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
