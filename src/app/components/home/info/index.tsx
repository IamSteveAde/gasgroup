"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Smartphone } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden" id="contact">
      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2a123f 0%, #5f3b86 45%, #7b4db3 100%)",
        }}
      />

      {/* SUBTLE LIGHT ACCENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-white/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-white/10 blur-[180px]" />
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mb-20 text-white"
          >
            <span className="block text-[11px] tracking-[0.4em] uppercase text-white/70 mb-4">
              Get Started
            </span>

            <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
              Ready to build a better
              <span className="block font-normal">
                workforce with Optivance?
              </span>
            </h2>
          </motion.div>

          {/* ACTION CARDS */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* EMPLOYERS */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center">
                  <Users />
                </div>
                <h3 className="text-2xl font-light">
                  Looking to Hire?
                </h3>
              </div>

              <p className="text-white/80 leading-relaxed max-w-md mb-8">
                Let us supply trained, certified, and fully managed blue-collar
                workers — ready to deploy and compliant from day one.
              </p>

              <a
                href="/hire"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#5f3b86] text-sm tracking-[0.25em] uppercase transition hover:opacity-90"
              >
                Request Workers
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* WORKERS */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center">
                  <Smartphone />
                </div>
                <h3 className="text-2xl font-light">
                  Looking for Work?
                </h3>
              </div>

              <p className="text-white/80 leading-relaxed max-w-md mb-8">
                Start your journey with training, certification, and structured
                job placement — all through WhatsApp.
              </p>

              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/40 text-white text-sm tracking-[0.25em] uppercase transition hover:bg-white hover:text-[#5f3b86]"
              >
                Join on WhatsApp
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
