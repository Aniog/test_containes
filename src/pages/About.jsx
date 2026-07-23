import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <section className="bg-cocoa-900 text-cream-50">
        <div className="container-editorial py-20 md:py-28">
          <p className="eyebrow-light text-gold-300 mb-3">Our story</p>
          <h1 className="font-serif font-light text-cream-50 text-[44px] md:text-[80px] leading-[1.02] max-w-3xl">
            Fine jewelry,{" "}
            <span className="italic text-gold-300">without</span> the
            fine jewelry price.
          </h1>
          <p className="mt-8 text-cream-100/85 text-lg max-w-2xl font-light">
            Velmora was started in 2021 in a small studio in Lisbon, by two
            sisters who believed a piece you wear every day shouldn't cost a
            month's rent.
          </p>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-editorial py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-cocoa-800">
                <img
                  alt="Velmora studio workspace"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-studio-7a3b9d"
                  data-strk-img="[about-body] [about-title] Velmora studio workspace editorial"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                />
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2 md:pl-8">
              <p className="eyebrow mb-4">Why we make</p>
              <h2
                id="about-title"
                className="font-serif font-light text-ink-900 text-[36px] md:text-[52px] leading-[1.04]"
              >
                Made to be <span className="italic">worn</span>, not saved.
              </h2>
              <p
                id="about-body"
                className="mt-6 text-ink-700 text-base md:text-lg leading-relaxed font-light"
              >
                We work with a small atelier in Lisbon to make demi-fine 18K
                gold plated jewelry that looks like the real thing, feels like
                the real thing, and lives in your collection for years.
              </p>
              <p className="mt-4 text-ink-700 text-base md:text-lg leading-relaxed font-light">
                Every piece is hypoallergenic, hand-finished, and made to be
                lived in — not locked in a box for someday.
              </p>
              <Link to="/shop" className="btn-outline mt-8">
                Shop the collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 border-t border-cream-200 py-20 md:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Made in small batches",
                body: "We make in runs of a few hundred — never thousands — so each piece gets the attention it deserves.",
              },
              {
                title: "Hypoallergenic by design",
                body: "A nickel-free brass core, finished in 18K gold plating and an e-coat that slows tarnish.",
              },
              {
                title: "Honestly priced",
                body: "No middlemen, no retail markup, no marketing fluff. Just jewelry, fairly priced.",
              },
            ].map((p) => (
              <div key={p.title}>
                <p className="eyebrow text-gold-600 mb-3">—</p>
                <h3 className="font-serif text-[26px] md:text-[30px] text-ink-900 leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-700 text-base leading-relaxed font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
