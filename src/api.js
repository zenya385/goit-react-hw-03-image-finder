import axios from "axios";

const apiKey = "20461350-36527ad634bc0878b1b72e118";

export default function getImages(words, page) {
  return axios.get(
    `https://pixabay.com/api/?q=${words}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
