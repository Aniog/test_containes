import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, FlaskConical, Eye } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Electron Microscopy',
    desc: 'See structures at nanometer resolution using scanning and transmission electron microscopes.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Dna,
    title: 'Genomics',
    desc: 'Decode the genetic blueprints that drive all microscopic life on our planet.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: FlaskConical,
    title: 'Cell Biology',
    desc: 'Understand the machinery inside cells — organelles, proteins, and molecular motors.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
  {
    icon: Eye,
    title: 'Fluorescence Imaging',
    desc: 'Illuminate specific molecules with fluorescent markers to reveal hidden structures.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
];

export default function HomeFeatures() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">How We See</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools of Discovery
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern science has given us extraordinary windows into the microscopic realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-900/40 bg-gradient-to-r from-cyan-900/30 via-[#0d1f35] to-purple-900/30 p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore the Invisible?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Journey through bacteria, viruses, cells, and crystals in our comprehensive guide to the microscopic world.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/30"
          >
            Begin Your Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
