"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Gauge,
  Briefcase,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* =====================================================
   COUNTER HOOK (RETRIGGERS ON EVERY VIEW)
===================================================== */
function useCounter(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let current = 0;
    const step = target / (duration / 16);

    const tick = () => {
      current += step;
      if (current < target) {
        setValue(Math.floor(current));
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    setValue(0);
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

/* =====================================================
   MAIN SECTION
===================================================== */
export default function AboutGasGroup() {
  const [tab, setTab] = useState<
    "overview" | "history" | "vision" | "values"
  >("overview");

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#b1d436]/20 via-white to-white">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* TABS */}
        <div className="mb-20 flex gap-12 border-b border-gray-300">
          {[
            ["overview", "Overview"],
            ["history", "Our History"],
            ["vision", "Vision & Mission"],
            ["values", "Core Values"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id as any)}
              className="relative pb-4 text-sm uppercase tracking-widest text-gray-700"
            >
              {label}
              {tab === id && (
                <motion.span
                  layoutId="aboutTab"
                  className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#b1d436]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "overview" && <Overview />}
          {tab === "history" && <History />}
          {tab === "vision" && <VisionMission />}
          {tab === "values" && <CoreValues />}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* =====================================================
   OVERVIEW
===================================================== */
function Overview() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const engineers = useCounter(2456, visible);
  const production = useCounter(400000, visible);
  const projects = useCounter(3250, visible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid gap-20 lg:grid-cols-12 items-center"
    >
      {/* TEXT */}
      <div className="lg:col-span-6">
        <h3 className="text-3xl md:text-4xl font-light text-black">
          Company Overview
        </h3>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
          Gas Group is a consortium of leading energy companies delivering
          world-class oil and gas services across Africa, built on safety,
          quality, and integrity.
        </p>

        {/* STATS */}
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <Stat icon={Users} value={engineers} label="Engineers & Workforce" />
          <Stat icon={Gauge} value={production} label="Daily Oil Production" />
          <Stat icon={Briefcase} value={projects} label="Projects Delivered" />
        </div>
      </div>

      {/* IMAGE */}
      <div className="lg:col-span-6">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/hero/overview.png"
            alt="Gas Group Operations"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: any;
  value: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#b1d436]/15 text-[#b1d436]">
        <Icon size={22} />
      </div>
      <div>
        <div className="text-3xl font-light text-gray-900 leading-none">
          {value.toLocaleString()}
        </div>
        <div className="mt-1 text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}

/* =====================================================
   HISTORY — CORRECT TIMELINE GEOMETRY
===================================================== */
function History() {
  const timeline = [
    {
      year: "2001",
      title: "Subsidiary Operations",
      text: "Formation of subsidiaries supporting diverse energy operations.",
      image: "/images/hero/subsi.png",
    },
    {
      year: "2010",
      title: "Operational Expansion",
      text: "Expansion into engineering, logistics, and procurement services.",
      image: "/images/hero/operational.png",
    },
    {
      year: "2017",
      title: "Deploying Integrated Solutions",
      text: "Advanced solutions for discovery, extraction, and supply.",
      image: "/images/hero/integrated.png",
    },
    {
      year: "2022",
      title: "Regional Growth",
      text: "Expansion across African energy markets.",
      image: "/images/hero/2022.png",
    },
    {
      year: "2026",
      title: "Future Outlook",
      text: "Positioning Gas Group as a global energy services leader.",
      image: "/images/hero/future.png",
    },
  ];

  return (
    <div className="relative">
      {/* VERTICAL LINE */}
      <div className="absolute left-[96px] top-0 bottom-0 w-px bg-[#b1d436]/40" />

      <div className="space-y-24">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-[80px_32px_1fr] gap-8 items-start"
          >
            {/* YEAR */}
            <div className="text-xl font-light text-gray-900">
              {item.year}
            </div>

            {/* DOT (CENTERED ON LINE) */}
            <div className="relative flex justify-center">
              <span className="absolute top-1.5 h-3 w-3 rounded-full bg-[#b1d436]" />
            </div>

            {/* CONTENT */}
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              <div className="lg:col-span-4">
                <h4 className="text-xl font-medium text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   VISION & MISSION — TEXT ONLY
===================================================== */
function VisionMission() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Our Vision",
      text:
        "To create and grow a knowledge-based global organisation that seeks worldwide investment opportunities while maximising shareholder value.",
      bg: "from-[#0f172a] to-[#020617]",
    },
    {
      title: "Our Mission",
      text:
        "To become one of the top ten gas producers globally by delivering low-cost, high-quality gas and expanding into emerging markets.",
      bg: "from-[#b1d436] to-[#6f8f1f]",
    },
  ];

  return (
    <div>
      {/* ARROWS */}
      <div className="mb-8 flex justify-between">
        <button
          onClick={() => setIndex(0)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} /> Vision
        </button>
        <button
          onClick={() => setIndex(1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          Mission <ArrowRight size={16} />
        </button>
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className={`
          rounded-3xl
          bg-gradient-to-br ${slides[index].bg}
          p-10 sm:p-12 md:p-16
          text-white
        `}
      >
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light">
            {slides[index].title}
          </h3>

          <div className="mt-6 h-[2px] w-16 bg-white/60" />

          <p className="mt-8 text-base md:text-lg leading-relaxed text-white/90">
            {slides[index].text}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* =====================================================
   CORE VALUES
===================================================== */
function CoreValues() {
  const values = [
    "Accountability",
    "Quality",
    "Innovation",
    "Performance Excellence",
    "Integrity & Respect",
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl">
      {values.map((value, i) => (
        <div key={value} className="border-b border-gray-300 py-6">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between text-lg text-gray-900"
          >
            {value}
            <ChevronDown
              className={`transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-4 text-gray-700 leading-relaxed"
              >
                {value} is a core principle guiding our decisions, operations,
                and long-term strategy across Gas Group.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
