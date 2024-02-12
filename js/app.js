/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const fragment = document.createDocumentFragment();
const unOrderedList = document.getElementById("navbar__list");
const Sections = document.querySelectorAll("section");
/**
 * End Global Variables
 *
 */

/**
 * Begin Main Functions
 *
 */
function Menu() {
  for (const section of Sections) {
    const secName = section.getAttribute("data-nav");
    const secNum = section.getAttribute("id");
    const list = document.createElement("li");
    const secLink = document.createElement("a");
    
    secLink.href = `#${secNum}`;
    secLink.classList.add("menu__link");
    secLink.textContent = secName;
    secLink.addEventListener("click", function (event) {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
    list.appendChild(secLink);
    fragment.appendChild(list);
  }
  unOrderedList.appendChild(fragment);
}
window.addEventListener("load", Menu);

// build the nav
// Scroll to section on link click using section ID

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
function callback(entries) {
  const activeSection = document.querySelector(
    `a[href="#${entries[0].target.id}"]`
  );
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("your-active-class");
    activeSection.classList.add("active-SecLink");
  } else {
    entries[0].target.classList.remove("your-active-class");
    activeSection.classList.remove("active-SecLink");
  }
}
const alternatives = {
  r: null,
  rMargin: "10px",
  threshold: 0.7,
};
const observer = new IntersectionObserver(callback, alternatives);
window.addEventListener("scroll", function () {
  Sections.forEach(function (section) {
    observer.observe(section);
  });
});
// Set sections as active
