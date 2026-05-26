import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Shield, Leaf, Wrench, Heart, Trophy } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Unmatched Performance',
    desc: 'Every bike is engineered for peak efficiency — whether you\'re sprinting on asphalt or climbing steep trails.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Premium materials and rigorous quality control ensure your bike withstands years of hard riding.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Commuting',
    desc: 'Reduce your carbon footprint and enjoy the city without traffic jams or parking headaches.',
  },
  {
    icon: Wrench,
    title: 'Expert Support',
    desc: 'Our certified mechanics and support team are always ready to help you tune and maintain your ride.',
  },
  {
    icon: Heart,
    title: 'Ride for Wellness',
    desc: 'Cycling improves cardiovascular health, mental clarity, and overall well-being — one pedal at a time.',
  },
  {
    icon: Trophy,
    title: 'Award-Winning Designs',
    desc: 'Our bikes have won multiple industry awards for innovation, aesthetics, and rider experience.',
  },
];

export default function WhyBikes() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="why" ref={containerRef} className="bg-[#111111] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden h-[480px]">
            <img
              alt="Why choose bikes"
              data-strk-img-id="why-img-h7i8j9"
              data-strk-img="[why-subtitle] [why-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl p-4">
              <p className="text-3xl font-extrabold text-orange-500">50,000+</p>
              <p className="text-sm text-neutral-400 mt-1">Riders trust VeloRide</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Why Choose Us</span>
            <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-neutral-100 mt-3 mb-4">
              More Than Just a Bike
            </h2>
            <p id="why-subtitle" className="text-neutral-400 leading-relaxed mb-10">
              We believe cycling is a lifestyle. From the first pedal stroke to the thousandth mile, VeloRide is your partner on every journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-100 mb-1">{reason.title}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
