import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-velmora-beige overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-10 md:py-0 md:pl-16 lg:pl-24">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-taupe mb-4">
            Our Story
          </p>
          <h2 className="heading-lg text-velmora-base mb-6">
            Jewelry That Lives<br />With You
          </h2>
          <div className="space-y-4 text-velmora-taupe text-sm leading-relaxed max-w-md">
            <p>
              Velmora was born from a simple belief: that fine jewelry shouldn't be locked away for special occasions. Every piece we create is designed to be worn, loved, and lived in — from morning coffee to midnight celebrations.
            </p>
            <p>
              We work directly with artisan workshops to craft each piece in 18K gold-plated brass, using ethically sourced materials and hypoallergenic finishes. No middlemen, no markups — just exceptional jewelry at an honest price.
            </p>
          </div>
          <Link to="/shop" className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors font-medium">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}