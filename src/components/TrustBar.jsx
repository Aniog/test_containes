import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-[#faf9f6] border-y border-[#e8e3dd] py-4">
      <div className="container-luxury">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-[#2d2d2d]">
              <span className="text-lg">{item.icon}</span>
              <span className="uppercase tracking-wider text-xs md:text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
