import StarRating from '@/components/ui/StarRating'
import Reveal from '@/components/ui/Reveal'
import { TESTIMONIALS } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Kind Words</p>
          <h2 className="mt-4 font-display text-3xl font-light text-espresso md:text-5xl">
            From Our Community
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col border border-line bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(43,33,24,0.35)] md:p-10">
                <StarRating rating={5} size="w-4 h-4" />
                <blockquote className="mt-5 flex-1 font-display text-xl font-light italic leading-relaxed text-cocoa">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-line pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">{t.name}</p>
                  <p className="mt-1 text-xs text-taupe">Verified buyer · {t.product}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
