/**
 * script.js — Prima Kaca & Alumunium
 * ----------------------------------------------------------------------
 * Semua interaksi halaman ada di sini. Header & footer dimuat dari
 * js/header.js dan js/footer.js (lihat injectIncludes di
 * bawah) — file-file itu dimuat lewat <script src="..."> di HTML,
 * BUKAN fetch(), supaya tidak tergantung konfigurasi server/CORS dan
 * tetap jalan walau file dibuka langsung (double-click).
 *
 * CARA EDIT NAVBAR / FOOTER (CUKUP 1 TEMPAT):
 *   - Navbar  -> edit file js/header.js
 *   - Footer  -> edit file js/footer.js
 *   Simpan, lalu refresh browser — otomatis berubah di SEMUA halaman.
 * ----------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", function () {
  injectIncludes();
  initMobileNav();
  initSmoothScrollClose();
  updateFooterYear();
  initFaqAccordion();
});

/**
 * injectIncludes
 * Menyisipkan HTML navbar & footer (yang sudah dimuat sebagai variabel
 * window.__HEADER_HTML__ / window.__FOOTER_HTML__ dari js/header.js
 * dan js/footer.js) ke dalam <div id="header-placeholder"> dan
 * <div id="footer-placeholder"> yang ada di tiap halaman.
 */
function injectIncludes() {
  var headerEl = document.getElementById("header-placeholder");
  if (headerEl && window.__HEADER_HTML__) {
    headerEl.innerHTML = window.__HEADER_HTML__;
  } else if (headerEl) {
    console.error("Header tidak termuat. Pastikan <script src=\"js/header.js\"> ada di halaman ini, sebelum script.js.");
  }

  var footerEl = document.getElementById("footer-placeholder");
  if (footerEl && window.__FOOTER_HTML__) {
    footerEl.innerHTML = window.__FOOTER_HTML__;
  } else if (footerEl) {
    console.error("Footer tidak termuat. Pastikan <script src=\"js/footer.js\"> ada di halaman ini, sebelum script.js.");
  }
}

/**
 * initMobileNav
 * Mengatur buka/tutup menu navigasi versi mobile (hamburger).
 * Saat tombol #nav-toggle diklik, class "is-open" ditambahkan/dihapus
 * pada #nav-links (tampilan dropdown-nya diatur lewat CSS).
 */
function initMobileNav() {
  var toggleBtn = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/**
 * initSmoothScrollClose
 * Menutup menu mobile secara otomatis setelah pengunjung memilih
 * salah satu link navigasi, supaya menu tidak menutupi konten
 * setelah berpindah section.
 */
function initSmoothScrollClose() {
  var navLinks = document.getElementById("nav-links");
  if (!navLinks) return;

  var links = navLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("is-open");
      var toggleBtn = document.getElementById("nav-toggle");
      if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * updateFooterYear
 * Mengganti tahun di teks copyright footer secara otomatis
 * mengikuti tahun saat halaman dibuka.
 */
function updateFooterYear() {
  var yearEl = document.getElementById("footer-year-text");
  if (!yearEl) return;

  var currentYear = new Date().getFullYear();
  yearEl.innerHTML = "&copy; " + currentYear + " Prima Kaca &amp; Alumunium. Seluruh hak cipta dilindungi.";
}

/**
 * initFaqAccordion
 * Dipakai khusus di halaman faq.html. Setiap klik pada .faq-question
 * akan membuka/menutup jawaban di bawahnya. Hanya satu pertanyaan
 * dibuka pada satu waktu. Aman dipanggil di halaman lain karena akan
 * langsung berhenti (return) jika tidak menemukan elemen .faq-item.
 */
function initFaqAccordion() {
  var faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", function () {
      var alreadyOpen = item.classList.contains("is-open");

      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove("is-open");
      });

      if (!alreadyOpen) {
        item.classList.add("is-open");
      }
    });
  });
}
