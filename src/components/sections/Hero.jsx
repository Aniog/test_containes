import { ArrowRight, ChevronDown } from "lucide-react";
import { stats } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0E1726] text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-grid opacity-100"
        data-strk-bg-id="hero-bg-main-7c4d2b"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle] industrial precision folding machine"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        aria-hidden="true"
      />
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0E1726]/85 via-[#0E1726]/75 to-[#0E1726]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-36 md:pt-44 lg:pt-52 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase text-[#E8D5C0]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C77B3F]" />
              Precision Sheet Metal Folding
            </span>

            <h1
              id="hero-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
            >
              Fold metal with{" "}
              <span className="text-[#C77B3F]">engineering grace.</span>
            </h1>

            <p
              id="hero-subtitle"
              className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#D1D5DB]"
            >
              ARTITECT MACHINERY designs and builds double folding machines, sheet
              metal folders, and metal folding machines for fabrication shops that
              measure success in repeatability and uptime.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C77B3F] px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#A86432] transition-colors"
              >
                Request a Quote
                <ArrowRight size={18} strokeWidth={2} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Machines
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative card with stats */}
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C77B3F] to-transparent" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9CA3AF]">
                  Trusted by fabricators worldwide
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd>
                        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                          {s.value}
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-[#9CA3AF] leading-snug">
                          {s.label}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Decorative chip */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-md border border-white/10 bg-[#0E1726] px-4 py-2.5 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#1F8A5C]" />
                <span className="text-xs font-medium text-[#E5E7EB]">
                  CE / UL Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 md:mt-24 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#9CA3AF] hover:text-white"
        >
          Scroll to explore <ChevronDown size={16} strokeWidth={1.5} />
        </a>
      </div>

      {/* Bottom corner accents */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C77B3F]/60 to-transparent" />
    </section>
  );
}