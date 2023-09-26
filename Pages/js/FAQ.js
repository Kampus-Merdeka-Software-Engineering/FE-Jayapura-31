
const faqItems = document.querySelectorAll('.faq');

faqItems.forEach((faq) => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});





