/**
 * Profile Data - MTs. Manba'ul Huda
 * Sumber: VISI MISI.pdf
 * Edit array di bawah untuk memperbarui konten Visi, Misi, Tujuan, Counts,
 * Prestasi Siswa, dan Ekstrakurikuler pada halaman profile.html
 */
(function () {
  "use strict";

  var profileData = {
    visi: "Terwujudnya lulusan yang ahli dzikir, ahli ikhtiar, berkarakter, cakap, terampil dalam syariat Islam, serta berakhlakul karimah",

    misi: [
      "Menyelenggarakan pendidikan yang menanamkan nilai keimanan dan ketakwaan melalui pembiasaan dzikir dan ibadah.",
      "Mengintegrasikan nilai-nilai syariat Islam dalam seluruh proses pembelajaran dan kegiatan madrasah.",
      "Meningkatkan mutu pembelajaran untuk mencapai prestasi akademik dan nonakademik yang optimal.",
      "Mengembangkan karakter peserta didik yang berakhlakul karimah, disiplin, dan bertanggung jawab.",
      "Membekali peserta didik dengan kecakapan hidup (life skills) yang selaras dengan ajaran Islam.",
      "Mewujudkan lingkungan madrasah yang religius, kondusif, dan berbudaya Islami."
    ],

    tujuan: [
      {
        title: "Menghasilkan Lulusan yang Berakhlak Mulia dan Taat Beragama",
        items: [
          "Murid yang istiqamah dalam berdzikir, beribadah, dan mengamalkan ajaran Islam dalam kehidupan sehari-hari.",
          "Lulusan yang memiliki integritas dan tanggung jawab moral sebagai warga negara dan anggota masyarakat.",
          "Mengembangkan karakter jujur, amanah, peduli, dan santun sesuai dengan nilai-nilai Islam.",
          "Membekali Murid dengan pengetahuan dan keterampilan yang memadai dalam bidang keagamaan maupun umum.",
          "Mewujudkan lulusan yang cakap, terampil, percaya diri, serta mampu berkontribusi positif di masyarakat.",
          "Menanamkan akhlakul karimah sebagai landasan sikap, perilaku, dan interaksi sosial."
        ]
      },
      {
        title: "Meningkatkan Prestasi Akademik dan Non-Akademik",
        items: [
          "Lulusan dengan kemampuan akademik yang unggul dan mampu bersaing di tingkat lokal, regional, dan nasional.",
          "Lulusan yang memiliki keterampilan non-akademik seperti kepemimpinan, komunikasi, dan kolaborasi."
        ]
      },
      {
        title: "Mewujudkan Lingkungan Pendidikan yang Kondusif",
        items: [
          "Lingkungan madrasah yang aman, nyaman, dan mendukung proses belajar mengajar.",
          "Fasilitas pendidikan yang memadai dan sesuai dengan kebutuhan peserta didik."
        ]
      }
    ],

    counts: [
      { icon: "bx bx-happy", value: 449, label: "Peserta Didik" },
      { icon: "bx bxs-layer", value: 13, label: "Kelas" },
      { icon: "icofont-live-support", value: 20, label: "Guru" },
      { icon: "bx bxs-group", value: 5, label: "Tenaga Kependidikan" }
    ],

    // Daftar prestasi siswa. Field "name" dan "achievements" opsional.
    // Jika diisi, info akan tampil di bawah foto.
    prestasi: [
      { image: "assets/img/prestasi/1.jpg", name: "", achievements: [] },
      { image: "assets/img/prestasi/2.JPG", name: "", achievements: [] },
      { image: "assets/img/prestasi/3.jpg", name: "", achievements: [] },
      { image: "assets/img/prestasi/4.jpg", name: "", achievements: [] }
    ],

    ekstrakurikuler: [
      { name: "Tahfidzh Al-Qur'an", icon: "assets/img/quran.png" },
      { name: "Muhadloroh", icon: "assets/img/muslim.png" },
      { name: "Pramuka", icon: "assets/img/pramuka.png" },
      { name: "Sepakbola & Futsal", icon: "assets/img/futsal.png" },
      { name: "Bola Voly Putra", icon: "assets/img/beach-volleyball.png" },
      { name: "Bola Voly Putri", icon: "assets/img/beach-volleyball.png" },
      { name: "Seni Drama", icon: "assets/img/theatre.png" },
      { name: "Seni Tari", icon: "assets/img/traditional-dance.png" },
      { name: "Seni Hadroh", icon: "assets/img/tambourine.png" },
      { name: "Sepak Takraw", icon: "assets/img/sepak-takraw.png" },
      { name: "Atletik", icon: "assets/img/runner.png" },
      { name: "Elektro Dasar", icon: "assets/img/sensor.png" }
    ]
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderVisi() {
    var el = document.getElementById("visi-content");
    if (!el) return;
    el.textContent = '"' + profileData.visi + '"';
  }

  function renderMisi() {
    var el = document.getElementById("misi-content");
    if (!el) return;
    el.innerHTML = profileData.misi
      .map(function (item) {
        return '<li><i class="icofont-check"></i> ' + escapeHtml(item) + "</li>";
      })
      .join("");
  }

  function renderTujuan() {
    var el = document.getElementById("tujuan-content");
    if (!el) return;
    el.innerHTML = profileData.tujuan
      .map(function (group, idx) {
        var items = group.items
          .map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
          })
          .join("");
        return (
          '<div class="tujuan-group mb-3">' +
          "<p class=\"mb-1\"><strong>" + (idx + 1) + ". " + escapeHtml(group.title) + "</strong></p>" +
          "<ul>" + items + "</ul>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderCounts() {
    var el = document.getElementById("counts-content");
    if (!el) return;
    el.innerHTML = profileData.counts
      .map(function (item, idx) {
        var responsiveMargin = idx === 0 ? "" : (idx === 1 ? " mt-5 mt-md-0" : " mt-5 mt-lg-0");
        return (
          '<div class="col-lg-3 col-md-6' + responsiveMargin + '">' +
          '<div class="count-box">' +
          '<i class="' + escapeHtml(item.icon) + '"></i>' +
          '<span data-toggle="counter-up">' + Number(item.value) + "</span>" +
          "<p>" + escapeHtml(item.label) + "</p>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderPrestasi() {
    var el = document.getElementById("prestasi-content");
    if (!el) return;
    el.innerHTML = profileData.prestasi
      .map(function (item, idx) {
        var responsiveMargin = idx === 0 ? "" : " mt-5 mt-md-0";
        var delay = 50 + idx * 50;
        var info = "";
        if (item.name || (item.achievements && item.achievements.length)) {
          var spans = (item.achievements || [])
            .map(function (a) { return "<span>" + escapeHtml(a) + "</span>"; })
            .join("");
          info =
            '<div class="member-info">' +
            (item.name ? "<h4>" + escapeHtml(item.name) + "</h4>" : "") +
            spans +
            "</div>";
        }
        return (
          '<div class="col-lg-3 col-md-6' + responsiveMargin + '">' +
          '<div class="member" data-aos="zoom-in" data-aos-delay="' + delay + '">' +
          '<div class="pic"><img src="' + escapeHtml(item.image) + '" class="img-fluid" alt=""></div>' +
          info +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderEkstrakurikuler() {
    var el = document.getElementById("ekstrakurikuler-content");
    if (!el) return;
    el.innerHTML = profileData.ekstrakurikuler
      .map(function (item, idx) {
        var delay = 100 + (idx % 6) * 50;
        return (
          '<div class="col-lg-4 col-md-4 mt-4">' +
          '<div class="icon-box" data-aos="zoom-in" data-aos-delay="' + delay + '">' +
          '<i><img src="' + escapeHtml(item.icon) + '" height="30px" alt=""></i>' +
          '<h3><a href="">' + escapeHtml(item.name) + "</a></h3>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function init() {
    renderVisi();
    renderMisi();
    renderTujuan();
    renderCounts();
    renderPrestasi();
    renderEkstrakurikuler();
  }

  // Render segera agar elemen counter-up sudah ada saat main.js menjalankan counterUp()
  init();

  window.ProfileData = profileData;
})();
