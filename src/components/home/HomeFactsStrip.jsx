import { Eye, Dna, Globe, FlaskConical } from 'lucide-react';

const facts = [
  {
    icon: Eye,
    title: 'Invisible to the Naked Eye',
    desc: 'Most microorganisms measure between 0.1 and 10 micrometers — a human hair is 70,000 nm wide.',
    color: '#3DBFA8',
    bg: '#E8F7F4',
  },
  {
    icon: Dna,
    title: 'Ancient Architects of Life',
    desc: "Bacteria have existed for 3.8 billion years, predating all complex life and shaping Earth's atmosphere.",
    color: '#9B8EC4',
    bg: '#F0EDF9',
  },
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    desc: 'Microbes thrive in boiling hot springs, frozen tundra, deep ocean trenches, and even in clouds.',
    color: '#5BA4CF',
    bg: '#EAF4FB',
  },
  {
    icon: FlaskConical,
    title: 'Essential to Human Health',
    desc: 'Your body hosts 38 trillion microbial cells — outnumbering your own cells — forming a vital microbiome.',
    color: '#FF8B64',
    bg: '#FFF0EB',
  },
];

const HomeFactsStrip = () => {
  return (
    <section className="py-20 bg-[#F5FAF8] border-y border-[#D9EDE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-2 block">
            Did You Know?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">
            Fascinating Microbial Facts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className="bg-white border border-[#D9EDE8] rounded-xl p-6 hover:border-[#3DBFA8] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: fact.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: fact.color }} />
                </div>
                <h3 className="text-sm font-bold text-[#2C3E50] mb-2">{fact.title}</h3>
                <p className="text-sm text-[#7F8C8D] leading-relaxed">{fact.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFactsStrip;

