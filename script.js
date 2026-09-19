/* ============================================
   Sakthi Dental Clinic – Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ----- Mobile Navigation -----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ----- Navbar scroll effect -----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ----- FAQ Accordion -----
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all others
        faqItems.forEach(other => {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq-answer');
          const otherBtn = other.querySelector('.faq-question');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ----- Contact Form Validation -----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameGroup = document.getElementById('nameGroup');
      const emailGroup = document.getElementById('emailGroup');
      const phoneGroup = document.getElementById('phoneGroup');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const successMsg = document.getElementById('formSuccess');

      let isValid = true;

      // Reset errors
      [nameGroup, emailGroup, phoneGroup].forEach(g => g && g.classList.remove('error'));

      // Name
      if (!nameInput.value.trim()) {
        nameGroup.classList.add('error');
        isValid = false;
      }

      // Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailGroup.classList.add('error');
        isValid = false;
      }

      // Phone
      if (!phoneInput.value.trim()) {
        phoneGroup.classList.add('error');
        isValid = false;
      }

      if (isValid) {
        // Simulate successful submission (frontend only)
        form.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => {
            successMsg.style.display = 'none';
          }, 5000);
        }
      }
    });
  }
});
