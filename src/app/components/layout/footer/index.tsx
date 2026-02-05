"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white">
      <div className="container mx-auto px-6 lg:max-w-screen-xl py-24">
        <div className="grid gap-20 lg:grid-cols-3">
          
          {/* BRAND + DESCRIPTION */}
          <div>
            {/* LOGO */}
            <div className="mb-6">
              <img
                src="/images/hero/l1.png"
                alt="Gas Group"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-sm leading-relaxed text-white/70 max-w-md">
              Gas Group, as a company of choice, is partaking in the energy
              sector’s growth with the provision of services ranging from
              completion and drilling rig maintenance, downhole fishing tool
              services, machine shops for dressing tools and equipment,
              trucking, manpower supply, waste water treatment and disposal,
              and produced water facility engineering.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-widest text-[#b1d436]">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/operations" className="hover:text-white transition">
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/board-of-directors"
                  className="hover:text-white transition"
                >
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/lng" className="hover:text-white transition">
                  LNG
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-widest text-[#b1d436]">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm text-white/80 leading-relaxed">
              <p>
                <span className="block font-medium text-white">
                  Address:
                </span>
                Plot 6B, Block 110, Oluwakayode Jacob Street,  
                Lekki Phase 1, Lagos, Nigeria.
              </p>

              <p>
                <span className="block font-medium text-white">
                  Call Us:
                </span>
                +(234) 01 763 1533
              </p>

              <p>
                <span className="block font-medium text-white">
                  Email:
                </span>
                info@gasgroupintl.com
              </p>

              <p>
                <span className="block font-medium text-white">
                  Fax:
                </span>
                +(234) 01 763 1533
              </p>

              <p>
                <span className="block font-medium text-white">
                  Working Hours:
                </span>
                Mon – Sat: 9:00am – 6:00pm  
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Gas Group International. All rights reserved.
          </p>

          <p className="tracking-wide">
            Built with integrity • Safety • Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
