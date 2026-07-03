// Velmora Fine Jewelry - Trust Bar Component
import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    {
      icon: Truck,
      text: 'Free Worldwide Shipping',
    },
    {
      icon: RotateCcw,
      text: '30-Day Returns',
    },
    {
      icon: Gem,
      text: '18K Gold Plated',
    },
    {
      icon: Heart,
      text: 'Hypoallergenic',
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-4">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {features.map((feature, index) => (
            <React.Fragment key={feature.text}>
              <div className="flex items-center gap-3 text-white">
                <feature.icon size={18} strokeWidth={1.5} className="text-[#B8860B]" />
                <span
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {feature.text}
                </span>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block w-px h-4 bg-white/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
