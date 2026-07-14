import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-2a9f"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <h1
            id="about-hero-title"
            className="font-serif text-5xl text-ivory md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 max-w-xl text-sm text-ivory/85 md:text-base"
          >
            Quietly luxurious gold, made to be worn every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest2 text-gold">Est. 2021</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
          Fine jewelry, without the occasion.
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone">
          <p>
            Velmora was founded on a simple belief: that beautiful, fine-quality
            jewelry should not be reserved for special occasions. We design
            demi-fine pieces in 18K gold plating over sterling silver — warm,
            weighty, and quietly luxurious — the kind of gold you reach for
            every morning.
          </p>
          <p>
            Every piece is designed in our studio and hand-finished by skilled
            artisans. We use hypoallergenic, nickel-free materials so you can
            wear our jewelry all day, every day, without compromise.
          </p>
          <p>
            We believe in slow design over fast trends. Our collections are
            intentionally small, considered, and made to last far beyond the
            trend cycle — jewelry to be treasured, then passed on.
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/shop"
            className="bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold-soft"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
