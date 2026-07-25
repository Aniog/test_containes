const facts = [
  { emoji: '🌍', number: '8.7M', label: 'Estimated species on Earth' },
  { emoji: '🐟', number: '3.5T', label: 'Fish in the world\'s oceans' },
  { emoji: '🦋', number: '1M+', label: 'Known insect species' },
  { emoji: '🐦', number: '10K+', label: 'Bird species worldwide' },
  { emoji: '🌿', number: '80%', label: 'Species yet to be discovered' },
  { emoji: '🐘', number: '415K', label: 'African elephants remaining' },
];

const FunFacts = () => {
  return (
    <section id="facts" className="py-20 px-4 md:px-8 bg-[#0f3d25]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3 block">
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Incredible Animal Facts
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            The animal kingdom is full of staggering numbers and mind-blowing statistics that remind us how extraordinary life on Earth truly is.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-3">{fact.emoji}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-2">
                {fact.number}
              </div>
              <div className="text-white/80 text-sm font-medium leading-snug">
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Fun fact strip */}
        <div className="bg-amber-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl flex-shrink-0">🐙</div>
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
              Amazing Animal Abilities
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              Octopuses have three hearts and blue blood. Mantis shrimp can punch with the force of a bullet. 
              Tardigrades can survive in the vacuum of space. The animal kingdom never ceases to amaze — 
              every species is a masterpiece of evolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
