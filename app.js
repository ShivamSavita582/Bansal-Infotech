/**
 * BANSAL INFOTECH - MODERN INTERACTIVE LOGIC (2026 EDITION)
 * Features: Typewriter effect, Interactive Orbit, Methodology Stepper,
 * Tech Tabs, Testimonial Slider, Animated Counters, Modal Dialog, Toast.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Dynamic Typing Effect for Hero Subtitle ---
  const dynamicTextEl = document.getElementById('ChangeText');
  if (dynamicTextEl) {
    const textPhrases = [
      'Mobile Applications',
      'Modern Web Platforms',
      'AI & Machine Learning',
      'Cloud & DevOps Pipelines',
      'Enterprise Custom Software'
    ];
    let phraseIndex = 0;

    setInterval(() => {
      dynamicTextEl.style.opacity = '0';
      dynamicTextEl.style.transform = 'translateY(-4px)';
      
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % textPhrases.length;
        dynamicTextEl.textContent = textPhrases[phraseIndex];
        dynamicTextEl.style.opacity = '1';
        dynamicTextEl.style.transform = 'translateY(0)';
      }, 300);
    }, 2800);
  }

  // --- 2. Interactive Tech Orbit System ---
  const orbitNodes = document.querySelectorAll('.orbit-node');
  const orbitSystem = document.getElementById('orbitSystem');
  let activeOrbitIndex = 0;
  let orbitInterval = null;
  let isOrbitHovered = false;

  function cycleOrbitNode() {
    if (isOrbitHovered || orbitNodes.length === 0) return;
    orbitNodes.forEach(node => node.classList.remove('active'));
    orbitNodes[activeOrbitIndex].classList.add('active');
    activeOrbitIndex = (activeOrbitIndex + 1) % orbitNodes.length;
  }

  if (orbitNodes.length > 0) {
    orbitInterval = setInterval(cycleOrbitNode, 1400);

    orbitSystem.addEventListener('mouseenter', () => {
      isOrbitHovered = true;
    });

    orbitSystem.addEventListener('mouseleave', () => {
      isOrbitHovered = false;
    });

    orbitNodes.forEach((node, idx) => {
      node.addEventListener('mouseenter', () => {
        orbitNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        activeOrbitIndex = idx;
      });
    });
  }

  // --- 3. Strategic Methodology Stepper ---
  const methodCards = document.querySelectorAll('#methodCardsNav .method-card');
  const spotlightIcon = document.getElementById('spotlightIcon');
  const spotlightTitle = document.getElementById('spotlightTitle');
  const spotlightDesc = document.getElementById('spotlightDesc');
  const spotlightTags = document.getElementById('spotlightTags');
  const spotlightNum = document.getElementById('spotlightNum');

  const methodologyData = [
    {
      num: '01',
      icon: 'fa-magnifying-glass',
      title: 'Strategic Discovery & Architectural Planning',
      desc: 'We initiate with a goal-oriented deep dive into your business objectives, analyzing user personas, technical dependencies, and market feasibility. Together, we architect a comprehensive project roadmap with clear milestones for measurable ROI.',
      tags: ['Feasibility Study', 'Architecture Blueprint', 'KPI Definition', 'Sprint Milestones']
    },
    {
      num: '02',
      icon: 'fa-pen-ruler',
      title: 'Bespoke UI/UX Design & Rapid Prototyping',
      desc: 'Our design specialists craft user-centric wireframes, modern design systems, and interactive clickable prototypes in Figma. We validate interface workflows with real user testing before writing a single line of production code.',
      tags: ['Design Systems', 'Figma Clickable Prototypes', 'User Journey Mapping', 'A/B Validation']
    },
    {
      num: '03',
      icon: 'fa-code',
      title: 'Agile Full-Stack Engineering & Development',
      desc: 'We develop clean, modular, and maintainable software using test-driven development (TDD). Bi-weekly sprints, continuous integration, and transparent weekly client demo sessions keep you in complete control of project momentum.',
      tags: ['Clean Architecture', 'Bi-Weekly Sprints', 'Test-Driven Code', 'Live Weekly Demos']
    },
    {
      num: '04',
      icon: 'fa-vial-circle-check',
      title: 'Rigorous Quality Assurance & Security Audits',
      desc: 'Continuous automated and manual testing is baked into our pipeline. We perform load testing, device matrix validation, end-to-end regression, and strict vulnerability penetration scans to guarantee flawless execution.',
      tags: ['Automated End-to-End', 'Penetration Testing', 'Cross-Device Matrix', 'OWASP Top 10']
    },
    {
      num: '05',
      icon: 'fa-rocket',
      title: 'Continuous Delivery, Cloud Launch & Evolution',
      desc: 'We streamline the production launch through automated CI/CD pipelines, Kubernetes container orchestration, and zero-downtime rolling deployments. Our ongoing technical SLA support ensures sustained performance and scale.',
      tags: ['Zero-Downtime Rollouts', 'Kubernetes Orchestration', '24/7 SLA Monitoring', 'Post-Launch Tuning']
    }
  ];

  if (methodCards.length > 0) {
    methodCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        methodCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const data = methodologyData[index];
        if (data) {
          // Smooth fade transition
          const spotlightEl = document.getElementById('methodSpotlight');
          spotlightEl.style.opacity = '0.7';

          setTimeout(() => {
            spotlightIcon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
            spotlightTitle.textContent = data.title;
            spotlightDesc.textContent = data.desc;
            spotlightNum.textContent = data.num;

            spotlightTags.innerHTML = data.tags
              .map(tag => `<span class="spotlight-tag">${tag}</span>`)
              .join('');

            spotlightEl.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // --- 4. Technologies Tab Switcher ---
  const techTabs = document.querySelectorAll('.tech-tab-btn');
  const techPanels = document.querySelectorAll('.tech-tab-panel');

  techTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = `tab-${tab.getAttribute('data-tab')}`;

      techTabs.forEach(t => t.classList.remove('active'));
      techPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // --- 5. Voices That Inspire Us (Testimonials Carousel) ---
  const testimonials = document.querySelectorAll('.testimonial-card-item');
  const dots = document.querySelectorAll('#sliderDots .dot');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentTestimonialIndex = 0;
  let testimonialInterval = null;

  function setTestimonialSlide(index) {
    currentTestimonialIndex = (index + testimonials.length) % testimonials.length;

    testimonials.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    testimonials[currentTestimonialIndex].classList.add('active');
    if (dots[currentTestimonialIndex]) {
      dots[currentTestimonialIndex].classList.add('active');
    }
  }

  if (testimonials.length > 0) {
    prevBtn.addEventListener('click', () => {
      setTestimonialSlide(currentTestimonialIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      setTestimonialSlide(currentTestimonialIndex + 1);
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        setTestimonialSlide(idx);
      });
    });

    // Auto Play with Pause on Hover
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    const startSliderAuto = () => {
      testimonialInterval = setInterval(() => {
        setTestimonialSlide(currentTestimonialIndex + 1);
      }, 5500);
    };

    const stopSliderAuto = () => {
      clearInterval(testimonialInterval);
    };

    startSliderAuto();
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopSliderAuto);
      sliderContainer.addEventListener('mouseleave', startSliderAuto);
    }
  }

  // --- 6. Animated Metrics Counter on Scroll ---
  const counterElements = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function runCounters() {
    counterElements.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1600; // ms
      const steps = 40;
      const stepTime = duration / steps;
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        if (isDecimal) {
          counter.textContent = current.toFixed(1) + '★';
        } else {
          counter.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
        }
      }, stepTime);
    });
  }

  const statsSection = document.getElementById('why-us');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            runCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(statsSection);
  }

  // --- 7. "Get a Quote" Modal & Form Handling ---
  const quoteModal = document.getElementById('quoteModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalButtons = document.querySelectorAll('.open-quote-modal');
  const quoteForm = document.getElementById('quoteForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function openModal() {
    quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    quoteModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close when clicking outside modal box
  if (quoteModal) {
    quoteModal.addEventListener('click', e => {
      if (e.target === quoteModal) {
        closeModal();
      }
    });
  }

  // Close with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && quoteModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Form Submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();

      const nameVal = document.getElementById('clientName').value.trim();
      const serviceVal = document.getElementById('projectService').value;

      // Loading state on button
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeModal();
        quoteForm.reset();

        // Show Toast Notice
        toastMessage.innerHTML = `<strong>Thank you, ${nameVal}!</strong> Your inquiry regarding <em>${serviceVal}</em> has been received. Our solutions architect will connect with you within 24 hours.`;
        toastNotice.classList.add('show');

        setTimeout(() => {
          toastNotice.classList.remove('show');
        }, 5000);
      }, 900);
    });
  }

  // --- 8. Mobile Navigation Drawer ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('open');
      mobileMenuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // --- 9. Sticky Header & Active Nav on Scroll ---
  const mainHeader = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header Background Scroll State
    if (scrollPos > 60) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active Section Link Highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Back to top action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
