import React from 'react';
import { Truck, RotateCcw, Shield, Gem } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal text-cream/80 py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...trustItems, ...trustItems].map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 whitespace-nowrap px-6 md:px-10"
          >
            <item.icon size={14} className="text-gold-500 flex-shrink-0" />
            <span className="text-xs uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
