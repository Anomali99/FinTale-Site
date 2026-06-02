import { JSX } from "react";
export interface AppArc {
  arm64: string;
  armeabi: string;
  x86_64: string;
  universal: string;
}

export interface Downloads {
  android?: AppArc;
  ios?: AppArc;
}

export interface AppInfo {
  name: string;
  version: string;
  releaseDate: string;
  allReleasesUrl: string;
  downloads: Downloads;
}

export interface HowItWorks {
  step: string;
  title: string;
  desc: string;
}

export interface Features {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  note?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface SiteConfig {
  appInfo: AppInfo;
  howItWorks: Array<HowItWorks>;
  features: Array<Features>;
  faq: Array<Faq>;
}
