import React from 'react'

const macroItems = [
  { id: 'macro-1', title: 'Frost Crystal', desc: 'The delicate architecture of frozen dew.', query: 'frost crystal microscope macro' },
  { id: 'macro-2', title: 'Peacock Feather', desc: 'Structural color at the microscopic scale.', query: 'peacock feather microscope structure' },
  { id: 'macro-3', title: 'Copper Crystal', desc: 'Metallic beauty formed in electrolysis.', query: 'copper crystal microscope metal' },
]

const MacroLife = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Macro <span className="text-emerald-400 font-['Playfair_Display'] italic">Highlights</span></h2>
          <p className="text-slate-400">Immense beauty found in the smallest fragments of our world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {macroItems.map((item) => (
            <div key={item.id} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-2xl">
                <img 
                  data-strk-img-id={`macro-img-${item.id}`}
                  data-strk-img={item.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm max-w-[250px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MacroLife
