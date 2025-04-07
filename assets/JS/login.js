document.addEventListener("DOMContentLoaded", function () {
    console.log("Script login.js berhasil dimuat!");

    const form = document.getElementById("loginForm");
    if (!form) {
        console.error("Form dengan ID 'loginForm' tidak ditemukan!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah refresh halaman
        console.log("Tombol login ditekan! Mengarahkan ke dashboard-admin.html");

        // Redirect ke halaman dashboard
        window.location.href = "dashboard-admin.html";
    });
});
