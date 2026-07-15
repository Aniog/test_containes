import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Truck,
      text: 'Free Worldwide Shipping',
    },
    {
      icon: RotateCcw,
      text: '30-Day Returns',
    },
    {
      icon: Shield,
      text: '18K Gold Plated',
    },
    {
      icon: Heart,
      text: 'Hypoallergenic',
    },
  ];

  return (
    <section className="bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 py-2"
            >
              <item.icon className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium text-neutral-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}