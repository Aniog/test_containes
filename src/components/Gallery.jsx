import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 'gallery-item-1',
      title: 'Diatom Symmetry',
      desc: 'The intricate glass-like shells of single-celled algae found in all waters.',
      imgId: 'diatom-symmetry-8822',
      titleId: 'gallery-title-1',
      descId: 'gallery-desc-1',
    },
    {
      id: 'gallery-item-2',
      title: 'Tardigrade Life',
      desc: 'Also known as water bears, these micro-animals are among the most resilient on Earth.',
      imgId: 'tardigrade-life-1133',
      titleId: 'gallery-title-2',
      descId: 'gallery-desc-2',
    },
    {
      id: 'gallery-item-3',
      title: 'Neural Connections',
      desc: 'A mesmerizing glimpse into the complex networks of neurons in the brain.',
      imgId: 'neural-connections-4455',
      titleId: 'gallery-title-3',
      descId: 'gallery-desc-3',
    },
    {
      id: 'gallery-item-4',
      title: 'Chloroplast Dance',
      desc: 'Green organelles within plant cells that conduct photosynthesis.',
      imgId: 'chloroplast-dance-6677',
      titleId: 'gallery-title-4',
      descId: 'gallery-desc-4',
    },
    {
      id: 'gallery-item-5',
      title: 'Pollen Grains',
      desc: 'Magnified view of flower pollen, each with its own unique architectural structure.',
      imgId: 'pollen-grains-9900',
      titleId: 'gallery-title-5',
      descId: 'gallery-desc-5',
    },
    {
      id: 'gallery-item-6',
      title: 'Snowflake Crystal',
      desc: 'The geometric perfection of a single snowflake under extreme magnification.',
      imgId: 'snowflake-crystal-2211',
      titleId: 'gallery-title-6',
      descId: 'gallery-desc-6',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-main-title" className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-4">
            Hidden Beauty Gallery
          </h2>
          <p id="gallery-main-subtitle" className="text-slate-400 max-w-2xl mx-auto text-lg">
            A visual exploration of the microscopic wonders that surround us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/10"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-main-subtitle]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 
                  id={item.titleId} 
                  className="text-xl font-bold text-slate-50 mb-2 font-serif group-hover:text-emerald-400 transition-colors"
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
