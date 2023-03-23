// array

const images = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];

// image selector

let activeImage = 0;

// DOM img selector

const imagesElement = document.querySelector(".images");

// for Loop

for (let i = 0; i < images.length; i++) {
  const imgSrc = images[i];
  let imgClasses = "img-fluid";
  if (i === activeImage) {
    imgClasses += " active";
  }
  const imgElement = `<img class="${imgClasses}" src="${imgSrc}" alt="">`;
  console.log(imgElement);

  imagesElement.insertAdjacentHTML("beforeend", imgElement);
}

// select the slides

const slideImagesElements = document.querySelectorAll(".images > img");

// Thumbnail

const thumbnailElement = document.querySelector(".thumbnail");

for (let i = 0; i < images.length; i++) {
  const thumbnailSrc = images[i];
  const imgThumbnail = document.createElement("img");
  imgThumbnail.setAttribute("src", thumbnailSrc);
  if (i === activeImage) {
    imgThumbnail.classList.add("target");
  }
  thumbnailElement.appendChild(imgThumbnail);
}

const thumbnailImages = document.querySelectorAll(".thumbnail > img");

// event listener NEXT

const nextEl = document.querySelector(".next");
nextEl.addEventListener("click", function () {
  console.log("Clicked on the Next Button");

  // select the current Slide
  const currentSlide = slideImagesElements[activeImage];
  console.log(currentSlide);
  const currentThumbnail = thumbnailImages[activeImage];
  console.log(currentThumbnail);

  // remove active class from the active image
  currentSlide.classList.remove("active");
  currentThumbnail.classList.remove("target");
  // increment the value of the activeImage variable
  activeImage++;
  // check if activeImage is greater than the last index of the slideImagesElements array
  if (activeImage >= slideImagesElements.length) {
    // reset activeImage to 0 to start over the carousel
    activeImage = 0;
  }
  // select the next slide
  const nextImage = slideImagesElements[activeImage];
  const nextThumb = thumbnailImages[activeImage];
  // add the active class
  console.log(nextImage);
  console.log(nextThumb);
  nextImage.classList.add("active");
  nextThumb.classList.add("target");
});

// Event Listener PREV
const prevEl = document.querySelector(".prev");
prevEl.addEventListener("click", function () {
  console.log("Clicked on the Prev Button");

  // select current slide
  const currentSlide = slideImagesElements[activeImage];
  console.log(currentSlide);
  const currentThumbnail = thumbnailImages[activeImage];
  console.log(currentThumbnail);

  // remove active class from the active image
  currentSlide.classList.remove("active");
  currentThumbnail.classList.remove("target");
  // decrement the value of the activeimage variable
  activeImage--;
  // check if activeImage is negative, reset to last index of array
  if (activeImage < 0) {
    activeImage = slideImagesElements.length - 1;
  }
  // select the next slide
  const nextImage = slideImagesElements[activeImage];
  const nextThumb = thumbnailImages[activeImage];
  // add the active class
  console.log(nextImage);
  console.log(nextThumb);
  nextImage.classList.add("active");
  nextThumb.classList.add("target");
});
