import React from 'react';
import { Globe, RefreshCcw, ShieldCheck, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: <Globe size={20} strokeWidth={1} />, text: 'Free Worldwide Shipping' },
    { icon: <RefreshCcw size={20} strokeWidth={1} />, text: '30-Day Returns' },
    { icon: <ShieldCheck size={20} strokeWidth={1} />, text: '18K Gold Plated' },
    { icon: <Heart size={20} strokeWidth={1} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="border-b border-[var(--color-brand-stone)] bg-[var(--color-brand-white)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-transparent md:divide-[var(--color-brand-stone)]">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs uppercase tracking-widest text-[var(--color-brand-charcoal)]">
              <span className="text-[var(--color-brand-gold-dark)] mb-1 md:mb-0">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;