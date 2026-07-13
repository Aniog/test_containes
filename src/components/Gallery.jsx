const galleryItems = [
  {
    imgId: 'gallery-img-1-mc003',
    titleId: 'gallery-title-1-mc003',
    descId: 'gallery-desc-1-mc003',
    title: 'Diatom Silica Shell',
    desc: 'Intricate geometric patterns of a diatom under electron microscope',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-2-mc004',
    titleId: 'gallery-title-2-mc004',
    descId: 'gallery-desc-2-mc004',
    title: 'Tardigrade Water Bear',
    desc: 'Microscopic tardigrade water bear, the most resilient creature on Earth',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    imgId: 'gallery-img-3-mc005',
    titleId: 'gallery-title-3-mc005',
    descId: 'gallery-desc-3-mc005',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of flower pollen grain',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-4-mc006',
    titleId: 'gallery-title-4-mc006',
    descId: 'gallery-desc-4-mc006',
    title: 'Snowflake Crystal',
    desc: 'Macro photograph of a perfect hexagonal snowflake ice crystal',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-5-mc007',
    titleId: 'gallery-title-5-mc007',
    descId: 'gallery-desc-5-mc007',
    title: 'E. coli Bacteria',
    desc: 'Colorized electron microscope image of E. coli bacteria colony',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-6-mc008',
    titleId: 'gallery-title-6-mc008',
    descId: 'gallery-desc-6-mc008',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of neural network connections in brain tissue',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    imgId: 'gallery-img-7-mc009',
    titleId: 'gallery-title-7-mc009',
    descId: 'gallery-desc-7-mc009',
    title: 'Salt Crystal',
    desc: 'Macro photograph of cubic sodium chloride salt crystals',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-8-mc010',
    titleId: 'gallery-title-8-mc010',
    descId: 'gallery-desc-8-mc010',
    title: 'Paramecium',
    desc: 'Light microscopy of paramecium single-celled organism in pond water',
    span: 'col-span-1 row-span-1',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#0a1628] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Visual Collection
          </p>
          <h2 id="gallery-section-title-mc" className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            The <span className="text-cyan-400">Gallery</span>
          </h2>
          <p id="gallery-section-desc-mc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning imagery from the microscopic world — captured through electron microscopes, fluorescence imaging, and macro photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div key={item.imgId} className={`group relative overflow-hidden rounded-2xl border border-[#1a3a5c] ${item.span}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc-mc] [gallery-section-title-mc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-[#050a14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <h3 id={item.titleId} className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p id={item.descId} className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
