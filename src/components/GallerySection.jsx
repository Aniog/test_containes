const galleryItems = [
  { id: "g1", title: "Pollen Grains", desc: "Spiky surfaces of varying flowers.", imgId: "gal-img-1" },
  { id: "g2", title: "Butterfly Eye", desc: "Compound lenses capturing light.", imgId: "gal-img-2" },
  { id: "g3", title: "Snowflake", desc: "Fractal geometry in freezing water.", imgId: "gal-img-3" },
  { id: "g4", title: "Diatom Shell", desc: "Silica cell walls forming intricate patterns.", imgId: "gal-img-4" },
  { id: "g5", title: "Spider Leg", desc: "Tiny hairs acting as sensory organs.", imgId: "gal-img-5" },
  { id: "g6", title: "Blood Cells", desc: "Red blood cells moving in a vein.", imgId: "gal-img-6" },
  { id: "g7", title: "Bacterial Colony", desc: "Bacillus forming a structure.", imgId: "gal-img-7" },
  { id: "g8", title: "Salt Crystal", desc: "Evaporated saline structure.", imgId: "gal-img-8" }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="gallery-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Curated <span className="text-emerald-400">Exhibits</span>
          </h2>
          <p id="gallery-section-desc" className="text-neutral-400 max-w-2xl mx-auto">
            A vast collection of microscopic photography highlighting the unseen details of our planet.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden bg-neutral-800 rounded-xl">
              <img 
                data-strk-img-id={item.imgId}
                data-strk-img={`[gal-desc-${item.id}] [gal-title-${item.id}] microscopic scientific`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 id={`gal-title-${item.id}`} className="text-white font-bold">{item.title}</h3>
                <p id={`gal-desc-${item.id}`} className="text-emerald-300 text-sm text-opacity-90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}