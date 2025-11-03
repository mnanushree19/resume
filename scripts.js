// Smooth scrolling and simple form validation using jQuery

$(document).ready(function() {
  // Smooth scroll
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate({ scrollTop: $(hash).offset().top }, 600);
    }
  });

  // Form validation
  $("#contactForm").on("submit", function(e) {
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const subject = $("#subject").val().trim();
    const message = $("#message").val().trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      alert("Message sent successfully!");
      this.reset();
    }
  });
});