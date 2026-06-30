import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-brand-warm">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-light leading-tight mb-6">
              Designed in New York,
              <br />
              <span className="italic font-medium">Crafted for You</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6" />

            <div className="space-y-4 text-brand-stone font-sans text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: everyday jewelry should
                feel extraordinary. We create demi-fine pieces that bridge the
                gap between costume jewelry and fine heirlooms.
              </p>
              <p>
                Every piece is crafted with 18K gold plating, hypoallergenic
                materials, and a dedication to quality that ensures your
                jewelry stays beautiful for years to come.
              </p>
              <p>
                No compromises. No shortcuts. Just jewelry you'll never want
                to take off.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-brand-dark font-sans text-sm uppercase tracking-[0.15em] border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}