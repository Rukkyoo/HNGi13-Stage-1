document.addEventListener("DOMContentLoaded", function () {
  const timeEl = document.querySelector(".user-time");

  function updateTime() {
    if (!timeEl) return;
    const now = new Date();
    const timestamp = now.getTime();
    timeEl.textContent = timestamp;
  }

  updateTime();
  setInterval(updateTime, 1000);   
});

      const form = document.querySelector("form");
      const successMessage = document.getElementById("success");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        document.querySelectorAll("[data-testid^='test-contact-error']").forEach((el) => {
          el.textContent = "";
        });

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {
          document.querySelector("[data-testid='test-contact-error-name']").textContent =
            "Full name is required.";
          valid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
          document.querySelector("[data-testid='test-contact-error-email']").textContent =
            "Enter a valid email (name@example.com).";
          valid = false;
        }

        if (subject.value.trim() === "") {
          document.querySelector("[data-testid='test-contact-error-subject']").textContent =
            "Subject is required.";
          valid = false;
        }

        if (message.value.trim().length < 10) {
          document.querySelector("[data-testid='test-contact-error-message']").textContent =
            "Message must be at least 10 characters.";
          valid = false;
        }

        if (valid) {
          successMessage.style.display = "block";
          form.reset();
        } else {
          successMessage.style.display = "none";
        }
      });