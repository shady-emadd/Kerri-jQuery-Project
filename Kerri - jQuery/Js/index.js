jQuery(function () {
  //! ############## Change navbar Background on Scroll
  $(window).on("scroll", () => {
    const aboutSectionTopOffset = $("#about").offset().top;
    if ($(window).scrollTop() > aboutSectionTopOffset - 50) {
      $(".navbar").addClass("nav-fixed");
      $(".scroll-to-top").fadeIn(200);
    } else {
      $(".navbar").removeClass("nav-fixed");
      $(".scroll-to-top").fadeOut(200);
    }
  });

  //* ############## Scroll to Top
  $(".scroll-to-top").on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  //& ############## scroll to specifc section
  $(".navbar-nav a").on("click", function () {
    const currentSectionSelector = $(this).attr("href");
    const currentSectionTopOffset = $(currentSectionSelector).offset().top;
    $("html, body").animate({ scrollTop: currentSectionTopOffset }, 1000);
  });

  //^ ############## Color Box
  const colorBoxWidth = $(".settings").outerWidth();
  $(".settings").css({ left: `-${colorBoxWidth}px` });
  let isOpen = false;

  $(".gear-icon").on("click", () => {
    const colorBoxWidth = $(".settings").outerWidth();
    if (isOpen) {
      // * close it
      $(".settings").css({ left: `-${colorBoxWidth}px` });
      $(".gear-icon i").removeClass("fa-xmark").addClass("fa-gear fa-spin");
      isOpen = false;
    } else {
      $(".settings").css({ left: `0px` });
      $(".gear-icon i").removeClass("fa-gear fa-spin").addClass("fa-xmark");
      isOpen = true;
    }
  });

  $(".colors li").on("click", function () {
    const currentColor = $(this).css("backgroundColor");
    $(":root").css({ "--main-color": currentColor });
    $("h1,h2,h3,h4,h5,h6").css({
      color: currentColor,
    });
  });

  //~ ############## Loading Screen
  $(".loading").fadeOut(1000, function () {
    $("body").css({ overflow: "auto" });
  });
});
