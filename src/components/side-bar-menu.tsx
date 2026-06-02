"use client";

import { FC } from "react";
import Link from "next/link";

interface SideBarMenuProps {
  onItemClick?: () => void;
}

const SideBarMenu: FC<SideBarMenuProps> = ({ onItemClick }) => {
  return (
    <nav className="flex flex-col gap-3">
      <h4 className="text-ft-text-secondary mt-2 mb-1 text-xs font-bold tracking-wider uppercase">
        Memulai
      </h4>
      <Link
        href="/docs"
        onClick={onItemClick}
        className="text-ft-primary font-medium hover:underline"
      >
        Pengenalan
      </Link>
      <Link
        href="/docs/instalasi"
        onClick={onItemClick}
        className="text-ft-text-secondary transition hover:text-white"
      >
        Instalasi & Setup
      </Link>

      <h4 className="text-ft-text-secondary mt-6 mb-1 text-xs font-bold tracking-wider uppercase">
        Panduan Fitur
      </h4>
      <Link
        href="/docs/rpg-mode"
        onClick={onItemClick}
        className="text-ft-text-secondary transition hover:text-white"
      >
        Sistem Level & XP
      </Link>
      <Link
        href="/docs/alokasi"
        onClick={onItemClick}
        className="text-ft-text-secondary transition hover:text-white"
      >
        Smart Allocation
      </Link>
      <Link
        href="/docs/investasi"
        onClick={onItemClick}
        className="text-ft-text-secondary transition hover:text-white"
      >
        Manajemen Investasi
      </Link>
    </nav>
  );
};

export default SideBarMenu;
