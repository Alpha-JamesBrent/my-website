document.querySelectorAll(".toggle").forEach(button => {
  button.addEventListener("click", () => {
    const hiddenContent = button.nextElementSibling;
    hiddenContent.style.display = hiddenContent.style.display === "block" ? "none" : "block";
    button.textContent = hiddenContent.style.display === "block" ? "Show Less" : "Read More";
  });
});
