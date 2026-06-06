"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/data/docs-config";

interface SideBarMenuProps {
  onItemClick?: () => void;
}

const SideBarMenu: FC<SideBarMenuProps> = ({ onItemClick }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {Object.entries(docsConfig).map(([key, section]) => (
        <div key={key} className="mb-6 flex flex-col gap-3">
          <h4 className="text-ft-text-secondary mb-1 text-xs font-bold tracking-wider uppercase">
            {section.title}
          </h4>

          {section.bab.map((bab, index) => {
            const isActive = pathname === bab.url;

            return (
              <div key={index} className="flex flex-col gap-2">
                <Link
                  href={bab.url}
                  onClick={onItemClick}
                  className={`transition ${
                    isActive
                      ? "text-ft-primary font-bold"
                      : "text-ft-text-secondary hover:text-white"
                  }`}
                >
                  {bab.title}
                </Link>

                {bab.subbab && bab.subbab.length > 0 && (
                  <div className="mt-1 ml-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                    {bab.subbab.map((sub, subIndex) => {
                      const isSubActive = pathname === sub.url;

                      return (
                        <Link
                          key={subIndex}
                          href={sub.url}
                          onClick={onItemClick}
                          className={`text-sm transition ${
                            isSubActive
                              ? "text-ft-primary font-bold"
                              : "text-ft-text-secondary hover:text-white"
                          }`}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );
};

export default SideBarMenu;
