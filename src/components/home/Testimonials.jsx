import { useRef } from "react";
import Stars from "@/components/ui/Stars";
import { TESTIMONIALS } from "@/data/site";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function Testimonials() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <section ref={containerRef} className="bg-ivory">
      <div className="mx-auto max-w-7.5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 text-center sm:mb-16">
          <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
            Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl">
            4.9 from 2,400+ reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col border border-line bg-bone/40 p-8 sm:p-10"
            >
              <Stars value={t.rating} size={14} className="text-gold" />
              <blockquote className="mt-6 font-serif text-xl leading-relaxed text-espresso sm:text-2xl">
                <span className="font-serif text-3xl italic text-gold-deep">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 font-sans text-[11px] uppercase tracking-wider-2 text-stone">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
