"use client";

import Image from "next/image";
import Link from "next/link";
import { getImgPath } from "@/utils/pathUtils";

export default function IssuesPage() {
  return (
    <main className="relative min-h-screen bg-[#f3f4f6] overflow-hidden">

      {/* Platinum Grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="platinum-grain opacity-[0.35]" />
      </div>

      {/* Top Light Field */}
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-white blur-[280px]" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl pt-40 pb-32">

        {/* Page Header */}
        <div className="max-w-3xl mb-24 space-y-6">
          <span className="block text-[11px] tracking-[0.45em] uppercase text-black/50">
            Issues
          </span>

          <h1 className="text-black font-light text-3xl md:text-5xl leading-tight">
            The Archive
          </h1>

          <p className="text-black/65 text-sm md:text-base leading-relaxed max-w-xl">
            A curated collection of issues exploring AV as experience, restraint,
            and intent.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* ISSUE 01 */}
          <IssueCard
            title="Designed to Disappear"
            issue="Issue 01"
            description="An exploration of technology that leaves no trace when designed early."
            image="/images/issue/DTD.webp"
            href="/issues/issue-01"
          />

          {/* Placeholder for future issues */}
          <IssuePlaceholder />
          <IssuePlaceholder />
          

        </div>

      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .platinum-grain {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            rgba(0,0,0,0.08) 1px,
            transparent 1px
          );
          background-size: 3px 3px;
          animation: moveGrain 50s linear infinite;
        }

        @keyframes moveGrain {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-12%, -12%); }
        }
      `}</style>

    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function IssueCard({
  title,
  issue,
  description,
  image,
  href,
}: {
  title: string;
  issue: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block space-y-6 transition"
    >
      <div className="relative overflow-hidden shadow-[0_60px_160px_rgba(0,0,0,0.35)]">
        <Image
          src={getImgPath(image)}
          alt={title}
          width={600}
          height={800}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 border border-black/10 pointer-events-none" />
      </div>

      <div className="space-y-2">
        <span className="block text-[11px] tracking-[0.3em] uppercase text-black/50">
          {issue}
        </span>

        <h2 className="text-black font-light text-xl leading-snug">
          {title}
        </h2>

        <p className="text-black/65 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}

function IssuePlaceholder() {
  return (
    <div className="space-y-6 opacity-40">
      <div className="h-[420px] bg-black/5 border border-black/10 flex items-center justify-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-black/40">
          Coming Soon
        </span>
      </div>
      <div className="space-y-2">
        <span className="block text-[11px] tracking-[0.3em] uppercase text-black/40">
          Future Issue
        </span>
        <h2 className="text-black/50 font-light text-xl">
          In Preparation
        </h2>
      </div>
    </div>
  );
}
