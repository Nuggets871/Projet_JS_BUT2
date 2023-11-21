var nbr_image = 6;
var asideElement = document.querySelector("aside");
for (let index = 1; index <= nbr_image; index++) {
  let img = document.createElement("img");
  img.src = "img/img" + index + ".jpg";
  img.width = 75;
  asideElement.appendChild(img);
}
