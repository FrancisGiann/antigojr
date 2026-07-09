import { products } from "./products.js";

export function initProductModal() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.querySelector(".close-modal");
  if (!modal) return;

  function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  }

  function openModal(productId) {
    const product = products[productId];
    if (!product) return;

    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalPeriod").textContent = product.period;
    document.getElementById("modalPrice").textContent = product.price;
    document.getElementById("modalDescription").textContent =
      product.description;

    const detailsList = document.getElementById("modalDetailsList");
    detailsList.innerHTML = product.details
      .map(
        (detail) =>
          `<li><span>${detail.label}:</span> ${detail.value}</li>`
      )
      .join("");

    const mainImage = document.getElementById("modalMainImage");
    mainImage.src = product.mainImage;
    mainImage.alt = product.title;

    const thumbnailsContainer = document.getElementById("modalThumbnails");
    thumbnailsContainer.innerHTML = product.thumbnails
      .map(
        (src, index) =>
          `<img src="${src}" alt="${product.title} view ${index + 1}" class="thumbnail${index === 0 ? " active" : ""}">`
      )
      .join("");

    thumbnailsContainer.querySelectorAll(".thumbnail").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
        thumbnailsContainer
          .querySelectorAll(".thumbnail")
          .forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });

    modal.style.display = "block";
    requestAnimationFrame(() => modal.classList.add("show"));
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".view-details, .quick-view");
    if (trigger) {
      e.preventDefault();
      openModal(trigger.getAttribute("data-product"));
    }
  });

  closeBtn?.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
}
