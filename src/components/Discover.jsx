import React from 'react'

const features = [
  {
    id: 'cellular-structures',
    title: 'Cellular Structures',
    desc: 'Breathtaking microscopic photography of plant cells and cellular biology in vibrant colors.',
    imgId: 'feat-cellular-93f8aa'
  },
  {
    id: 'water-drop',
    title: 'Refractions & Drops',
    desc: 'Macro photography of morning dew drops refracting light on intricate leaves.',
    imgId: 'feat-waterdrop-11b2c4'
  },
  {
    id: 'micro-minerals',
    title: 'Crystal Micro-Minerals',
    desc: 'Close-up views of glowing, colorful mineral crystals under a microscope.',
    imgId: 'feat-minerals-44c1d'
  }
]

const Discover = () => {
  return (
    <section id="discover" className="py-24 bg-slate-950 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="discover-section-title" className="text-4xl font-bold text-white mb-4">Discover the Unseen</h2>
          <p id="discover-section-desc" className="text-slate-400 max-w-2xl mx-auto">
            From the intricate patterns of biology to the stunning physics of light at a micro scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <article key={feat.id} className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl border border-slate-800 transition-transform hover:-translate-y-2">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[feat-${feat.id}-desc] [feat-${feat.id}-title] [discover-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`feat-${feat.id}-title`} className="text-xl font-semibold text-emerald-400 mb-3">{feat.title}</h3>
                <p id={`feat-${feat.id}-desc`} className="text-slate-300 leading-relaxed font-light">{feat.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discover;
