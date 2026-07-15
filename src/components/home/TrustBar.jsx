import React from 'react';

const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-[#F5F0E8] py-4 border-y border-[#B8956C]/20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {features.map((feature, index) => (
            <React.Fragment key={feature}>
              <div className="flex items-center gap-2">
                {/* Gold dot */}
                <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-full" />
                <span className="text-xs md:text-sm uppercase tracking-wider text-[#8B8178]">
                  {feature}
                </span>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block w-px h-4 bg-[#B8956C]/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
