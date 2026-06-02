import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  appInfo: {
    name: "FinTale",
    version: "v1.0.0",
    releaseDate: "Juni 2026",
    allReleasesUrl: "https://github.com/Anomali99/fintale/releases",
    downloads: {
      android: {
        arm64:
          "https://github.com/Anomali99/fintale/releases/download/v1.0.0/fintale-arm64-v8a.apk",
        armeabi:
          "https://github.com/Anomali99/fintale/releases/download/v1.0.0/fintale-armeabi-v7a.apk",
        x86_64:
          "https://github.com/Anomali99/fintale/releases/download/v1.0.0/fintale-x86_64.apk",
        universal:
          "https://github.com/Anomali99/fintale/releases/download/v1.0.0/fintale-universal.apk",
      },
    },
  },
  howItWorks: [
    {
      step: "1",
      title: "Set Budget",
      desc: "Tentukan limit harian dan alokasi dana untuk biaya hidup, darurat, & investasi.",
    },
    {
      step: "2",
      title: "Selesaikan Quest",
      desc: "Catat pengeluaran dan bayar tagihan tepat waktu layaknya menyelesaikan misi.",
    },
    {
      step: "3",
      title: "Level Up!",
      desc: "Dapatkan XP, naik level, dan raih gelar dari Novice Saver hingga Financial Master.",
    },
  ],
  features: [
    {
      id: "rpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4" />
          <path d="M8 10v4" />
          <path d="M15 13h.01" />
          <path d="M18 11h.01" />
        </svg>
      ),
      title: "Gamifikasi Finansial (RPG Mode)",
      description:
        "Ubah aktivitas mencatat keuangan menjadi petualangan. Dapatkan Experience Points (XP), naik level, dan raih gelar (Title) dari Novice Saver hingga Financial Master dengan menyelesaikan misi keuangan rutin.",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "allocation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Smart Allocation & Skill Map",
      description:
        "Sistem alokasi dana dinamis (Biaya Hidup, Bayar Hutang, Dana Darurat, dan Investasi) yang persentase idealnya akan terbuka dan menyesuaikan seiring dengan naiknya level pengguna.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "penalty",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      title: "Manajemen Anggaran & Penalti",
      description:
        "Pantau Daily Limit (Batas Pengeluaran Harian) secara real-time. Kelebihan pengeluaran hari ini (offset) akan otomatis dicatat sebagai penalti yang memotong anggaran di hari berikutnya.",
      image:
        "https://images.unsplash.com/photo-1580519542036-ed47f73ce152?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "quest",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M9 16l2 2 4-4" />
        </svg>
      ),
      title: "Quest & Tagihan Rutin",
      description:
        "Catat tagihan bulanan atau cicilan Anda layaknya sebuah Quest. Sistem akan memberikan notifikasi pengingat secara otomatis ketika mendekati tenggat waktu (jatuh tempo) agar Anda tidak pernah terkena denda keterlambatan.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      title: "Analitik Visual (Donut Chart)",
      description:
        "Pantau arus kas Anda melalui grafik Donut Chart yang intuitif. Laporan pengeluaran umum (biaya hidup) dipisahkan secara cerdas dari alokasi investasi, memberikan Anda gambaran kekayaan dan kebiasaan belanja yang jauh lebih akurat.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "offline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "100% Offline-First (Privasi Mutlak)",
      description:
        "FinTale tidak menggunakan API pihak ketiga mana pun untuk melacak data bank atau pasar keuangan. Seluruh data keuangan disimpan secara lokal di dalam perangkat Anda menggunakan SQLite. Satu-satunya koneksi keluar adalah ke akun Google Drive pribadi Anda saat Anda menekan tombol Backup.",
      image:
        "https://images.unsplash.com/photo-1614064641913-a530a5011709?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "investment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Manajemen Investasi Mandiri",
      description:
        "Catat dan pantau portofolio investasi Anda (Risiko Rendah, Menengah, Tinggi) lengkap dengan fitur penarikan modal dan klaim dividen.",
      note: "Catatan Penting: Karena ketiadaan API pihak ketiga, pergerakan harga pasar tidak berjalan otomatis. Pengguna diharapkan memperbarui nilai (value) aset investasinya secara manual secara rutin (misalnya seminggu atau sebulan sekali) agar persentase profit/loss tetap akurat.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "cloud",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ft-primary h-10 w-10"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      title: "Manual Cloud Sync",
      description:
        "Cadangkan dan pulihkan data JSON Anda dengan aman langsung ke Google Drive pribadi Anda.",
      image:
        "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=800&auto=format&fit=crop",
    },
  ],
  faq: [
    {
      q: "Apakah FinTale benar-benar gratis dan tanpa iklan?",
      a: "Ya! FinTale adalah proyek Open Source. Kami berkomitmen untuk tidak memasang iklan atau melacak data pribadi Anda demi keuntungan.",
    },
    {
      q: "Apakah data keuangan saya aman?",
      a: "Sangat aman. FinTale menggunakan prinsip 100% Offline-First. Data Anda tidak pernah dikirim ke server kami, melainkan disimpan murni di memori (SQLite) HP Anda sendiri.",
    },
    {
      q: "Bagaimana jika HP saya hilang atau rusak?",
      a: "Anda bisa menggunakan fitur 'Manual Cloud Sync' di menu Pengaturan. Fitur ini akan mencadangkan (backup) data Anda langsung ke Google Drive pribadi Anda.",
    },
    {
      q: "Mengapa harga aset investasi tidak berubah secara otomatis?",
      a: "Demi menjaga privasi absolut, kami tidak menyambungkan aplikasi ini ke API perbankan pihak ketiga. Oleh karena itu, pergerakan harga pasar harus Anda perbarui secara manual (Update Value).",
    },
  ],
};
