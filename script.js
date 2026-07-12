document.addEventListener("DOMContentLoaded", function() {
  console.log("Interactive resume site loaded!");

  // Smooth scrolling for nav links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Collapsible job sections
  const jobs = document.querySelectorAll(".job h3");
  jobs.forEach(job => {
    job.addEventListener("click", () => {
      const details = job.nextElementSibling;
      details.style.display = details.style.display === "none" ? "block" : "none";
    });
  });

  // Dark mode toggle
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
