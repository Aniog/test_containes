const stats = [
  { value: '8,849m', label: 'Height of Everest' },
  { value: '14', label: 'Eight-thousanders' },
  { value: '7', label: 'Summits Challenge' },
  { value: '200+', label: 'Years of History' },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 px-6 bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="inline-block bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-sky-500/30">
            The Sport
          </span>
          <h2 id="about-title" className="font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
            The Ancient Art of<br />
            <span className="text-sky-400">Reaching the Top</span>
          </h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            Mountain climbing, or alpinism, is one of humanity's oldest and most demanding pursuits.
            From the first recorded ascent of Mont Blanc in 1786 to the conquest of Everest in 1953,
            climbers have pushed the boundaries of what the human body and mind can achieve.
          </p>
          <p className="text-slate-300 leading-relaxed mb-8">
            Whether you're a weekend hiker tackling your first peak or an elite alpinist eyeing
            the world's most technical routes, the mountains offer challenges and rewards unlike
            anything else on Earth.
          </p>
          <a
            href="#peaks"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
          >
            Discover Famous Peaks
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-sky-500 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
