import { Globe, RefreshCw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal text-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-3.5">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium tracking-wide">
              <Icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="text-velmora-sand/80">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}