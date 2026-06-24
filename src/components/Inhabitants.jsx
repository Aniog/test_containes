import React from 'react'

const inhabitants = [
  {
    id: 'jumping-spider',
    title: 'Phidippus Audax',
    desc: 'Extreme macro photography of a jumping spider with large, deep eyes.',
    imgId: 'inhabitant-spider-8822a'
  },
  {
    id: 'butterfly-wing',
    title: 'Lepidoptera Scales',
    desc: 'Microscopic view of butterfly wing scales showing iridescent colors.',
    imgId: 'inhabitant-butterfly-77b3b'
  },
  {
    id: 'tardigrade',
    title: 'Water Bear',
    desc: 'Microscopic imaging of a tardigrade or water bear swimming.',
    imgId: 'inhabitant-tardi-11c9x'
  },
  {
    id: 'mantis-eye',
    title: 'Praying Mantis Eye',
    desc: 'Close-up macro of a praying mantis eye texture.',
    imgId: 'inhabitant-mantis-55d8z'
  }
]

const Inhabitants = () => {
  return (
    <section id="inhabitants" className="py-24 bg-slate-900 border-t border-b border-slate-800 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/3">
          <h2 id="inhabitant-section-title" className="text-4xl font-bold text-white mb-6">Fascinating Inhabitants</h2>
          <p id="inhabitant-section-desc" className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
            When you zoom in close enough, tiny insects and microorganisms look like alien lifeforms from another planet. These are the creatures that govern the microcosm.
          </p>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {inhabitants.map((item) => (
            <article key={item.id} className="relative rounded-2xl overflow-hidden group h-64">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[item-${item.id}-title] [item-${item.id}-desc] [inhabitant-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 id={`item-${item.id}-title`} className="text-emerald-400 font-bold text-lg mb-1 drop-shadow-md">{item.title}</h3>
                <p id={`item-${item.id}-desc`} className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Inhabitants;
