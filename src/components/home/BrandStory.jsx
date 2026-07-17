import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-section text-velmora-text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-velmora-text-secondary leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                We craft demi-fine pieces that bridge the gap between luxury and accessibility—pieces designed to be worn every day, treasured for a lifetime.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio and crafted with care using ethically sourced materials. We believe in slow fashion, quality over quantity, and jewelry that tells your story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-velmora-accent hover:text-velmora-accent-hover transition-colors border-b border-velmora-accent pb-1"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}