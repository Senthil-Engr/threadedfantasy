// Smooth scroll from button
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const yearSpan = document.getElementById("year");
  const navToggle = document.getElementById("nav-toggle");
  const navLinksContainer = document.getElementById("nav-links");
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email-input");
  const formMessage = document.getElementById("form-message");

  // Set current year in footer
  yearSpan.textContent = new Date().getFullYear();

  // Mobile nav toggle
  navToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("show");
  });

  // Close mobile nav on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("show");
    });
  });

  // Highlight active nav link on scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 90;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });

    // Show / hide scroll-to-top button
    if (scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Scroll to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Simple newsletter form handler
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!email) return;

      // Just a front-end success message (no real backend)
      formMessage.textContent = "Thank you! We will notify you soon.";
      formMessage.style.color = "#1b7c2b";

      form.reset();

      setTimeout(() => {
        formMessage.textContent = "";
      }, 3000);
    });
  }
});
