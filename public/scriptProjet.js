var nbr_image = 6;
var nbr_depot = 4;
var asideElement = document.querySelector("aside");
var mainElement = document.querySelector("main");

function ajout_image_aside() {
  for (let index = 1; index <= nbr_image; index++) {
    let img = document.createElement("img");
    img.src = "img/img" + index + ".jpg";
    img.width = 50;
    asideElement.appendChild(img);
  }
}

function ajout_depot() {
  for (let index = 1; index <= nbr_depot; index++) {
    let img = document.createElement("img");
    img.classList.add("depot");
    img.id = "img" + index;
    img.alt = "zone " + index;
    mainElement.appendChild(img);
  }
}

mainElement.addEventListener("click", depot_selectionne);

function depot_selectionne(evt) {
  console.log("test");
  console.log("classe : " + evt.target.className);
  // on verifie si l'element est déjà selectionné
  if (evt.target.className == "depot selected") {
    evt.target.classList.remove("selected"); // on lui remet son style de base si c'est le cas
  } else {
    evt.target.classList.add("selected"); // sinon on lui ajoute la classe "selected" pour mettre les bordures en rouge
  }
}

asideElement.addEventListener("click", image_selectionne);

function image_selectionne(evt) {
  console.log(evt.target.src);
  for (let index = 1; index <= nbr_depot; index++) {
    let img = document.getElementById("img" + index);
    if (img.className == "depot selected") {
      console.log("test3");
      img.src = evt.target.src;
      img.classList.remove("selected");
    }
  }
}

ajout_image_aside();
ajout_depot();
