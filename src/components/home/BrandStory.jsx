import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section bg-[var(--color-cream-dark)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-gold)] hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mt-4 mb-6">
              Jewelry with Purpose
            </h2>
            <div className="space-y-4 text-[var(--color-charcoal-light)] leading-relaxed">
              <p>
                Founded in 2018, Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                We craft each piece with intention, using only the finest materials and timeless designs that transcend seasonal trends. Our demi-fine jewelry is designed to be worn every day, becoming a part of your personal story.
              </p>
              <p>
                Every item in our collection is thoughtfully created to bring joy and confidence to those who wear it. We believe in the power of subtle elegance—the kind that catches the light and the eye in equal measure.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider border-b border-[var(--color-charcoal)] pb-1 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}