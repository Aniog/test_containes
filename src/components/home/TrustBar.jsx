import { Globe, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

export function TrustBar() {
  const benefits = [
    { icon: Globe, text: "Free Worldwide Shipping" },
    { icon: RefreshCw, text: "30-Day Returns" },
    { icon: Sparkles, text: "18K Gold Plated" },
    { icon: ShieldCheck, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-[#FAF9F5] border-b border-[#E5E0D8] py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center text-center space-y-3">
                <Icon className="w-5 h-5 text-[#A68D47]" strokeWidth={1.5} />
                <span className="font-sans text-xs uppercase tracking-widest text-[#2D2A26]/80 font-medium">
                  {benefit.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}