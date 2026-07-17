/*--------------------- Copyright (c) 2026 -----------------------
[Master Javascript Template Architecture]
Project: Resume Portfolio Framework
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var Resume = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }

      /*-------------- Resume Functional Operations Calling ------------------*/
      this.tyipng();
      this.bottom_top();
      this.loader();
      this.toggle_menu();
      this.copy_right();
      this.port_tab();
      this.counter();
    },

    // Modern Monospaced Typist Simulation Logic
    tyipng: function () {
      if (document.querySelector(".cv_profile_name")) {
        window.ityped.init(document.querySelector(".cv_profile_name"), {
          strings: [
            "S. M. Mahfujur Rahman.",
            "Full-Stack Web Dev!",
            "Laravel Developer!",
            "Freelancer!",
            "MERN Developer!",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 100,
          showCursor: false,
        });
      }
    },

    // Dynamic Navigation Header Pinning & Top Relocation Setup
    bottom_top: function () {
      if ($("#button").length > 0) {
        var btn = $("#button");
        var fixed = $(".vld_header_wrapper");
        $(window).scroll(function () {
          if ($(window).scrollTop() > 50) {
            btn.addClass("show");
            fixed.addClass("fixed");
          } else {
            btn.removeClass("show");
            fixed.removeClass("fixed");
          }
        });
        btn.on("click", function (e) {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "50");
        });
      }
    },

    // Complete Window Loading Transitions
    loader: function () {
      jQuery(window).on("load", function () {
        $(".loader").fadeOut();
        $(".spinner").delay(500).fadeOut("slow");
      });
    },

    // Navigation Drawer State Control
    toggle_menu: function () {
      $(".cv_toggle_btn, .cv_menu_close").off("click").on("click", function () {
        $("body").toggleClass("menu-open");
      });
    },

    // Safe Dynamic TimeStamp Context Injection
    copy_right: function () {
      var yearTarget = document.getElementById("copyYear");
      if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
      }
    },

    // Tab Interface Grid Navigation Mechanics
    port_tab: function () {
      $(".cv_port_tab li a").off("click").on("click", function () {
        var target = $(this).attr("data-rel");
        $(".cv_port_tab li a").removeClass("active");
        $(this).addClass("active");
        $("#" + target)
          .fadeIn("slow")
          .siblings(".cv_tab_pane")
          .hide();
        return false;
      });
    },

    // Counter Triggers
    counter: function () {
      if ($.fn.appear && $.fn.countTo) {
        $(".timer").appear(function () {
          $(this).countTo();
        });
      }
    },
  };

  // Launch Engine Object Model
  $(document).ready(function () {
    Resume.init();
  });
})(jQuery);

/*-------------------------------------------------------------------
[Custom Tracking Integrations & Workspace Services Extensions]
-------------------------------------------------------------------*/

// Unified Viewport Active Element Tracker
$(document).ready(function () {
  $("html, body").scrollTop(0);

  $(document).on("scroll", function () {
    var scrollPosition = $(document).scrollTop();
    var offset = 120; 

    var sections = [
      "#home",
      "#about",
      "#exprience",
      "#portfolio",
      "#strength",
      "#education",
      "#contactMe",
    ];

    var activeSection = null;

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionElement = $(section);

      if (sectionElement.length > 0) {
        var sectionTop = sectionElement.offset().top;
        var sectionBottom = sectionTop + sectionElement.outerHeight();

        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionBottom - offset) {
          activeSection = section;
          break;
        }
      }
    }

    if (activeSection) {
      $(".cv_menus li a").removeClass("active");
      $('.cv_menus li a[href="' + activeSection + '"]').addClass("active");
    }
  });

  $(document).trigger("scroll");
});

// Structural Communication API Workspace (Direct Mail Preprocessor)
document.addEventListener("DOMContentLoaded", function () {
  var emailBtn = document.getElementById("emailLink");
  if (emailBtn) {
    emailBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var email = "mahfujur.dev@gmail.com";
      var subject = "Get in Touch with Me";
      var body = `Hi S. M. Mahfujur Rahman,\n\nI hope this message finds you well.\n\nI have a few questions and need some assistance with a project I'm working on. Your expertise would be incredibly valuable, and I would greatly appreciate it if you could reach out to me at your earliest convenience.\n\nLooking forward to hearing from you soon. Thank you in advance for your time and help.\n\nThank you,\n\n[Your Name]\n[Your Contact Information]`;
      
      var gmailUrl =
        "https://mail.google.com/mail/?view=cm&to=" +
        encodeURIComponent(email) +
        "&su=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      window.open(gmailUrl, "_blank");
    });
  }
});