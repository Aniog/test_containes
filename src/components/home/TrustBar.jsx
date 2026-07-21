import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { icon: '📦', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '💎', text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-gray-50 py-4 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm tracking-wide text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
