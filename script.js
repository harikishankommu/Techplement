function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

let currentCourse = null;
let currentPrice = null;

function enroll(courseName, price) {
  currentCourse = courseName;
  currentPrice = price;

  const popup = document.getElementById("enroll-popup");
  const courseTitle = document.getElementById("course-title");
  const popupMessage = document.getElementById("popup-message");
  const userForm = document.getElementById("user-form");
  const payBtn = document.getElementById("pay-button");
  const closeBtn = document.getElementById("close-button");

  courseTitle.textContent = `Enroll in ${courseName}`;
  popupMessage.textContent = `Price: Rs.${price}`;

  userForm.style.display = "block";
  payBtn.style.display = "none";
  closeBtn.style.display = "none";

  popup.classList.remove("hidden");
}

function submitUserDetails(event) {
  event.preventDefault();

  const userName = document.getElementById("user-name").value.trim();
  const userEmail = document.getElementById("user-email").value.trim();

  if (!userName || !userEmail) {
    alert("Please fill in all fields.");
    return;
  }

  // Hide form, show pay button
  document.getElementById("user-form").style.display = "none";
  document.getElementById("pay-button").style.display = "inline-block";
}

function pay() {
  const courseTitle = document.getElementById("course-title");
  const popupMessage = document.getElementById("popup-message");
  const payBtn = document.getElementById("pay-button");
  const closeBtn = document.getElementById("close-button");

  courseTitle.textContent = "Enrollment Successful!";
  popupMessage.textContent = `You have successfully enrolled in ${currentCourse} at Rs.${currentPrice}.`;
  payBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
}

function closePopup() {
  const popup = document.getElementById("enroll-popup");
  popup.classList.add("hidden");
  scrollToSection('hero');

  

  // Reset form fields for next enrollment
  document.getElementById("user-form").reset();
  
}
