export const products = {
  "carabao-bench": {
    id: "carabao-bench",
    title: "Carabao Bench",
    period: "Circa 1870",
    price: "2,500₱",
    shortDescription:
      "This wooden bench has a unique curved backrest and strong armrests. The worn paint on the back gives it a classic vintage look. A perfect piece to add old-world charm to your space.",
    description:
      "This wooden bench traviesa has a unique curved backrest and strong armrests. The worn paint on the back gives it a classic vintage look. A perfect piece to add old-world charm to your space.",
    details: [
      { label: "Condition", value: "Good" },
      { label: "Origin", value: "Philippine" },
      { label: "Materials", value: "Hardwood, Traviesa" },
      { label: "Dimensions", value: "100cm x 50cm x 70cm" },
    ],
    mainImage: "images/product1_3.jpg",
    cardImage: "images/product1_3.jpg",
    thumbnails: [
      "images/product1.jpg",
      "images/product1_2.jpg",
      "images/product1_3.jpg",
    ],
  },
  "narra-chair": {
    id: "narra-chair",
    title: "Narra Chair",
    period: "Circa 1960",
    price: "10,000₱",
    shortDescription:
      "A set of matching wooden chairs with clean lines and a rustic finish. The chairs are simple but sturdy, great for a dining area or a cozy cafe setup.",
    description:
      "A set of matching wooden chairs with clean lines and a rustic finish. The chairs are simple but sturdy, great for a dining area or a cozy cafe setup.",
    details: [
      { label: "Condition", value: "Excellent" },
      { label: "Origin", value: "European" },
      { label: "Materials", value: "Narra" },
      { label: "Dimensions", value: "90cm x 45cm x 60cm" },
    ],
    mainImage: "images/product2.jpg",
    cardImage: "images/product2.jpg",
    thumbnails: [
      "images/product2.jpg",
      "images/product2_2.jpg",
      "images/product2_3.jpg",
    ],
  },
  "maulawin-table-set": {
    id: "maulawin-table-set",
    title: "Maulawin Table Set",
    period: "Circa 1740",
    price: "35,000₱",
    shortDescription:
      "This full set includes a wooden table and matching benches. The design is bold and solid, with thick planks and detailed joints. A great fit for traditional homes or garden setups.",
    description:
      "This full set includes a wooden table and matching benches. The design is bold and solid, with thick planks and detailed joints. A great fit for traditional homes or garden setups.",
    details: [
      { label: "Condition", value: "Fair" },
      { label: "Origin", value: "Asian" },
      { label: "Materials", value: "Traviesa" },
      { label: "Dimensions", value: "80cm x 40cm x 55cm" },
    ],
    mainImage: "images/product3.jpg",
    cardImage: "images/product3.jpg",
    thumbnails: [
      "images/product3_2.jpg",
      "images/product3_3.jpg",
      "images/product3.jpg",
    ],
  },
  "antique-door": {
    id: "antique-door",
    title: "Antique Door",
    period: "Circa 1925",
    price: "15,000₱",
    shortDescription:
      "A tall wooden door with natural wood grain and dark brown borders. Its classic design makes it ideal for old-style homes, restoration projects, or decorative use.",
    description:
      "A tall wooden door with natural wood grain and dark brown borders. Its classic design makes it ideal for old-style homes, restoration projects, or decorative use.",
    details: [
      { label: "Condition", value: "Very Good" },
      { label: "Origin", value: "American" },
      { label: "Materials", value: "Narra" },
      { label: "Dimensions", value: "110cm x 55cm x 75cm" },
    ],
    mainImage: "images/product4.jpg",
    cardImage: "images/product4.jpg",
    thumbnails: [
      "images/product4_2.jpg",
      "images/product4.jpg",
      "images/product4_2.jpg",
    ],
  },
};

export function renderProductCards(container) {
  if (!container) return;

  container.innerHTML = Object.values(products)
    .map(
      (product, index) => `
    <article class="product-card reveal fade-bottom" data-delay="${(index + 1) * 0.1}">
      <div class="product-img">
        <img src="${product.cardImage}" alt="${product.title}" loading="lazy">
        <div class="product-hover">
          <button class="quick-view" data-product="${product.id}" type="button">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-period">${product.period}</p>
        <p>${product.shortDescription}</p>
        <p class="product-price">${product.price}</p>
        <button class="btn view-details" data-product="${product.id}" type="button">View Details</button>
      </div>
    </article>`
    )
    .join("");
}
