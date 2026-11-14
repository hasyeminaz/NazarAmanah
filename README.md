# NA Wedding — Frontend

Frontend undangan digital Nazar & Amanah. Dibuat dengan HTML, CSS, dan JavaScript vanilla agar ringan dan bisa di-host di GitHub Pages.

## File
- `index.html` — struktur halaman
- `style.css` — desain editorial ivory dan responsive layout
- `script.js` — animasi buku, navigasi mobile, musik opsional, dan galeri
- `assets/music/` — tempat file musik opsional

## Jalankan lokal
Buka `index.html` langsung di browser, atau gunakan Live Server di VS Code.

## Upload ke GitHub Pages
1. Upload seluruh isi folder ini ke repository `NazarAmanah`.
2. Pastikan `index.html`, `style.css`, dan `script.js` berada di root repository.
3. Buka repository → Settings → Pages.
4. Pada Build and deployment, pilih `Deploy from a branch`.
5. Pilih branch `main`, folder `/ (root)`, lalu Save.
6. Tunggu proses deployment selesai, lalu buka URL GitHub Pages.

## Bagian yang masih placeholder
Cari dan ganti teks berikut di `index.html`:
- `[Nama Ayah]`, `[Nama Ibu]`
- `[Nama tempat / gedung]`
- `[Alamat lengkap lokasi akad]`
- `[Alamat lengkap lokasi resepsi]`
- Jam akad dan resepsi bila sudah final.

Foto saat ini memakai foto contoh dari Unsplash. Ganti URL `images.unsplash.com` dengan foto Nazar & Amanah ketika foto final sudah siap.

## Musik
Letakkan file MP3 milik sendiri di `assets/music/background.mp3`. Musik baru akan berjalan setelah pengunjung menekan tombol MUSIC karena browser membatasi autoplay.
