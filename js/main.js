/**
 * Vinduraj Health Trade - Coming Soon Page Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const enquiryBtn = document.getElementById('enquiryBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const enquiryForm = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const productCategorySelect = document.getElementById('productCategory');
  const categoryCards = document.querySelectorAll('.category-card');
  const desktopMainRibbon = document.getElementById('desktopMainRibbon');

  // =========================================================================
  // Modal Handling
  // =========================================================================
  function openModal(defaultCategory = null) {
    if (defaultCategory && productCategorySelect) {
      for (let option of productCategorySelect.options) {
        if (option.value === defaultCategory) {
          productCategorySelect.value = defaultCategory;
          break;
        }
      }
    }
    modalBackdrop.removeAttribute('hidden');
    // Trigger reflow to enable CSS transition
    void modalBackdrop.offsetWidth;
    modalBackdrop.classList.add('is-open');
    if (enquiryBtn) {
      enquiryBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';

    // Focus first input
    const firstInput = modalBackdrop.querySelector('input:not([disabled])');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    if (enquiryBtn) {
      enquiryBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
    setTimeout(() => {
      modalBackdrop.setAttribute('hidden', '');
      // Reset form view
      if (enquiryForm && formSuccess) {
        enquiryForm.style.display = 'flex';
        formSuccess.style.display = 'none';
      }
    }, 280);
  }

  if (enquiryBtn) {
    enquiryBtn.addEventListener('click', () => openModal());
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', closeModal);
  }

  // Click outside modal window to close
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Keyboard Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Clicking category cards opens enquiry with that product selected
  categoryCards.forEach(card => {
    const categoryName = card.getAttribute('data-category');
    card.addEventListener('click', () => {
      openModal(categoryName);
    });
    // Keyboard access (Enter or Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(categoryName);
      }
    });
  });

  // =========================================================================
  // Form Submission
  // =========================================================================
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(enquiryForm);
      const data = Object.fromEntries(formData.entries());

      // Save to localStorage for demo persistence
      try {
        const existing = JSON.parse(localStorage.getItem('vht_enquiries') || '[]');
        existing.push({ ...data, submittedAt: new Date().toISOString() });
        localStorage.setItem('vht_enquiries', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Show success view
      enquiryForm.style.display = 'none';
      formSuccess.style.display = 'block';
      enquiryForm.reset();
    });
  }

  // =========================================================================
  // Interactive Parallax for Animated Red Lines (Desktop only)
  // =========================================================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && desktopMainRibbon && window.innerWidth > 900) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      // Normalize mouse (-1 to 1)
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    function animateParallax() {
      // Smooth interpolation (lerp)
      currentX += (mouseX * 12 - currentX) * 0.05;
      currentY += (mouseY * 8 - currentY) * 0.05;

      desktopMainRibbon.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      requestAnimationFrame(animateParallax);
    }

    requestAnimationFrame(animateParallax);
  }
});

