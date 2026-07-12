document.addEventListener("DOMContentLoaded", function() {
  console.log("Resume website loaded successfully!");

  // Example: Highlight job cards when hovered
  const jobs = document.querySelectorAll(".job");
  jobs.forEach(job => {
    job.addEventListener("mouseenter", () => {
      job.style.backgroundColor = "#eaf2f8";
    });
    job.addEventListener("mouseleave", () => {
      job.style.backgroundColor = "#fff";
    });
  });

  // Example: Smooth scroll for navigation (if you add a nav bar later)
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
