import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-hairline/30">
            <img
              src="https://images.unsplash.com/photo-1515562141589-67f0b816c832?w=900&q=80"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl text-charcoal font-semibold mb-6 leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
              Jewelry That Tells
              <br />
              Your Story
            </h2>
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <p className="text-taupe text-base leading-relaxed mb-4 font-light">
              At Velmora, we believe fine jewelry should be accessible without compromise. Each piece is meticulously crafted using premium materials — 18K gold plating over brass, genuine cubic zirconia, and hypoallergenic components — designed to be worn daily and treasured forever.
            </p>
            <p className="text-taupe text-base leading-relaxed mb-8 font-light">
              Inspired by heirloom-quality design and made for the modern woman, our collections bridge the gap between luxury and everyday elegance. No excess. No pretense. Just timeless beauty.
            </p>
            <Link
              to="/about"
              className="inline-block border border-charcoal text-charcoal uppercase tracking-[0.2em] text-sm px-8 py-3.5 hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}