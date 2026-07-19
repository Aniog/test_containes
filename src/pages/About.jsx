import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="bg-cream border-b border-sand">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
            Quiet luxury, made to be lived in.
          </h1>
          <p className="mt-6 text-base text-taupe leading-relaxed">
            Velmora began with a simple belief: that fine gold jewelry should
            be warm enough for the everyday and considered enough for the
            unforgettable.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden bg-espresso">
          <img
            alt="Velmora atelier"
            className="w-full h-full object-cover"
            data-strk-img-id="about-img-1"
            data-strk-img="jewelry maker atelier hands gold craft warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            Designed in studio
          </h2>
          <p className="mt-5 text-sm text-taupe leading-relaxed">
            Each piece begins as a sketch in our studio, then is refined into a
            form that feels inevitable — the kind of jewelry you reach for
            without thinking. We work directly with our makers, so demi-fine
            quality stays at an honest price.
          </p>
          <p className="mt-4 text-sm text-taupe leading-relaxed">
            Every design is finished in 18K gold plate over a hypoallergenic
            base, made to be worn and re-worn.
          </p>
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { n: "18K", l: "Gold Plated" },
            { n: "30-Day", l: "Easy Returns" },
            { n: "100%", l: "Hypoallergenic" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-5xl text-gold">{s.n}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ivory/70">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink">
          Find your everyday gold.
        </h2>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center px-9 py-4 bg-gold text-ivory uppercase tracking-[0.18em] text-xs hover:bg-gold-deep transition-colors"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
