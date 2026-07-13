const galleryItems = [
  {
    imgId: 'gallery-img-1-mc5e6f',
    titleId: 'gallery-title-1-mc5e6f',
    descId: 'gallery-desc-1-mc5e6f',
    title: 'Diatom Symmetry',
    desc: 'Intricate silica shells of diatoms under electron microscope',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-2-mc5e6f',
    titleId: 'gallery-title-2-mc5e6f',
    descId: 'gallery-desc-2-mc5e6f',
    title: 'Neuron Network',
    desc: 'Fluorescent staining reveals the branching network of neurons',
    ratio: '4x3',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    imgId: 'gallery-img-3-mc5e6f',
    titleId: 'gallery-title-3-mc5e6f',
    descId: 'gallery-desc-3-mc5e6f',
    title: 'Pollen Grains',
    desc: 'Colorized scanning electron micrograph of pollen grains',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-4-mc5e6f',
    titleId: 'gallery-title-4-mc5e6f',
    descId: 'gallery-desc-4-mc5e6f',
    title: 'Tardigrade',
    desc: 'The water bear — most resilient creature on Earth',
    ratio: '4x3',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    imgId: 'gallery-img-5-mc5e6f',
    titleId: 'gallery-title-5-mc5e6f',
    descId: 'gallery-desc-5-mc5e6f',
    title: 'Radiolarian',
    desc: 'Geometric perfection of a radiolarian skeleton',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-6-mc5e6f',
    titleId: 'gallery-title-6-mc5e6f',
    descId: 'gallery-desc-6-mc5e6f',
    title: 'Bacteria Colony',
    desc: 'Colorful bacterial colonies growing on agar plate',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-7-mc5e6f',
    titleId: 'gallery-title-7-mc5e6f',
    descId: 'gallery-desc-7-mc5e6f',
    title: 'Mitosis',
    desc: 'Cell division captured at the moment of chromosome separation',
    ratio: '4x3',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    imgId: 'gallery-img-8-mc5e6f',
    titleId: 'gallery-title-8-mc5e6f',
    descId: 'gallery-desc-8-mc5e6f',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystal structure under polarized light',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-9-mc5e6f',
    titleId: 'gallery-title-9-mc5e6f',
    descId: 'gallery-desc-9-mc5e6f',
    title: 'Paramecium',
    desc: 'Single-celled paramecium with visible cilia',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-10-mc5e6f',
    titleId: 'gallery-title-10-mc5e6f',
    descId: 'gallery-desc-10-mc5e6f',
    title: 'Fungal Spores',
    desc: 'Aspergillus spore heads releasing microscopic spores',
    ratio: '4x3',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    imgId: 'gallery-img-11-mc5e6f',
    titleId: 'gallery-title-11-mc5e6f',
    descId: 'gallery-desc-11-mc5e6f',
    title: 'Red Blood Cells',
    desc: 'Biconcave red blood cells flowing through a capillary',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    imgId: 'gallery-img-12-mc5e6f',
    titleId: 'gallery-title-12-mc5e6f',
    descId: 'gallery-desc-12-mc5e6f',
    title: 'Algae Bloom',
    desc: 'Microscopic algae forming intricate spiral patterns',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-cosmos-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
            Visual Collection
          </p>
          <h2
            id="gallery-section-title-mc5e6f"
            className="font-display font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            The Microscopic Gallery
          </h2>
          <p
            id="gallery-section-sub-mc5e6f"
            className="text-cosmos-secondary text-lg max-w-2xl mx-auto"
          >
            Stunning imagery from the world of microscopy — where science meets art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.imgId}
              className={`${item.span} group relative rounded-2xl overflow-hidden cursor-pointer`}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-sub-mc5e6f] [gallery-section-title-mc5e6f]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 bg-cosmos-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="text-cosmos-text font-semibold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-cosmos-secondary text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
