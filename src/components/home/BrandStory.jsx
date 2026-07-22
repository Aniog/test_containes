import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-gold/10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs tracking-widest text-velmora-gold uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-3">
              Jewelry with Purpose
            </h2>
            <div className="mt-6 space-y-4">
              <p className="font-sans text-sm text-velmora-charcoal/70 leading-relaxed">
                Founded with a vision to make fine jewelry accessible, Velmora bridges the gap 
                between luxury and everyday elegance. Each piece is thoughtfully designed to 
                become a cherished part of your personal story.
              </p>
              <p className="font-sans text-sm text-velmora-charcoal/70 leading-relaxed">
                Our demi-fine collections feature premium materials—18K gold plating, genuine 
                crystals, and ethically sourced gemstones—crafted with the attention to detail 
                typically reserved for high-end fine jewelry.
              </p>
              <p className="font-sans text-sm text-velmora-charcoal/70 leading-relaxed">
                We believe jewelry should be worn, not saved for special occasions. That's why 
                we create pieces that transition seamlessly from day to night, from casual to 
                formal, becoming your everyday treasures.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-block mt-8 font-sans text-sm tracking-widest text-velmora-charcoal border-b border-velmora-charcoal/30 pb-1 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}