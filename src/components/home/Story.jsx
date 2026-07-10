import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { storySVG } from "@/data/placeholders";
import { useReveal } from "@/lib/useReveal";

export default function Story() {
  const ref = useReveal();
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-5 sm:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal relative aspect-[4/5] overflow-hidden bg-cream-200">
            <img
              src={storySVG()}
              alt="Velmora craft — a hand-finished gold cuff in soft light"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-end justify-between text-cream">
              <span className="text-[0.6rem] tracking-widest2 uppercase font-sans">
                Vol. 04 — Crafted in small batches
              </span>
            </div>
          </div>

          <div className="reveal md:pl-4 lg:pl-12">
            <p className="eyebrow mb-5">Our story</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] mb-7">
              Fine-feeling jewelry, priced for the everyday.
            </h2>
            <div className="space-y-5 text-[15px] leading-relaxed text-sand-600 font-sans">
              <p>
                Velmora began with a quiet frustration: jewelry that looked like an occasion, but
                was priced like one too. We wanted pieces you could sleep in, shower-adjacent to,
                and stack five of — without thinking twice.
              </p>
              <p>
                Every Velmora piece is hand-finished in 18K gold plating over a hypoallergenic brass
                core, with the same care and weight you'd expect from a small atelier. Made in
                small batches. Designed to last.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-9 text-[0.7rem] tracking-widest2 uppercase text-ink hover:text-gold transition-colors font-sans font-medium border-b border-ink hover:border-gold pb-1"
            >
              Read more
              <ArrowRight size={14} strokeWidth={1.6} />
            </Link>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
              <Stat n="18K" label="Gold plated" />
              <Stat n="30d" label="Returns" />
              <Stat n="120+" label="Styles & counting" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <p className="font-serif text-3xl text-ink leading-none mb-1.5">{n}</p>
      <p className="text-[10.5px] tracking-widest2 uppercase text-sand-600 font-sans">
        {label}
      </p>
    </div>
  );
}
