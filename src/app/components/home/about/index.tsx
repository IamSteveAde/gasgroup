"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Drill,
  Factory,
  Zap,
  Recycle,
  Settings,
  Truck,
  ArrowRight,
} from "lucide-react";

/* -------------------------------------
   SERVICES DATA
------------------------------------- */
const services = [
  {
    title: "Drilling Services",
    description:
      "Optimizing well placement and drilling operations to maximize production efficiency and safety.",
    icon: Drill,
    href: "/services/drilling",
    gradient: "from-[#b1d436]/20 via-white to-white",
  },
  {
    title: "Exploration & Production",
    description:
      "High-end solutions for resource discovery and sustained production excellence.",
    icon: Factory,
    href: "/services/exploration-production",
    gradient: "from-[#020617]/10 via-white to-white",
  },
  {
    title: "Power",
    description:
      "End-to-end understanding of power generation projects from design to execution.",
    icon: Zap,
    href: "/services/power",
    gradient: "from-[#b1d436]/15 via-white to-white",
  },
  {
    title: "Tank Cleaning Technology",
    description:
      "Automatic tank cleaning engineered for safety, speed, and operational excellence.",
    icon: Recycle,
    href: "/services/tank-cleaning",
    gradient: "from-[#020617]/10 via-white to-white",
  },
  {
    title: "Engineering & Procurement",
    description:
      "Solving complex challenges through EPC and design-build engineering services.",
    icon: Settings,
    href: "/services/engineering-procurement",
    gradient: "from-[#b1d436]/15 via-white to-white",
  },
  {
    title: "Trucking & Logistics",
    description:
      "Heavy equipment leasing and logistics support for offshore and onshore operations.",
    icon: Truck,
    href: "/services/logistics",
    gradient: "from-[#020617]/10 via-white to-white",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* BACKGROUND ORBITS */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 pointer-events-none">
        <Orbit size={520} opacity={0.25} />
        <Orbit size={380} dotted opacity={0.35} delay={10} />
        <Orbit size={260} opacity={0.4} delay={20} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid gap-20 lg:grid-cols-12 items-center">
          {/* LEFT — IMAGE + COPY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-light text-black">
              Integrated Energy Services
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Gas Group delivers end-to-end oil and gas services designed to
              support efficiency, safety, and long-term operational success.
            </p>

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/hero/engineer.png"
                alt="Gas Group Energy Services"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>

          {/* RIGHT — SERVICES GRID */}
          <div className="lg:col-span-7 grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl border border-gray-200 bg-gradient-to-br ${service.gradient} p-8 transition`}
              >
                {/* ICON */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b1d436]/10 text-[#b1d436]">
                  <service.icon size={22} />
                </div>

                {/* CONTENT */}
                <h3 className="text-lg font-medium text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0f172a] transition group-hover:text-[#b1d436]"
                >
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   ORBIT COMPONENT (VISIBLE + REFINED)
------------------------------------- */
function Orbit({
  size,
  dotted,
  opacity = 0.3,
  delay = 0,
}: {
  size: number;
  dotted?: boolean;
  opacity?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${
        dotted ? "border-dashed" : "border-solid"
      } border border-[#b1d436]`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 90,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
}
