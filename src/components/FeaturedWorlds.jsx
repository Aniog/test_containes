const worlds = [
  {
    imgId: 'world-bacteria-img-mc011',
    titleId: 'world-bacteria-title-mc011',
    descId: 'world-bacteria-desc-mc011',
    title: 'Bacteria',
    desc: 'The oldest and most abundant life forms on Earth, bacteria inhabit every environment imaginable — from deep ocean vents to the human gut.',
    tag: 'Prokaryotes',
    color: 'text-cyan-400',
    tagBg: 'bg-cyan-400/10 text-cyan-400',
  },
  {
    imgId: 'world-fungi-img-mc012',
    titleId: 'world-fungi-title-mc012',
    descId: 'world-fungi-desc-mc012',
    title: 'Fungi & Spores',
    desc: 'Microscopic fungi and their spores form vast underground networks, breaking down organic matter and forming symbiotic relationships with plants.',
    tag: 'Eukaryotes',
    color: 'text-violet-400',
    tagBg: 'bg-violet-400/10 text-violet-400',
  },
  {
    imgId: 'world-crystal-img-mc013',
    titleId: 'world-crystal-title-mc013',
    descId: 'world-crystal-desc-mc013',
    title: 'Mineral Crystals',
    desc: 'At the microscopic scale, minerals reveal breathtaking geometric perfection — from the cubic lattice of salt to the hexagonal symmetry of quartz.',
    tag: 'Mineralogy',
    color: 'text-amber-400',
    tagBg: 'bg-amber-400/10 text-amber-400',
  },
  {
    imgId: 'world-plankton-img-mc014',
    titleId: 'world-plankton-title-mc014',
    descId: 'world-plankton-desc-mc014',
    title: 'Marine Plankton',
    desc: 'Microscopic marine organisms that form the foundation of ocean food webs, producing over half of the world\'s oxygen through photosynthesis.',
    tag: 'Marine Life',
    color: 'text-teal-400',
    tagBg: 'bg-teal-400/10 text-teal-400',
  },
];

const FeaturedWorlds = () => {
  return (
    <section className="bg-[#050a14] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Micro Kingdoms
          </p>
          <h2 id="worlds-section-title-mc" className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Worlds Within <span className="text-cyan-400">Worlds</span>
          </h2>
          <p id="worlds-section-desc-mc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each domain of the microscopic world has its own rules, beauty, and ecological role. Discover the kingdoms that shape our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world) => (
            <div key={world.imgId}
              className="group bg-[#0f2040] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={world.imgId}
                  data-strk-img={`[${world.descId}] [${world.titleId}] [worlds-section-desc-mc] [worlds-section-title-mc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={world.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${world.tagBg}`}>
                  {world.tag}
                </span>
                <h3 id={world.titleId} className={`font-display font-bold text-xl mb-2 ${world.color}`}>
                  {world.title}
                </h3>
                <p id={world.descId} className="text-slate-400 text-sm leading-relaxed">
                  {world.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorlds;
