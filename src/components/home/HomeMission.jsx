const HomeMission = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-space-gradient border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-rose-400 uppercase tracking-widest mb-4">The Archive's Purpose</p>
        <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-slate-100 mb-8 leading-tight">
          We Are Leaving.<br />
          <span className="text-gradient-cosmic">Our Memories Stay.</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          In 2051, humanity began its greatest journey — the interstellar migration to new worlds.
          But before we go, we are preserving everything: every laugh, every loss, every ordinary
          Tuesday that made us who we are.
        </p>
        <p className="text-slate-500 text-base leading-relaxed max-w-2xl mx-auto">
          The Memory Archive is a living monument to Earth. It will remain here, orbiting our
          home star, so that future travelers — and perhaps other intelligences — may one day
          understand what it meant to be human.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '◈',
              color: '#06b6d4',
              title: 'Preserve',
              desc: 'Every memory submitted is encoded in crystalline data structures designed to last 10,000 years.',
            },
            {
              icon: '✦',
              color: '#7c3aed',
              title: 'Connect',
              desc: 'Discover unexpected threads between memories across centuries, continents, and cultures.',
            },
            {
              icon: '◇',
              color: '#f59e0b',
              title: 'Transmit',
              desc: 'The archive broadcasts continuously, a beacon of human experience into the cosmos.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-slate-700/40 bg-[#080d1a] text-left"
            >
              <div
                className="text-2xl mb-4"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-cinzel text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMission;
