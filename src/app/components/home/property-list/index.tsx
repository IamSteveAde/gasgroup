"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AUTOMATED TANK CLEANING",
    status: "Latest Projects, Ongoing Projects",
    image: "/images/hero/engineer.png",
  },
  {
    title: "REFINERY FABRICATION",
    status: "Latest Projects, Ongoing Projects",
    image: "/images/hero/2022.png",
  },
  {
    title: "RIG LOGISTICS",
    status: "Latest Projects",
    image: "/images/hero/operational.png",
  },
  {
    title: "CONOIL LAGOS PROJECT",
    status: "Latest Projects, Ongoing Projects",
    image: "/images/hero/offshore.png",
  },
];

export default function ProjectsEnergyRail() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-36">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="mb-32 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-black/60">
            Completed & Ongoing
          </p>
          <h2 className="mt-4 text-5xl md:text-6xl font-light text-black">
            Projects
          </h2>
          <p className="mt-6 text-lg text-black/60">
            A structured view of engineering execution across energy systems.
          </p>
        </div>

        {/* RAIL */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-black/10 hidden lg:block" />

          <div className="space-y-28">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const isActive = active === index;

              return (
                <div
                  key={project.title}
                  className={`relative flex items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* NODE */}
                  <div className="absolute left-1/2 hidden lg:block -translate-x-1/2">
                    <div
                      className={`h-4 w-4 rounded-full transition ${
                        isActive ? "bg-black" : "bg-black/30"
                      }`}
                    />
                  </div>

                  {/* CARD */}
                  <motion.div
                    animate={{
                      opacity: isActive || active === null ? 1 : 0.4,
                      y: isActive ? -6 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`
                      w-full lg:w-[440px]
                      rounded-3xl bg-white
                      overflow-hidden
                      transition-shadow
                      ${
                        isActive
                          ? "shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
                          : "shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                      }
                    `}
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`
                          h-full w-full object-cover transition-all duration-500
                          ${
                            isActive
                              ? "grayscale-0"
                              : "grayscale"
                          }
                        `}
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-sm font-semibold tracking-[0.25em] text-black">
                        {project.title}
                      </h3>
                      <div className="mt-4 h-[2px] w-12 bg-black" />
                      <p className="mt-6 text-sm text-black/70">
                        {project.status}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32">
          <a
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-sm uppercase tracking-wide text-white hover:bg-black/90 transition"
          >
            Explore All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
