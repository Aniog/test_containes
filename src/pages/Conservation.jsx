import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Thermometer, Droplets, Wind, TreePine, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const threats = [
  {
    id: 'threat-glaciers',
    icon: Thermometer,
    title: 'Glacial Retreat',
    desc: 'Over 90% of the world\'s glaciers are shrinking. The Himalayas alone have lost 40% of their ice volume since 1975, threatening freshwater supplies for over 2 billion people.',
    stat: '40%',
    statLabel: 'Himalayan ice lost since 1975',
    imgId: 'threat-glaciers-img-x4y5',
  },
  {
    id: 'threat-biodiversity',
    icon: TreePine,
    title: 'Biodiversity Loss',
    desc: 'Alpine species are migrating upslope as temperatures rise — but many have nowhere left to go. Snow leopards, mountain gorillas, and hundreds of endemic plants face extinction.',
    stat: '1,700+',
    statLabel: 'Alpine species at risk',
    imgId: 'threat-biodiversity-img-y5z6',
  },
  {
    id: 'threat-water',
    icon: Droplets,
    title: 'Water Security',
    desc: 'Mountains are the "water towers of the world." As glaciers disappear, seasonal water flows become unpredictable, threatening agriculture, hydropower, and drinking water.',
    stat: '2B+',
    statLabel: 'People dependent on mountain water',
    imgId: 'threat-water-img-z6a7',
  },
  {
    id: 'threat-weather',
    icon: Wind,
    title: 'Extreme Weather',
    desc: 'Climate change is intensifying mountain weather events — more frequent avalanches, flash floods, and rockfalls are endangering communities and ecosystems.',
    stat: '3×',
    statLabel: 'Increase in extreme weather events',
    imgId: 'threat-weather-img-a7b8',
  },
];

const initiatives = [
  { id: 'init-1', title: 'Glacier Monitoring Network', desc: 'A global network of scientists tracking glacier mass balance, providing critical data for climate models and policy decisions.', imgId: 'init-1-img-b8c9' },
  { id: 'init-2', title: 'Alpine Reforestation', desc: 'Restoring native tree lines and vegetation to stabilize slopes, sequester carbon, and rebuild habitat corridors for wildlife.', imgId: 'init-2-img-c9d0' },
  { id: 'init-3', title: 'Community Resilience', desc: 'Supporting mountain communities in adapting to climate change through sustainable livelihoods, eco-tourism, and traditional knowledge.', imgId: 'init-3-img-d0e1' },
];

const Conservation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="cons-hero-bg-e1f2"
          data-strk-bg="[cons-hero-subtitle] [cons-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/65" />
        <div className="relative z-10 text-center px-4">
          <p id="cons-hero-subtitle" className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3">
            Protect Our Peaks
          </p>
          <h1 id="cons-hero-title" className="font-playfair font-bold text-4xl md:text-6xl text-white">
            Mountain Conservation
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-snow py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-peak mb-6">
            Mountains Are in Crisis
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Mountain ecosystems cover 27% of the Earth's land surface and are home to 15% of the world's population. They are among the most sensitive indicators of climate change — and among the most threatened. The time to act is now.
          </p>
        </div>
      </section>

      {/* Threats */}
      <section className="bg-summit py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-peak">
              The Threats We Face
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map((threat) => {
              const Icon = threat.icon;
              return (
                <div key={threat.id} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
                  <div className="md:w-48 shrink-0 aspect-video md:aspect-auto overflow-hidden">
                    <img
                      alt={threat.title}
                      data-strk-img-id={threat.imgId}
                      data-strk-img={`[${threat.id}-desc] [${threat.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-amber-peak" />
                        <h3 id={`${threat.id}-title`} className="font-playfair font-bold text-lg text-peak">
                          {threat.title}
                        </h3>
                      </div>
                      <p id={`${threat.id}-desc`} className="text-stone text-sm leading-relaxed">
                        {threat.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-glacier">
                      <span className="font-playfair font-bold text-2xl text-alpine">{threat.stat}</span>
                      <span className="text-stone text-xs ml-2">{threat.statLabel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-snow py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-pine font-semibold text-sm uppercase tracking-widest mb-2">
              Taking Action
            </p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-peak">
              Conservation Initiatives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((init) => (
              <div key={init.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={init.title}
                    data-strk-img-id={init.imgId}
                    data-strk-img={`[${init.id}-desc] [${init.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`${init.id}-title`} className="font-playfair font-bold text-lg text-peak mb-2">
                    {init.title}
                  </h3>
                  <p id={`${init.id}-desc`} className="text-stone text-sm leading-relaxed">
                    {init.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Every action counts. Whether you donate, volunteer, or simply spread the word — you can help protect mountains for future generations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-pine px-8 py-4 rounded-full font-semibold hover:bg-glacier transition-all duration-300"
          >
            Get Involved <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Conservation;
