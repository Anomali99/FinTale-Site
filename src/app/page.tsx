"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/site-config";
import DownloadButton from "@/components/download-button";
import PhoneMockup from "@/components/phone-mockup";
import Image from "next/image";
import { Features } from "@/data/types";
import FeatureSection from "@/components/feature-section";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          } else {
            entry.target.classList.remove("animate-show");
          }
        });
      },
      { threshold: 0.15 },
    );

    const hiddenElements = document.querySelectorAll(".animate-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-ft-background w-full overflow-x-hidden scroll-smooth text-white md:h-screen md:snap-y md:snap-mandatory md:overflow-y-auto">
      <Header />

      <section className="relative flex min-h-screen w-full items-center justify-center px-6 pt-24 pb-16 md:h-screen md:snap-start md:snap-always md:px-16 lg:px-32 xl:px-48">
        <div className="bg-ft-primary/10 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="animate-hidden z-10 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="bg-ft-surface border-ft-surface-variant text-ft-text-secondary mt-8 mb-6 inline-block rounded-full border px-4 py-1.5 text-sm md:mt-0">
              ✨ Versi Terbaru:{" "}
              <strong className="text-white">
                {siteConfig.appInfo.version}
              </strong>
            </div>
            <h1 className="mb-6 text-5xl leading-tight font-extrabold text-white md:text-6xl lg:text-7xl">
              Level Up
              <span className="text-ft-primary mt-2 block">Keuanganmu!</span>
            </h1>
            <p className="text-ft-text-secondary mb-10 max-w-md text-lg leading-relaxed">
              Aplikasi pencatat keuangan offline-first dengan elemen RPG. Atur
              budget, selesaikan quest finansial, dan amankan data Anda di
              perangkat sendiri.
            </p>
            <DownloadButton upward />
          </div>
          <div className="animate-hidden relative z-10 flex items-center justify-center delay-200 md:flex">
            <div className="border-ft-surface-variant absolute h-100 w-100 animate-[spin_60s_linear_infinite] rounded-full border" />
            <PhoneMockup imgUrl="/image/skill.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-ft-surface relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20 md:h-screen md:snap-start md:snap-always md:px-16 lg:px-32 xl:px-48">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="animate-hidden mb-16 text-center text-3xl font-bold md:text-5xl">
            Mulai dalam 3 Langkah
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {siteConfig.howItWorks.map((item, i) => (
              <div
                key={i}
                className={`animate-hidden delay-${(i + 1) * 100} bg-ft-background border-ft-surface-variant flex flex-col items-center rounded-3xl border p-8 text-center shadow-lg`}
              >
                <div className="bg-ft-primary text-ft-background mb-6 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-black">
                  {item.step}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className="text-ft-text-secondary text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {siteConfig.features.map((feature: Features, index: number) => (
        <FeatureSection key={feature.id} index={index} feature={feature} />
      ))}

      <section className="bg-ft-surface border-ft-surface-variant relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-y px-6 py-24 text-center md:h-screen md:snap-start md:snap-always md:px-16 lg:px-32 xl:px-48">
        <div className="animate-hidden bg-ft-background ring-ft-primary/20 relative mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full text-3xl shadow-[0_0_30px_rgba(255,215,0,0.2)] ring-4">
          <Image
            fill
            sizes="100%, 100%"
            src="https://github.com/Anomali99.png"
            alt="Anomali99"
            className="object-cover"
          />
        </div>
        <h3 className="animate-hidden mb-6 text-3xl font-bold delay-100 md:text-4xl">
          Dibangun oleh Anomali99
        </h3>
        <p className="animate-hidden text-ft-text-secondary mb-12 max-w-4xl text-lg leading-relaxed delay-200 md:text-xl">
          Aplikasi ini berawal dari kebutuhan pribadi untuk melacak arus kas,
          menemukan titik{" "}
          <em className="font-semibold text-white">overbudget</em>, dan
          mengalokasikan dana demi masa depan yang lebih terjamin. Di sela
          pemikiran itu, saya menyadari bahwa manajemen keuangan seharusnya
          tidak membosankan. Jika hidup adalah sebuah game, maka bekerja adalah
          proses <em className="font-semibold text-white">grinding</em> untuk
          memperbesar <em className="font-semibold text-white">stats</em> kita.
          FinTale hadir untuk mengubah beban pengelolaan uang menjadi mekanisme
          RPG yang memuaskan dan terstruktur.
        </p>
        <div className="animate-hidden delay-300">
          <a
            href="https://github.com/Anomali99"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ft-background hover:bg-ft-surface-variant border-ft-surface-variant inline-flex items-center gap-2 rounded-full border px-8 py-4 text-lg font-bold transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>{" "}
            Follow di GitHub
          </a>
        </div>
      </section>

      <section className="bg-ft-background relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center md:h-screen md:snap-start md:snap-always md:px-16 lg:px-32 xl:px-48">
        <div className="z-10 my-auto flex flex-col items-center">
          <h2 className="animate-hidden text-ft-primary mb-10 text-4xl font-bold md:text-6xl">
            Siap Menjadi Master Finansial?
          </h2>
          <div className="animate-hidden delay-100">
            <DownloadButton upward={false} />
          </div>
        </div>

        <Footer className="absolute bottom-0 left-0 px-6 md:px-16 lg:px-32 xl:px-48" />
      </section>
    </main>
  );
}
