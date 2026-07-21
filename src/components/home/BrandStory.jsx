import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-champagne/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-sans font-medium tracking-ultra-wide text-gold-600 uppercase">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
              Jewelry that tells<br />
              <span className="italic">your story</span>
            </h2>
            <p className="mt-6 text-taupe font-sans leading-relaxed">
              Founded with a simple belief: beautiful jewelry shouldn't be reserved for special occasions. 
              We create pieces that empower you to express yourself every day, at prices that feel as good as the jewelry looks.
            </p>
            <p className="mt-4 text-taupe font-sans leading-relaxed">
              Each Velmora piece is crafted with 18K gold plating over hypoallergenic metals, 
              ensuring you can wear your treasures with confidence and comfort.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-sans font-medium text-charcoal tracking-wide underline underline-offset-4 hover:text-gold-700 transition-colors"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
