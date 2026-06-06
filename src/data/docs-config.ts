interface SubBab {
  title: string;
  url: string;
}

interface Bab extends SubBab {
  subbab?: Array<SubBab>;
}

interface Section {
  title: string;
  bab: Array<Bab>;
}

type DocsConfig = Record<string, Section>;

export const docsConfig: DocsConfig = {
  start: {
    title: "Memulai",
    bab: [
      { title: "Pengenalan", url: "/docs" },
      { title: "Instalasi & Setup", url: "/docs/instalasi" },
    ],
  },
  core: {
    title: "Panduan Keuangan",
    bab: [
      { title: "Dompet & Saldo", url: "/docs/dompet" },
      { title: "Pemasukan & Pengeluaran", url: "/docs/arus-kas" },
      { title: "Tagihan & Hutang", url: "/docs/tagihan-hutang" },
      {
        title: "Manajemen Investasi",
        url: "/docs/investasi",
        subbab: [
          { title: "Beli & Jual Aset", url: "/docs/investasi/transaksi" },
          { title: "Klaim Dividen", url: "/docs/investasi/dividen" },
        ],
      },
    ],
  },
  rpg: {
    title: "Sistem Gamifikasi",
    bab: [
      { title: "Level & XP", url: "/docs/level-xp" },
      { title: "Sistem Gelar (Title)", url: "/docs/title" },
      { title: "Misi & Quest", url: "/docs/misi" },
      { title: "Smart Allocation (Skill)", url: "/docs/alokasi" },
    ],
  },
  data: {
    title: "Keamanan & Data",
    bab: [
      { title: "PIN & Biometrik", url: "/docs/keamanan" },
      { title: "Backup & Restore", url: "/docs/backup" },
    ],
  },
};
