function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("hidden");
  document.getElementById("main-content").classList.toggle("expanded");
}

// Cacher le menu quand on clique sur un lien
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("hidden");
    document.getElementById("main-content").classList.add("expanded");
  });
});
