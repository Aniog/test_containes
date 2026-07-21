import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="pt-20 sm:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#e8d5a3]">Our Story</p>
          <h1 className="velmora-heading-lg text-4xl sm:text-5xl md:text-6xl">
            The Velmora Way
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="text-lg leading-relaxed text-[#6b6560] mb-8">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible to everyone. We set out to create demi-fine pieces that bridge the gap between costume jewelry and luxury — offering the look and feel of high-end pieces at a price that makes everyday luxury possible.
          </p>

          <h2 className="velmora-heading text-2xl tracking-[0.1em] mt-12 mb-6">Our Philosophy</h2>
          <p className="text-[#6b6560] leading-relaxed mb-6">
            Every Velmora piece is designed in-house with meticulous attention to detail. We use 18K gold plating over premium base metals, ensuring our jewelry looks and feels luxurious while remaining affordable. Our hypoallergenic materials mean you can wear your favorite pieces all day, every day.
          </p>
          <p className="text-[#6b6560] leading-relaxed mb-6">
            We believe jewelry is more than an accessory — it's a form of self-expression, a memory keeper, a confidence booster. That's why we design pieces that transition seamlessly from boardroom to bar, from brunch to bedtime.
          </p>

          <h2 className="velmora-heading text-2xl tracking-[0.1em] mt-12 mb-6">Sustainability</h2>
          <p className="text-[#6b6560] leading-relaxed mb-6">
            We're committed to responsible production. Our packaging is made from recycled materials, and we partner with manufacturers who share our values of ethical labor practices and environmental responsibility.
          </p>

          <div className="bg-[#f3f0eb] p-8 my-12 text-center">
            <p className="velmora-heading-lg text-2xl italic mb-4">
              "Jewelry should be worn, not stored. Every piece we create is meant to be lived in."
            </p>
            <p className="text-sm text-[#6b6560]">— The Velmora Team</p>
          </div>

          <h2 className="velmora-heading text-2xl tracking-[0.1em] mt-12 mb-6">Our Promise</h2>
          <ul className="space-y-3 text-[#6b6560]">
            <li className="flex items-start gap-3">
              <span className="text-[#d4a853] mt-1">&#9670;</span>
              <span>18K gold plating that lasts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4a853] mt-1">&#9670;</span>
              <span>Hypoallergenic and nickel-free materials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4a853] mt-1">&#9670;</span>
              <span>30-day hassle-free returns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4a853] mt-1">&#9670;</span>
              <span>Free worldwide shipping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4a853] mt-1">&#9670;</span>
              <span>Beautiful gift-ready packaging</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            Explore Our Collection
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
