import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-30 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 className="font-serif text-h2 text-secondary mb-6">Our Story</h2>
            <p className="text-body text-secondary-text leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
            </p>
            <p className="text-body text-secondary-text leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio and crafted with care using premium 18K gold plating and ethically sourced materials. We believe in jewelry that tells a story — yours.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-secondary pb-1 text-body font-medium hover:text-accent hover:border-accent transition-smooth"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}