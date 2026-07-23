import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold" />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <span className="text-xs font-medium uppercase tracking-ui text-gold mb-4 block">
              Our Story
            </span>
            
            <h2
              className="text-3xl md:text-4xl text-charcoal mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              Jewelry That Tells Your Story
            </h2>

            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                At Velmora, we believe every piece of jewelry should be more than an accessory—it should be a chapter in your personal story. Our demi-fine collections are crafted with the utmost care, featuring 18K gold plating over hypoallergenic stainless steel.
              </p>
              <p>
                Founded with a passion for making luxury accessible, we design pieces that transition seamlessly from everyday elegance to special occasions. Each piece is designed to be treasured, worn, and loved for years to come.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs font-medium uppercase tracking-ui text-charcoal hover:text-gold transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
