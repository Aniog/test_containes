import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-[#F7F2EA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
            Praise
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1410] tracking-tight">
            What women are saying.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-[#EFE7DA] border border-[#1A1410]/5 p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-6 text-[#B8924A]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8924A]" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed text-[#1A1410] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#8B7D6B]">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
