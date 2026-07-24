import { useStrkImages } from '@/hooks/useStrkImages'
import { trustBar } from '@/data/products'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-2c9f4a"
          data-strk-bg="[about-subtitle] [about-title] jewelry atelier warm editorial craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-cream-soft/80">Our Story</p>
          <h1
            id="about-title"
            className="mt-4 font-serif text-5xl text-cream-soft md:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-subtitle"
            className="mt-5 max-w-md text-sm text-cream-soft/85 md:text-base"
          >
            Demi-fine gold jewelry, designed in studio and made to be lived in.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-ink/10 bg-cream-soft">
        <div className="mx-auto flex max-w-content flex-col items-center divide-y divide-ink/10 px-6 py-5 sm:flex-row sm:divide-x sm:divide-y-0 md:px-10 lg:px-16">
          {trustBar.map((item) => (
            <div
              key={item}
              className="flex flex-1 items-center justify-center px-4 py-2 text-center text-[11px] uppercase tracking-widest2 text-ink-muted sm:py-0"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 lg:px-16">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">The Velmora Philosophy</p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          Quiet luxury, made to be lived in.
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-muted md:text-base">
          <p>
            Velmora began with a simple belief: that fine craftsmanship shouldn’t be reserved for
            rare occasions. Each piece is hand-finished in 18K gold plating over brass, designed in
            our studio and made to be worn every day — through mornings, meetings, and the moments
            worth marking.
          </p>
          <p>
            We work in small batches, with hypoallergenic materials and a commitment to pieces that
            last. No noise, no shortcuts — just jewelry crafted to be treasured. Our demi-fine
            approach means you get the warmth and weight of gold, at a price that feels considered.
          </p>
          <p>
            From the first sketch to the final polish, every Velmora piece is made to be a quiet
            companion — the kind you reach for without thinking, and keep for years.
          </p>
        </div>
      </section>

      {/* Image split */}
      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          <div className="relative aspect-[4x5] overflow-hidden bg-cream-deep">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="about-img1-8e2c1d"
              data-strk-img="gold jewelry hand finished craftsmanship atelier warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[4x5] overflow-hidden bg-cream-deep">
            <img
              alt="Velmora worn"
              data-strk-img-id="about-img2-3f7b9a"
              data-strk-img="gold jewelry worn on model warm editorial lifestyle"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
