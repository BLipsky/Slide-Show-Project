let mCurrentIndex = 0; // Tracks the current image index
let mImages = []; // Array to hold GalleryImage objects
const mUrl = "images.json"; // Replace with actual JSON URL
const mWaitTime = 5000; // Timer interval in milliseconds

$(document).ready(() => {
  $(".details");
  // Call a function here to start the timer for the slideshow

  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section

  // Select the "Next Photo" button and add a click event to call showNextPhoto

  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
  // Call fetchJSON() to load the initial set of images
  fetchJSON();
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
  $(".location").html(image.imgLocation);
  $(".description").html(image.description);
  $(".state").html(image.state);
}

// Advances to the next photo, loops to the first photo if the end of array is reached
$("#nextPhoto").on("click", function showNextPhoto() {
  mCurrentIndex++;
  if (mCurrentIndex > mImages.length) {
    mCurrentIndex = 0;
  }
  swapPhoto();
});

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
$("#prevPhoto").on("click", function showPrevPhoto() {
  mCurrentIndex--;
  if (mCurrentIndex < 0) {
    mCurrentIndex = 13;
  }
  swapPhoto();
});


// Starter code for the timer function
function startTimer() {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}
