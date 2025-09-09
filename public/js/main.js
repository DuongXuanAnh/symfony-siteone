/**
 * JavaScript pro interaktivní komponenty
 * Implementujte funkčnost hamburger menu a accordion
 *
 * Implementujte:
 * 1. Hamburger menu toggle pro mobilní zobrazení (header komponenta)
 * 2. Accordion funkčnost pro FAQ (accordion komponenta)
 *    - Klik na otázku otevře/zavře odpověď
 *    - Pouze jedna odpověď otevřená najednou (nebo více podle designu)
 *    - Smooth animace při otevírání/zavírání
 *    - Příslušné ARIA atributy pro přístupnost
 */

// Implementace hamburger menu toggle pro mobilní zobrazení
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuItems = document.querySelector(".menu-items");

  if (hamburgerMenu && menuItems) {
    hamburgerMenu.addEventListener("click", function () {
      if (menuItems.classList.contains("menu-open")) {
        menuItems.classList.remove("menu-open");
      } else {
        menuItems.classList.add("menu-open");
      }
    });

    const menuItemLinks = document.querySelectorAll(".menu-item");
    menuItemLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuItems.classList.remove("menu-open");
      });
    });
  }
});

// Implementace accordion funkcionality
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".accordion-block__faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const faq = this.parentElement;
      const answer = faq.querySelector(".accordion-block__faq-answer");
      const chevron = faq.querySelector(".accordion-block__faq-chevron-down");

      // Close all other FAQs
      document.querySelectorAll(".accordion-block__faq").forEach((item) => {
        if (item !== faq) {
          item.classList.remove("active");
          item.querySelector(".accordion-block__faq-answer").style.maxHeight =
            "0";
          item.querySelector(
            ".accordion-block__faq-chevron-down"
          ).style.transform = "rotate(0deg)";
        }
      });

      // Toggle current FAQ
      if (faq.classList.contains("active")) {
        faq.classList.remove("active");
        answer.style.maxHeight = "0";
        chevron.style.transform = "rotate(0deg)";
      } else {
        faq.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + 100 + "px";
        chevron.style.transform = "rotate(180deg)";
      }
    });
  });
});

// Smooth scroll implementation for menu anchor links with 80px offset
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
