const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
let index = 0;

prev.addEventListener("click", () => {
  nextImage("next");
});

next.addEventListener("click", () => {
  nextImage("prev");
});

function nextImage(direction) {
  if (direction == "prev") {
    index++;
    if (index == images.length) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}
