import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-section-mobile md:py-section bg-surface border-y border-border">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                We craft demi-fine pieces that bridge the gap between fashion and fine jewelry—using genuine 18K gold plating, precious gemstones, and meticulous craftsmanship.
              </p>
              <p>
                Each piece in our collection is designed to be treasured, worn, and loved for years to come. Because luxury shouldn't be a once-in-a-while occasion—it should be your everyday.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold uppercase tracking-widest text-sm hover:text-gold-light transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;