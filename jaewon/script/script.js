let profileImage;
let prevButton;
let nextButton;

document.addEventListener("DOMContentLoaded", function () {
  const profileImages = [
    "images/profile_image1.jpeg",
    "images/profile_image2.jpeg",
    "images/profile_image3.jpeg",
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
  //   profileImage.classList.toggle("fade");
  profileImage.classList.add("fade-out");
  setTimeout(function () {
    profileImage.src = image;

    // profileImage.classList.toggle("fade");
    profileImage.classList.remove("fade-out");
    profileImage.classList.add("fade-in");
    setTimeout(function () {
      profileImage.classList.remove("fade-in");
    }, 300);
  }, 300);
}
