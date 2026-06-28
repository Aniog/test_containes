import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const VALUES = [
  {
    id: "small-batch",
    title: "Small batches",
    body: "We make in runs of fifty or fewer, so every piece is touched by a human hand before it reaches yours.",
  },
  {
    id: "recycled",
    title: "Recycled metals",
    body: "Plated in 18K gold over recycled brass and sterling silver, with traceable suppliers.",
  },
  {
    id: "lifetime",
    title: "Lifetime repair",
    body: "Loose stones, broken clasps, dulled plating — bring it back to us. We'll restore it for life.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-[#F7F2EA]">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden bg-[#1A1410] text-[#F7F2EA]">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-about-hero-bg-001"
          data-strk-bg="[about-headline] jewelry atelier workshop hands gold warm light"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-[#1A1410]/55" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-10 h-full flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#D9BE85] mb-5">
            Our Story
          </p>
          <h1
            id="about-headline"
            className="font-serif font-light text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-3xl"
          >
            Quietly made,
            <br />
            <em className="italic text-[#D9BE85]">deeply worn.</em>
          </h1>
        </div>
      </section>

      {/* Letter */}
      <section className="max-w-3xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="space-y-6 text-lg leading-relaxed text-[#3D332A]">
          <p className="font-serif italic text-2xl md:text-3xl text-[#1A1410] leading-snug">
            We started Velmora because we couldn't find jewelry we wanted to wear every day.
          </p>
          <p>
            Fine jewelry felt precious and locked away. Fast jewelry felt loud and disposable.
            We wanted something in between — pieces that look like heirlooms but feel like everyday
            companions. Pieces you could swim in, sleep in, and pass on.
          </p>
          <p>
            So we opened a small studio in Lisbon, partnered with two metalsmiths who'd been at
            their bench for twenty years, and started making. We plate in 18K gold over recycled
            brass and sterling. We hand-set every stone. We wrap every order in linen.
          </p>
          <p>
            Velmora is small on purpose. It always will be.
          </p>
          <p className="font-serif italic text-[#8E6E33] pt-4">
            — Inês &amp; Clara, Founders
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EFE7DA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {VALUES.map((v) => (
            <div key={v.id}>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
                {v.title}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1A1410] mb-4 leading-snug">
                {v.title}
              </h3>
              <p className="text-[#3D332A] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-[#1A1410] mb-8 tracking-tight">
          Come find <em className="italic text-[#8E6E33]">yours</em>.
        </h2>
        <Link
          to="/shop"
          className="inline-block bg-[#B8924A] hover:bg-[#8E6E33] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-10 transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
