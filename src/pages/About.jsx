import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-[72px] min-h-screen bg-velmora-cream">
      <div className="max-w-[800px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3 text-center">
          About Velmora
        </p>
        <h1 className="font-serif text-[32px] md:text-[48px] font-light text-velmora-charcoal mb-8 text-center leading-[1.15]">
          Jewelry That Feels Like You
        </h1>

        <div className="space-y-6 text-center mb-12">
          <p className="font-sans text-[15px] text-velmora-warm-gray leading-relaxed">
            Velmora was founded with a singular vision: to create demi-fine jewelry that bridges the gap between costume and fine jewelry. We believe every woman deserves pieces that feel special, look expensive, and do not require a special occasion.
          </p>
          <p className="font-sans text-[15px] text-velmora-warm-gray leading-relaxed">
            Our designs are inspired by the interplay of light and shadow, the architecture of old cities, and the quiet confidence of women who know their own style. Each piece is crafted from premium materials with meticulous attention to detail.
          </p>
          <p className="font-sans text-[15px] text-velmora-warm-gray leading-relaxed">
            We are committed to responsible production, using recycled metals where possible and ensuring fair working conditions throughout our supply chain. Our packaging is fully recyclable and designed to be kept.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { title: '18K Gold Plated', desc: 'Thick, durable plating over premium brass for lasting shine.' },
            { title: 'Hypoallergenic', desc: 'Nickel-free and kind to even the most sensitive skin.' },
            { title: 'Sustainable', desc: 'Recycled metals and eco-conscious packaging as standard.' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-[18px] font-medium text-velmora-charcoal mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] text-velmora-warm-gray leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 bg-velmora-charcoal text-white font-sans text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-velmora-charcoal-light transition-colors duration-300"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}