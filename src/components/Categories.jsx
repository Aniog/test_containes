import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes that thrive in every environment on Earth',
    tag: 'Microbiology',
    tagColor: 'text-cosmos-cyan border-cosmos-cyan/30',
    imgId: 'cat-img-bacteria-mc010',
    titleId: 'cat-title-bacteria',
    descId: 'cat-desc-bacteria',
  },
  {
    id: 'cells',
    title: 'Human Cells',
    desc: 'The fundamental building blocks of life, each with a unique purpose',
    tag: 'Cell Biology',
    tagColor: 'text-cosmos-violet border-cosmos-violet/30',
    imgId: 'cat-img-cells-mc011',
    titleId: 'cat-title-cells',
    descId: 'cat-desc-cells',
  },
  {
    id: 'fungi',
    title: 'Fungi & Spores',
    desc: 'Intricate networks of mycelium and spore structures of remarkable beauty',
    tag: 'Mycology',
    tagColor: 'text-cosmos-emerald border-cosmos-emerald/30',
    imgId: 'cat-img-fungi-mc012',
    titleId: 'cat-title-fungi',
    descId: 'cat-desc-fungi',
  },
  {
    id: 'crystals',
    title: 'Crystals',
    desc: 'Geometric perfection formed by nature at the molecular scale',
    tag: 'Mineralogy',
    tagColor: 'text-cosmos-cyan border-cosmos-cyan/30',
    imgId: 'cat-img-crystals-mc013',
    titleId: 'cat-title-crystals',
    descId: 'cat-desc-crystals',
  },
  {
    id: 'insects',
    title: 'Insects',
    desc: 'Compound eyes, wing scales, and exoskeleton details revealed up close',
    tag: 'Entomology',
    tagColor: 'text-cosmos-violet border-cosmos-violet/30',
    imgId: 'cat-img-insects-mc014',
    titleId: 'cat-title-insects',
    descId: 'cat-desc-insects',
  },
  {
    id: 'pollen',
    title: 'Pollen',
    desc: 'Sculptural pollen grains with textures that look like alien architecture',
    tag: 'Botany',
    tagColor: 'text-cosmos-emerald border-cosmos-emerald/30',
    imgId: 'cat-img-pollen-mc015',
    titleId: 'cat-title-pollen',
    descId: 'cat-desc-pollen',
  },
];

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-navy py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Explore by Category
          </p>
          <h2 id="categories-title" className="text-4xl md:text-5xl font-bold text-white">
            Worlds Within Worlds
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Each domain of the microscopic world has its own visual language and scientific story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-cosmos-cyan/10"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/90 to-transparent" />
              </div>
              <div className="p-5">
                <span className={`text-xs font-semibold tracking-widest uppercase border rounded-full px-3 py-1 ${cat.tagColor}`}>
                  {cat.tag}
                </span>
                <h3 id={cat.titleId} className="text-white text-xl font-bold mt-3 mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
