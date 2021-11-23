const sectionList = document.querySelectorAll(".section");
const triggerOrigin = sectionList[1]
  ? sectionList[1]
  : sectionList[sectionList.length - 2];
const triggerOffset = triggerOrigin.offsetTop - 300;

const triggerElement = document.getElementById("socialmedia");
const sliderToTrigger = "slideable";

function init() {
  // Set trigger floating buttons
  // Checking position initially
  const currentPos = window.scrollY;

  const isIncludedClass = triggerElement.classList.contains(sliderToTrigger);

  // if the currentpos is below 2 sections, make the float to bottom
  if (currentPos >= triggerOffset) {
    if (isIncludedClass && window.innerWidth >= 770) {
      triggerElement.classList.remove(sliderToTrigger);
    }
  }

  // If screen is below 770px, remove slider by default
  if (window.innerWidth < 770) {
    if (isIncludedClass) {
      triggerElement.classList.remove(sliderToTrigger);
    }
  }

  setHeight();
}

// Scroll trigger floating buttons
function onScrollHomePage() {
  const currentPos = window.scrollY;

  // Only trigger if screen width from 770px
  if (window.innerWidth >= 770) {
    const elementClassList = triggerElement.classList;
    const isIncludedClass = elementClassList.contains(sliderToTrigger);

    if (currentPos >= triggerOffset) {
      // If scroll over => remove the class to make element go down
      if (isIncludedClass) {
        elementClassList.add("disappear");
        setTimeout(() => {
          elementClassList.remove(sliderToTrigger);
          elementClassList.remove("disappear");
        }, 2000);
      }
    } else {
      if (!isIncludedClass) {
        // Add again if scroll up
        elementClassList.add(sliderToTrigger);
      }
    }
  }
}

function setHeight() {
  const projectDiv = document.getElementById("project");
  const projectTitle = document.getElementById("project-title");
  const projectHolder = document.getElementById("project-holder");

  // Set height of div content #project
  const height = projectTitle.offsetHeight + projectHolder.offsetHeight;
  projectDiv.style.height = parseInt(height + 40) + "px";
}