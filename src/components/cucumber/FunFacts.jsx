const facts = [
  { emoji: '🌍', text: 'Cucumbers originated in South Asia over 5,000 years ago.' },
  { emoji: '🥒', text: 'Botanically, cucumbers are a fruit — they grow from flowers and contain seeds.' },
  { emoji: '❄️', text: 'The inside of a cucumber can be up to 20°F cooler than the outside air.' },
  { emoji: '🌊', text: 'Cucumbers are 96% water — one of the highest water contents of any food.' },
  { emoji: '🚀', text: 'NASA has grown cucumbers in space aboard the International Space Station.' },
  { emoji: '🌱', text: 'There are over 100 varieties of cucumbers grown worldwide.' },
];

const FunFacts = () => (
  <section className="py-20 md:py-24 bg-cucumber text-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 className="font-black text-3xl md:text-5xl mb-4">
          Did You Know?
        </h2>
        <p className="text-green-200 text-lg max-w-xl mx-auto">
          Cucumbers are full of surprises. Here are some fascinating facts.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((f, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <div className="text-4xl mb-3">{f.emoji}</div>
            <p className="text-white leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FunFacts;
