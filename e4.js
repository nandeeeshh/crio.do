document.getElementById("outerBC").addEventListener(
    "click",
    () => console.log("Outer Div Capturing"),
    true
  );
  document.getElementById("outerBC").addEventListener(
    "click",
    () => console.log("Outer Div Bubbling"),
    false
  );