import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velmora-charcoal">
          <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/80 to-velmora-charcoal" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase font-medium mb-3">Our Story</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-light">
            Jewelry That <span className="italic">Speaks to You</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-velmora-muted text-base sm:text-lg leading-relaxed mb-6">
              Velmora Fine Jewelry was founded with a singular vision: to create beautifully crafted demi-fine jewelry that feels luxurious, without the inaccessible price tag. We believe that every woman deserves to adorn herself with pieces that spark joy and confidence — every single day.
            </p>
            <p className="text-velmora-muted text-base sm:text-lg leading-relaxed mb-6">
              Our collection is crafted from premium base metals, finished with 18K gold plating and hand-set crystals. Each piece is designed to be hypoallergenic, tarnish-resistant, and comfortable enough to wear from morning to night.
            </p>
            <p className="text-velmora-muted text-base sm:text-lg leading-relaxed mb-6">
              We draw inspiration from the intersection of classic elegance and modern minimalism — the quiet confidence of a perfectly proportioned huggie, the understated sparkle of a crystal pendant, the warmth of gold against skin.
            </p>
            <p className="text-velmora-muted text-base sm:text-lg leading-relaxed mb-8">
              Velmora is for the woman who knows that true luxury isn't about the price — it's about how it makes you feel.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-velmora-gold-dark transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-velmora-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-center text-velmora-charcoal mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { title: 'Craftsmanship', desc: 'Every piece is carefully designed and quality-checked to meet our exacting standards.' },
              { title: 'Accessibility', desc: 'Premium materials and design, offered at a price point that respects your budget.' },
              { title: 'Sustainability', desc: 'We use recycled metals where possible and plastic-free packaging for every order.' },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-velmora-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-velmora-gold text-xl">✦</span>
                </div>
                <h3 className="font-serif text-xl text-velmora-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-velmora-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
