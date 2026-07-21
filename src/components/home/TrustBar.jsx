import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { text: 'Free Worldwide Shipping', icon: '🚚' },
    { text: '30-Day Returns', icon: '↩️' },
    { text: '18K Gold Plated', icon: '✨' },
    { text: 'Hypoallergenic', icon: '💎' }
  ];

  return (
    <div className="bg-[#FAF7F2] py-4 border-y border-[#C9A96E]/20">
      <div className="container-luxury">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-[#2C2C2C]">
              <span className="text-[#C9A96E]">{item.icon}</span>
              <span className="uppercase tracking-wider text-xs font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
