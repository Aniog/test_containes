import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { BadgeCheck, Building2, Users, Globe, Award, Headphones } from 'lucide-react';

const trustPoints = [
  { icon: Building2, text: 'Registered in Guangzhou, China' },
  { icon: Users, text: '10+ years sourcing experience' },
  { icon: Globe, text: 'Served 500+ buyers across 30+ countries' },
  { icon: BadgeCheck, text: 'Verified supplier network of 2,000+ factories' },
  { icon: Award, text: 'ISO 9001 quality management certified' },
  { icon: Headphones, text: 'Dedicated account manager for each client' },
];

export default function TrustSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-16 md:py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="trust-bg-d4e5f6"
        data-strk-bg="[trust-subtitle] [trust-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose SSourcing China
          </h2>
          <p id="trust-subtitle" className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are not a trading platform. We are your on-the-ground partner in China.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div key={point.text} className="flex items-start gap-3 text-white">
              <point.icon className="w-6 h-6 text-primary-foreground/80 mt-0.5 shrink-0" />
              <span className="text-base font-medium">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}