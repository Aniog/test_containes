import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-velmora-taupe leading-relaxed mb-6">
              Founded with a passion for creating jewelry that transcends trends, Velmora represents the essence of quiet luxury. Each piece is thoughtfully designed to become a treasured part of your personal style story.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8">
              We believe in the power of subtle elegance—jewelry that speaks volumes through its craftsmanship rather than its volume. Our demi-fine collections bridge the gap between everyday luxury and accessible sophistication.
            </p>
            <Link 
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 text-sm tracking-widest hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
