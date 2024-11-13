let mCurrentIndex = 0; // Tracks the current image index
let mImages = []; // Tracks the current image index
const mUrl = "images.json"; // Replace with actual JSON URL
const mWaitTime = 5000; // Timer interval in milliseconds

$(document).ready(() => {
  $(".details").hide();
  startTimer();
  fetchJSON();

  $(".moreIndicator").on("click", function() {
    $(this).toggleClass("rot90 rot270");
    $(".details").slideToggle();
  });
});

// Function to fetch JSON data and store it in mImages
function fetchJSON() {
  $.ajax({
    url: mUrl,
    method: "GET",
    success: (data) => {
      mImages = data.images;
      swapPhoto();
    },
  });
}

// Function to swap and display the next photo in the slideshow
function swapPhoto() {
  let image = mImages[mCurrentIndex];
  $("#photo").attr("src", image.imgPath);
  $(".location").html("Location: " + image.imgLocation);
  $(".description").html("Description: " + image.description);
  $(".state").html("State: " + image.state);
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto() {
  mCurrentIndex++;
  if (mCurrentIndex >= mImages.length) {
    mCurrentIndex = 0;
  }
  swapPhoto();
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto() {
  mCurrentIndex--;
  if (mCurrentIndex < 0) {
    mCurrentIndex = mImages.length - 1;
  }
  swapPhoto();
}
$("#nextPhoto").on("click", showNextPhoto);
$("#prevPhoto").on("click", showPrevPhoto);

// Starter code for the timer function
function startTimer() {
  let timer = setInterval(showNextPhoto, mWaitTime);
  $(".moreIndicator").on("click", function() {
    clearInterval(timer);
    timer = setInterval(showNextPhoto, mWaitTime);
  });
}
