import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "8543283-ac41910cbcd5ccb3a6a09e0db";
const PAGE = 1;
const IMG_PER_PAGE = 12;

const FETCH_DELAY = 1000;

export const getPhotos = async query => {
  return new Promise(res => {
    setTimeout(async () => {
      const url = `${BASE_URL}?q=${query}&key=${API_KEY}&page=${PAGE}&per_page=${IMG_PER_PAGE}`;
      const response = await axios.get(url);
      res(response.data.hits);
    }, FETCH_DELAY);
  });
};

// export const getPhotos = async query => {
//   const url = `${BASE_URL}?q=${query}&key=${API_KEY}&page=${PAGE}&per_page=${IMG_PER_PAGE}`;
//   const response = await axios.get(url);
//   return response.data.hits;
// };

// export const getPhotos = async query => {
//   const url =
//     Math.random() > 0.5
//       ? `${BASE_URL}?q=${query}&key=${API_KEY}&page=${PAGE}&per_page=${IMG_PER_PAGE}`
//       : "badURL";
//   const response = await axios.get(url);
//   return response.data.hits;
// };
