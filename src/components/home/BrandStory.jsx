import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-spacing bg-[var(--color-secondary-dark)]">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-sm text-[var(--color-muted)] tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="heading-serif text-4xl md:text-5xl mt-4">
              Crafted with Intention
            </h2>
            <div className="w-16 h-px bg-[var(--color-accent)] mt-6" />
            
            <p className="mt-8 text-[var(--color-muted)] leading-relaxed">
              At Velmora, we believe jewelry is more than an accessory—it's a memory, 
              a statement, a treasure to be passed down. Each piece in our collection 
              is thoughtfully designed and crafted with quality materials that stand 
              the test of time.
            </p>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              Our demi-fine jewelry bridges the gap between everyday elegance and 
              luxury, making beautiful pieces accessible to the modern woman who 
              deserves to feel extraordinary.
            </p>
            
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