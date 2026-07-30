import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Recycle, Droplets, Leaf, Globe } from 'lucide-react';

const initiatives = [
  {
    icon: Recycle,
    title: 'Clear Bottles',
    description: 'In 2019, Sprite switched to clear PET bottles, making them easier to recycle and reducing plastic waste.',
  },
  {
    icon: Droplets,
    title: 'Water Stewardship',
    description: 'Sprite is committed to replenishing water in communities where it operates, protecting this vital resource.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Ingredients',
    description: 'We source our lemon and lime flavors from suppliers who follow responsible agricultural practices.',
  },
  {
    icon: Globe,
    title: 'Carbon Reduction',
    description: 'Sprite is part of Coca-Cola\'s global commitment to reduce carbon emissions across the entire value chain.',
  },
];

export default function Sustainability() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="sustainability" className="py-24 bg-sprite-dark" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sprite-lime font-bold uppercase tracking-widest text-sm mb-3 font-poppins">
            Our Commitment
          </p>
          <h2
            id="sustain-title"
            className="text-5xl md:text-6xl font-black text-white uppercase font-poppins leading-tight"
          >
            Refreshing<br />
            <span className="text-sprite-lime">The Planet</span>
          </h2>
          <p
            id="sustain-subtitle"
            className="text-white/70 text-lg mt-4 max-w-xl mx-auto font-poppins"
          >
            Sprite believes refreshment should be good for you and the world. Here's how we're making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {initiatives.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-sprite-lime/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-sprite-lime" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 font-poppins">{item.title}</h3>
                <p className="text-white/70 font-poppins leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '100%', label: 'Recyclable Packaging' },
            { value: '60+', label: 'Years of Refreshment' },
            { value: '190+', label: 'Countries Worldwide' },
            { value: '#1', label: 'Lemon-Lime Soda' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-sprite-lime font-poppins">{stat.value}</p>
              <p className="text-white/60 text-sm font-medium mt-1 font-poppins uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
