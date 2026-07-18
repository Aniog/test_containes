import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

export default function TrustBar() {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#2C2825] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-sm">
              <feature.icon className="w-4 h-4 text-[#D4A853]" />
              <span className="font-light">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
