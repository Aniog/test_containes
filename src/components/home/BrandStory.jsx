import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-sans text-sm font-medium tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-h2 lg:text-h3 text-charcoal mt-4">
              Crafted with Intention
            </h2>
            <div className="mt-6 space-y-4 text-warm-gray font-sans leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We create pieces that bridge the gap between fine jewelry and fashion accessories.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio and crafted by skilled artisans using ethically sourced materials. Our commitment to quality means jewelry that withstands the test of time—both in style and durability.
              </p>
              <p>
                We believe in quiet luxury: the kind that doesn't shout, but speaks volumes. Jewelry that's as versatile as you are, taking you from morning meetings to evening celebrations with effortless grace.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-block mt-8 text-gold font-sans font-medium text-sm tracking-wide border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}