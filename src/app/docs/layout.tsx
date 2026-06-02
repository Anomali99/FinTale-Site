"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideBarMenu from "@/components/side-bar-menu";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-ft-background flex min-h-screen flex-col text-white">
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

      <div className="mx-auto flex w-full max-w-7xl flex-1 pt-20">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-60 flex md:hidden">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <aside className="bg-ft-surface border-ft-surface-variant animate-in slide-in-from-left relative h-full w-64 max-w-[80%] overflow-y-auto border-r p-6 duration-300">
              <div className="border-ft-surface-variant mb-8 flex items-center justify-between border-b pb-4">
                <span className="text-ft-primary text-lg font-bold">
                  Menu Docs
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-ft-text-secondary bg-ft-surface-variant/50 flex h-8 w-8 items-center justify-center rounded-lg font-bold hover:text-white"
                >
                  ✕
                </button>
              </div>
              <SideBarMenu onItemClick={() => setIsMobileMenuOpen(false)} />
            </aside>
          </div>
        )}

        <aside className="border-ft-surface-variant sticky top-20 hidden h-[calc(100vh-80px)] w-64 overflow-y-auto border-r p-6 md:block">
          <SideBarMenu />
        </aside>

        <main className="flex min-h-[calc(100vh-80px)] flex-1 flex-col overflow-x-hidden p-6 md:max-w-4xl md:p-12">
          <div className="flex-1">{children}</div>

          <div className="mt-16 w-full">
            <Footer className="bg-transparent px-0" />
          </div>
        </main>
      </div>
    </div>
  );
}
