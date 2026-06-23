import { JSX } from "react";
export interface AppArc {
  arm64: string;
  armeabi: string;
  x86_64: string;
  universal: string;
}

export interface Downloads {
  allReleasesUrl: string;
  android?: AppArc;
  ios?: AppArc;
}

export interface AppInfo {
  name: string;
  version: string;
  releaseDate: string;
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
  downloads: Downloads;
  howItWorks: Array<HowItWorks>;
  features: Array<Features>;
  faq: Array<Faq>;
}
