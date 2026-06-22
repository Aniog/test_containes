const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells forming geometric patterns',
    imgId: 'gallery-diatom-k9m2x1',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Indestructible water bears surviving extreme conditions in microscopic habitats',
    imgId: 'gallery-tardigrade-p4n7w3',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '3x4',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'bacteria',
    title: 'Bacteria Colonies',
    desc: 'Colorful bacterial cultures growing in petri dishes under laboratory conditions',
    imgId: 'gallery-bacteria-r6t1y8',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    ratio: '4x3',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'cell-division',
    title: 'Cell Division',
    desc: 'Mitosis process showing chromosomes separating during cellular reproduction',
    imgId: 'gallery-celldiv-s2v5q9',
    titleId: 'gallery-cell-division-title',
    descId: 'gallery-cell-division-desc',
    ratio: '16x9',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'plankton',
    title: 'Plankton',
    desc: 'Bioluminescent marine plankton glowing in dark ocean water',
    imgId: 'gallery-plankton-u8w3e5',
    titleId: 'gallery-plankton-title',
    descId: 'gallery-plankton-desc',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Colorful pollen grains magnified showing spiky textured surfaces',
    imgId: 'gallery-pollen-z1x4c7',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '1x1',
    span: 'col-span-1 row-span-1',
  },
]

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent uppercase tracking-widest text-xs font-semibold mb-3">
            Visual Exploration
          </p>
          <h2
            id="gallery-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            The Microscopic Gallery
          </h2>
          <p id="gallery-section-desc" className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stunning imagery captured through electron microscopes and advanced imaging techniques, revealing the hidden artistry of nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden border border-white/10 hover:border-cosmos-accent/30 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="font-heading text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-300 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
