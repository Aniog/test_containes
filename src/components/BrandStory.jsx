import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden bg-velmora-warm">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-wide">
              Our Story
            </h2>
            <div className="w-24 h-px bg-velmora-gold mb-8" />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions.
              Every day is worth celebrating, and every woman deserves to feel adorned.
            </p>
            <p>
              Our demi-fine pieces bridge the gap between precious and accessible — crafted with
              18K gold plating, designed for everyday wear, and priced for real life. Each piece
              is thoughtfully created to become a treasured part of your personal collection.
            </p>
            <p>
              From our studio to your jewelry box, we're committed to sustainable practices,
              ethical sourcing, and creating pieces that tell your unique story.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block border-2 border-velmora-charcoal text-velmora-charcoal px-8 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-velmora-charcoal hover:text-white transition-all duration-300"
          >
            Discover Our Journey
          </Link>
        </div>
      </div>
    </section>
  );
}