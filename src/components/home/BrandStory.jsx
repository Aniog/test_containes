import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in delay-200">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">
              Our Story
            </h2>
            <div className="hairline mb-6" style={{ maxWidth: '60px' }} />
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Founded with a passion for creating jewelry that transcends trends, 
              Velmora represents the intersection of timeless elegance and modern sensibility. 
              Each piece is thoughtfully designed to become a cherished part of your personal story.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Our demi-fine collections feature ethically sourced materials and expert craftsmanship, 
              ensuring that every item not only looks beautiful but stands the test of time. 
              We believe in jewelry that feels like an extension of you—effortless, elegant, and enduring.
            </p>
            <Link 
              to="/about" 
              className="btn-outline inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
