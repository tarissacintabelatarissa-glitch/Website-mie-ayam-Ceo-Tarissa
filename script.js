function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        // Scroll otomatis ke atas setiap ganti halaman
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Tambahan: Efek saat tombol "Lihat Peta" diklik
document.querySelector('.btn-map').addEventListener('click', function() {
    alert('Membuka Google Maps... (Simulasi)');
});