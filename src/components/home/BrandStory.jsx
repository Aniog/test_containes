import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-beige">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-velmora-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                We craft each piece with intention, using only the finest 18K gold plating and ethically sourced materials. Our designs blend timeless elegance with modern sensibility, creating jewelry that transitions effortlessly from day to night.
              </p>
              <p>
                More than just accessories, our pieces become treasured companions—witnessing your stories, celebrating your moments, and becoming part of who you are.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-velmora-charcoal font-medium hover:text-velmora-gold transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}