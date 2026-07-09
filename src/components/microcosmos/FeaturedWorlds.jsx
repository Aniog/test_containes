import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-cells',
    imgId: 'world-img-cells-j1k2l3',
    titleId: 'world-cells-title',
    descId: 'world-cells-desc',
    title: 'Animal Cells',
    desc: 'Fluorescent microscopy of animal cells showing nucleus and organelles',
    tag: 'Biology',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '900',
  },
  {
    id: 'world-pollen',
    imgId: 'world-img-pollen-m4n5o6',
    titleId: 'world-pollen-title',
    descId: 'world-pollen-desc',
    title: 'Pollen Grains',
    desc: 'Colorful pollen grains under scanning electron microscope',
    tag: 'Botany',
    tagColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'world-snowflake',
    imgId: 'world-img-snowflake-p7q8r9',
    titleId: 'world-snowflake-title',
    descId: 'world-snowflake-desc',
    title: 'Snowflake Crystal',
    desc: 'Intricate geometric snowflake crystal macro photography',
    tag: 'Physics',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'world-diatom',
    imgId: 'world-img-diatom-s1t2u3',
    titleId: 'world-diatom-title',
    descId: 'world-diatom-desc',
    title: 'Diatoms',
    desc: 'Geometric diatom algae shells under light microscope',
    tag: 'Algae',
    tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'world-butterfly',
    imgId: 'world-img-butterfly-v4w5x6',
    titleId: 'world-butterfly-title',
    descId: 'world-butterfly-desc',
    title: 'Butterfly Wing Scales',
    desc: 'Iridescent butterfly wing scales under electron microscope',
    tag: 'Entomology',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'world-salt',
    imgId: 'world-img-salt-y7z8a9',
    titleId: 'world-salt-title',
    descId: 'world-salt-desc',
    title: 'Salt Crystals',
    desc: 'Cubic salt crystals under polarized light microscopy',
    tag: 'Chemistry',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '900',
  },
];

const FeaturedWorlds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Featured Worlds
          </div>
          <h2 id="featured-section-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Worlds Within Worlds
          </h2>
          <p id="featured-section-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            From the geometric perfection of crystals to the living machinery of cells,
            each micro-world holds its own astonishing secrets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {worlds.map((world) => (
            <div
              key={world.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-cyan-900/30 hover:border-cyan-500/40 transition-all duration-300 ${world.span}`}
            >
              <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-72">
                <img
                  alt={world.title}
                  data-strk-img-id={world.imgId}
                  data-strk-img={`[${world.descId}] [${world.titleId}] [featured-section-desc] [featured-section-title]`}
                  data-strk-img-ratio={world.ratio}
                  data-strk-img-width={world.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-2 ${world.tagColor}`}>
                  {world.tag}
                </span>
                <h3 id={world.titleId} className="text-white font-semibold text-lg leading-tight">
                  {world.title}
                </h3>
                <p id={world.descId} className="text-slate-400 text-sm mt-1 line-clamp-2">
                  {world.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorlds;
