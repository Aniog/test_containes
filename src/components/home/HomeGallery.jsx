import React from 'react';

const HomeGallery = () => {
  const images = [
    { id: '1', title: 'Cellular Symphony', desc: 'Complex structures within a single cell.' },
    { id: '2', title: 'Crystalline Bloom', desc: 'The architectural beauty of minerals.' },
    { id: '3', title: 'Neural Forest', desc: 'Connectivity within the human brain.' },
    { id: '4', title: 'Aquatic Micro-Life', desc: 'Organisms thriving in a drop of water.' },
    { id: '5', title: 'Pollen Details', desc: 'The diverse shapes of floral dust.' },
    { id: '6', title: 'Molecular Dance', desc: 'Proteins or molecules in motion.' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-title" className="text-3xl md:text-5xl font-bold text-[#e6f1ff] mb-4">Hidden Realms</h2>
          <p id="gallery-subtitle" className="text-gray-400 max-w-2xl mx-auto">
            Witness the breathtaking landscapes that remain invisible to the naked eye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div 
              key={img.id}
              className="group relative overflow-hidden rounded-xl bg-[#112240] border border-white/10 hover:border-[#64ffda]/30 transition-all"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  data-strk-img-id={`gallery-img-${img.id}`}
                  data-strk-img={`[gallery-item-desc-${img.id}] [gallery-item-title-${img.id}] microscopic image`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 id={`gallery-item-title-${img.id}`} className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition-colors">
                  {img.title}
                </h3>
                <p id={`gallery-item-desc-${img.id}`} className="text-gray-400 text-sm">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
