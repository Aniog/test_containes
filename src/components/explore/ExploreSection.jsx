import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn, Layers, Sparkles } from 'lucide-react';

const exploreItems = [
  {
    id: 'explore-blood',
    title: 'Blood Cells',
    desc: 'Red and white blood cells flowing through capillaries under microscope',
    imgId: 'explore-blood-6a4c2e',
    titleId: 'explore-blood-title',
    descId: 'explore-blood-desc',
  },
  {
    id: 'explore-butterfly',
    title: 'Butterfly Wing Scales',
    desc: 'Iridescent nano-structures on butterfly wing creating color patterns',
    imgId: 'explore-butterfly-9d1f7b',
    titleId: 'explore-butterfly-title',
    descId: 'explore-butterfly-desc',
  },
  {
    id: 'explore-snowflake',
    title: 'Snowflake Crystal',
    desc: 'Macro photography of ice crystal hexagonal symmetry formation',
    imgId: 'explore-snowflake-3e8a5c',
    titleId: 'explore-snowflake-title',
    descId: 'explore-snowflake-desc',
  },
  {
    id: 'explore-moss',
    title: 'Moss Spores',
    desc: 'Tiny moss sporophytes releasing spores into the air magnified',
    imgId: 'explore-moss-7c2d9f',
    titleId: 'explore-moss-title',
    descId: 'explore-moss-desc',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-cosmos-deeper">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-magenta font-medium text-sm tracking-widest uppercase mb-3">Deep Dive</p>
          <h2 id="explore-section-title" className="text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
            Explore the Unseen
          </h2>
          <p id="explore-section-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            From the structures of everyday objects to the building blocks of life itself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {exploreItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-magenta/30 transition-all duration-300"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [explore-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-cosmos-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={item.titleId} className="text-xl font-semibold text-cosmos-text mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-cosmos-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-cosmos-card border border-cosmos-border text-center">
            <ZoomIn className="w-10 h-10 text-cosmos-cyan mx-auto mb-4" />
            <h3 className="text-cosmos-text font-semibold text-lg mb-2">1,000,000x</h3>
            <p className="text-cosmos-muted text-sm">Maximum magnification with electron microscopy</p>
          </div>
          <div className="p-6 rounded-2xl bg-cosmos-card border border-cosmos-border text-center">
            <Layers className="w-10 h-10 text-cosmos-purple-light mx-auto mb-4" />
            <h3 className="text-cosmos-text font-semibold text-lg mb-2">37 Trillion</h3>
            <p className="text-cosmos-muted text-sm">Cells working together in the human body</p>
          </div>
          <div className="p-6 rounded-2xl bg-cosmos-card border border-cosmos-border text-center">
            <Sparkles className="w-10 h-10 text-cosmos-magenta mx-auto mb-4" />
            <h3 className="text-cosmos-text font-semibold text-lg mb-2">8.7 Million</h3>
            <p className="text-cosmos-muted text-sm">Estimated species on Earth, most microscopic</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
