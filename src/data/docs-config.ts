import { DocsConfig, Section } from "./types";

const start: Section = {
  title: "Memulai",
  bab: [
    { title: "Pengenalan", url: "/docs" },
    { title: "Instalasi & Setup", url: "/docs/installation" },
  ],
};

const finance: Section = {
  title: "Panduan Keuangan",
  bab: [
    { title: "Dasbor & Alokasi Tertunda", url: "/docs/finance/dashboard" },
    { title: "Profil & Target Finansial", url: "/docs/finance/profile" },
    { title: "Dompet & Saldo", url: "/docs/finance/wallet" },
    { title: "Pemasukan & Pengeluaran", url: "/docs/finance/flow" },
    {
      title: "Tagihan & Hutang",
      url: "/docs/finance/bills",
      subbab: [
        { title: "Quest Tagihan", url: "/docs/finance/bills/bill" },
        { title: "Raid Boss (Hutang)", url: "/docs/finance/bills/debt" },
        { title: "Papan Buronan (Piutang)", url: "/docs/finance/bills/credit" },
      ],
    },
    {
      title: "Manajemen Investasi",
      url: "/docs/finance/investment",
      subbab: [
        {
          title: "Beli & Jual Aset",
          url: "/docs/finance/investment/transaction",
        },
        { title: "Klaim Dividen", url: "/docs/finance/investment/dividend" },
      ],
    },
    { title: "Histori & Analitik", url: "/docs/finance/analytics" },
  ],
};

const gamification: Section = {
  title: "Sistem Gamifikasi",
  bab: [
    { title: "Level & Misi Harian", url: "/docs/gamification/level" },
    { title: "Sistem Gelar", url: "/docs/gamification/title" },
    { title: "Quest & Raid Boss", url: "/docs/gamification/quest" },
    { title: "Skill Tree", url: "/docs/gamification/skill" },
  ],
};

const settings: Section = {
  title: "Pengaturan & Keamanan",
  bab: [
    { title: "Notifikasi", url: "/docs/settings/noyification" },
    { title: "PIN & Biometrik", url: "/docs/settings/security" },
    { title: "Backup & Restore", url: "/docs/settings/backup" },
  ],
};

export const docsConfig: DocsConfig = {
  start: start,
  finance: finance,
  gamification: gamification,
  settings: settings,
};
