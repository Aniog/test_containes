import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Droplets, Leaf, Bug, Dna } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Water Microbes',
    desc: 'Discover the teeming life in a single drop of pond water',
    color: 'text-blue-400',
  },
  {
    icon: Leaf,
    title: 'Plant Cells',
    desc: 'Explore the intricate architecture of photosynthetic cells',
    color: 'text-green-400',
  },
  {
    icon: Bug,
    title: 'Micro Arthropods',
    desc: 'Meet the tiny creatures invisible to the naked eye',
    color: 'text-amber-400',
  },
  {
    icon: Dna,
    title: 'DNA Structures',
    desc: 'Visualize the molecular blueprints of all living things',
    color: 'text-cosmos-purple-light',
  },
];

const showcaseImages = [
  {
    id: 'showcase-tardigrade',
    title: 'Tardigrade',
    desc: 'Water bear microscopic animal surviving extreme conditions',
    imgId: 'showcase-tardigrade-9c4f2a',
    titleId: 'showcase-tardigrade-title',
    descId: 'showcase-tardigrade-desc',
  },
  {
    id: 'showcase-radiolaria',
    title: 'Radiolaria',
    desc: 'Intricate silica skeleton of marine protozoa plankton',
    imgId: 'showcase-radiolaria-5b8e3d',
    titleId: 'showcase-radiolaria-title',
    descId: 'showcase-radiolaria-desc',
  },
  {
    id: 'showcase-virus',
    title: 'Virus Structure',
    desc: 'Three-dimensional rendering of viral capsid protein shell',
    imgId: 'showcase-virus-1d7a6c',
    titleId: 'showcase-virus-title',
    descId: 'showcase-virus-desc',
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cosmos-deeper">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-cosmos-magenta font-medium text-sm tracking-widest uppercase mb-3">What We Study</p>
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-cosmos-text mb-6">
              Worlds Within Worlds
            </h2>
            <p id="features-subtitle" className="text-cosmos-muted text-lg leading-relaxed mb-8">
              Every surface, every drop of water, every breath of air contains an entire universe of microscopic life. Our advanced imaging reveals the hidden beauty and complexity of these miniature ecosystems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="p-4 rounded-xl bg-cosmos-card border border-cosmos-border">
                  <feature.icon className={`w-6 h-6 ${feature.color} mb-3`} />
                  <h3 className="text-cosmos-text font-semibold mb-1">{feature.title}</h3>
                  <p className="text-cosmos-muted text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-cosmos-border h-64">
                <img
                  alt={showcaseImages[0].title}
                  data-strk-img-id={showcaseImages[0].imgId}
                  data-strk-img={`[${showcaseImages[0].descId}] [${showcaseImages[0].titleId}] [features-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <span id={showcaseImages[0].titleId} className="hidden">{showcaseImages[0].title}</span>
              <span id={showcaseImages[0].descId} className="hidden">{showcaseImages[0].desc}</span>

              <div className="rounded-2xl overflow-hidden border border-cosmos-border h-40">
                <img
                  alt={showcaseImages[1].title}
                  data-strk-img-id={showcaseImages[1].imgId}
                  data-strk-img={`[${showcaseImages[1].descId}] [${showcaseImages[1].titleId}] [features-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <span id={showcaseImages[1].titleId} className="hidden">{showcaseImages[1].title}</span>
              <span id={showcaseImages[1].descId} className="hidden">{showcaseImages[1].desc}</span>
            </div>

            <div className="pt-8">
              <div className="rounded-2xl overflow-hidden border border-cosmos-border h-40">
                <img
                  alt={showcaseImages[2].title}
                  data-strk-img-id={showcaseImages[2].imgId}
                  data-strk-img={`[${showcaseImages[2].descId}] [${showcaseImages[2].titleId}] [features-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <span id={showcaseImages[2].titleId} className="hidden">{showcaseImages[2].title}</span>
              <span id={showcaseImages[2].descId} className="hidden">{showcaseImages[2].desc}</span>

              <div className="mt-4 rounded-2xl overflow-hidden border border-cosmos-border h-64 relative">
                <div
                  className="absolute inset-0"
                  data-strk-bg-id="features-bg-8e3c1a"
                  data-strk-bg="[features-subtitle] [features-title]"
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-cosmos-text text-sm font-medium">Electron Microscopy</p>
                  <p className="text-cosmos-muted text-xs">Magnification: 50,000x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
