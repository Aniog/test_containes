import { Globe, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1a1714] border-b border-[#2c2825]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-3.5">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={13} strokeWidth={1.5} className="text-[#c9a96e] flex-shrink-0" />
              <span className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#e8d5b0]/70">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-[#2c2825] ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
