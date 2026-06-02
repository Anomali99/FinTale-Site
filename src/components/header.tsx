"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="border-ft-surface-variant bg-ft-background/80 fixed top-0 z-50 flex w-full items-center justify-between border-b px-6 py-4 backdrop-blur-md md:px-16 lg:px-32 xl:px-48">
      <div className="text-ft-primary flex items-center gap-3 text-xl font-bold md:text-2xl">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="text-ft-text-secondary mr-1 transition hover:text-white md:hidden"
            aria-label="Buka Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        )}
        <Link href="/" className="flex flex-row items-center gap-3">
          <Image
            width={36}
            height={36}
            src="/icon.png"
            alt="FinTale Logo"
            className="h-8 w-8 rounded-xl shadow-md md:h-9 md:w-9"
          />
          {siteConfig.appInfo.name}
        </Link>
      </div>

      <nav className="flex items-center gap-4 md:gap-6">
        <Link
          href="/docs"
          className="text-ft-text-secondary flex flex-row gap-1 text-xs transition hover:text-white md:text-sm"
        >
          <span className="hidden md:block">Buku</span>
          Panduan
        </Link>
        <a
          href={siteConfig.appInfo.allReleasesUrl}
          className="border-ft-surface-variant hover:border-ft-primary text-ft-text-secondary hover:text-ft-primary flex flex-row gap-1 rounded-full border px-3 py-1.5 text-xs transition md:px-4 md:py-2 md:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden md:block">Riwayat</span>
          Rilis
        </a>
      </nav>
    </header>
  );
};

export default Header;
