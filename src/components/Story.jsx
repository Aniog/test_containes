const features = [
  { emoji: '🌿', title: 'All-Natural Ingredients', desc: 'No artificial flavors or preservatives. Just real, quality chicken and spices.' },
  { emoji: '🔥', title: 'Pressure-Fried Perfection', desc: 'Our proprietary pressure-frying technique locks in moisture for the juiciest bite.' },
  { emoji: '🧂', title: '12 Secret Spices', desc: 'A family recipe passed down for generations — the blend that started it all.' },
  { emoji: '🤝', title: 'Local Sourcing', desc: 'We partner with local farms to bring you the freshest chicken possible, every day.' },
];

export default function Story() {
  return (
    <section id="story" className="bg-[#1a0a00] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual side */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-600/30 to-red-800/20 rounded-3xl flex items-center justify-center border border-orange-500/20 shadow-2xl shadow-orange-500/10">
                <span className="text-[120px] sm:text-[140px] select-none">👨‍🍳</span>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-[#120600] border border-orange-500/30 rounded-2xl p-4 shadow-xl">
                <div className="text-orange-400 font-extrabold text-2xl">Since 2004</div>
                <div className="text-orange-100/60 text-sm">Serving the community</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1">
            <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Born from a <span className="text-orange-400">Family Recipe</span>
            </h2>
            <p className="text-orange-100/60 text-lg leading-relaxed mb-6">
              It all started in Grandma Mae's kitchen in 2004. Armed with a cast-iron skillet, a blend of 12 secret spices, and an unshakeable belief that fried chicken should be an experience — not just a meal — she opened the first Cluck & Crisp.
            </p>
            <p className="text-orange-100/60 text-lg leading-relaxed mb-10">
              Two decades later, we're still using the same recipe, the same love, and the same commitment to quality that made that first batch legendary.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3 items-start bg-[#120600] rounded-xl p-4 border border-orange-900/30">
                  <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">{f.title}</div>
                    <div className="text-orange-100/50 text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
