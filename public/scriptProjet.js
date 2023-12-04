var nbr_image = 6;
var nbr_depot = 4;
var asideElement = document.querySelector("aside");
var mainElement = document.querySelector("main");
var elementSelectionne = "";

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
  if (elementSelectionne === "") {
    // on verifie si l'element est déjà selectionné
    elementSelectionne = evt.target;
    elementSelectionne.classList.add("selected"); // sinon on lui ajoute la classe "selected" pour mettre les bordures en rouge
  } else {
    if (evt.target.className === "depot selected") {
      evt.target.classList.remove("selected"); // on lui remet son style de base si c'est le cas
      elementSelectionne = "";
    } else {
      elementSelectionne.classList.remove("selected");
      elementSelectionne = evt.target;
      evt.target.classList.add("selected"); // sinon on lui ajoute la classe "selected" pour mettre les bordures en rouge
    }
    elementSelectionne.classList.add("selected");
  }
}

asideElement.addEventListener("click", image_selectionne);

function image_selectionne(evt) {
  for (let index = 1; index <= nbr_depot; index++) {
    let img = document.getElementById("img" + index);
    if (img.className === "depot selected") {
      img.src = evt.target.src;
      img.classList.remove("selected");
    }
  }
}

generer_img_pexels();
ajout_depot();

function generer_img_pexels() {
  let key = "VMICklz95cOSs0J7HVUkVS3czRGQgsIBh9TTBJrRT7p05rbsLAAKy7Nt";
  let query = "rabbit";
  const options = {
    headers: {
      Authorization: key,
    },
  };
  var url = `https://api.pexels.com/v1/search?query=${query}&per_page=6&size=small`;
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      data.photos.forEach((photo) => {
        const img = document.createElement("img");
        img.src = photo.src.small;
        img.width = 50;
        img.height = 50;

        asideElement.appendChild(img);
      });
    })
    .catch((error) => {
      ajout_image_aside();
      console.error("Error:", error);
    });
}
