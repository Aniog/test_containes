import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-cream-200 py-4 border-y border-linen">
      <div className="container-luxury">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.text}
              className="flex items-center gap-2 text-sm text-taupe"
            >
              <feature.icon className="w-4 h-4 text-gold" />
              <span className="font-sans">{feature.text}</span>
              {index < features.length - 1 && (
                <span className="hidden md:inline text-linen">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
