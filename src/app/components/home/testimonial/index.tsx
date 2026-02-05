"use client";

import { useState } from "react";

const partners = [
  { name: "Partner One", logo: "/images/hero/l1.png" },
   { name: "Partner One", logo: "/images/hero/l2.png" },
    { name: "Partner One", logo: "/images/hero/l3.png" },
     { name: "Partner One", logo: "/images/hero/l4.png" },
      { name: "Partner One", logo: "/images/hero/l5.png" },
       { name: "Partner One", logo: "/images/hero/l6.png" },
        { name: "Partner One", logo: "/images/hero/l7.png" },
         { name: "Partner One", logo: "/images/hero/l8.png" },
          { name: "Partner One", logo: "/images/hero/l9.png" },
  
];

export default function PartnersLivingWall() {
  const [active, setActive] = useState<number | null>(null);

  return (
   <section className="relative py-32 bg-gradient-to-br from-[#b1d436]/20 via-white to-white">

      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-black/60">
            Our Partners
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-light text-black">
            Trusted Collaborations
          </h2>
          <p className="mt-6 text-lg text-black/60">
            We work closely with industry-leading partners across engineering,
            logistics, and energy systems.
          </p>
        </div>

        {/* LOGO WALL */}
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-3">
          {partners.map((partner, index) => {
            const isActive = active === index;
            const isDimmed = active !== null && !isActive;

            return (
              <div
                key={partner.name}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`
                  group relative
                  flex items-center justify-center
                  rounded-2xl
                  py-10 px-8
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-black/[0.03]"
                      : "bg-transparent"
                  }
                `}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`
                    max-h-12 w-auto
                    transition-all duration-300
                    ${
                      isActive
                        ? "opacity-100 grayscale-0"
                        : isDimmed
                        ? "opacity-30 grayscale"
                        : "opacity-60 grayscale"
                    }
                  `}
                />

                {/* SUBTLE FOCUS RING */}
                <div
                  className={`
                    pointer-events-none absolute inset-0
                    rounded-2xl
                    ring-1 ring-black/5
                    transition-opacity
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
