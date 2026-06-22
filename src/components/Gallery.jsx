import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { id: "g1", title: "Electron Microscopy", desc: "High contrast scan of cellular structures." },
    { id: "g2", title: "Fluorescent Proteins", desc: "Glowing neurons connected in a biological network." },
    { id: "g3", title: "Bacteriophages", desc: "Viruses that infect and replicate within bacteria." },
    { id: "g4", title: "Blood Cells", desc: "Red blood cells traveling through a microscopic capillary." },
    { id: "g5", title: "Pollen Grains", desc: "Intricate geometric patterns on the surface of pollen." },
    { id: "g6", title: "Crystalline Forms", desc: "Microscopic views of crystallized vitamins." }
  ];

  return (
    <section id="gallery" className="py-24 bg-card relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-title" className="text-3xl md:text-5xl font-bold mb-4">Visual MicroCosmos</h2>
          <p id="gallery-subtitle" className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated collection of the most stunning microscopic imagery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <article key={item.id} className="group relative rounded-xl overflow-hidden bg-background border border-white/5 shadow-xl">
              <div className="aspect-[1/1] overflow-hidden bg-muted">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  data-strk-img-id={`gallery-img-${item.id}`}
                  data-strk-img={`[gallery-desc-${item.id}] [gallery-title-${item.id}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={`gallery-title-${item.id}`} className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p id={`gallery-desc-${item.id}`} className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;