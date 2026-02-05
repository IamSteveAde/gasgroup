"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

import { ArrowRight } from "lucide-react";


/* -------------------------------------
   SLIDES
------------------------------------- */
const slides = [
  {
    eyebrow: "Offshore Refinery",
    title: "We Deliver World-Class Offshore Solutions",
    description:
      "Gas Group consistently embraces innovation to provide a superior level of offshore engineering and refinery services.",
    image: "/images/hero/offshore.png",
  },
  {
    eyebrow: "Liquid Natural Gas",
    title: "A Leading Global LNG Partner",
    description:
      "Collaborating with partners across the globe to deliver reliable and scalable LNG services for Nigeria and beyond.",
    image: "/images/hero/liquid.png",
  },
  {
    eyebrow: "Engineering Services",
    title: "Power & Engineering Excellence",
    description:
      "Our deep understanding of power project technicalities gives our clients a strategic advantage.",
    image: "/images/hero/engineer.png",
  },
  {
    eyebrow: "Daily Production",
    title: "Exploration & Production Leadership",
    description:
      "Driving daily production excellence to meet growing energy demands with efficiency and precision.",
    image: "/images/hero/production.png",
  },
];

/* -------------------------------------
   HERO
------------------------------------- */
export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      7500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND SLIDES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.18 }}
            transition={{ duration: 12, ease: "linear" }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Cinematic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Brand Glow */}
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#b1d436]/20 blur-[180px]" />

          {/* Light Sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 6.5, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="max-w-4xl"
            >
              {/* EYEBROW */}
              <motion.div
                variants={item}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#b1d436]"
              >
                {slides[index].eyebrow}
              </motion.div>

              {/* GRADIENT TITLE */}
              <motion.h1
                variants={item}
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
              >
                <span className="animated-gradient-text">
                  {slides[index].title}
                </span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                variants={item}
                className="mt-8 max-w-2xl text-lg text-white/75 leading-relaxed"
              >
                {slides[index].description}
              </motion.p>

              {/* CTA BUTTONS */}
              <motion.div
                variants={item}
                className="mt-12 flex flex-wrap gap-6"
              >
                <MagneticButton href="/solutions" primary>
                  Our Solutions
                </MagneticButton>

                <MagneticButton href="/contact">
                  Contact Us
                </MagneticButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-[3px] w-16 rounded-full transition-all duration-700 ${
              i === index ? "bg-[#b1d436]" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* GRADIENT TEXT STYLES */}
      <style jsx global>{`
        .animated-gradient-text {
          background: linear-gradient(
            120deg,
            #b1d436,
            #ffffff,
            #b1d436
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------
   MAGNETIC BUTTON
------------------------------------- */
function MagneticButton({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-xl px-10 py-4 text-sm uppercase tracking-wide transition ${
          primary
            ? "bg-[#b1d436] text-black"
            : "border border-white/40 text-white"
        }`}
      >
        {/* Hover Glow */}
        <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <span className="relative z-10 flex items-center gap-3">
          {children}
          <ArrowRight size={16} />
        </span>
      </Link>
    </motion.div>
  );
}

/* -------------------------------------
   TEXT ANIMATION
------------------------------------- */
const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

