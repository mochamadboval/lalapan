# Lalapan

Aplikasi web tentang komposisi gizi pada lalapan.

## Tech-stack

- Next.js pages
- Tailwind CSS
- Redux Toolkit

## Mengapa masih Next.js pages?

Tidak perlu _request_ data kembali melalui _client_ membuat Next.js pages masih sangat relevan untuk proyek ini.

## Hal yang bisa dioptimisasi?

- Kolom tabel yang tampil dinamis (setelah kolom **Nama**) berdasarkan pilihan formnya.

  CSS tampaknya masih belum mampu untuk menyusun kolom tabel berdasarkan situasi seperti ini, sehingga susunan _property_ di tiap _object_ **overview.json** perlu diubah. Ketika menyusun _property_ pada _object_ juga sepertinya tidak dimungkinkan, maka saya coba mengubah _object_ beserta _property_ di dalamnya menjadi _array_ menggunakan `Object.entries` sehingga data dapat tampil berdasarkan indeksnya. Namun, _property_ seperti `"id"`, `"nama"`, dan `"bdd"` yang tidak terpengaruh susunan dinamis seharusnya bisa tetap ditulis `"key": "value"`, sehingga pada **Table.js** (misal) data `"id"` tetap dapat ditulis `info.id` alih-alih `info[0][1]` agar meningkatkan keterbacaan kodenya.

- Tiap _object_ di **full.json** dapat dipisah ke dalam berkas JSON tersendiri.

  Saya pikir ini akan dapat menghemat _bandwidth_ karena hanya melakukan _request_ sesuai data yang diperlukan (kecuali penggunaan _module_ `fs` dan `path` tidak mengonsumsi _bandwidth_ di _server_).
