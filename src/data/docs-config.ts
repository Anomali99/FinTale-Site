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
      { title: "Instalasi & Setup", url: "/docs/installation" },
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
      { title: "Level & Misi Harian", url: "/docs/gamification/level" },
      { title: "Sistem Gelar", url: "/docs/gamification/title" },
      { title: "Quest & Raid Boss", url: "/docs/gamification/quest" },
      { title: "Skill Tree", url: "/docs/gamification/skill" },
    ],
  },
  data: {
    title: "Keamanan & Data",
    bab: [
      { title: "PIN & Biometrik", url: "/docs/security" },
      { title: "Backup & Restore", url: "/docs/security/backup" },
    ],
  },
};
