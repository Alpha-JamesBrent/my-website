function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content");
  sections.forEach(sec => sec.style.display = "none");

  // Show the selected section
  const selected = document.getElementById(sectionId);
  if (selected) {
    selected.style.display = "block";
  }
}

// Show Summary by default
document.addEventListener("DOMContentLoaded", () => {
  showSection("summary");
});
