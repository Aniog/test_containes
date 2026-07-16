import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const trustItems = [
  { label: 'Free Worldwide Shipping', icon: Truck },
  { label: '30-Day Returns', icon: RotateCcw },
  { label: '18K Gold Plated', icon: Shield },
  { label: 'Hypoallergenic', icon: Heart },
];

export default function TrustBar() {
  const sectionRef = useRevealOnScroll();

  return (
    <div className="bg-[#1a1714] text-[#faf8f5]" ref={sectionRef}>
      <div className="container-padding">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 reveal">
          {trustItems.map((item, index) => (
            <div key={item.label} className={`flex items-center gap-2 text-xs tracking-wider reveal reveal-delay-${index + 1}`}>
              <item.icon className="w-4 h-4 text-[#c9a96e]" />
              <span className="text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
