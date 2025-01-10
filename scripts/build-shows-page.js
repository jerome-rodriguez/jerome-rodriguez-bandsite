// BandSite API instance

const apiKey = "b908182c-2f05-45b9-a12d-1ac71ac691c9";
const bandSiteApi = new BandSiteApi(apiKey);

// function to create HTML for shows

function createShowCard(show) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("shows-card");

  const dateHeader = document.createElement("h4");
  dateHeader.classList.add("shows-card__header");
  dateHeader.innerText = "DATE";

  //get from api
  const dateElement = document.createElement("p");
  dateElement.classList.add("shows-card__date");
  const dateObj = new Date(show.date);
  dateElement.innerText = dateObj
    .toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .replace(/,/g, "");

  const venueHeader = document.createElement("h4");
  venueHeader.classList.add("shows-card__header");
  venueHeader.innerText = "VENUE";

  //get from api
  const venueElement = document.createElement("p");
  venueElement.classList.add("shows-card__venue");
  venueElement.innerText = show.place;

  const locationHeader = document.createElement("h4");
  locationHeader.classList.add("shows-card__header");
  locationHeader.innerText = "LOCATION";

  //get from api
  const locationElement = document.createElement("p");
  locationElement.classList.add("shows-card__location");
  locationElement.innerText = show.location;

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("shows-card__button");
  buttonElement.innerText = "BUY TICKETS";

  cardElement.appendChild(dateHeader);
  cardElement.appendChild(dateElement);
  cardElement.appendChild(venueHeader);
  cardElement.appendChild(venueElement);
  cardElement.appendChild(locationHeader);
  cardElement.appendChild(locationElement);
  cardElement.appendChild(buttonElement);

  return cardElement;
}

// //function to create HTML for horizontal line

function createLine() {
  const lineElement = document.createElement("div");
  lineElement.classList.add("shows__line");

  return lineElement;
}

// function to render HTML to browser

async function renderShowsCards() {
  const shows = await bandSiteApi.getShows();
  const myShowsEl = document.querySelector(".shows");

  myShowsEl.innerHTML = "";

  const header = document.createElement("h2");
  header.classList.add("shows__title");
  header.innerText = "Shows";

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("shows__header");

  const dateHeader = document.createElement("h4");
  dateHeader.classList.add("shows__header-date");
  dateHeader.innerText = "DATE";

  const venueHeader = document.createElement("h4");
  venueHeader.classList.add("shows__header-venue");
  venueHeader.innerText = "VENUE";

  const locationHeader = document.createElement("h4");
  locationHeader.classList.add("shows__header-location");
  locationHeader.innerText = "LOCATION";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("shows__header-button");
  buttonElement.innerText = "BUY TICKETS";

  headerDiv.appendChild(dateHeader);
  headerDiv.appendChild(venueHeader);
  headerDiv.appendChild(locationHeader);
  headerDiv.appendChild(buttonElement);

  myShowsEl.appendChild(header);
  myShowsEl.appendChild(headerDiv);

  for (let i = 0; i < shows.length; i++) {
    const card = createShowCard(shows[i]);
    const line = createLine();

    myShowsEl.appendChild(card);
    myShowsEl.appendChild(line);
  }
}

renderShowsCards();
