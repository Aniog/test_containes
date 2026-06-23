import React from 'react';

const galleryItems = [
  {
    id: 'diatoms',
    title: 'Diatom Shells',
    desc: 'Intricate silica structures of single-celled algae.',
    query: 'microscopic diatoms silica shells crystalline',
  },
  {
    id: 'neurons',
    title: 'Neural Networks',
    desc: 'The electric architecture of thought and memory.',
    query: 'fluorescent neurons brain cells synapses microscopic',
  },
  {
    id: 'crystals',
    title: 'Crystal Growth',
    desc: 'Precision geometry formed by molecular alignment.',
    query: 'polarized light microscopy chemical crystals abstract geometry',
  },
  {
    id: 'tardigrade',
    title: 'Water Bears',
    desc: 'The indestructible pioneers of the micro-world.',
    query: 'tardigrade water bear scanning electron microscope micro animal',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Ancient vessels of nature’s genetic diversity.',
    query: 'sem pollen grains microscopic flower dust textures',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Scales',
    desc: 'Microscopic structural color patterns on wings.',
    query: 'butterfly wing scales microscopic iridescence nanostructures',
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 id="gallery-title" className="text-4xl md:text-6xl font-black uppercase mb-4">Discoveries</h2>
          <p id="gallery-subtitle" className="text-teal-400 font-mono tracking-widest uppercase text-sm">Visualizing the unreachable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-zinc-900 border border-white/5 aspect-[4/5] hover:border-teal-400/50 transition-colors">
              <img
                data-strk-img-id={`gallery-img-${item.id}`}
                data-strk-img={`[gallery-item-${item.id}-title] [gallery-item-${item.id}-desc] ${item.query} [gallery-title] [gallery-subtitle]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 
                  id={`gallery-item-${item.id}-title`}
                  className="text-2xl font-bold mb-2 group-hover:text-teal-300 transition-colors"
                >
                  {item.title}
                </h3>
                <p 
                  id={`gallery-item-${item.id}-desc`}
                  className="text-sm text-zinc-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                >
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
