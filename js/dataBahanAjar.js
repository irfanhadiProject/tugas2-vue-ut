// Dummy Data Bahan Ajar dan UT Daerah (UPBJJ)
const initialUpbjjList = [
    'UT Jakarta',
    'UT Bandung',
    'UT Surabaya',
    'UT Medan',
    'UT Makassar'
];

const initialKategoriList = [
    'FST (Sains & Teknologi)',
    'FE (Ekonomi)',
    'FHISIP (Hukum, Ilmu Sosial & Politik)',
    'FKIP (Keguruan & Ilmu Pendidikan)'
];

const initialStokBahanAjar = [
    {
        id: 1,
        kode: 'STSI4209',
        judul: 'Pemrograman Berbasis Web',
        kategori: 'FST (Sains & Teknologi)',
        upbjj: 'UT Jakarta',
        lokasiRak: 'Rak A-12',
        qty: 15,
        safety: 10,
        harga: 75000,
        catatan: 'Edisi 2024'
    },
    {
        id: 2,
        kode: 'MSIM4301',
        judul: 'Analisis & Perancangan Sistem',
        kategori: 'FST (Sains & Teknologi)',
        upbjj: 'UT Bandung',
        lokasiRak: 'Rak B-05',
        qty: 4,
        safety: 10,
        harga: 65000,
        catatan: 'Stok perlu re-order'
    },
    {
        id: 3,
        kode: 'EKMA4116',
        judul: 'Manajemen Keuangan',
        kategori: 'FE (Ekonomi)',
        upbjj: 'UT Surabaya',
        lokasiRak: 'Rak C-01',
        qty: 0,
        safety: 5,
        harga: 80000,
        catatan: 'Stok Kosong'
    },
    {
        id: 4,
        kode: 'HKUM4201',
        judul: 'Hukum Tatanegara',
        kategori: 'FHISIP (Hukum, Ilmu Sosial & Politik)',
        upbjj: 'UT Jakarta',
        lokasiRak: 'Rak D-02',
        qty: 25,
        safety: 10,
        harga: 90000,
        catatan: 'Revisi Terbaru'
    }
];

const initialPaketList = [
    {
        kodePaket: 'PAKET-FST-01',
        namaPaket: 'Paket Dasar Sistem Informasi',
        harga: 140000,
        detail: [
            { kode: 'STSI4209', judul: 'Pemrograman Berbasis Web' },
            { kode: 'MSIM4301', judul: 'Analisis & Perancangan Sistem' }
        ]
    },
    {
        kodePaket: 'PAKET-FE-01',
        namaPaket: 'Paket Dasar Manajemen',
        harga: 80000,
        detail: [
            { kode: 'EKMA4116', judul: 'Manajemen Keuangan' }
        ]
    }
];

const initialDeliveryOrders = [
    {
        nomorDO: 'DO2025-001',
        nim: '041234567',
        nama: 'Ahmad Dahlan',
        ekspedisi: 'JNE Express',
        upbjj: 'UT Jakarta',
        kodePaket: 'PAKET-FST-01',
        namaPaket: 'Paket Dasar Sistem Informasi',
        tanggalKirim: '2025-02-15',
        totalHarga: 140000,
        status: 'Dikirim'
    }
];