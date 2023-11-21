var nbr_image = 6;
var nbr_depot = 4;
var asideElement = document.querySelector("aside");
var articleElement = document.querySelector("main");

function ajout_image_aside() {
  for (let index = 1; index <= nbr_image; index++) {
    let img = document.createElement("img");
    img.src = "img/img" + index + ".jpg";
    img.width = 75;
    asideElement.appendChild(img);
  }
}

function ajout_depot() {
  for (let index = 1; index <= nbr_depot; index++) {
    let img = document.createElement("img");
    img.classList.add("depot");
    img.alt = "zone " + index;
    articleElement.appendChild(img);
  }
}

ajout_image_aside();
ajout_depot();
