const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    if (dropdownMenu.classList.contains("visible")) {
      dropdownMenu.classList.remove("visible");
      dropdownMenu.classList.add("hiding");
    } else {
      dropdownMenu.classList.remove("hiding");
      dropdownMenu.classList.add("visible");
    }
  }
});

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    if (dropdownMenu.classList.contains("visible")) {
      dropdownMenu.classList.remove("visible");
      dropdownMenu.classList.add("hiding");
    }
  }
});

// Remove .hiding after animation ends
dropdownMenu.addEventListener("animationend", (e) => {
  if (dropdownMenu.classList.contains("hiding")) {
    dropdownMenu.classList.remove("hiding");
  }
});
