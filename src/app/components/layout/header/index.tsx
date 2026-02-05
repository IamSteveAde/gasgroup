"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

/* -------------------------------------
   TEMP LINK (ALL ROUTES POINT HERE)
------------------------------------- */
const LINK = "/";

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
     Lock scroll when mobile menu is open
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
            <Link href={LINK} className="flex items-center">
              <img
                src="/images/hero/l1.png"
                alt="Gas Group"
                className="h-9 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <NavItem onDark={onDark} href={LINK}>
                Home
              </NavItem>

              <DesktopDropdown
                label="About"
                onDark={onDark}
                items={[
                  { label: "Company Overview", href: LINK },
                  { label: "Our History", href: LINK },
                  { label: "Vision & Mission", href: LINK },
                  { label: "Core Values", href: LINK },
                  { label: "Board of Directors", href: LINK },
                ]}
              />

              <DesktopDropdown
                label="Operations"
                onDark={onDark}
                items={[
                  { label: "Engineering Services", href: LINK },
                  { label: "Liquefied Natural Gas (LNG)", href: LINK },
                  { label: "Exploration & Production", href: LINK },
                  { label: "Drilling & Maintenance", href: LINK },
                ]}
              />

              <NavItem onDark={onDark} href={LINK}>Projects</NavItem>
              <NavItem onDark={onDark} href={LINK}>Partners</NavItem>
              <NavItem onDark={onDark} href={LINK}>Contact</NavItem>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                h-11 w-11
                rounded-full
                flex items-center justify-center
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
      {menuOpen && <MobileMenu close={() => setMenuOpen(false)} />}
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
        transition-colors
        ${onDark ? "text-white/90 hover:text-white" : "text-black/85 hover:text-black"}
      `}
    >
      {children}
    </Link>
  );
}

/* ======================================================
   DESKTOP DROPDOWN
====================================================== */
function DesktopDropdown({
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
          opacity-0 translate-y-2 pointer-events-none
          transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:pointer-events-auto
        "
      >
        <ul className="py-4">
          {items.map((item) => (
            <li key={item.label}>
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
   MOBILE MENU
====================================================== */
function MobileMenu({ close }: { close: () => void }) {
  return (
    <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl">
      <div className="h-full overflow-y-auto px-6 py-28">
        <div className="max-w-md mx-auto space-y-8">
          <MobileLink href={LINK} close={close}>Home</MobileLink>

          <MobileAccordion title="About">
            <MobileLink href={LINK} close={close}>Company Overview</MobileLink>
            <MobileLink href={LINK} close={close}>Our History</MobileLink>
            <MobileLink href={LINK} close={close}>Vision & Mission</MobileLink>
            <MobileLink href={LINK} close={close}>Core Values</MobileLink>
            <MobileLink href={LINK} close={close}>Board of Directors</MobileLink>
          </MobileAccordion>

          <MobileAccordion title="Operations">
            <MobileLink href={LINK} close={close}>Engineering Services</MobileLink>
            <MobileLink href={LINK} close={close}>Liquefied Natural Gas</MobileLink>
            <MobileLink href={LINK} close={close}>Exploration & Production</MobileLink>
            <MobileLink href={LINK} close={close}>Drilling & Maintenance</MobileLink>
          </MobileAccordion>

          <MobileLink href={LINK} close={close}>Projects</MobileLink>
          <MobileLink href={LINK} close={close}>Partners</MobileLink>
          <MobileLink href={LINK} close={close}>Contact</MobileLink>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   MOBILE ACCORDION
====================================================== */
function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
function MobileLink({
  href,
  close,
  children,
}: {
  href: string;
  close: () => void;
  children: React.ReactNode;
}) {
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
