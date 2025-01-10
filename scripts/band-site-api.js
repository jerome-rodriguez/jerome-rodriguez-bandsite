class BandSiteApi {
  // constructor accepts API key as its only paameter
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  // sends a POST request to API
  async postComment(comment) {
    const response = await axios.post(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`,
      comment
    );
    return response.data;
  }

  // sends a GET request to the API and returns array from newest to oldest
  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`
    );
    return response.data.sort((a, b) => b.timestamp - a.timestamp);
  }

  // sends a GET request to shows API and returns array of show data objects
  async getShows() {
    const response = await axios.get(
      `${this.baseUrl}/showdates?api_key=${this.apiKey}`
    );
    return response.data;
  }
}

// add try-catch block, recommended when using APIs
