import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function BrandStory() {
  const [sectionRef, visible] = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-velmora-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className={`aspect-[4/5] overflow-hidden reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "0ms" }}>
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80"
              alt="Velmora Fine Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className={`max-w-md reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-text-secondary mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light leading-tight">
              Jewelry Crafted with
              <br />
              <span className="font-semibold">Intention</span>
            </h2>
            <div className="w-12 h-px bg-velmora-gold my-6" />
            <p className="font-sans text-sm md:text-base text-velmora-text-secondary leading-relaxed">
              Velmora was born from a belief that fine jewelry should be
              accessible without compromise. Every piece is crafted in 18K gold
              plated over sterling silver, designed to transition seamlessly
              from day to night, and made to be treasured for years to come.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-text-secondary leading-relaxed mt-4">
              We partner with ethical manufacturers who share our commitment to
              quality craftsmanship, responsible sourcing, and timeless design.
              No fast fashion. No compromise. Just jewelry you'll love to wear.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-hover transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}