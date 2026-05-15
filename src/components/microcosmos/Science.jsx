import { Microscope, Atom, FlaskConical, Eye } from 'lucide-react';

const scienceCards = [
  {
    icon: Microscope,
    title: 'Electron Microscopy',
    description:
      'Scanning and transmission electron microscopes reveal structures at the nanometer scale, magnifying objects up to 10 million times.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80&fit=crop',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Atom,
    title: 'Atomic Force Microscopy',
    description:
      'AFM probes surfaces at the atomic level, mapping individual atoms and molecules with extraordinary precision.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80&fit=crop',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: FlaskConical,
    title: 'Fluorescence Imaging',
    description:
      'Fluorescent dyes and proteins illuminate specific cellular structures, turning biology into living art.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80&fit=crop',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Eye,
    title: 'Confocal Microscopy',
    description:
      'Optical sectioning creates sharp 3D reconstructions of biological specimens, layer by layer.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&fit=crop',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
];

export default function Science() {
  return (
    <section id="science" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Tools of Discovery
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How We See the Invisible
          </h2>
          <p
            className="text-white/60 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Modern imaging technologies have unlocked windows into worlds that were once unimaginable.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scienceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover img-zoom opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 h-52 bg-gradient-to-b from-transparent to-[#0d0d18]" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${card.bg} mb-4`}>
                    <Icon size={22} className={card.color} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-white/60 leading-relaxed text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
