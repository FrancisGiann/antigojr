import { emailConfig } from "./config.js";

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject =
      document.getElementById("subject").value.trim() ||
      "New message from AntiGoJr website";
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("formStatus");
    const submitBtn = form.querySelector('button[type="submit"]');

    formStatus.style.display = "block";
    formStatus.className = "form-status form-status--loading";
    formStatus.textContent = "Sending message...";
    submitBtn.disabled = true;

    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
        to_email: emailConfig.targetEmail,
        from_name: name,
        from_email: email,
        subject,
        message,
      });

      formStatus.className = "form-status form-status--success";
      formStatus.textContent =
        "Message sent successfully! We'll get back to you soon.";
      form.reset();

      setTimeout(() => {
        formStatus.style.display = "none";
      }, 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      formStatus.className = "form-status form-status--error";
      formStatus.textContent =
        "Failed to send message. Please try again or contact us directly.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
