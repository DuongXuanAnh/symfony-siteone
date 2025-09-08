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
