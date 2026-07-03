import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import Eyebrow from "../components/ui/Eyebrow.jsx";

const VALUES = [
  {
    title: "Demi-fine, by design",
    body: "We use 18K gold plating over a brass core, at a thickness meant to last. Not fine jewelry. Not fashion. The sweet spot — built to wear.",
  },
  {
    title: "Small batches",
    body: "Every piece is produced in small runs, set and finished by hand in our New York studio. We don't drop ship. We don't overproduce.",
  },
  {
    title: "Hypoallergenic, always",
    body: "Nickel-free, lead-free, hypoallergenic. We test every alloy against sensitive skin. If it wouldn't live on our own ears, it doesn't ship.",
  },
];

const TIMELINE = [
  { year: "2021", label: "Velmora begins in a Brooklyn studio — one cuff, one notebook." },
  { year: "2022", label: "First collection sells out in 48 hours; the team grows to four." },
  { year: "2023", label: "We open the Mulberry Street atelier and studio appointments." },
  { year: "2024", label: "Royal Heirloom Set becomes our most gifted piece to date." },
  { year: "2025", label: "Velmora ships to 38 countries. The community keeps growing." },
];

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ink-950">
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Eyebrow tone="gold">Our Story</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-[44px] font-light leading-[1.05] text-ink-100 md:text-[88px]">
            A small atelier,
            <br />
            <span className="italic text-gold-300">a deliberate practice.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-[20px] font-light leading-relaxed text-ink-200">
            Velmora was founded on a simple belief: the most loved pieces of
            jewelry aren't the loudest — they're the ones you forget you're
            wearing, because they belong to you.
          </p>
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-900 md:aspect-[21/9]">
          <img
            data-strk-img-id="about-studio-1a7b"
            data-strk-img="[about-headline] [about-tag]"
            data-strk-img-ratio="21x9"
            data-strk-img-width="2000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Inside the Velmora studio on Mulberry Street"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span id="about-tag" className="hidden">Velmora studio interior warm low light</span>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {VALUES.map((v) => (
              <div key={v.title}>
                <Eyebrow tone="gold">·</Eyebrow>
                <h2 className="mt-4 font-serif text-[28px] font-light leading-tight text-ink-100 md:text-[32px]">
                  {v.title}
                </h2>
                <p className="mt-4 font-sans text-[14px] leading-relaxed text-ink-300">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="border-y border-ink-800 bg-ink-900 py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <Eyebrow tone="gold">Materials</Eyebrow>
              <h2 className="mt-4 font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[52px]">
                Plated like fine, priced like ours.
              </h2>
            </div>
            <div className="space-y-6 font-sans text-[14px] leading-relaxed text-ink-300">
              <p>
                Our base is brass — a stable, low-allergen metal that holds
                plating beautifully. On top, we lay 1.0 micron of 18K gold, the
                same thickness used in many fine houses, applied with a layered
                e-coat to slow wear.
              </p>
              <p>
                Stones are crystal and cubic zirconia cut to our specs, hand-set
                in our studio. We never use nickel, lead, or cadmium. Every
                alloy is tested before it reaches a customer.
              </p>
              <p>
                We don't use plastic, glass, or acrylic. We don't plate over
                mystery metals. When you know what your jewelry is made of,
                you wear it differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Eyebrow tone="gold">Timeline</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[52px]">
            Five years, one direction.
          </h2>
          <ol className="mt-14 divide-y divide-ink-800 border-y border-ink-800">
            {TIMELINE.map((t) => (
              <li key={t.year} className="grid grid-cols-[80px_1fr] gap-6 py-6 md:grid-cols-[120px_1fr]">
                <span className="font-serif text-[22px] font-light text-gold-300 md:text-[28px]">
                  {t.year}
                </span>
                <p className="font-sans text-[14px] leading-relaxed text-ink-200">
                  {t.label}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
