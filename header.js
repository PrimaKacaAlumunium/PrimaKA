/**
 * js/header.js
 * ------------------------------------------------------------------
 * SATU-SATUNYA sumber untuk navbar di seluruh halaman.
 *
 * Cara edit: ubah HTML di dalam backtick (`...`) di bawah ini, simpan,
 * lalu refresh browser. Otomatis berubah di SEMUA halaman.
 *
 * File ini dimuat lewat tag <script src="js/header.js">, BUKAN
 * fetch() — supaya tetap jalan di server apa pun dan bahkan saat file
 * dibuka langsung (double-click), sama seperti script.js/logo.jpg.
 * ------------------------------------------------------------------
 */
window.__HEADER_HTML__ = `
<header id="site-header">
  <nav class="wrap">
    <div class="nav-logo">
      <a href="index.html"><img src="logo.jpg" alt="Prima Kaca & Alumunium"></a>
    </div>
    <div class="nav-links" id="nav-links">
      <a href="index.html#layanan">Layanan</a>
      <a href="tentang.html">Tentang</a>
      <a href="faq.html">FAQ</a>
      <a href="index.html#lokasi">Lokasi</a>
      <a href="index.html#kontak">Kontak</a>
    </div>
    <a href="https://wa.me/6282311114682?text=Halo%20Prima%20Kaca%20%26%20Alumunium%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda." class="btn btn-primary btn-sm cut-sm" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
    <button id="nav-toggle" class="nav-toggle" aria-label="Buka menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>
`;
