let currentPaymentMode = null;
let currentCourse = null;
let currentPrice = null;

// Smooth scroll helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Open enrollment popup and initialize
function enroll(courseName, price) {
  currentCourse = courseName;
  currentPrice = price;

  const popup = document.getElementById("enroll-popup");
  document.getElementById("course-title").textContent = `Enroll in ${courseName}`;
  document.getElementById("popup-message").textContent = `Price: Rs.${price}`;

  // Show user form; hide payment forms and buttons
  document.getElementById("user-form").style.display = "block";
  document.getElementById("payment-mode-form").style.display = "none";
  document.getElementById("payment-details-form").style.display = "none";

  document.getElementById("pay-button").style.display = "none";
  document.getElementById("close-button").style.display = "none";

  popup.classList.remove("hidden");
}

// Handle user details form submit
function submitUserDetails(event) {
  event.preventDefault();

  const userName = document.getElementById("user-name").value.trim();
  const userEmail = document.getElementById("user-email").value.trim();

  if (!userName || !userEmail) {
    alert("Please fill in all fields.");
    return;
  }

  // Hide user form, show payment mode selection
  document.getElementById("user-form").style.display = "none";
  document.getElementById("payment-mode-form").style.display = "block";
  document.getElementById("payment-details-form").style.display = "none";

  document.getElementById("pay-button").style.display = "none";
  document.getElementById("close-button").style.display = "none";
}

// Handle payment mode form submit
function submitPaymentMode(event) {
  event.preventDefault();

  const selectedMode = document.querySelector('input[name="payment-mode"]:checked');
  if (!selectedMode) {
    alert("Please select a mode of payment.");
    return;
  }

  currentPaymentMode = selectedMode.value;

  document.getElementById("payment-mode-form").style.display = "none";
  document.getElementById("payment-details-form").style.display = "block";

  // Hide all payment fields initially
  document.getElementById("credit-card-fields").style.display = "none";
  document.getElementById("upi-fields").style.display = "none";
  document.getElementById("net-banking-fields").style.display = "none";

  // Show fields based on selected payment mode
  if (currentPaymentMode === "Credit Card" || currentPaymentMode === "Debit Card") {
    document.getElementById("credit-card-fields").style.display = "block";
  } else if (currentPaymentMode === "UPI") {
    document.getElementById("upi-fields").style.display = "block";
  } else if (currentPaymentMode === "Net Banking") {
    document.getElementById("net-banking-fields").style.display = "block";
  }

  document.getElementById("pay-button").style.display = "none";
  document.getElementById("close-button").style.display = "none";
}

// Handle payment details form submit
function submitPaymentDetails(event) {
  event.preventDefault();

  if (currentPaymentMode === "Credit Card" || currentPaymentMode === "Debit Card") {
    const cardNumber = document.getElementById("card-number").value.trim();
    const cardExpiry = document.getElementById("card-expiry").value.trim();
    const cardCvv = document.getElementById("card-cvv").value.trim();

    if (!cardNumber.match(/^\d{16}$/)) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }
    if (!cardExpiry) {
      alert("Please enter the card expiry date.");
      return;
    }
    if (!cardCvv.match(/^\d{3}$/)) {
      alert("Please enter a valid 3-digit CVV.");
      return;
    }
  } else if (currentPaymentMode === "UPI") {
    const upiId = document.getElementById("upi-id").value.trim();
    if (!upiId) {
      alert("Please enter your UPI ID.");
      return;
    }
  } else if (currentPaymentMode === "Net Banking") {
    const bank = document.getElementById("bank-select").value;
    if (!bank) {
      alert("Please select a bank.");
      return;
    }
  }

  // Show pay button after successful validation
  document.getElementById("pay-button").style.display = "inline-block";
}

// Handle final payment confirmation
function pay() {
  document.getElementById("payment-details-form").style.display = "none";

  document.getElementById("course-title").textContent = "Enrollment Successful!";
  document.getElementById("popup-message").textContent = 
    `You have successfully enrolled in ${currentCourse} at Rs.${currentPrice} via ${currentPaymentMode}.`;

  document.getElementById("pay-button").style.display = "none";
  document.getElementById("close-button").style.display = "inline-block";
}

// Close popup and reset everything
function closePopup() {
  document.getElementById("enroll-popup").classList.add("hidden");

  scrollToSection('hero');

  document.getElementById("user-form").reset();
  document.getElementById("payment-mode-form").reset();
  document.getElementById("payment-details-form").reset();

  document.getElementById("user-form").style.display = "block";
  document.getElementById("payment-mode-form").style.display = "none";
  document.getElementById("payment-details-form").style.display = "none";

  document.getElementById("pay-button").style.display = "none";
  document.getElementById("close-button").style.display = "none";

  currentPaymentMode = null;
}

//login(tentative)

const loginForm = document.getElementById("login-form");
  const errorMsg = document.getElementById("login-error");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    // Check if email ends with @gmial.com (exactly)
    if (email.toLowerCase().endsWith("@gmail.com")) {
      // Accept any password
      alert("Login successful!");
      errorMsg.style.display = "none";
      closeLoginPopup();
    } else {
      errorMsg.textContent = "Email must end with @gmail.com";
      errorMsg.style.display = "block";
    }
  });

  function closeLoginPopup() {
    document.getElementById("login-popup").classList.add("hidden");
  }
