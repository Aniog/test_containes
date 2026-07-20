import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[#FDFCFB] border-y border-gray-100 py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span>{item}</span>
            {index < items.length - 1 && (
              <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
EOF > /workspace/my-app/src/components/home/TrustBar.jsx
import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[#FDFCFB] border-y border-gray-100 py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span>{item}</span>
            {index < items.length - 1 && (
              <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
