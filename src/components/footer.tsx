"use client";

import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`border-ft-surface-variant text-ft-text-secondary bg-ft-background flex w-full flex-row items-center justify-between gap-4 border-t pt-8 pb-6 text-sm ${className}`}
    >
      <span>© {new Date().getFullYear()} Anomali99</span>
      <Link
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="decoration-ft-surface-variant underline underline-offset-4 transition hover:text-white"
      >
        Lisensi CC BY-NC 4.0
      </Link>
    </footer>
  );
};

export default Footer;
