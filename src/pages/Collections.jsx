import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    { name: "Signature", desc: "Our most beloved everyday pieces", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Heritage", desc: "Inspired by vintage silhouettes", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
    { name: "Lumina", desc: "Crystal-embellished statement jewelry", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-[1100px] mx-auto px-6 py-16 text-center">
        <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-3">Curated</div>
        <h1 className="font-serif text-5xl tracking-[-0.01em] mb-4">Collections</h1>
        <p className="text-[#5A5A5A] max-w-md mx-auto">Each collection tells a story of quiet luxury and timeless design.</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-20 grid md:grid-cols-3 gap-5">
        {collections.map((col, idx) => (
          <Link key={idx} to="/shop" className="group block">
            <div className="aspect-[4/3] bg-[#0F0F0F] overflow-hidden mb-5">
              <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="font-serif text-2xl tracking-[0.05em] mb-1">{col.name}</div>
            <p className="text-[#5A5A5A]">{col.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collections;
