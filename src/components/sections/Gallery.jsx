import React from 'react'

export default function Gallery() {
  const images = [
    { id: 'tardigrade', title: 'Tardigrade (Water Bear)', desc: 'Microscopic resilient animal' },
    { id: 'neuron', title: 'Neural Network', desc: 'Glowing brain neurons' },
    { id: 'pollen', title: 'Pollen Grains', desc: 'Spiky and textured pollen particles' },
    { id: 'snowflake', title: 'Snowflake Crystal', desc: 'Perfect ice snowflake under microscope' },
    { id: 'bloodcell', title: 'Red Blood Cells', desc: 'Flowing red blood cells in vein' },
    { id: 'virus', title: 'Viral Phage', desc: 'Bacteriophage virus structure' },
    { id: 'diatom', title: 'Diatom Shell', desc: 'Silica shell of microscopic algae' },
    { id: 'leaf', title: 'Plant Stomata', desc: 'Breathing pores on a leaf surface' },
    { id: 'butterfly', title: 'Butterfly Wing Scales', desc: 'Colorful overlapping wing scales' },
    { id: 'spider', title: 'Spider Eye', desc: 'Compound eye of a jumping spider' },
    { id: 'mold', title: 'Bread Mold', desc: 'Fruiting bodies of common fungi' },
    { id: 'bacteria', title: 'E. Coli Bacteria', desc: 'Rod shaped bacteria cluster' }
  ]

  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="gallery-title" className="text-4xl font-bold mb-4">The Micro Gallery</h2>
            <p id="gallery-subtitle" className="text-muted-foreground text-lg">
              A collection of extraordinary sights. Each image reveals a totally alien world that exists parallel to our own.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, index) => {
            const isLarge = index === 0 || index === 7; // make some items span 2 columns
            return (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-xl bg-card border border-border/40 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <div className={`w-full ${isLarge ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'} relative`}>
                  <img
                    alt={item.title}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-strk-img-id={`gallery-img-${item.id}`}
                    data-strk-img={`[gallery-item-${item.id}-desc] [gallery-item-${item.id}-title] microscopic scanning electron`}
                    data-strk-img-ratio={isLarge ? "4x3" : "1x1"}
                    data-strk-img-width={isLarge ? "800" : "400"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 id={`gallery-item-${item.id}-title`} className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p id={`gallery-item-${item.id}-desc`} className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
