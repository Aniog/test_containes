import { Link } from 'react-router-dom'
import { Reveal } from '@/hooks/useReveal'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-espresso">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7c2e91"
        data-strk-bg="[hero-sub] [hero-title] [brand-tagline] warm-lit close-up gold jewelry on model skin editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-deep/55 via-espresso-deep/25 to-espresso-deep/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-32 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-soft">
            Demi-Fine · 18K Gold
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-wide text-cream md:text-7xl"
          >
            Crafted to be
            <span className="block italic text-gold-soft">Treasured</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p id="hero-sub" className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-warm/90 md:text-lg">
            Everyday heirlooms in 18K gold — designed to be lived in, layered, and loved for years.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="w-full bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold-deep sm:w-auto"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="w-full border border-cream/35 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream transition-colors hover:border-gold-soft hover:text-gold-soft sm:w-auto"
            >
              Our Story
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-cream/50 to-transparent" />
      </div>
    </section>
  )
}
