import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-pearl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="https://placehold.co/800x1000/ede6db/3d3530?text=Velmora+Brand+Story"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-velmora-gold text-xs font-medium tracking-editorial uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-charcoal tracking-wide leading-tight mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-sm text-velmora-ink leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
                Every piece in our collection is designed to be worn daily — to become part of your story.
              </p>
              <p>
                We work with skilled artisans who share our commitment to quality and sustainability. 
                Each design is thoughtfully crafted using 18K gold-plated brass and ethically sourced crystals, 
                finished by hand in small batches.
              </p>
              <p>
                The result is jewelry that feels luxurious, looks intentional, and fits seamlessly into your life.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              Read Our Full Story
              <span className="text-velmora-gold group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
