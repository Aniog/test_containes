import { Truck, ShieldCheck, Gem, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: ShieldCheck, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Sparkles, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#f0ece7] py-6 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:justify-between items-center text-sm font-medium tracking-wide uppercase text-foreground/80">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}