window.addEventListener("load", function () {
  hideLoadingScreen();
  // setTransformOrigin();
});

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");
  // loadingScreen.style.display = "none";

  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 1000);
}

// function setTransformOrigin() {
//   const elements = ["frontend", "backend"];

//   elements.forEach((element) => {
//     const el = document.querySelector(`.${element}`);
//     const elBBox = el.getBBox();
//     const elCenterX = elBBox.x + elBBox.width / 2;
//     const elCenterY = elBBox.y + elBBox.height / 2;

//     el.style.transformOrigin = `${elCenterX}px ${elCenterY}px`;
//   });
// }
