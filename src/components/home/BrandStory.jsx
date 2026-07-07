import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-velmora-ivory/30 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal">
              Our Story
            </h2>
            <div className="w-16 h-px bg-velmora-gold mt-4 mb-6" />
            
            <div className="space-y-4 text-velmora-charcoal/70 leading-relaxed">
              <p>
                Founded with a passion for timeless elegance, Velmora Fine Jewelry 
                represents the perfect balance between luxury and accessibility. Each 
                piece is thoughtfully designed to become a treasured part of your 
                personal jewelry collection.
              </p>
              <p>
                Our demi-fine jewelry is crafted with 18K gold plating and premium 
                materials, ensuring lasting beauty that complements your everyday 
                moments and special occasions alike.
              </p>
              <p>
                We believe jewelry should tell a story — yours. From the first piece 
                you wear to the heirlooms you'll pass down, Velmora is here for every 
                chapter.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-widest text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-300 border-b border-velmora-gold/30 hover:border-velmora-gold pb-1"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}