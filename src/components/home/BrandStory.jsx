import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="overflow-hidden rounded-xl bg-brand-warm">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
            alt="Velmora brand story"
            className="h-72 md:h-[480px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="section-title">Our Story</h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Velmora was born from a simple belief: fine jewelry should feel attainable, personal, and timeless. We design each piece to be worn daily — not saved for occasions — using responsibly sourced materials and considered craftsmanship.
          </p>
          <p className="mt-4 text-brand-muted leading-relaxed">
            From our studio to your jewelry box, we obsess over the details so you can enjoy the moment.
          </p>
          <Link to="/about" className="mt-6 inline-block text-sm font-semibold text-brand-ink underline underline-offset-4 decoration-brand-line hover:text-brand-accent">
            Read more
          </Link>
        </div>
      </div>
    </section>
  )
}
