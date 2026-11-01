const { createApp } = Vue;

createApp({
    data() {
        return {
            upbjjList: initialUpbjjList,
            kategoriList: initialKategoriList,
            stokList: initialStokBahanAjar,
            filters: {
                upbjj: '',
                kategori: '',
                onlyReorder: false
            },
            sortBy: 'judul',
            notification: '',
            formBaru: {
                kode: '',
                judul: '',
                upbjj: '',
                kategori: '',
                qty: 10,
                safety: 5,
                harga: 50000,
                lokasiRak: 'Rak A-01'
            },
            editingItem: null
        }
    },
    computed: {
        // Computed Property untuk menyaring dan mengurutkan data stok tanpa recompute berlebih
        filteredStokList() {
            return this.stokList.filter(item => {
                // Filter berdasarkan UT-Daerah
                const matchUpbjj = !this.filters.upbjj || item.upbjj === this.filters.upbjj;
                
                // Filter berdasarkan Kategori
                const matchKategori = !this.filters.kategori || item.kategori === this.filters.kategori;
                
                // Filter Re-order (qty < safety ATAU qty === 0)
                const matchReorder = !this.filters.onlyReorder || (item.qty < item.safety || item.qty === 0);

                return matchUpbjj && matchKategori && matchReorder;
            }).sort((a, b) => {
                if (this.sortBy === 'judul') {
                    return a.judul.localeCompare(b.judul);
                } else if (this.sortBy === 'qty') {
                    return a.qty - b.qty;
                } else if (this.sortBy === 'harga') {
                    return a.harga - b.harga;
                }
                return 0;
            });
        }
    },
    watch: {
        // Watcher 1: Mereset filter kategori jika UT-Daerah diubah/dikosongkan (Dependent Option reset)
        'filters.upbjj'(newVal, oldVal) {
            if (!newVal) {
                this.filters.kategori = '';
            }
            this.notification = `Filter UT-Daerah diubah menjadi: ${newVal || 'Semua'}`;
        },
        // Watcher 2: Memantau jumlah total item stok untuk memberikan log notifikasi
        stokList: {
            handler(newVal) {
                console.log('Perubahan terjadi pada data stok bahan ajar.');
            },
            deep: true
        }
    },
    methods: {
        resetFilters() {
            this.filters.upbjj = '';
            this.filters.kategori = '';
            this.filters.onlyReorder = false;
            this.sortBy = 'judul';
        },
        tambahStok() {
            if (!this.formBaru.kode || !this.formBaru.judul) return;

            const newItem = {
                id: Date.now(),
                ...this.formBaru
            };

            this.stokList.push(newItem);
            this.notification = `Berhasil menambah bahan ajar: ${newItem.judul}`;
            
            // Reset Form
            this.formBaru = {
                kode: '',
                judul: '',
                upbjj: '',
                kategori: '',
                qty: 10,
                safety: 5,
                harga: 50000,
                lokasiRak: 'Rak A-01'
            };
        },
        editItem(item) {
            this.editingItem = JSON.parse(JSON.stringify(item));
        },
        simpanEdit() {
            const index = this.stokList.findIndex(i => i.id === this.editingItem.id);
            if (index !== -1) {
                this.stokList[index] = { ...this.editingItem };
                this.notification = `Data ${this.editingItem.judul} berhasil diperbarui.`;
            }
            this.editingItem = null;
        },
        hapusItem(id) {
            if (confirm('Apakah Anda yakin ingin menghapus data stok ini?')) {
                this.stokList = this.stokList.filter(i => i.id !== id);
                this.notification = 'Data stok berhasil dihapus.';
            }
        }
    }
}).mount('#app');