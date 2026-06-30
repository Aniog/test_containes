import React from 'react';
import { Globe, RefreshCw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-midnight py-5">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-white/50">
              <item.icon className="w-3.5 h-3.5 text-warm-400" strokeWidth={1.5} />
              <span className="text-[11px] tracking-wider uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
