const API_KEY = "53143785-3d26ca9fafc478fbd760d25ea";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error("Error fetching images");
  }

  return response.json();
}
