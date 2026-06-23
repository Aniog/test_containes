import React from 'react'

const featuresData = [
  {
    id: 'cells',
    title: 'Cellular Structures',
    desc: 'Dive into the complex architecture of cells, from the nucleus to the mitochondria, revealing the engines of life.',
    imgId: 'feature-cells-8a2b1'
  },
  {
    id: 'crystals',
    title: 'Crystalline Formations',
    desc: 'Examine the geometric perfection of microscopic crystals and mineral structures under polarized light.',
    imgId: 'feature-crystals-3c4d2'
  },
  {
    id: 'organisms',
    title: 'Microorganisms',
    desc: 'Meet the invisible inhabitants of water drops, soil samples, and deep-sea vents showcasing stunning biodiversity.',
    imgId: 'feature-organisms-9e8f7'
  }
]

const Features = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-950">
      <div className="text-center mb-16">
        <h2 id="features-section-title" className="text-3xl md:text-4xl font-bold mb-4">The Invisible World</h2>
        <p id="features-section-subtitle" className="text-slate-400 max-w-2xl mx-auto">
          Through the lens of an electron microscope, we uncover textures and organisms that challenge our perception of reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {featuresData.map((feature) => {
          const titleId = `feature-title-${feature.id}`
          const descId = `feature-desc-${feature.id}`
          
          return (
            <article key={feature.id} className="flex flex-col group">
              <div className="overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] mb-6 relative">
                <img
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={feature.imgId}
                  data-strk-img={`[${descId}] [${titleId}] [features-section-subtitle]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <h3 id={titleId} className="text-2xl font-bold mb-3 text-cyan-50">
                {feature.title}
              </h3>
              <p id={descId} className="text-slate-400 leading-relaxed flex-grow">
                {feature.desc}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Features
