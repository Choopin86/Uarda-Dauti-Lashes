import "./styles.css";
import "./services.js";
import { services } from "./services.js";
const card = document.querySelector(".cards");

function createCard() {
  services.forEach((service) => {
    const title = document.createElement("h2");
    title.textContent = service.name;
    const description = document.createElement("p");
    description.textContent = service.description;
    const price = document.createElement("h3");
    price.textContent = service.price;
    card.append(title, description, price);
  });
}
