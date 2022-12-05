// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  backToTopBtn,
  navBar,
  navBarToggleIcon,
  loader,
  tabBtns,
  tabPanels,
  tabIndicator,
  searchIcon,
  searchInput,
] = [
  qs(".back-to-top-btn"),
  qs(".navbar"),
  qs(".navbar-toggle-icon"),
  qs(".loader-wrapper"),
  qsa(".tab-link"),
  qsa(".tab-panel"),
  qs(".indicator"),
  qs(".search-icon"),
  qs(".input-with-icon"),
];

// -----------------------------------------------------NAVBAR ----------------------------------------------------
navBarToggleIcon.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("active", window.scrollY > 500);
  navBar.classList.toggle("animate-slideIn", window.scrollY > 0);
});

// -----------------------------------BACK TO TOP BUTTONS ----------------------------------------------------

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("active", window.scrollY > 500);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Loader
window.addEventListener("load", () => {
  loader.style.display = "none";
});

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

//Add the active class to the first elements
tabBtns[0].classList.add("active");
tabPanels[0].classList.add("active");
tabIndicator.style.width = `calc(100% / ${tabBtns.length})`;
// ---------------------------------------------------------TABS COMPONENT-----------------------------------------------------------------------------------------

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND PANELS
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("active");
    elm.classList.remove("fade-in");
  });
}

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", (e) => {
    removeActiveClass(tabBtns);
    removeActiveClass(tabPanels);
    tabBtn.classList.add("active");
    tabIndicator.style.left = `calc(100%/${tabBtns.length} * ${i})`;
    let btnId = tabBtn.attributes.id.value;
    const tabPanel = qs(`.tab-panel[data-id = ${btnId}]`);
    tabPanel.classList.add("active");
    tabPanel.classList.add("fade-in");
  });
});
