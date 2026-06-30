import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      title: "Signature",
      desc: "Our foundational pieces. Timeless silhouettes designed to be worn every day.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80",
    },
    {
      title: "Lumina",
      desc: "Crystal-embellished designs that catch the light. For moments that deserve to shine.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
    },
    {
      title: "Heritage",
      desc: "Inspired by vintage silhouettes. Reimagined with modern craftsmanship.",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-12 text-center border-b border-[#E8E4DC]">
          <p className="text-xs tracking-[0.15em] text-[#C5A26F]">CURATED WITH CARE</p>
          <h1 className="serif text-5xl tracking-[0.02em] mt-3">Collections</h1>
        </div>

        <div className="space-y-20 pt-16">
          {collections.map((col, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="aspect-[16/10] bg-[#E8E4DC] overflow-hidden">
                  <img src={col.image} alt={col.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h2 className="serif text-4xl tracking-[0.02em] mb-4">{col.title}</h2>
                <p className="text-[#5A5548] leading-relaxed mb-8 max-w-md">{col.desc}</p>
                <Link to="/shop" className="btn-outline">Explore Collection</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
