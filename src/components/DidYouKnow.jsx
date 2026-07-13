const facts = [
  {
    imgId: 'fact-img-1-mc015',
    titleId: 'fact-title-1-mc015',
    descId: 'fact-desc-1-mc015',
    number: '01',
    title: 'The Human Microbiome',
    desc: 'Your body hosts approximately 38 trillion microbial cells — roughly equal to the number of human cells. These microbes weigh about 1–2 kg and play critical roles in digestion, immunity, and even mood regulation.',
    highlight: '38 Trillion',
    highlightLabel: 'microbial cells in your body',
  },
  {
    imgId: 'fact-img-2-mc016',
    titleId: 'fact-title-2-mc016',
    descId: 'fact-desc-2-mc016',
    number: '02',
    title: 'Extremophile Survivors',
    desc: 'Tardigrades — microscopic animals just 0.5mm long — can survive in the vacuum of space, withstand radiation 1,000 times the lethal human dose, and endure temperatures from -272°C to 150°C.',
    highlight: '-272°C',
    highlightLabel: 'survival temperature of tardigrades',
  },
  {
    imgId: 'fact-img-3-mc017',
    titleId: 'fact-title-3-mc017',
    descId: 'fact-desc-3-mc017',
    number: '03',
    title: 'Oxygen Factories',
    desc: 'Cyanobacteria and marine phytoplankton produce between 50–80% of Earth\'s oxygen. These microscopic photosynthesizers are the true lungs of our planet, sustaining all complex life.',
    highlight: '50–80%',
    highlightLabel: 'of Earth\'s oxygen from microbes',
  },
];

const DidYouKnow = () => {
  return (
    <section className="bg-[#0a1628] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Fascinating Facts
          </p>
          <h2 id="facts-section-title-mc" className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Did You <span className="text-cyan-400">Know?</span>
          </h2>
          <p id="facts-section-desc-mc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microscopic world is full of surprises that challenge everything we think we know about life.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {facts.map((fact, index) => (
            <div key={fact.imgId}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-[#1a3a5c] shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <img
                    data-strk-img-id={fact.imgId}
                    data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-desc-mc] [facts-section-title-mc]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={fact.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 to-transparent" />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-[#1a3a5c] font-display font-bold text-6xl md:text-8xl select-none">
                  {fact.number}
                </span>
                <h3 id={fact.titleId} className="font-display font-bold text-white text-2xl md:text-3xl mt-2 mb-4">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-slate-300 leading-relaxed mb-6">
                  {fact.desc}
                </p>
                <div className="bg-[#0f2040] border border-[#1a3a5c] rounded-xl p-4 inline-block">
                  <p className="text-cyan-400 font-display font-bold text-2xl">{fact.highlight}</p>
                  <p className="text-slate-400 text-sm">{fact.highlightLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DidYouKnow;
