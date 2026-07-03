import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-[0.05em] text-charcoal">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="about-img-1-g7h8i9"
              data-strk-img="[about-heading] Velmora jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-heading" className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-charcoal mb-4">Crafted with Intention</h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              Velmora was founded on a simple premise: that beautiful, well-made jewelry shouldn't come with an extravagant price tag. We work directly with artisans, cutting out the middlemen, so we can offer demi-fine quality at accessible prices.
            </p>
            <p className="text-warm-gray leading-relaxed mb-4">
              Every piece in our collection is 18K gold plated over a solid brass base, hypoallergenic, and designed to be worn every day — not saved for special occasions.
            </p>
            <p className="text-warm-gray leading-relaxed">
              We believe in quiet luxury: the kind that speaks through craftsmanship, not logos. The kind that makes you feel put-together, even on the most ordinary Tuesday.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 md:mb-24">
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">18K</h3>
            <p className="text-xs tracking-[0.1em] uppercase text-warm-gray">Gold Plated</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">100%</h3>
            <p className="text-xs tracking-[0.1em] uppercase text-warm-gray">Hypoallergenic</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">30</h3>
            <p className="text-xs tracking-[0.1em] uppercase text-warm-gray">Day Returns</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
