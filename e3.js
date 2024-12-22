document.getElementById("outerStop").addEventListener("click", () => console.log("Outer Div Clicked"));
document.getElementById("middleStop").addEventListener("click", () => console.log("Middle Div Clicked"));
document.getElementById("innerStop").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Inner Button Clicked (Propagation Stopped)");
});