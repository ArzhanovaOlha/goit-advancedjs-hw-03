import { fetchImages } from "./js/pixaay-api.js";
import { createGalleryMarkup, clearGallery, renderGallery } from "./js/render-functions.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = form.elements.query.value.trim();

  if (query === "") {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query",
      position: "topRight",
    });
    return;
  }

  clearGallery(gallery);
  loader.classList.remove("hidden");

  try {
    const data = await fetchImages(query);

    loader.classList.add("hidden");

    if (data.hits.length === 0) {
      iziToast.info({
        title: "No results",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    const markup = createGalleryMarkup(data.hits);
    renderGallery(gallery, markup);

    lightbox.refresh();

  } catch (error) {
    loader.classList.add("hidden");
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
  }
});
