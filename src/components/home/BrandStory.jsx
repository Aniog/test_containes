import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
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
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Story
            </h2>
            <div className="hairline my-6" />
            <p className="font-sans text-charcoal/80 leading-relaxed mb-6">
              Founded with a passion for creating jewelry that feels both luxurious and 
              accessible, Velmora represents the art of quiet elegance. Each piece is 
              thoughtfully designed to become a treasured part of your personal story.
            </p>
            <p className="font-sans text-charcoal/80 leading-relaxed mb-8">
              Our demi-fine collections blend timeless design with modern sensibility, 
              using only the finest materials including 18K gold plating and 
              hypoallergenic components. We believe beautiful jewelry should be 
              within reach for every woman.
            </p>
            <Link
              to="/about"
              className="btn-outline inline-flex items-center gap-2 group"
            >
              Learn More
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}