document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(`${event.target.textContent} Clicked`);
    }
  });