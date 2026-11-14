const intro = document.getElementById("bookIntro");
const bookStage = document.getElementById("bookStage");
const openBookButton = document.getElementById("openBookButton");
const invitation = document.getElementById("invitation");
const book = document.getElementById("book");

let bookHasOpened = false;

function openInvitation() {
  if (bookHasOpened) return;
  bookHasOpened = true;
  intro.classList.add("is-opening", "book-opened");

  // Allow the book-cover animation to complete before revealing the invitation.
  window.setTimeout(() => {
    intro.classList.add("is-leaving");
    invitation.classList.remove("is-hidden");
    document.body.classList.remove("locked");
    window.setTimeout(() => {
      intro.remove();
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }, 900);
  }, 1500);
}

openBookButton.addEventListener("click", openInvitation);
bookStage.addEventListener("click", openInvitation);
document.body.classList.add("locked");

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Optional background music. Add your own file at assets/music/background.mp3.
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add("playing");
      musicToggle.querySelector(".music-label").textContent = "MUSIC ON";
      musicToggle.setAttribute("aria-label", "Jeda musik");
    } catch (error) {
      musicToggle.querySelector(".music-label").textContent = "ADD MUSIC";
    }
  } else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicToggle.querySelector(".music-label").textContent = "MUSIC OFF";
    musicToggle.setAttribute("aria-label", "Putar musik");
  }
});

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightbox.classList.add("visible");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

// Fade-in sections as they enter the viewport.
const revealTargets = document.querySelectorAll(".section-heading, .person-card, .story-copy, .event-card, .gallery-item, .closing > *");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(element => {
    element.classList.add("reveal-ready");
    observer.observe(element);
  });
}
