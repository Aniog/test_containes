import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shield, Globe, Award } from 'lucide-react';

const stats = [
  { value: '1,733', label: 'km² National Park' },
  { value: '5,700+', label: 'Komodo Dragons' },
  { value: '1,000+', label: 'Marine Species' },
  { value: '29', label: 'Islands' },
];

const highlights = [
  {
    icon: Shield,
    title: 'UNESCO World Heritage',
    desc: 'Designated in 1991, Komodo National Park is one of the world\'s most important conservation areas.',
  },
  {
    icon: Globe,
    title: 'Unique Biodiversity',
    desc: 'Home to the legendary Komodo dragon — the world\'s largest living lizard — alongside manta rays, sea turtles, and vibrant coral reefs.',
  },
  {
    icon: Award,
    title: 'New 7 Wonders of Nature',
    desc: 'Voted one of the New Seven Wonders of Nature, Komodo captivates adventurers and nature lovers from around the globe.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 px-4 md:px-8 bg-mist">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-coral text-sm font-semibold tracking-widest uppercase">About the Destination</span>
          <h2 id="about-title" className="font-serif font-bold text-3xl md:text-5xl text-ocean mt-3 mb-5">
            Where Dragons Meet the Sea
          </h2>
          <p id="about-subtitle" className="text-stone/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Nestled in the heart of the Indonesian archipelago, Komodo National Park is a realm unlike any other —
            where prehistoric creatures roam volcanic hillsides and the ocean teems with extraordinary life.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              alt="Komodo National Park landscape"
              data-strk-img-id="about-img-a4b5c6"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-3 shadow-lg">
              <p className="text-ocean font-serif font-bold text-lg leading-none">Est. 1980</p>
              <p className="text-stone/70 text-xs mt-1">National Park Founded</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-stone mb-1">{item.title}</h3>
                  <p className="text-stone/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-sand-dark/30"
            >
              <p className="font-serif font-bold text-3xl text-ocean mb-1">{stat.value}</p>
              <p className="text-stone/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
