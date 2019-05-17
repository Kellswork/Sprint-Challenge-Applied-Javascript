class Carousel {
  constructor(images) {
    this.images = images;
    this.currentImageIndex = 0;
    this.leftButton = document.querySelector(".left-button");
    this.rightButton = document.querySelector(".right-button");

    this.leftButton.addEventListener("click", () => this.previousImage());
    this.rightButton.addEventListener("click", () => this.nextImage());
    this.images[0].setAttribute("style", "display:block");
  }

  reset() {
    this.images.forEach(image => {
      image.setAttribute("style", "display:none");
    });
  }

  previousImage() {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.images.length;
    }
    this.reset();
    this.images[this.currentImageIndex - 1].style.display = "block";
  //  this.images[this.currentImageIndex - 1].style.opacity = 0;
    TweenLite.to(this.images[this.currentImageIndex - 1], 2,  { ease: Power4.easeOut });
    this.currentImageIndex--;

  }

  nextImage() {
    if (this.currentImageIndex === this.images.length - 1) {
      this.currentImageIndex = -1;
    }
    this.reset();
    this.images[this.currentImageIndex + 1].style.display = "block";
   // this.images[this.currentImageIndex + 1].style.opacity = 0;
    TweenLite.to(this.images[this.currentImageIndex + 1], 2, {ease: Power4.easeOut});
    this.currentImageIndex++;
  }
}

let carousel = document.querySelectorAll(".carousel img");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
