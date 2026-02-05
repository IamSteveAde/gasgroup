"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Utensils,
  HardHat,
  Factory,
  ShoppingCart,
  Truck,
  Globe2,
} from "lucide-react";

export default function IndustriesAndVision() {
  return (
    <section className="relative bg-white overflow-hidden" id="industries">
      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* ================= INDUSTRIES ================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#5f3b86] mb-6">
                Industries We Serve
              </span>

              <h2 className="text-4xl font-light leading-tight text-black mb-10">
                Supporting Africa’s
                <span className="block font-normal text-[#5f3b86]">
                  essential industries
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <Industry icon={<Hotel />} label="Hospitality & Tourism" />
                <Industry icon={<Utensils />} label="Food & Beverage" />
                <Industry icon={<HardHat />} label="Construction & Real Estate" />
                <Industry icon={<Factory />} label="Manufacturing" />
                <Industry icon={<ShoppingCart />} label="Retail & Supermarkets" />
                <Industry icon={<Truck />} label="Logistics & Warehousing" />
              </div>
            </motion.div>

            {/* ================= VISION ================= */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-black/50 mb-6">
                Our Vision
              </span>

              <div className="rounded-3xl border border-black/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-11 w-11 rounded-xl bg-[#5f3b86]/10 text-[#5f3b86] flex items-center justify-center">
                    <Globe2 />
                  </div>
                  <h3 className="text-2xl font-light text-black">
                    Building Africa’s workforce infrastructure
                  </h3>
                </div>

                <p className="text-black/70 leading-relaxed text-lg mb-6">
                  To become Africa’s most trusted blue-collar workforce
                  platform, connecting millions of workers to dignified jobs
                  while helping businesses grow with confidence.
                </p>

                <p className="text-black/60 leading-relaxed">
                  Optivance HR Africa is building the long-term infrastructure
                  for Africa’s workforce economy — responsibly, inclusively,
                  and at scale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   INDUSTRY ITEM
------------------------------------- */
function Industry({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-xl bg-black/5 text-black flex items-center justify-center">
        {icon}
      </div>
      <span className="text-black/80 text-sm">{label}</span>
    </div>
  );
}
