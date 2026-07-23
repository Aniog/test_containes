import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#F5F0EB] py-4 border-y border-[#E5E5E5]">
      <div className="container-premium">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-lg">{item.icon}</span>
              <span className="trust-badge">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
