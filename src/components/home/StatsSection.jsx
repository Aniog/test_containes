import { useEffect, useRef, useState } from 'react';

const STATS = [
  {
    value: 10,
    suffix: '³⁰',
    label: 'Microbes on Earth',
    description: 'A nonillion — more than all the stars in the observable universe.',
    color: '#00d4ff',
  },
  {
    value: 3.5,
    suffix: 'B yrs',
    label: 'Years of Evolution',
    description: 'Microorganisms have been evolving on Earth for 3.5 billion years.',
    color: '#00ffcc',
  },
  {
    value: 37,
    suffix: 'T',
    label: 'Microbes in Your Body',
    description: 'Your body hosts roughly 37 trillion microbial cells — equal to your own cells.',
    color: '#a78bfa',
  },
  {
    value: 50,
    suffix: '%',
    label: 'Oxygen from Microbes',
    description: 'Half of all oxygen on Earth is produced by microscopic phytoplankton.',
    color: '#f472b6',
  },
];

const FACTS = [
  'Bacteria can evolve resistance to antibiotics in as little as 11 days.',
  'Some tardigrades have survived exposure to the vacuum of outer space.',
  'A single gram of soil can contain up to 1 billion bacteria.',
  'Viruses are the most abundant biological entities on Earth.',
  'Mycorrhizal fungi networks connect entire forests underground.',
  'Bioluminescent bacteria light up the deep ocean floor.',
];

const AnimatedNumber = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(+(eased * value).toFixed(1));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.round(display) : display}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-28 px-6 bg-[#050d1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#0a1f3a_0%,_#050d1a_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-4">
            By the Numbers
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The scale of the invisible
          </h2>
          <p className="text-[#8ab4c8] text-lg max-w-xl mx-auto">
            Numbers that reveal just how vast and vital the microbial world truly is.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-8 bg-[#0d1a2e] border border-[#1a2d4a] rounded-2xl text-center hover:border-[#00d4ff]/40 transition-all duration-300 group"
            >
              <div
                className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{stat.label}</h3>
              <p className="text-[#8ab4c8] text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Facts ticker */}
        <div className="border border-[#1a2d4a] rounded-2xl p-8 bg-[#0d1a2e]">
          <h3
            className="text-white font-semibold text-xl mb-6 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Did you know?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FACTS.map((fact, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[#8ab4c8] text-sm leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
