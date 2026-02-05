"use client";

import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-40">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid gap-24 lg:grid-cols-2 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-black/60">
              Contact Gas Group
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl font-light text-black">
              Let’s build energy solutions together
            </h2>

            <p className="mt-8 max-w-lg text-lg text-black/60 leading-relaxed">
              Whether you are developing a new oil & gas project, seeking
              engineering expertise, or exploring strategic partnerships,
              Gas Group is ready to collaborate with precision, safety,
              and integrity.
            </p>

            <div className="mt-12 space-y-4 text-sm text-black/70">
              <p>📍 Lagos, Nigeria</p>
              <p>✉️ info@gasgroupintl.com</p>
              <p>☎️ +234 (0) 000 000 0000</p>
            </div>
          </div>

          {/* FORM */}
          <div className="relative">
            <div className="rounded-3xl border border-black/10 p-10">
              <form className="space-y-8">
                
                <div>
                  <label className="block text-sm text-black/60 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="
                      w-full border-b border-black/20
                      bg-transparent py-3
                      text-black placeholder:text-black/40
                      focus:border-[#b1d436]
                      focus:outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm text-black/60 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="
                      w-full border-b border-black/20
                      bg-transparent py-3
                      text-black placeholder:text-black/40
                      focus:border-[#b1d436]
                      focus:outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm text-black/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, scope, or partnership interest"
                    className="
                      w-full resize-none
                      border-b border-black/20
                      bg-transparent py-3
                      text-black placeholder:text-black/40
                      focus:border-[#b1d436]
                      focus:outline-none
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex items-center gap-3
                    rounded-full bg-[#b1d436]
                    px-10 py-4
                    text-sm uppercase tracking-wide
                    text-black
                    hover:opacity-90
                    transition
                  "
                >
                  Send Enquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
