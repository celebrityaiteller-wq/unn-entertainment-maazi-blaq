const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", mainNav.classList.contains("open") ? "true" : "false");
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mainNav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("joinBtn")?.addEventListener("click", () => {
  document.getElementById("community").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => document.getElementById("email")?.focus(), 500);
});

document.getElementById("waitlistForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");
  if (!email) return;
  // Demo only: no email is stored or sent until a backend is connected.
  message.textContent = "Thanks for your interest! The waitlist form is a demo until the app backend is connected.";
  event.target.reset();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
