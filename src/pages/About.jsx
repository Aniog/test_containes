import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85"
              alt="Velmora jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-velmora-gold text-xs tracking-widest uppercase font-sans mb-4">
              About Velmora
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-velmora-ebony leading-tight">
              Jewelry for the
              <br />
              <span className="italic">Thoughtful</span>
            </h1>
            <div className="mt-6 space-y-4 text-sm text-velmora-pewter leading-relaxed font-sans">
              <p>
                Velmora was born from a simple belief: that fine jewelry should
                be an everyday pleasure, not a once-in-a-lifetime purchase.
              </p>
              <p>
                We design demi-fine pieces that bridge the gap between costume
                jewelry and fine heirlooms. Every piece is crafted with 18K gold
                plating over brass, and each stone is ethically sourced.
              </p>
              <p>
                Our name draws from{" "}
                <span className="italic">velum</span> (veil) and{" "}
                <span className="italic">mora</span> (delay) — a quiet
                reminder that beauty reveals itself slowly, intentionally.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {[
            { title: "Quality", desc: "18K gold plating over brass. Every piece is hand-inspected before it reaches you." },
            { title: "Ethics", desc: "We partner with responsible suppliers who share our commitment to ethical sourcing and fair labor." },
            { title: "Design", desc: "Our in-house design team creates pieces that are timeless, not trendy — built to last for years." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-xl tracking-wider uppercase text-velmora-ebony">
                {v.title}
              </h3>
              <p className="text-sm text-velmora-pewter mt-3 leading-relaxed font-sans">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Explore Our Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}