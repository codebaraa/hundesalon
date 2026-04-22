import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  // 1. Modal handling (Házirend)
  const modal = document.getElementById('rules-modal');
  const openBtn = document.getElementById("open-rules-btn");
  const closeBtn = document.getElementById('close-rules-btn');

  // Wichtig: Prüfen, ob die Elemente existieren (da sie im Impressum/ÁSZF fehlen)
  if (openBtn && modal) { 
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (modal) { 
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  } 
        
  // 2. Update footer year
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} Feines Fell`;
  }

  // 3. Cookie Banner Logik
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");
  const openCookieBtn = document.getElementById("open-cookie-settings");

  // Sicherstellen, dass der Banner auf der aktuellen Seite existiert
  if (banner && acceptBtn && rejectBtn) {
    if (!localStorage.getItem("cookieConsent")) {
        setTimeout(() => {
            banner.classList.remove("translate-y-full");
        }, 1000);
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "all");
        hideBanner();
    });

    rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "essential");
        hideBanner();
    });

    function hideBanner() {
        banner.classList.add("translate-y-full");
    }

    if (openCookieBtn) {
      openCookieBtn.addEventListener("click", () => {
        banner.classList.remove("translate-y-full");
      });
    }
  }
})