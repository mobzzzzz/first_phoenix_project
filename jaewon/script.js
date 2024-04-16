let profileImage;
let prevButton;
let nextButton;

document.addEventListener("DOMContentLoaded", function () {
  const profileImages = [
    "profile_image1.jpeg",
    "profile_image2.jpeg",
    "profile_image3.jpeg",
  ];

  var currentIndex = 0;

  profileImage = document.getElementById("profile_image");
  prevButton = document.getElementById("left_button");
  nextButton = document.getElementById("right_button");

  prevButton.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + profileImages.length) % profileImages.length;
    updateProfileImage(profileImages[currentIndex]);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % profileImages.length;
    updateProfileImage(profileImages[currentIndex]);
  });

  profileImage.src = profileImages[0];
});

function updateProfileImage(image) {
  profileImage.src = image;
}
