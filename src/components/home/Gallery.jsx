import React from 'react';

const galleries = [
  { id: 'tardigrade', title: 'Tardigrade', desc: 'Water bear surviving extreme environments', ratio: '1x1', width: 600 },
  { id: 'pollen', title: 'Pollen Grains', desc: 'Spiky and diverse pollen under electron microscope', ratio: '3x4', width: 600 },
  { id: 'diatom', title: 'Diatoms', desc: 'Silica shells of microscopic algae', ratio: '4x3', width: 800 },
  { id: 'neuron', title: 'Neural Networks', desc: 'Glowing neurons firing in sequence', ratio: '16x9', width: 1200 },
  { id: 'snowflake', title: 'Snowflake', desc: 'Perfect hexagonal ice crystal', ratio: '1x1', width: 600 },
  { id: 'blood', title: 'Red Blood Cells', desc: 'Circulating red blood cells', ratio: '3x2', width: 800 },
  { id: 'virus', title: 'Bacteriophage', desc: 'Viruses attacking a bacteria cell', ratio: '3x4', width: 600 },
  { id: 'leaf', title: 'Plant Cell', desc: 'Chloroplasts moving inside a plant cell wall', ratio: '1x1', width: 600 },
  { id: 'sand', title: 'Sand Grain', desc: 'A single grain of sand magnified', ratio: '2x3', width: 600 },
  { id: 'eye', title: 'Fly Eye', desc: 'Compound eye of an insect', ratio: '16x9', width: 1200 },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-white/10">
      <div className="text-center mb-16">
        <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">The Invisible Bestiary</h2>
        <p id="gallery-subtitle" className="text-lg text-slate-400 max-w-2xl mx-auto">
          A collection of the most fascinating microscopic entities on Earth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
        {galleries.map((item) => {
          // Adjust span based on aspect ratio to create a masonry-like feel
          let spanClass = "col-span-1 row-span-1";
          if (item.ratio === '16x9') spanClass = "col-span-1 md:col-span-2 row-span-1";
          if (item.ratio === '3x4' || item.ratio === '2x3') spanClass = "col-span-1 row-span-2";

          return (
            <article key={item.id} className={`group relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 \${spanClass}`}>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                data-strk-img-id={`gallery-img-\${item.id}`}
                data-strk-img={`[gallery-desc-\${item.id}] [gallery-title-\${item.id}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width.toString()}
                className="w-full h-full object-cover aspect-auto transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                style={{ 
                  aspectRatio: item.ratio === '1x1' ? '1/1' : 
                               item.ratio === '16x9' ? '16/9' : 
                               item.ratio === '4x3' ? '4/3' : 
                               item.ratio === '3x4' ? '3/4' : 
                               item.ratio === '2x3' ? '2/3' : 
                               item.ratio === '3x2' ? '3/2' : 'auto' 
                }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={`gallery-title-\${item.id}`} className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p id={`gallery-desc-\${item.id}`} className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;