import { emailConfig } from "./config.js";
import { initContactForm } from "./contact.js";
import { initProductModal } from "./modal.js";
import { renderProductCards } from "./products.js";
import {
  initActiveNavLinks,
  initBackToTop,
  initCustomCursor,
  initHeaderScroll,
  initMobileNav,
  initPreloader,
  initScrollReveal,
  initSmoothScroll,
} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init(emailConfig.publicKey);

  renderProductCards(document.getElementById("featured-products"));

  initPreloader();
  initCustomCursor();
  initMobileNav();
  initHeaderScroll();
  initScrollReveal();
  initActiveNavLinks();
  initSmoothScroll();
  initBackToTop();
  initProductModal();
  initContactForm();

  // Re-run reveal after products are injected
  window.dispatchEvent(new Event("scroll"));
});
