import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="section-padding py-12 md:py-20 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-6xl tracking-wide mb-8">
          Velmora Fine Jewelry
        </h1>
        <div className="space-y-5 text-velmora-stone leading-relaxed text-left md:text-center">
          <p>
            Founded in 2019, Velmora was created to bridge the gap between costume jewelry and fine jewelry. We believe that every woman deserves to wear pieces that feel special, look luxurious, and do not break the bank.
          </p>
          <p>
            Our design studio is based in New York City, where we draw inspiration from the city's energy, architecture, and diverse style. Each collection is thoughtfully curated to offer versatile pieces that transition seamlessly from day to night.
          </p>
          <p>
            Sustainability is at the heart of what we do. We use recycled metals wherever possible, our packaging is fully recyclable, and we are committed to ethical manufacturing practices across our supply chain.
          </p>
        </div>
        <div className="mt-12">
          <Link to="/shop" className="btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>

      <div className="section-padding py-12 md:py-20 bg-velmora-sand">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '18K', label: 'Gold Plated' },
            { number: '30', label: 'Day Returns' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl md:text-5xl text-velmora-dark mb-2">{stat.number}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-stone">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
