const facts = [
  {
    icon: '🦋',
    stat: '8.7M',
    label: 'Species on Earth',
    description: 'Scientists estimate there are around 8.7 million species of animals on our planet, with millions yet to be discovered.',
  },
  {
    icon: '🐋',
    stat: '33m',
    label: 'Blue Whale Length',
    description: 'The blue whale is the largest animal ever known to have existed, reaching up to 33 meters in length.',
  },
  {
    icon: '🐝',
    stat: '20,000+',
    label: 'Bee Species',
    description: 'There are over 20,000 known species of bees, and they pollinate about one-third of the food we eat.',
  },
  {
    icon: '🦎',
    stat: '6,500+',
    label: 'Reptile Species',
    description: 'Reptiles have been on Earth for over 300 million years, surviving multiple mass extinction events.',
  },
  {
    icon: '🐠',
    stat: '3.5T',
    label: 'Fish in the Ocean',
    description: 'The world\'s oceans are home to an estimated 3.5 trillion fish across more than 33,000 known species.',
  },
  {
    icon: '🦜',
    stat: '10,000+',
    label: 'Bird Species',
    description: 'Birds are found on every continent, from the Arctic tundra to tropical rainforests and desert landscapes.',
  },
];

const FunFacts = () => (
  <section id="facts" className="py-20 md:py-28 px-4 md:px-8 bg-[#1a2e1a]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-[#52b788] font-semibold text-sm uppercase tracking-widest mb-3">
          Did you know?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Amazing Animal Facts
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          The animal kingdom is full of surprises. Here are some mind-blowing facts about our fellow creatures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="text-4xl mb-4">{fact.icon}</div>
            <div className="text-3xl font-extrabold text-[#e9c46a] mb-1">{fact.stat}</div>
            <div className="text-white font-semibold text-base mb-3">{fact.label}</div>
            <p className="text-white/60 text-sm leading-relaxed">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FunFacts;
