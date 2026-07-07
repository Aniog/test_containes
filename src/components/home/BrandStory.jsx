import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl lg:text-4xl text-warm-dark mb-6 leading-tight">
              Made to Be<br />Worn, Loved,<br />and Passed Down
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
              At Velmora, we believe fine jewelry should be accessible without compromise. 
              Each piece is crafted with care using premium 18K gold plating and ethically 
              sourced materials — designed to withstand the rhythm of your everyday life.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              From our studio to your doorstep, every detail is considered: the weight of 
              the metal, the security of the clasp, the warmth of the gold against your skin. 
              This is jewelry made to be worn — and treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-warm-dark hover:text-gold transition-colors border-b border-warm-dark hover:border-gold pb-0.5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}