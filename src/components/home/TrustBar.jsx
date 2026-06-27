import React from 'react';
import { Truck, RefreshCw, Shield, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      subtitle: "On orders over $50"
    },
    {
      icon: RefreshCw,
      title: "30-Day Returns",
      subtitle: "No questions asked"
    },
    {
      icon: Shield,
      title: "18K Gold Plated",
      subtitle: "Premium quality"
    },
    {
      icon: Sparkles,
      title: "Hypoallergenic",
      subtitle: "Safe for sensitive skin"
    }
  ];

  return (
    <section className="bg-velmora-cream py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-5 h-5 text-velmora-gold" />
              <div>
                <p className="text-sm font-medium text-velmora-text">
                  {item.title}
                </p>
                <p className="text-xs text-velmora-text-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
