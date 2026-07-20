import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-secondary/50 border-b border-zinc-100 py-3 px-6 overflow-hidden">
      <div className="flex justify-center md:gap-12 gap-6 items-center flex-wrap whitespace-nowrap">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <span className="text-[10px] md:text-xs uppercase-spaced text-zinc-500">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-zinc-300 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
