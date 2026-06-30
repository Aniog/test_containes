import React from 'react';
import { Link } from 'react-router-dom';

export default function TrustBar() {
  const trustItems = [
    { text: 'Free Worldwide Shipping', subtext: 'On orders over $75' },
    { text: '30-Day Returns', subtext: 'No questions asked' },
    { text: '18K Gold Plated', subtext: 'Premium quality' },
    { text: 'Hypoallergenic', subtext: 'Safe for sensitive skin' },
  ];

  return (
    <section className="bg-velmora-warm-white border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3"
            >
              <div className="w-1 h-1 bg-velmora-gold rounded-full" />
              <div>
                <p className="font-sans text-sm font-medium tracking-wide">
                  {item.text}
                </p>
                <p className="font-sans text-xs text-velmora-text-secondary">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
