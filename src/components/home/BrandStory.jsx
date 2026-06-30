import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-dark-charcoal">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80"
              alt="Craftsmanship detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.15em] text-warm-gold font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-charcoal font-light leading-[1.15] mb-6">
              Jewelry Made with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              <p>
                Velmora was born from a belief that fine jewelry shouldn&apos;t be
                reserved for special occasions. Every piece is designed to be
                your everyday companion — crafted with care, plated in 18K gold,
                and finished with a level of detail that rivals traditional fine
                jewelry.
              </p>
              <p>
                From our studio to your doorstep, we control every step of the
                process to ensure quality without compromise. No markups, no
                middlemen — just beautiful jewelry at honest prices.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.15em] text-dark-charcoal border-b border-dark-charcoal pb-0.5 hover:text-warm-gold hover:border-warm-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}