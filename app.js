const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.setAttribute(
    "aria-expanded",
    mainNav.classList.contains("open") ? "true" : "false"
  );
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("joinBtn")?.addEventListener("click", () => {
  document.getElementById("community").scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => document.getElementById("email")?.focus(), 500);
});

// Supabase public project configuration
const SUPABASE_URL = "https://hlqvxeeofqysbnwoayli.supabase.co";
const SUPABASE_KEY = "sb_publishable_zE2WBnpDvOFRCiYHu-vFEg_p8xScy7E";

// Waitlist signup
document.getElementById("waitlistForm")?.addEventListener(
  "submit",
  async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const emailInput = document.getElementById("email");
    const message = document.getElementById("formMessage");
    const button = form.querySelector('button[type="submit"]');

    const email = emailInput.value.trim().toLowerCase();

    if (!email) return;

    message.textContent = "Adding you to the waitlist...";
    button.disabled = true;

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/waitlist`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            "Content-Type": "application/json",
            Prefer: "return=minimal"
          },
          body: JSON.stringify({ email })
        }
      );

      if (response.ok) {
        message.textContent =
          "Success! You're on the UNN Entertainment waitlist.";
        form.reset();
      } else if (response.status === 409) {
        message.textContent =
          "This email is already on our waitlist. Thank you!";
      } else {
        console.error("Waitlist error:", await response.text());
        message.textContent =
          "Signup failed. Please try again.";
      }
    } catch (error) {
      console.error("Connection error:", error);
      message.textContent =
        "Connection problem. Please check your internet and try again.";
    } finally {
      button.disabled = false;
    }
  }
);

// Register the website's service worker
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch(error => console.error("Service worker error:", error));
  });
}
