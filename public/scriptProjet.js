var nbr_image = 6;
var nbr_depot = 4;
var asideElement = document.querySelector("aside");
var mainElement = document.querySelector("main");

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
    mainElement.appendChild(img);
  }
}

mainElement.addEventListener("click", depot_selectionne);

function depot_selectionne(evt) {
  console.log("test");
  console.log("classe : " + evt.target.className);
  if (evt.target.className == "depot selected") {
    // on verifie si l'element est déjà selectionner
    evt.target.classList.remove("selected"); // on lui remet son style de base si c'est le cas
  } else {
    evt.target.classList.add("selected"); // sinon on lui ajoute la classe "selected" pour mettre les bordures en rouge
  }
}

ajout_image_aside();
ajout_depot();
