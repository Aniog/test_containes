import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--velmora-gold)] rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-sm tracking-widest uppercase text-[var(--velmora-taupe)] mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-charcoal)] mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <p className="text-[var(--velmora-gray-600)] text-lg leading-relaxed mb-6">
              At Velmora, we believe every woman deserves to feel extraordinary. Our demi-fine pieces are handcrafted with intention, combining timeless elegance with modern sensibility.
            </p>
            <p className="text-[var(--velmora-gray-600)] leading-relaxed mb-8">
              Each design is a celebration of life's moments—big and small. From everyday treasures to meaningful gifts, Velmora jewelry becomes part of your personal narrative.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[var(--velmora-charcoal)] hover:text-[var(--velmora-gold)] transition-colors group"
            >
              <span className="text-sm tracking-wider uppercase">Learn More</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
