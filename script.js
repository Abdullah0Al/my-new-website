document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      let valid = true;
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
      }
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        valid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
      }
      if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
      }
      if (valid) {
        const successMsg = document.getElementById("successMsg");
        successMsg.style.display = "block";
        contactForm.reset();
      }
    });
  }

  const showMoreBtn = document.getElementById("showMoreProjects");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      const newArticle = document.createElement("article");
      newArticle.innerHTML = `
        <h2>New Dynamically-Added Project</h2>
        <time dateTime="2025-05">May 2025</time>
        <p>This project was inserted using JavaScript to demonstrate dynamic content creation.</p>
      `;
      const projectsContainer = document.getElementById("projectsContainer");
      projectsContainer.appendChild(newArticle);
      showMoreBtn.disabled = true;
      showMoreBtn.textContent = "All Projects Shown";
    });
  }

  const toggleSkillsBtn = document.getElementById("toggleSkills");
  if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener("click", function () {
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
