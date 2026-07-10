import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-velmora-creamDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-velmora-gold/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl text-velmora-charcoal">Our Story</h2>
            <div className="w-16 h-px bg-velmora-gold mt-4" />
            
            <div className="mt-8 space-y-6 text-velmora-charcoal/70 leading-relaxed">
              <p>
                Founded in 2018, Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromising on quality or breaking the bank.
              </p>
              <p>
                Our pieces are crafted with the utmost care, using only the finest materials — 18K gold plating, genuine crystals, and hypoallergenic metals. Each design is thoughtfully created to transcend trends and become a treasured part of your personal style story.
              </p>
              <p>
                We believe in quiet luxury — the kind that doesn't shout, but speaks volumes. Jewelry that becomes more than an accessory; it becomes a memory, a moment, a treasure.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block mt-8 px-8 py-3 border border-velmora-charcoal/20 text-velmora-charcoal font-sans text-sm tracking-wider hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}