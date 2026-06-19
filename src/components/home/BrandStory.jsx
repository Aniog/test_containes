import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-taupe/20 overflow-hidden animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up delay-100">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
              Our Story
            </h2>
            <div className="hairline max-w-16 mt-4 mb-6" />
            
            <div className="space-y-4 text-velmora-charcoal/70 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry 
                that makes her feel extraordinary, without compromise. We create 
                demi-fine pieces that bridge the gap between accessible luxury and 
                timeless elegance.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio, 
                crafted with care using only the finest materials — 18K gold plating 
                on sterling silver, genuine crystals, and ethically sourced gemstones.
              </p>
              <p>
                We believe in jewelry that tells a story. Pieces that become heirlooms, 
                that witness your milestones, that you reach for again and again.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-block mt-8 btn-outline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}