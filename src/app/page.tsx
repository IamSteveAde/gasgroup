import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";
import Info from "./components/home/info";

// Global components


/* -------------------------------------
   METADATA — GAS GROUP INTERNATIONAL
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://gasgroupintl.com"),

  title: {
    default: "Gas Group International",
    template: "%s | Gas Group International",
  },

  description:
    "Gas Group International is a leading energy services consortium delivering world-class solutions across engineering services, LNG, exploration & production, drilling support, and infrastructure development in Africa.",

  keywords: [
    "Gas Group International",
    "oil and gas services Nigeria",
    "energy services Africa",
    "engineering services oil and gas",
    "LNG services Nigeria",
    "exploration and production Africa",
    "drilling and rig maintenance",
    "oilfield services Nigeria",
    "energy infrastructure Africa",
    "gas production services",
  ],

  openGraph: {
    title: "Gas Group International",
    description:
      "Delivering world-class energy solutions across engineering, LNG, exploration & production, and oilfield services in Africa.",
    url: "https://gasgroupintl.com",
    siteName: "Gas Group International",
    type: "website",
    images: [
      {
        url: "https://gasgroupintl.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Group International — Energy & Engineering Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gas Group International",
    description:
      "A leading African energy services consortium delivering engineering, LNG, and oilfield solutions.",
    images: ["https://gasgroupintl.com/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://gasgroupintl.com",
  },
};
/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      
    </main>
  );
}
