const triggerOrigin = document.getElementById("skillset");
const triggerOffset = triggerOrigin.offsetTop - 300;

const triggerElement = document.getElementById("socialmedia");
const sliderToTrigger = "slideable";

// Checking position initially
function init() {
  const currentPos = window.scrollY;

  const isIncludedClass = triggerElement.classList.contains(sliderToTrigger);

  if (currentPos >= triggerOffset) {
    if (isIncludedClass) {
      triggerElement.classList.remove(sliderToTrigger);
    }
  }
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
