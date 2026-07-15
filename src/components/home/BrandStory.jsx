import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-200 overflow-hidden order-1">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Velmora jewelry on display"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warm-900 font-light leading-tight">
              Designed with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="w-12 h-px bg-gold-400 mt-6 mb-6" />
            <p className="text-sm md:text-base text-warm-600 font-sans leading-relaxed">
              Velmora was born from a simple belief: fine jewelry shouldn't be
              reserved for special occasions. Every piece is crafted with
              premium 18K gold plating, ethically sourced materials, and an
              unwavering commitment to quality — so you can feel extraordinary
              every single day.
            </p>
            <p className="mt-4 text-sm md:text-base text-warm-600 font-sans leading-relaxed">
              From our atelier to you, each design is a quiet celebration of
              elegance, made to be worn, layered, and loved for years to come.
            </p>
            <div className="mt-8">
              <Link
                to="#"
                className="inline-block text-xs tracking-[0.15em] uppercase text-warm-800 border-b border-warm-400 pb-0.5 hover:text-gold-700 hover:border-gold-600 transition-colors font-sans font-medium"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}