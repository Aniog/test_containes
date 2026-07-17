import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=900&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="velmora-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">Our Story</h1>
            <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto">
              Where elegance meets everyday luxury
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <p className="text-muted leading-relaxed mb-6">
          Velmora was founded with a singular vision: to make luxury jewelry accessible without compromising on quality or design.
          Our name draws from "vel" — the Latin root for beautiful — and "mora," evoking the timeless elegance of precious moments.
        </p>
        <p className="text-muted leading-relaxed mb-6">
          Every piece in our collection is designed in-house by our team of artisans who believe that jewelry should be both
          beautiful and wearable. We use 18K gold plating over sterling silver bases, ensuring each piece has the weight,
          feel, and luster of fine jewelry at a fraction of the cost.
        </p>
        <p className="text-muted leading-relaxed mb-12">
          Our commitment to hypoallergenic materials means our jewelry is safe for sensitive skin. We never use nickel or
          other common irritants, so you can wear your Velmora pieces with confidence from morning to night.
        </p>

        <hr className="velmora-divider my-12" />

        <h2 className="velmora-heading text-2xl sm:text-3xl mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {[
            { title: 'Quality First', desc: '18K gold plating over sterling silver, built to last.' },
            { title: 'Accessible Luxury', desc: 'Premium design without the premium markup.' },
            { title: 'Skin-Safe', desc: 'Hypoallergenic, nickel-free, made for sensitive skin.' },
            { title: 'Sustainable', desc: 'Responsible sourcing and eco-conscious packaging.' },
          ].map((value) => (
            <div key={value.title}>
              <h3 className="velmora-heading-uppercase text-sm mb-2">{value.title}</h3>
              <p className="text-sm text-muted">{value.desc}</p>
            </div>
          ))}
        </div>

        <hr className="velmora-divider my-12" />

        <div className="text-center">
          <h2 className="velmora-heading text-2xl sm:text-3xl mb-4">Join the Velmora Family</h2>
          <p className="text-muted mb-8">Discover pieces that speak to your unique style.</p>
          <Link to="/shop" className="velmora-btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
