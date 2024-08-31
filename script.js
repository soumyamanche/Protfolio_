function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to generate a unique identifier (UUID)
function generateUUID() {
  // This function returns a string formatted as a UUID.
  // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' is a template for the UUID structure.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // For each 'x' or 'y' character in the template:
    const r = (Math.random() * 16) | 0, // Generate a random number between 0 and 15 (hexadecimal range).
      v = c == "x" ? r : (r & 0x3) | 0x8; // If 'x', use the random number directly. If 'y', modify the random number so that the first hex digit is either 8, 9, A, or B.
    return v.toString(16); // Convert the number to a hexadecimal string (base 16).
  });
}

// Function to generate a unique identifier (UUID)
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Function to generate a unique identifier (UUID)
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if the visitor has a UUID
  let visitorUUID = localStorage.getItem("visitorUUID");

  // Determine if the visitor is unique or returning
  let isReturningVisitor = false;

  if (visitorUUID) {
    console.log("Returning visitor with UUID:", visitorUUID);
    isReturningVisitor = true;
  } else {
    // If no UUID, assign a new one and mark as a unique visitor
    visitorUUID = generateUUID();
    localStorage.setItem("visitorUUID", visitorUUID);
    console.log("New visitor, assigned UUID:", visitorUUID);
  }

  // Handle form submission
  // Function to generate a unique identifier (UUID)
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
)


// Function to validate the form fields
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const email = document.getElementById('email').value.trim();
  const organization = document.getElementById('organization').value.trim();

  let isValid = true;

  // Clear previous error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('mobileError').textContent = '';
  document.getElementById('emailError').textContent = '';

  // Validate Name
  if (!name) {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
  }

  // Validate Mobile Number (must be 10 digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobile.match(mobilePattern)) {
      document.getElementById('mobileError').textContent = 'Enter a valid 10-digit mobile number';
      isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
      document.getElementById('emailError').textContent = 'Enter a valid email address';
      isValid = false;
  }

  return isValid;
}

//local storage logic finding unqiue visitor

document.addEventListener('DOMContentLoaded', function() {
  // Check if the visitor has a UUID
  let visitorUUID = localStorage.getItem('visitorUUID');

  // Determine if the visitor is unique or returning
  let isReturningVisitor = false;

  if (visitorUUID) {
      console.log("Returning visitor with UUID:", visitorUUID);
      isReturningVisitor = true;
  } else {
      // If no UUID, assign a new one and mark as a unique visitor
      visitorUUID = generateUUID();
      localStorage.setItem('visitorUUID', visitorUUID);
      console.log("New visitor, assigned UUID:", visitorUUID);
  }

  // Handle form submission 
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Validate the form
      if (!validateForm()) {
          alert('Please correct the errors in the form.');
          return;
      }

      // Capture form data
      const name = document.getElementById('name').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const email = document.getElementById('email').value.trim();
      const organization = document.getElementById('organization').value.trim();

      // Store the data in Local Storage with the visitor's UUID
      const visitorData = { name, mobile, email, organization, visitorUUID };
      localStorage.setItem('visitorData_' + visitorUUID, JSON.stringify(visitorData));

      // Display a message based on visitor status
      if (isReturningVisitor) {
          alert('Welcome back! Your details have been updated.');
      } else {
          alert('Thank you! You are a unique visitor, and your details have been captured.');
      }

      // Optionally clear the form after submission
      document.getElementById('contactForm').reset();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('play-button').addEventListener('click', function() {
      //const videoContainer = document.getElementById('video-container');

      // Remove the button after clicking
      this.remove();

  const videoContainer = document.getElementById('video-container');

// Create the video element
    const video = document.createElement('video');
    
    video.style.borderRadius = '15px'; 
    video.style.backgroundColor = 'black';

// Set video attributes
    video.src = 'assets/screen-capture.webm';
    video.controls = true;
    video.width = '320';
    video.height = '240';

// Append the video element to the container
  videoContainer.appendChild(video);
    });
});


//bounce effect
window.addEventListener('load', function() {
  const button = document.getElementById('myButton');
  if (button) {
    button.classList.add('bounce');
  }
});

