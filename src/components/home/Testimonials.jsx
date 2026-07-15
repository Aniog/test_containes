import Stars from "@/components/ui/Stars";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28 border-t border-tan/40">
      <div className="container-editorial">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow text-gold-deep">What they're saying</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
              Words from <em className="italic text-mauve font-normal">our wearers</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="bg-ivory p-8 md:p-10 h-full flex flex-col">
                <Stars value={t.rating} size={14} className="mb-5" />
                <blockquote className="font-serif italic text-xl md:text-[22px] leading-snug text-ink flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-tan/60">
                  <p className="text-sm font-medium text-ink">
                    {t.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-eyebrow text-mauve mt-1">
                    Verified buyer
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
