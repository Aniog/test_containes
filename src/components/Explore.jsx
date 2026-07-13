const exploreItems = [
  {
    imgId: 'explore-img-1-mckl1m',
    titleId: 'explore-title-1-mckl1m',
    descId: 'explore-desc-1-mckl1m',
    title: 'Crystalline Structures',
    desc: 'Vitamin C crystals under polarized light microscopy',
    ratio: '3x4',
    height: 'h-72',
  },
  {
    imgId: 'explore-img-2-mckl1m',
    titleId: 'explore-title-2-mckl1m',
    descId: 'explore-desc-2-mckl1m',
    title: 'Amoeba in Motion',
    desc: 'Amoeba proteus extending pseudopods to engulf prey',
    ratio: '3x4',
    height: 'h-48',
  },
  {
    imgId: 'explore-img-3-mckl1m',
    titleId: 'explore-title-3-mckl1m',
    descId: 'explore-desc-3-mckl1m',
    title: 'Spirogyra Filaments',
    desc: 'Spiral chloroplasts of freshwater green algae',
    ratio: '3x4',
    height: 'h-56',
  },
  {
    imgId: 'explore-img-4-mckl1m',
    titleId: 'explore-title-4-mckl1m',
    descId: 'explore-desc-4-mckl1m',
    title: 'Dust Mite',
    desc: 'Scanning electron micrograph of a common house dust mite',
    ratio: '3x4',
    height: 'h-64',
  },
  {
    imgId: 'explore-img-5-mckl1m',
    titleId: 'explore-title-5-mckl1m',
    descId: 'explore-desc-5-mckl1m',
    title: 'Hydra Tentacles',
    desc: 'Freshwater hydra with stinging nematocysts on tentacles',
    ratio: '3x4',
    height: 'h-48',
  },
  {
    imgId: 'explore-img-6-mckl1m',
    titleId: 'explore-title-6-mckl1m',
    descId: 'explore-desc-6-mckl1m',
    title: 'Euglena',
    desc: 'Euglena viridis — a photosynthetic flagellate',
    ratio: '3x4',
    height: 'h-72',
  },
  {
    imgId: 'explore-img-7-mckl1m',
    titleId: 'explore-title-7-mckl1m',
    descId: 'explore-desc-7-mckl1m',
    title: 'Moss Spores',
    desc: 'Capsule of a moss plant releasing spores into the air',
    ratio: '3x4',
    height: 'h-64',
  },
  {
    imgId: 'explore-img-8-mckl1m',
    titleId: 'explore-title-8-mckl1m',
    descId: 'explore-desc-8-mckl1m',
    title: 'Rotifer',
    desc: 'Wheel animalcule with corona of cilia for feeding',
    ratio: '3x4',
    height: 'h-52',
  },
];

const Explore = () => {
  return (
    <section id="explore" className="py-20 md:py-28 bg-cosmos-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
            Explore More
          </p>
          <h2
            id="explore-section-title-mckl1m"
            className="font-display font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Deeper Into the Microcosm
          </h2>
          <p
            id="explore-section-sub-mckl1m"
            className="text-cosmos-secondary text-lg max-w-2xl mx-auto"
          >
            Every drop of water holds an entire ecosystem waiting to be discovered.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {exploreItems.map((item) => (
            <div
              key={item.imgId}
              className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [explore-section-sub-mckl1m] [explore-section-title-mckl1m]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className={`w-full ${item.height} object-cover group-hover:scale-105 transition-transform duration-700 bg-cosmos-card`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="text-cosmos-text font-semibold text-xs">{item.title}</h3>
                <p id={item.descId} className="text-cosmos-secondary text-xs mt-0.5 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
