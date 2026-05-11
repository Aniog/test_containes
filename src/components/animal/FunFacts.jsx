const facts = [
  {
    emoji: '🐙',
    fact: 'Octopuses have three hearts, blue blood, and can change color in milliseconds to camouflage themselves.',
    category: 'Marine Life',
  },
  {
    emoji: '🦋',
    fact: 'A butterfly tastes with its feet. Their taste sensors are located in their tarsi, the segments at the end of their legs.',
    category: 'Insects',
  },
  {
    emoji: '🐘',
    fact: 'Elephants are the only animals that cannot jump. They also mourn their dead and show empathy toward other species.',
    category: 'Mammals',
  },
  {
    emoji: '🦜',
    fact: 'African Grey Parrots can learn over 1,000 words and understand concepts like shape, color, and number.',
    category: 'Birds',
  },
  {
    emoji: '🐋',
    fact: 'Blue whales are the largest animals ever known to have lived on Earth — their hearts alone weigh as much as a car.',
    category: 'Marine Life',
  },
  {
    emoji: '🦎',
    fact: 'Chameleons don\'t change color to blend in — they change color to communicate emotions and regulate body temperature.',
    category: 'Reptiles',
  },
];

const stats = [
  { value: '8.7M', label: 'Species on Earth', emoji: '🌍' },
  { value: '1M+', label: 'Threatened with Extinction', emoji: '⚠️' },
  { value: '70%', label: 'Wildlife Lost Since 1970', emoji: '📉' },
  { value: '3,900', label: 'Wild Tigers Remaining', emoji: '🐯' },
];

const FunFacts = () => {
  return (
    <section id="facts" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Did You Know?</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Amazing Animal Facts
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            The animal kingdom is full of surprises. Here are some of the most astonishing facts about our fellow creatures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {facts.map((item, i) => (
            <div
              key={i}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide bg-emerald-100 px-2.5 py-1 rounded-full">
                {item.category}
              </span>
              <p className="text-stone-600 text-sm leading-relaxed mt-3">{item.fact}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-10 md:p-14">
          <div className="text-center mb-10">
            <h3
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Wildlife by the Numbers
            </h3>
            <p className="text-stone-400 text-base">The scale of Earth's biodiversity — and the urgency of protecting it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-stone-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
