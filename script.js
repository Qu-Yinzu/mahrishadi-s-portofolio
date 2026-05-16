// variabel toggle sidebar
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

// variabel navigasi halaman
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

// variabel untuk penyaringan (filtering) portofolio
const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

// toggle sidebar di mobile
menuToggler.addEventListener('click', function(){
  sideBar.classList.toggle('active');
});


// FUNGSI NAVIGASI HALAMAN (SUDAH DIPERBAIKI)
navItemLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah lonjakan instan page dari default href '#'

    // Mengambil target class dari href (contoh: '#about' menjadi 'about')
    const targetPageClass = this.getAttribute('href').replace('#', '');

    // 1. Atur aktif/non-aktif pada halaman (pages)
    pages.forEach(page => {
      if (page.classList.contains(targetPageClass)) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    // 2. Atur aktif/non-aktif pada tombol menu navigasi
    navItemLinks.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');

    // Tutup sidebar otomatis di mobile setelah klik menu
    sideBar.classList.remove('active');
  });
});


// FUNGSI FILTER PORTOFOLIO
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function(){

    // hapus semua class aktif dari tombol filter
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove('active');
    }
    // tambah class aktif pada tombol yang diklik
    this.classList.add('active');

    // tampilkan item berdasarkan tombol filter yang diklik
    for (let k = 0; k < itemCategory.length; k++) {
      const itemCategoryText = itemCategory[k].textContent;
      
      // Jika teks tombol adalah "Semua" atau "All", tampilkan semua
      if (this.textContent === 'Semua' || this.textContent === 'All') {
        itemCategory[k].parentElement.classList.add('active');
      } else if (this.textContent === itemCategoryText) {
        itemCategory[k].parentElement.classList.add('active');
      } else {
        itemCategory[k].parentElement.classList.remove('active');
      }
    }
  });
}