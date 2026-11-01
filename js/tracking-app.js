const { createApp } = Vue;

createApp({
    data() {
        // Ambil tanggal hari ini format YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];

        return {
            paketList: initialPaketList,
            deliveryOrders: initialDeliveryOrders,
            selectedPaketKode: '',
            formDO: {
                nim: '',
                nama: '',
                ekspedisi: 'JNE Regular',
                tanggalKirim: today
            }
        }
    },
    computed: {
        // Multi-sequence Number Generator (DO + Tahun Berjalan + Sequence Number)
        generatedDoNumber() {
            const currentYear = new Date().getFullYear();
            const sequence = String(this.deliveryOrders.length + 1).padStart(3, '0');
            return `DO${currentYear}-${sequence}`;
        },
        // Detail objek paket yang dipilih
        selectedPaketDetail() {
            return this.paketList.find(p => p.kodePaket === this.selectedPaketKode) || null;
        },
        // Otomatisasi Total Harga Paket
        calculatedTotalHarga() {
            return this.selectedPaketDetail ? this.selectedPaketDetail.harga : 0;
        }
    },
    watch: {
        // Watcher 1: Mengamati pemilihan paket dan menampilkan log konsol
        selectedPaketKode(newVal) {
            if (newVal) {
                console.log(`Pengguna memilih paket pengiriman: ${newVal}`);
            }
        },
        // Watcher 2: Mengamati penambahan daftar Delivery Order
        deliveryOrders: {
            handler(newVal) {
                console.log(`Total data DO saat ini: ${newVal.length}`);
            },
            deep: true
        }
    },
    methods: {
        tambahDO() {
            if (!this.formDO.nim || !this.formDO.nama || !this.selectedPaketKode) {
                alert('Mohon lengkapi semua field!');
                return;
            }

            const newDO = {
                nomorDO: this.generatedDoNumber,
                nim: this.formDO.nim,
                nama: this.formDO.nama,
                ekspedisi: this.formDO.ekspedisi,
                kodePaket: this.selectedPaketKode,
                namaPaket: this.selectedPaketDetail.namaPaket,
                tanggalKirim: this.formDO.tanggalKirim,
                totalHarga: this.calculatedTotalHarga,
                status: 'Di-packing'
            };

            this.deliveryOrders.push(newDO);

            // Reset form
            this.formDO.nim = '';
            this.formDO.nama = '';
            this.selectedPaketKode = '';
        }
    }
}).mount('#app');