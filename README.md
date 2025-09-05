## Example Usage

### 1. Clone repository
```bash
git clone https://github.com/ryanachmad12/waweb.js-example
cd waweb.js-example
````

### 2. Install Node.js & NPM

Pastikan Node.js dan NPM sudah terinstal. Jika belum, install terlebih dahulu.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

Tunggu sekitar **1-2 menit** hingga muncul **QR Code** untuk discan.

### 5. Test dengan cURL

Setelah QR berhasil discan:

```bash
curl -X POST http://localhost:3000/send-text \
     -H "Content-Type: application/json" \
     -d '{"to":"6281111111111","message":"halo ini test dari curl"}'
```

* Ganti `localhost` dengan **IP server** jika berjalan di server.
* Ganti `to` dengan nomor tujuan (format internasional, contoh: `628xxx`).

---

### Note

* Pastikan **Chromium** sudah terinstal di server/PC Anda.

```
Mau sekalian aku bikinin **prerequisites** section di atas (kayak Node.js, Chromium, cURL), biar lebih jelas buat user sebelum ke step instalasi?
```
