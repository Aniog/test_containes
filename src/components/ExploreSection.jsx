const exploreItems = [
  {
    imgId: 'explore-img-1-mc018',
    titleId: 'explore-title-1-mc018',
    descId: 'explore-desc-1-mc018',
    title: 'Electron Microscopy',
    desc: 'Scanning electron microscopes reveal surface textures at nanometer resolution, unveiling the alien architecture of microscopic life',
    label: 'Technology',
  },
  {
    imgId: 'explore-img-2-mc019',
    titleId: 'explore-title-2-mc019',
    descId: 'explore-desc-2-mc019',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins light up cellular structures in vivid color, mapping the inner workings of living cells',
    label: 'Technique',
  },
  {
    imgId: 'explore-img-3-mc020',
    titleId: 'explore-title-3-mc020',
    descId: 'explore-desc-3-mc020',
    title: 'Cryo-Electron Tomography',
    desc: 'Flash-freezing specimens preserves them in their natural state, allowing 3D reconstruction of molecular machines at atomic resolution',
    label: 'Cutting Edge',
  },
];

const ExploreSection = () => {
  return (
    <section className="bg-[#050a14] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
            How We See
          </p>
          <h2 id="explore-section-title-mc" className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Tools of <span className="text-cyan-400">Discovery</span>
          </h2>
          <p id="explore-section-desc-mc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern microscopy techniques have transformed our ability to visualize the invisible, opening new frontiers in science and medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {exploreItems.map((item) => (
            <div key={item.imgId}
              className="group relative overflow-hidden rounded-2xl border border-[#1a3a5c] hover:border-cyan-400/40 transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [explore-section-desc-mc] [explore-section-title-mc]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.label}
                </span>
                <h3 id={item.titleId} className="font-display font-bold text-white text-xl mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-[#1a3a5c]">
          <div
            data-strk-bg-id="cta-bg-mc021"
            data-strk-bg="[cta-desc-mc021] [cta-title-mc021]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
            className="absolute inset-0 bg-[#0f2040]"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/95 via-[#050a14]/70 to-[#050a14]/40" />
          <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 max-w-2xl">
            <p id="cta-title-mc021" className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Join the Exploration
            </p>
            <h3 id="cta-desc-mc021" className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
              The Microscopic World Awaits Your Curiosity
            </h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              Every sample holds a universe. Every slide tells a story. Dive deeper into the science, the imagery, and the wonder of the world too small to see.
            </p>
            <button className="bg-cyan-400 text-[#050a14] font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors duration-200">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
