import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight">
              Jewelry That Honors
              <br />
              <span className="italic">the Everyday</span>
            </h2>
            <div className="w-12 h-px bg-gold my-6" />
            <p className="text-warm-gray leading-relaxed">
              Velmora was born from a belief that fine jewelry should not be 
              reserved for special occasions. We craft demi-fine pieces that 
              honor the everyday — the coffee runs, the dinner parties, the 
              quiet moments of confidence.
            </p>
            <p className="text-warm-gray leading-relaxed mt-4">
              Every piece is 18K gold plated, hypoallergenic, and designed 
              to be worn without thinking twice. Because luxury should feel 
              effortless.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.1em] uppercase text-charcoal hover:text-gold transition-colors group"
            >
              Read More
              <span className="inline-block w-6 h-px bg-charcoal group-hover:bg-gold transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}