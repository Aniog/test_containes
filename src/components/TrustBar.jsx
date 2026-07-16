import React from 'react';
import { ShieldCheck, Truck, RotateCcw, AlertTriangle } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: <Truck size={18} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={18} />, text: '30-Day Returns' },
    { icon: <ShieldCheck size={18} />, text: '18K Gold Plated' },
    { icon: <AlertTriangle size={18} className="rotate-180" />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-velmora-stone py-3 border-y border-border/50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center text-velmora-charcoal">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <span className="text-velmora-charcoal/70">{feature.icon}</span>
              <span className="tracking-wide uppercase text-[11px]">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile View - Scrolling Banner */}
        <div className="md:hidden overflow-hidden whitespace-nowrap relative">
          <div className="animate-marquee inline-block">
            {/* Double the array for seamless scrolling */}
            {[...features, ...features].map((feature, index) => (
              <span key={index} className="inline-flex items-center space-x-2 mx-6 text-velmora-charcoal">
                <span className="text-velmora-charcoal/70">{feature.icon}</span>
                <span className="tracking-wide uppercase text-[11px]">{feature.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TrustBar;