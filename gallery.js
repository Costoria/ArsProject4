function upDate(previewPic) {
  console.log("Hovered image:", previewPic.alt);

  const imageDiv = document.getElementById("image");

  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  const imageDiv = document.getElementById("image");

  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}
