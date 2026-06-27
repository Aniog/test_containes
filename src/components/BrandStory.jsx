import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-velmora-gold)' }}>
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wider mt-4 mb-6">
              Jewelry That Tells Your Story
            </h2>
            <p className="text-velmora-text-muted leading-relaxed mb-6">
              Founded in 2018, Velmora was born from a simple belief: every woman deserves 
              jewelry that makes her feel extraordinary, without compromise. We create demi-fine 
              pieces that bridge the gap between accessible luxury and timeless elegance.
            </p>
            <p className="text-velmora-text-muted leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed in our studio and crafted 
              with care using ethically sourced materials. Our 18K gold-plated jewelry is 
              made to be worn every day — a quiet luxury that becomes part of your personal narrative.
            </p>
            <Link 
              to="/about"
              className="inline-block text-sm tracking-widest border-b pb-1 transition-colors hover:opacity-70"
              style={{ 
                borderColor: 'var(--color-velmora-gold)',
                color: 'var(--color-velmora-gold)'
              }}
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}