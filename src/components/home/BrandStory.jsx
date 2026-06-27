import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-[0.2em] uppercase text-gold mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel confident, beautiful, and uniquely herself.
              </p>
              <p>
                Founded with a passion for accessible luxury, we craft each piece with the same attention to detail as fine jewelry, but at a price point that allows you to collect and share.
              </p>
              <p>
                Our designs blend timeless elegance with modern sensibility, creating pieces that transition effortlessly from day to evening, from office to occasion.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium tracking-wider uppercase text-gold hover:text-gold-dark transition-colors group"
            >
              Learn More About Us
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
