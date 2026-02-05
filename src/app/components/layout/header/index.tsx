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
     Lock scroll on open
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
          backdrop-blur-xl bg-white/85
          transition-colors duration-300
          ${onDark ? "text-white" : "text-black"}
        `}
      >
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src="/images/hero/l1.png"
                alt="Gas Group"
                className="h-9 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <DesktopDropdown
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

              <DesktopDropdown
                label="Operations"
                onDark={onDark}
                items={[
                  { label: "Engineering Services", href: "/operations/engineering" },
                  { label: "Liquefied Natural Gas (LNG)", href: "/operations/lng" },
                  { label: "Exploration & Production", href: "/operations/exploration" },
                  { label: "Drilling & Maintenance", href: "/operations/drilling" },
                ]}
              />

              <NavItem onDark={onDark} href="/projects">Projects</NavItem>
              <NavItem onDark={onDark} href="/partners">Partners</NavItem>
              <NavItem onDark={onDark} href="/contact">Contact</NavItem>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden h-11 w-11 rounded-full flex items-center justify-center bg-white/20 border border-black/10"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && <MobileMenu close={() => setMenuOpen(false)} />}
    </>
  );
}

/* ======================================================
   DESKTOP NAV ITEM
====================================================== */
function NavItem({ href, children, onDark }: any) {
  return (
    <Link
      href={href}
      className={`text-[11px] tracking-[0.3em] uppercase ${
        onDark ? "text-white/90" : "text-black/85"
      }`}
    >
      {children}
    </Link>
  );
}

/* ======================================================
   DESKTOP DROPDOWN
====================================================== */
function DesktopDropdown({ label, items, onDark }: any) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase ${
          onDark ? "text-white/90" : "text-black/85"
        }`}
      >
        {label}
        <ChevronDown size={14} />
      </button>

      <div className="absolute top-full left-0 mt-6 min-w-[260px] rounded-2xl bg-white shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition">
        <ul className="py-4">
          {items.map((item: any) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm text-black hover:bg-[#b1d436]/10"
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
   MOBILE MENU — WORLD CLASS
====================================================== */
function MobileMenu({ close }: { close: () => void }) {
  return (
    <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl">
      <div className="h-full overflow-y-auto px-6 py-28">
        <div className="space-y-8 max-w-md mx-auto">
          
          <MobileAccordion title="About">
            <MobileLink href="/about" close={close}>Company Overview</MobileLink>
            <MobileLink href="/about#history" close={close}>Our History</MobileLink>
            <MobileLink href="/about#vision" close={close}>Vision & Mission</MobileLink>
            <MobileLink href="/about#values" close={close}>Core Values</MobileLink>
            <MobileLink href="/board-of-directors" close={close}>Board of Directors</MobileLink>
          </MobileAccordion>

          <MobileAccordion title="Operations">
            <MobileLink href="/operations/engineering" close={close}>Engineering Services</MobileLink>
            <MobileLink href="/operations/lng" close={close}>Liquefied Natural Gas</MobileLink>
            <MobileLink href="/operations/exploration" close={close}>Exploration & Production</MobileLink>
            <MobileLink href="/operations/drilling" close={close}>Drilling & Maintenance</MobileLink>
          </MobileAccordion>

          <MobileLink href="/projects" close={close}>Projects</MobileLink>
          <MobileLink href="/partners" close={close}>Partners</MobileLink>
          <MobileLink href="/contact" close={close}>Contact</MobileLink>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   MOBILE ACCORDION
====================================================== */
function MobileAccordion({ title, children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-white text-sm uppercase tracking-widest"
      >
        {title}
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <div className="mt-4 space-y-3 pl-4">{children}</div>}
    </div>
  );
}

/* ======================================================
   MOBILE LINK
====================================================== */
function MobileLink({ href, close, children }: any) {
  return (
    <Link
      href={href}
      onClick={close}
      className="block text-white/80 text-sm uppercase tracking-wide hover:text-white"
    >
      {children}
    </Link>
  );
}
