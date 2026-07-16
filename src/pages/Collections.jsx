import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      name: "Signature",
      desc: "Our foundational pieces, designed to be worn every day.",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      count: "12 pieces"
    },
    {
      name: "Lumina",
      desc: "Crystal-embellished designs that catch the light beautifully.",
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      count: "8 pieces"
    },
    {
      name: "Heritage",
      desc: "Inspired by vintage silhouettes, reimagined for today.",
      img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      count: "6 pieces"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-16 text-center">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-3">CURATED WITH CARE</p>
          <h1 className="font-serif text-5xl tracking-[0.05em]">Collections</h1>
        </div>

        <div className="space-y-6">
          {collections.map((col, i) => (
            <Link key={i} to="/shop" className="group grid md:grid-cols-2 gap-8 items-center border border-[#E5DFD4] p-8 hover:border-[#B8976F] transition-colors">
              <div className="aspect-[16/10] bg-[#F5F1EA] overflow-hidden">
                <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] text-[#B8976F] mb-2">{col.count}</p>
                <h3 className="font-serif text-4xl tracking-[0.05em] mb-4">{col.name}</h3>
                <p className="text-[#6B665F] mb-6 max-w-md">{col.desc}</p>
                <span className="btn btn-outline text-sm inline-block">Explore Collection</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;