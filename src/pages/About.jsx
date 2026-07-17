import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-velmora-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Our Story
          </h1>
          <p className="font-sans text-velmora-charcoal/60 max-w-2xl mx-auto">
            Crafting jewelry that celebrates life's precious moments
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-gold">Since 2020</span>
              <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mt-4 mb-6">
                The Velmora Journey
              </h2>
              <div className="space-y-4 font-sans text-velmora-charcoal/70 leading-relaxed">
                <p>
                  Velmora was born from a simple belief: everyone deserves to feel special. We set out to create demi-fine jewelry that bridges the gap between everyday accessories and fine jewelry—pieces that feel luxurious without the exclusive price tag.
                </p>
                <p>
                  Our name, derived from the Latin "vel" (to cover/veil) and "mora" (moments), reflects our mission: to add a touch of elegance to life's every moment. Whether it's a gift for someone you love or a treat for yourself, we believe every piece should be treasured.
                </p>
                <p>
                  Each Velmora piece is designed in our studio and crafted with care using quality materials. We use 18K gold plating over sterling silver, ensuring your jewelry remains beautiful for years to come. Every item is hypoallergenic, so you can wear your treasures with comfort and confidence.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] bg-velmora-sand overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop"
                alt="Velmora jewelry collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-velmora-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-velmora-sand rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl text-velmora-gold">✦</span>
              </div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Quality First</h3>
              <p className="font-sans text-sm text-velmora-charcoal/60">
                We never compromise on materials. Every piece is made with 18K gold plating and hypoallergenic components.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-velmora-sand rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl text-velmora-gold">♥</span>
              </div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Thoughtful Design</h3>
              <p className="font-sans text-sm text-velmora-charcoal/60">
                Our pieces are designed to be timeless—styles you'll treasure for years, not just one season.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-velmora-sand rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl text-velmora-gold">☁</span>
              </div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Quiet Luxury</h3>
              <p className="font-sans text-sm text-velmora-charcoal/60">
                We believe in understated elegance—pieces that speak softly but say so much.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-velmora-ivory mb-6">
            Ready to Find Your Treasure?
          </h2>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}