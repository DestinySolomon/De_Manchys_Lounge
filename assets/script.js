// Carousel Initialization
  document.addEventListener("DOMContentLoaded", function () {
    const loungeCarousel = document.querySelector("#loungeCarousel");
    const carousel = new bootstrap.Carousel(loungeCarousel, {
      interval: 3000,  // Change every 3 seconds
      ride: "carousel", // Auto-starts
      pause: false,     // Keeps running even on hover (optional)
      wrap: true        // Loops back to first slide
    });
  });
