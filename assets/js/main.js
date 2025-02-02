/**
* Template Name: Shirifm
* Template URL: https://bootstrapmade.com/Shirifm-bootstrap-business-website-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


// <!-- Main JS File -->

    // document.addEventListener('DOMContentLoaded', function() {
    //   const services = {
    //     'web-design': {
    //       image: 'assets/img/web-design.jpg',
    //       title: 'Web Design Portfolio Details',
    //       content: 'Content for Web Design service. This can include detailed descriptions, examples, and client testimonials.'
    //     },
    //     'software-development': {
    //       image: 'assets/img/software-development.jpg',
    //       title: 'Software Development Portfolio Details',
    //       content: 'Content for Software Development service. This can include detailed descriptions, examples, and client testimonials.'
    //     },
    //     'product-management': {
    //       image: 'assets/img/product-management.jpg',
    //       title: 'Product Management Portfolio Details',
    //       content: 'Content for Product Management service. This can include detailed descriptions, examples, and client testimonials.'
    //     },
    //     'graphic-design': {
    //       image: 'assets/img/graphic-design.jpg',
    //       title: 'Graphic Design Portfolio Details',
    //       content: 'Content for Graphic Design service. This can include detailed descriptions, examples, and client testimonials.'
    //     },
    //     'marketing': {
    //       image: 'assets/img/marketing.jpg',
    //       title: 'Marketing Portfolio Details',
    //       content: 'Content for Marketing service. This can include detailed descriptions, examples, and client testimonials.'
    //     }
    //   };

    //   const serviceLinks = document.querySelectorAll('.service-link');
    //   const serviceImage = document.getElementById('service-image');
    //   const portfolioTitle = document.getElementById('portfolio-title');
    //   const   = document.getElementById('portfolio-content');

    //   serviceLinks.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //       event.preventDefault();
    //       const service = link.getAttribute('data-service');
    //       const serviceData = services[service];

    //       serviceLinks.forEach(link => link.classList.remove('active'));
    //       link.classList.add('active');

    //       serviceImage.src = serviceData.image;
    //       portfolioTitle.textContent = serviceData.title;
    //       portfolioContent.textContent = serviceData.content;
    //     });
    //   });
    // });

    document.addEventListener('DOMContentLoaded', function() {
      const services = {
        'housekeeping': {
          image: 'assets/img/housekeeping.jpg',
          title: 'This is an example of portfolio details',
          content: `Do you dream of a clean home but lack the time or energy to make it happen? Let Sparkle & Shine Cleaning Service take
                the burden off your shoulders. We offer a variety of cleaning services to suit your needs and budget, allowing you to
                relax and enjoy the things that matter most. Our experienced and insured cleaners are dedicated to providing exceptional
                service and leaving your home sparkling clean.`
        },
        'software-development': {
          image: 'assets/img/security.jpg',
          title: 'Software Development Portfolio Details',
          content: 'Content for Software Development service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'plumber': {
          image: 'assets/img/plumber.jpg',
          title: 'Software Development Portfolio Details',
          content: 'Content for Software Development service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'technician': {
          image: 'assets/img/technician.jpg',
          title: 'Software Development Portfolio Details',
          content: 'Content for Software Development service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'product-management': {
          image: 'assets/img/pestcontrol.jpeg',
          title: 'Product Management Portfolio Details',
          content: 'Content for Product Management service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'graphic-design': {
          image: 'assets/img/gardener.jpg',
          title: 'Graphic Design Portfolio Details',
          content: 'Content for Graphic Design service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'STP & WTP': {
          image: 'assets/img/ETP.jpg',
          title: 'Graphic Design Portfolio Details',
          content: 'Content for Graphic Design service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'Construction': {
          image: 'assets/img/Construction.jpg',
          title: 'Graphic Design Portfolio Details',
          content: 'Content for Graphic Design service. This can include detailed descriptions, examples, and client testimonials.'
        },
        'marketing': {
          image: 'assets/img/maid.jpeg',
          title: 'Marketing Portfolio Details',
          content: 'Content for Marketing service. This can include detailed descriptions, examples, and client testimonials.'
        }
      };
    
      const serviceLinks = document.querySelectorAll('.services-list a');
      const serviceImage = document.querySelector('.services-img');
      const portfolioTitle = document.querySelector('.portfolio-description h2');
      const portfolioContent = document.querySelector('.portfolio-description p');
    
      serviceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const service = link.getAttribute('data-service');
          const serviceData = services[service];
    
          serviceLinks.forEach(link => link.classList.remove('active'));
          link.classList.add('active');
    
          serviceImage.src = serviceData.image;
          portfolioTitle.textContent = serviceData.title;
          portfolioContent.textContent = serviceData.content;
        });
      });
    });
    