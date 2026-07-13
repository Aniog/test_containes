const Introduction = () => {
  return (
    <section id="about" className="bg-[#050a14] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              What Is MicroCosmos?
            </p>
            <h2 id="intro-title-mc002" className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
              A Universe Hidden in Plain <span className="text-teal-400">Sight</span>
            </h2>
            <p id="intro-desc-mc002" className="text-slate-300 text-lg leading-relaxed mb-6">
              Beneath the surface of every drop of water, every grain of soil, and every breath of air lies an entire cosmos teeming with life. Microorganisms — bacteria, archaea, fungi, protozoa, and viruses — make up the vast majority of life on Earth.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              These invisible architects shape our climate, drive our ecosystems, and even influence our health. MicroCosmos is your window into this extraordinary hidden world, rendered in stunning detail through the lens of modern microscopy.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '1 Trillion', label: 'Species Estimated' },
                { value: '10¹⁸', label: 'Microbes on Earth' },
                { value: '99%', label: 'Yet Undiscovered' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-400/5 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#1a3a5c] shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <img
                data-strk-img-id="intro-img-mc002"
                data-strk-img="[intro-desc-mc002] [intro-title-mc002]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic view of microorganisms"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0f2040] border border-[#1a3a5c] rounded-xl p-4 shadow-lg">
              <p className="text-cyan-400 font-display font-bold text-2xl">4.2B</p>
              <p className="text-slate-400 text-xs">Years of microbial life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
