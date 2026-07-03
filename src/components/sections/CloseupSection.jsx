import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const closeups = [
  {
    id: 'red-blood',
    title: 'Red Blood Cells',
    desc: 'Human red blood cells under scanning electron microscope',
    imgId: 'closeup-rbc-mc060',
    titleId: 'closeup-rbc-title',
    descId: 'closeup-rbc-desc',
  },
  {
    id: 'snowflake',
    title: 'Ice Crystal',
    desc: 'Microscopic ice crystal snowflake structure',
    imgId: 'closeup-ice-mc061',
    titleId: 'closeup-ice-title',
    descId: 'closeup-ice-desc',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing',
    desc: 'Microscopic scales on butterfly wing iridescent structure',
    imgId: 'closeup-butterfly-mc062',
    titleId: 'closeup-butterfly-title',
    descId: 'closeup-butterfly-desc',
  },
  {
    id: 'salt-crystal',
    title: 'Salt Crystal',
    desc: 'Sodium chloride salt crystal cubic structure macro photography',
    imgId: 'closeup-salt-mc063',
    titleId: 'closeup-salt-title',
    descId: 'closeup-salt-desc',
  },
  {
    id: 'spider-silk',
    title: 'Spider Silk',
    desc: 'Spider silk thread microscopic structure strongest natural fiber',
    imgId: 'closeup-silk-mc064',
    titleId: 'closeup-silk-title',
    descId: 'closeup-silk-desc',
  },
  {
    id: 'eye-compound',
    title: 'Compound Eye',
    desc: 'Insect compound eye microscopic hexagonal facets structure',
    imgId: 'closeup-eye-mc065',
    titleId: 'closeup-eye-title',
    descId: 'closeup-eye-desc',
  },
];

const CloseupSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="closeups" className="bg-cosmos-bg py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Extreme Close-Ups
          </span>
          <h2
            id="closeup-section-title"
            className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-4"
          >
            Familiar Things, Unseen Details
          </h2>
          <p
            id="closeup-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Everyday objects reveal extraordinary complexity when viewed at microscopic scale.
          </p>
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {closeups.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden group border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-300 aspect-square"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [closeup-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 id={item.titleId} className="text-cosmos-text font-bold">{item.title}</h3>
                  <p id={item.descId} className="text-cosmos-muted text-xs mt-1">{item.desc}</p>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="bg-cosmos-bg/70 backdrop-blur-sm text-cosmos-text text-xs font-semibold px-2 py-1 rounded-lg">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloseupSection;
