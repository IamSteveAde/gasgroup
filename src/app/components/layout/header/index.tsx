"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

/* -------------------------------------
   BRAND COLORS — GAS GROUP
------------------------------------- */
const BRAND = {
  green: "#b1d436",
};

export default function Header() {
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* -------------------------------------
     Detect dark sections
  ------------------------------------- */
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>("section[data-dark]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setOnDark(entries.some((entry) => entry.isIntersecting));
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------
     Lock scroll on mobile menu
  ------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          bg-white/85
          transition-colors duration-300
          ${onDark ? "text-white" : "text-black"}
        `}
      >
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <Link href="/" className="z-50 flex items-center">
              <img
                src="/images/hero/l1.png"
                alt="Gas Group"
                className="h-9 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <Dropdown
                label="About"
                onDark={onDark}
                items={[
                  { label: "Company Overview", href: "/about" },
                  { label: "Our History", href: "/about#history" },
                  { label: "Vision & Mission", href: "/about#vision" },
                  { label: "Core Values", href: "/about#values" },
                  { label: "Board of Directors", href: "/board-of-directors" },
                ]}
              />

              <Dropdown
                label="Operations"
                onDark={onDark}
                items={[
                  { label: "Engineering Services", href: "/operations/engineering" },
                  { label: "Liquefied Natural Gas (LNG)", href: "/operations/lng" },
                  { label: "Exploration & Production", href: "/operations/exploration" },
                  { label: "Drilling & Maintenance", href: "/operations/drilling" },
                ]}
              />

              <NavItem onDark={onDark} href="/projects">
                Projects
              </NavItem>

              <NavItem onDark={onDark} href="/partners">
                Partners
              </NavItem>

              <NavItem onDark={onDark} href="/contact">
                Contact
              </NavItem>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                md:hidden z-50
                h-11 w-11
                rounded-full
                flex items-center justify-center
                backdrop-blur-xl
                bg-white/20
                border border-black/10
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
              "
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl">
          <nav className="h-full flex flex-col items-center justify-center gap-6">
            <MobileNavGroup title="About">
              <MobileLink href="/about" close={setMenuOpen}>Company Overview</MobileLink>
              <MobileLink href="/about#history" close={setMenuOpen}>Our History</MobileLink>
              <MobileLink href="/about#vision" close={setMenuOpen}>Vision & Mission</MobileLink>
              <MobileLink href="/about#values" close={setMenuOpen}>Core Values</MobileLink>
              <MobileLink href="/board-of-directors" close={setMenuOpen}>Board of Directors</MobileLink>
            </MobileNavGroup>

            <Divider />

            <MobileNavGroup title="Operations">
              <MobileLink href="/operations/engineering" close={setMenuOpen}>Engineering Services</MobileLink>
              <MobileLink href="/operations/lng" close={setMenuOpen}>Liquefied Natural Gas</MobileLink>
              <MobileLink href="/operations/exploration" close={setMenuOpen}>Exploration & Production</MobileLink>
              <MobileLink href="/operations/drilling" close={setMenuOpen}>Drilling & Maintenance</MobileLink>
            </MobileNavGroup>

            <Divider />

            <MobileLink href="/projects" close={setMenuOpen}>Projects</MobileLink>
            <MobileLink href="/partners" close={setMenuOpen}>Partners</MobileLink>
            <MobileLink href="/contact" close={setMenuOpen}>Contact</MobileLink>
          </nav>
        </div>
      )}
    </>
  );
}

/* ======================================================
   DESKTOP NAV ITEM
====================================================== */
function NavItem({
  href,
  children,
  onDark,
}: {
  href: string;
  children: React.ReactNode;
  onDark: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        text-[11px] tracking-[0.3em] uppercase
        transition-colors duration-300
        ${onDark ? "text-white/90 hover:text-white" : "text-black/85 hover:text-black"}
      `}
    >
      {children}
    </Link>
  );
}

/* ======================================================
   DROPDOWN (DESKTOP)
====================================================== */
function Dropdown({
  label,
  items,
  onDark,
}: {
  label: string;
  items: { label: string; href: string }[];
  onDark: boolean;
}) {
  return (
    <div className="relative group">
      <button
        className={`
          flex items-center gap-2
          text-[11px] tracking-[0.3em] uppercase
          transition-colors duration-300
          ${onDark ? "text-white/90" : "text-black/85"}
        `}
      >
        {label}
        <ChevronDown size={14} />
      </button>

      <div
        className="
          absolute top-full left-0 mt-6
          min-w-[260px]
          rounded-2xl bg-white
          shadow-[0_30px_90px_rgba(0,0,0,0.15)]
          opacity-0 translate-y-2
          pointer-events-none
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
        "
      >
        <ul className="py-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="
                  block px-6 py-3
                  text-sm text-black
                  hover:bg-[#b1d436]/10
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ======================================================
   MOBILE HELPERS
====================================================== */
function MobileNavGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <p className="mb-3 text-xs uppercase tracking-widest text-[#b1d436]">
        {title}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  close,
  children,
}: {
  href: string;
  close: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => close(false)}
      className="
        text-white/90 text-sm
        tracking-[0.35em] uppercase
        transition hover:opacity-70
      "
    >
      {children}
    </Link>
  );
}

/* ======================================================
   DIVIDER
====================================================== */
function Divider() {
  return (
    <div className="w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  );
}
