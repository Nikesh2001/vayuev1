// Initialize fullPage.js
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      anchors: ['home', 'about', 'services', 'contact'],
      navigationTooltips: ['Home', 'About', 'Services', 'Contact'],
      showActiveTooltip: true,
      scrollHorizontally: false,
      scrollingSpeed: 1200 // (default 700 hai, ise bada karne se dheere hoga)
    });

    // Initialize Swiper
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });