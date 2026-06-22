import React from 'react'

const wonders = [
  {
    id: 'cells',
    title: 'Biological Cells',
    description: 'The fundamental units of life, showcasing complex networks and vibrant structures.',
    imgQuery: 'human cells microscopic florescence biology',
    size: 'col-span-1 row-span-2'
  },
  {
    id: 'crystals',
    title: 'Crystal Formations',
    description: 'Perfect geometric structures growing in silence.',
    imgQuery: 'snowflake crystal microscope macro photography',
    size: 'col-span-1 row-span-1'
  },
  {
    id: 'insects',
    title: 'Insect Architecture',
    description: 'The alien-like features of our tiny neighbors.',
    imgQuery: 'insect eye microscope detail macro',
    size: 'col-span-1 row-span-1'
  },
  {
    id: 'bacteria',
    title: 'Microbial Life',
    description: 'Vibrant colonies of bacteria and fungi.',
    imgQuery: 'petri dish bacteria colony colorful microscope',
    size: 'col-span-2 row-span-1'
  }
]

const Wonders = () => {
  return (
    <section id="wonders" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Four Pillars of <span className="text-emerald-400 font-['Playfair_Display'] italic">Discovery</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Explore the diverse categories of hidden wonders we explore every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {wonders.map((wonder) => (
            <div 
              key={wonder.id} 
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 ${wonder.size}`}
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-strk-bg-id={`wonder-bg-${wonder.id}`}
                data-strk-bg={wonder.imgQuery}
                data-strk-bg-ratio="3x2"
                data-strk-bg-width="1200"
              />
              <div className="absolute inset-0 z-1 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">{wonder.title}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {wonder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wonders
