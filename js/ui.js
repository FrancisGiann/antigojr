export function initPreloader() {
  window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    if (!preloader) return;

    setTimeout(() => {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }, 800);
  });
}

export function initCustomCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  if (!cursor || !cursorFollower) return;

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    cursor.style.display = "none";
    cursorFollower.style.display = "none";
    return;
  }

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    requestAnimationFrame(() => {
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    });
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(0.6)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
  });
}

export function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const navOverlay = document.querySelector(".nav-overlay");
  if (!hamburger || !navContainer) return;

  function closeNav() {
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    navContainer.classList.remove("show");
    navOverlay?.classList.remove("show");
    document.body.classList.remove("nav-open");
  }

  function openNav() {
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    navContainer.classList.add("show");
    navOverlay?.classList.add("show");
    document.body.classList.add("nav-open");
  }

  hamburger.addEventListener("click", () => {
    if (navContainer.classList.contains("show")) {
      closeNav();
    } else {
      openNav();
    }
  });

  navOverlay?.addEventListener("click", closeNav);

  navContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

export function initHeaderScroll() {
  const header = document.querySelector("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

export function initScrollReveal() {
  function reveal() {
    document.querySelectorAll(".reveal").forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 120;

      if (elementTop < windowHeight - elementVisible && !el.classList.contains("active")) {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        setTimeout(() => el.classList.add("active"), delay * 1000);
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();
}

export function initActiveNavLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  });
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });
}

export function initBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle("visible", window.scrollY > 400);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
