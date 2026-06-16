import Reveal from "@/components/ui/Reveal"
import { testimonials } from "@/data/site"

export default function Testimonials() {
  return (
    <section className="bg-ink-soft text-cream-soft py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass font-medium">
              <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
              From our customers
            </p>
            <h2 className="mt-5 font-display font-light text-3xl md:text-5xl leading-tight text-cream-soft">
              Words from the fabricators who run our machines.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-line-dark">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 100}
              className="bg-ink-soft p-7 md:p-9 flex flex-col"
            >
              <span className="font-display text-5xl text-brass/60 leading-none" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-4 text-cream-soft/90 text-lg leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <footer className="mt-8 pt-5 border-t border-line-dark">
                <p className="text-sm text-cream-soft font-medium">{t.name}</p>
                <p className="text-xs uppercase tracking-eyebrow text-cream-soft/60 mt-1">
                  {t.role}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
