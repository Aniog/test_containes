import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'spot-title-01',
    imgId: 'spot-img-s1t2u3',
    title: 'Bioluminescent Dinoflagellates',
    tag: 'Marine Biology',
    desc: 'Single-celled marine organisms that produce their own light through chemical reactions, turning ocean waves into glowing blue fire at night.',
    fact: 'Can produce 10^10 photons per second',
  },
  {
    id: 'spot-title-02',
    imgId: 'spot-img-v4w5x6',
    title: 'Mycorrhizal Network',
    tag: 'Mycology',
    desc: 'The "Wood Wide Web" — a vast underground fungal network connecting tree roots across entire forests, enabling nutrient sharing and communication.',
    fact: 'One teaspoon of soil contains miles of fungal threads',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
            In Focus
          </p>
          <h2
            id="spot-section-title"
            className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-4"
          >
            Spotlight Features
          </h2>
          <p id="spot-section-desc" className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            Deep dives into the most fascinating phenomena of the microscopic world.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {spotlightItems.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`rounded-2xl overflow-hidden border border-cosmos-border aspect-[4x3] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  id={item.id}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}] [spot-section-desc] [spot-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width={700}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block bg-cosmos-accent/10 text-cosmos-accent text-xs px-3 py-1 rounded-full font-grotesk font-semibold border border-cosmos-accent/20 mb-4">
                  {item.tag}
                </span>
                <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-cosmos-text mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-cosmos-muted leading-relaxed mb-6">{item.desc}</p>
                <div className="bg-cosmos-card border border-cosmos-border rounded-xl p-4 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cosmos-accent mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cosmos-dim text-xs uppercase tracking-wider font-grotesk mb-1">Fascinating Fact</p>
                    <p className="text-cosmos-text text-sm font-medium">{item.fact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
