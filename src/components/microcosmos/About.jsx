import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Globe, Zap } from 'lucide-react';

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1T+', label: 'Microbes per gram of soil' },
  { value: '37T', label: 'Cells in the human body' },
  { value: '99%', label: 'Life invisible to naked eye' },
];

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Life',
    desc: 'Bacteria, archaea, and protists form the foundation of all life on Earth, thriving in every environment imaginable.',
  },
  {
    icon: Globe,
    title: 'Hidden Ecosystems',
    desc: 'From deep-sea hydrothermal vents to the human gut, entire ecosystems exist beyond the reach of the naked eye.',
  },
  {
    icon: Zap,
    title: 'Invisible Forces',
    desc: 'Microscopic organisms drive the planet\'s nutrient cycles, shape our climate, and sustain all macroscopic life.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-gray-950 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-widest font-semibold mb-3">
            What Is MicroCosmos?
          </p>
          <h2
            id="about-title"
            className="text-3xl md:text-5xl font-bold text-white mb-5"
          >
            The World You Cannot See
          </h2>
          <p
            id="about-subtitle"
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Beneath every surface, inside every drop of water, and within every breath of air lies a teeming universe of microscopic life — ancient, diverse, and endlessly fascinating.
          </p>
        </div>

        {/* Two-column layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="space-y-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Microscopic life under a microscope"
              className="w-full h-full object-cover"
              data-strk-img-id="about-img-d4e5f6"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">{value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
