import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { label: 'Free Worldwide Shipping', icon: '🚚' },
    { label: '30-Day Returns', icon: '↩️' },
    { label: '18K Gold Plated', icon: '✨' },
    { label: 'Hypoallergenic', icon: '💎' },
  ];

  return (
    <div className="bg-[#F5F0EB] py-4 border-y border-[#E8E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm tracking-wider uppercase"
              style={{ color: '#6B5E54' }}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
