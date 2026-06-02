"use client";

import { useState, FC } from "react";
import { siteConfig } from "@/data/site-config";

interface DownloadButtonProps {
  upward?: boolean;
}

const DownloadButton: FC<DownloadButtonProps> = ({ upward = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { downloads, allReleasesUrl, version } = siteConfig.appInfo;

  const menuPositionClass = upward
    ? "absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
    : "absolute top-full mt-4 left-1/2 -translate-x-1/2";

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-ft-success flex items-center gap-3 rounded-full px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600"
      >
        <span>Download Aplikasi</span>
        <span className="rounded-md bg-black/20 px-2 py-1 text-sm">
          {version}
        </span>
      </button>

      {isOpen && (
        <div
          className={`${menuPositionClass} bg-ft-surface border-ft-surface-variant animate-in fade-in zoom-in z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl duration-200`}
        >
          <div className="bg-ft-surface-variant/50 border-ft-surface-variant text-ft-text-secondary border-b p-4 text-left text-sm">
            Pilih versi untuk perangkat Anda:
          </div>
          <div className="flex flex-col gap-1 p-2">
            {downloads.android && (
              <div className="mb-2">
                <div className="text-ft-primary flex justify-between px-3 py-2 text-xs font-bold tracking-wider uppercase">
                  <span>Android APK</span>
                </div>
                <a
                  href={downloads.android.arm64}
                  className="hover:bg-ft-surface-variant block rounded-xl px-4 py-3 text-left transition"
                >
                  <div className="font-semibold text-white">
                    arm64-v8a{" "}
                    <span className="bg-ft-primary ml-2 rounded px-1.5 py-0.5 text-xs text-black">
                      Disarankan
                    </span>
                  </div>
                  <div className="text-ft-text-secondary text-xs">
                    Untuk mayoritas HP modern (64-bit)
                  </div>
                </a>
                <a
                  href={downloads.android.armeabi}
                  className="hover:bg-ft-surface-variant block rounded-xl px-4 py-3 text-left transition"
                >
                  <div className="font-semibold text-white">armeabi-v7a</div>
                  <div className="text-ft-text-secondary text-xs">
                    Untuk HP lama atau spesifikasi rendah
                  </div>
                </a>
                <a
                  href={downloads.android.universal}
                  className="hover:bg-ft-surface-variant block rounded-xl px-4 py-3 text-left transition"
                >
                  <div className="font-semibold text-white">Universal APK</div>
                  <div className="text-ft-text-secondary text-xs">
                    Jika Anda ragu, pilih yang ini
                  </div>
                </a>
              </div>
            )}
            <div className="border-ft-surface-variant mt-1 border-t pt-1">
              <a
                href={allReleasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-ft-surface-variant text-ft-text-secondary block rounded-xl px-4 py-3 text-center text-sm transition hover:text-white"
              >
                Lihat Semua Versi & Riwayat Rilis ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default DownloadButton;
