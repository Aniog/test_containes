const FACTS = [
  {
    emoji: '👃',
    title: 'Super Sniffers',
    fact: "A dog's sense of smell is 10,000 to 100,000 times more powerful than a human's. They can detect diseases like cancer and diabetes.",
  },
  {
    emoji: '💤',
    title: 'Dream Big',
    fact: 'Dogs dream just like humans! They experience REM sleep and their paws and eyes often twitch as they relive the day\'s adventures.',
  },
  {
    emoji: '❤️',
    title: 'Heartbeat Sync',
    fact: 'Studies show that when dogs and their owners gaze into each other\'s eyes, both experience a surge of oxytocin — the "love hormone."',
  },
  {
    emoji: '🎵',
    title: 'Music Lovers',
    fact: 'Dogs have a sense of music. Research shows they prefer classical music and reggae, which can reduce stress and anxiety.',
  },
  {
    emoji: '🌡️',
    title: 'Nose Prints',
    fact: "Just like human fingerprints, every dog's nose print is unique. No two dogs have the same pattern of ridges and creases.",
  },
  {
    emoji: '🏃',
    title: 'Speed Demons',
    fact: 'Greyhounds can reach speeds of up to 45 mph (72 km/h), making them the fastest dog breed on the planet.',
  },
  {
    emoji: '🧠',
    title: 'Emotional IQ',
    fact: 'Dogs can read human emotions by looking at our faces. They can distinguish between happy and angry expressions.',
  },
  {
    emoji: '🌍',
    title: 'Ancient Bond',
    fact: 'Dogs were the first animals to be domesticated by humans, with evidence of the bond dating back over 15,000 years.',
  },
];

const FunFacts = () => (
  <section id="facts" className="bg-stone-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
          Did You Know?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Amazing Dog Facts</h2>
        <p className="text-stone-600 max-w-xl mx-auto leading-relaxed">
          Dogs are endlessly fascinating. Here are some incredible facts that make them even more lovable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FACTS.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col gap-3"
          >
            <span className="text-4xl">{item.emoji}</span>
            <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FunFacts;
