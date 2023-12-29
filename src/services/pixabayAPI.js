import axios from "axios";
import Notiflix from "notiflix";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "8543283-ac41910cbcd5ccb3a6a09e0db";
const PAGE = 1;
// const IMG_PER_PAGE = 15;

export const getPhotos = async (query, imagesPerPage = 15) => {
  const url = `${BASE_URL}?q=${query}&key=${API_KEY}&page=${PAGE}&per_page=${imagesPerPage}`;
  const response = await axios.get(url);
  if (response.data.hits.length === 0) {
    Notiflix.Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
    return [];
  }
  return response.data.hits;
};

// DELAY SIMULATION
//
// const FETCH_DELAY = 2000;
// export const getPhotos = async query => {
//   return new Promise(resolve => {
//     setTimeout(async () => {
//       const url = `${BASE_URL}?q=${query}&key=${API_KEY}&page=${PAGE}&per_page=${IMG_PER_PAGE}`;
//       const response = await axios.get(url);
//       resolve(response.data.hits);
//     }, FETCH_DELAY);
//   });
// };

// ERROR SIMULATION
//
// export const getPhotos = async query => {
//   const url =
//     Math.random() > 0.5
//       ? `${BASE_URL}?q=${query}&key=${API_KEY}&page=${PAGE}&per_page=${IMG_PER_PAGE}`
//       : "badURL";
//   const response = await axios.get(url);
//   return response.data.hits;
// };
