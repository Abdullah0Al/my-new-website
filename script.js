/*******************************************
  1. Contact Form Validation
********************************************/
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // always prevent real submission in this demo

      // references
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      // error spans
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      // reset old errors
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      let valid = true;

      // Name check
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
      }

      // Email check
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        valid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
      }

      // Message check
      if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
      }

      // If everything is valid, show success
      if (valid) {
        alert("Your message was successfully sent!");
        // optionally clear the form
        contactForm.reset();
      }
    });
  }
});



  /*******************************************
    2. "Show More Projects" Dynamic Content
  ********************************************/
  const showMoreBtn = document.getElementById("showMoreProjects");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      // Create a new project "article" (or section)
      const newArticle = document.createElement("article");

      // Insert some HTML for your additional project:
      // (You could generate a figure, time, paragraphs, etc.)
      newArticle.innerHTML = `
        <h2>New Dynamically-Added Project</h2>
        <time dateTime="2025-05">May 2025</time>
        <p>This project was inserted using JavaScript to demonstrate dynamic content creation.</p>
      `;

      // Append it to an existing container
      const projectsContainer = document.getElementById("projectsContainer");
      projectsContainer.appendChild(newArticle);

      // Optionally hide or disable the button after adding
      showMoreBtn.disabled = true;
      showMoreBtn.textContent = "All Projects Shown";
    });
  }


  /*******************************************
    3. CV Page: "Toggle Skills"
  ********************************************/
  const toggleSkillsBtn = document.getElementById("toggleSkills");
  if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener("click", function () {
      // The Skills section might have an ID of "skillsSection"
      const skillsSection = document.getElementById("skillsSection");
      if (skillsSection) {
        if (skillsSection.style.display === "none") {
          skillsSection.style.display = "block";
          toggleSkillsBtn.textContent = "Hide Skills";
        } else {
          skillsSection.style.display = "none";
          toggleSkillsBtn.textContent = "Show Skills";
        }
      }
    });
  }


  /*******************************************
    4. Homepage Greeting Based on Time
  ********************************************/
  const greetingSpan = document.getElementById("greeting");
  if (greetingSpan) {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = "Hello!";

    if (hour < 12) {
      greetingText = "Good morning!";
    } else if (hour < 18) {
      greetingText = "Good afternoon!";
    } else {
      greetingText = "Good evening!";
    }
    greetingSpan.textContent = greetingText;
  }
});
