// Navbar dropdown menu — Vanilla JavaScript, no libraries.
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;

  var toggle = dropdown.querySelector(".dropdown-toggle");

  function closeDropdown() {
    dropdown.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function toggleDropdown(e) {
    e.stopPropagation();
    var isOpen = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  toggle.addEventListener("click", toggleDropdown);

  // Close when clicking anywhere outside the dropdown
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeDropdown();
      toggle.focus();
    }
  });
});
