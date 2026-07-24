import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-sub] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-28">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-soft">
          Demi-fine · 18k gold plated
        </p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-cream md:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-sub"
          className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-cream/85 md:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          Demi-fine gold earrings, necklaces and huggies — hypoallergenic, waterproof,
          and made to move with you, every day.
        </p>
        <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4" style={{ animationDelay: '360ms' }}>
          <Link
            to="/shop"
            className="inline-flex h-13 items-center gap-2 bg-gold-deep px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
          >
            Shop the collection
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/about"
            className="inline-flex h-13 items-center border border-cream/50 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
          >
            Our story
          </Link>
        </div>
      </div>
    </section>
  )
}
