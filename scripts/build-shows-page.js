// shows data

const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// function to create HTML for shows

function createShowCard(show) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("shows-card");

  const dateHeader = document.createElement("h4");
  dateHeader.classList.add("shows-card__header");
  dateHeader.innerText = "DATE";

  const dateElement = document.createElement("p");
  dateElement.classList.add("shows-card__date");
  dateElement.innerText = show.date;

  const venueHeader = document.createElement("h4");
  venueHeader.classList.add("shows-card__header");
  venueHeader.innerText = "VENUE";

  const venueElement = document.createElement("p");
  venueElement.classList.add("shows-card__venue");
  venueElement.innerText = show.venue;

  const locationHeader = document.createElement("h4");
  locationHeader.classList.add("shows-card__header");
  locationHeader.innerText = "LOCATION";

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

  console.log(cardElement);
  return cardElement;
}

createShowCard({
  date: "Tues Dec 14 2024",
  venue: "Golden Gate Bridge",
  location: "San Francisco, CA",
});
createShowCard({
  date: "Tues Dec 19 2024",
  venue: "Amazon Sheres",
  location: "Seattle, WA",
});

// function to create HTML for button

// function createButton() {
//   const buttonElement = document.createElement("button");
//   buttonElement.classList.add("shows__button");
//   buttonElement.innerText = "BUY TICKETS";

//   return buttonElement;
// }

//function to create HTML for horizontal line

function createLine() {
  const lineElement = document.createElement("div");
  lineElement.classList.add("shows__line");

  return lineElement;
}

// function to render HTML to browser

const renderShowsCards = () => {
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
};

renderShowsCards();
