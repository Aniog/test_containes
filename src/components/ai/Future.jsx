import { Zap, Globe, Users } from 'lucide-react';

const cards = [
  {
    icon: Zap,
    title: 'Artificial General Intelligence',
    description:
      'Researchers are working toward AGI — systems that can reason, learn, and adapt across any domain, matching or exceeding human-level cognition.',
    color: 'text-yellow-400',
    border: 'border-yellow-500/20',
    bg: 'bg-yellow-500/5',
  },
  {
    icon: Globe,
    title: 'AI & Society',
    description:
      'As AI grows more powerful, questions of ethics, bias, privacy, and governance become central to ensuring it benefits all of humanity.',
    color: 'text-green-400',
    border: 'border-green-500/20',
    bg: 'bg-green-500/5',
  },
  {
    icon: Users,
    title: 'Human-AI Collaboration',
    description:
      'The most promising future is not AI replacing humans, but augmenting them — amplifying creativity, productivity, and problem-solving.',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
  },
];

const Future = () => (
  <section id="future" className="bg-[#07071a] py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Future</span> of AI
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          We are at the beginning of the most transformative technological shift in human history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {cards.map(({ icon: Icon, title, description, color, border, bg }) => (
          <div key={title} className={`rounded-2xl border ${border} ${bg} p-8 flex flex-col gap-4`}>
            <Icon className={`w-8 h-8 ${color}`} />
            <h3 className="text-white font-semibold text-xl">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-violet-500/30 bg-gradient-to-br from-violet-900/50 to-indigo-900/50 p-10 md:p-16 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-violet-600/20 blur-3xl rounded-full" />
        </div>
        <h3 className="relative text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to explore AI?
        </h3>
        <p className="relative text-gray-300 mb-8 max-w-lg mx-auto">
          The age of artificial intelligence is here. Whether you are a developer, researcher, or curious mind — there has never been a better time to dive in.
        </p>
        <a
          href="#about"
          className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-semibold px-10 py-3 rounded-full transition-colors"
        >
          Start Learning
        </a>
      </div>
    </div>
  </section>
);

export default Future;
