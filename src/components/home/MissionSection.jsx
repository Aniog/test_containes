import { useNavigate } from 'react-router-dom';

export default function MissionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-cosmos-black relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-nebula-violet/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-nebula-violet/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-nebula-pink mb-6 font-inter">
          Our Mission
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-memory-white mb-8 leading-tight">
          The Stars Will Remember
          <br />
          <span className="text-memory-muted">What We Carried</span>
        </h2>
        <p className="text-memory-muted text-lg leading-relaxed mb-8 font-inter">
          In 2047, the Global Memory Preservation Initiative was founded with a single purpose:
          to ensure that when humanity leaves Earth, it carries not just technology and science,
          but the full weight of human experience — every joy, every grief, every ordinary Tuesday
          that made life worth living.
        </p>
        <p className="text-memory-muted leading-relaxed mb-12 font-inter">
          We have collected over 47 million memories in 847 languages from every corner of the Earth.
          From ancient oral traditions to digital recordings, from handwritten letters to neural imprints —
          every memory is a star in the constellation of who we are.
        </p>

        {/* Feature pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: '◈',
              color: '#06b6d4',
              title: 'Preserved Forever',
              desc: 'Every memory is encoded in quantum-stable storage, designed to survive the journey across light-years.',
            },
            {
              icon: '✦',
              color: '#f59e0b',
              title: 'Universally Accessible',
              desc: 'Available in 847 languages with real-time translation, ensuring no memory is lost in translation.',
            },
            {
              icon: '★',
              color: '#84cc16',
              title: 'Humanly Curated',
              desc: 'Our team of 12,000 archivists ensures every memory is treated with the dignity it deserves.',
            },
          ].map(pillar => (
            <div key={pillar.title} className="bg-cosmos-dark border border-cosmos-blue/30 rounded-xl p-6 text-left">
              <div className="text-2xl mb-4" style={{ color: pillar.color }}>{pillar.icon}</div>
              <h3 className="font-cinzel text-lg text-memory-white mb-3">{pillar.title}</h3>
              <p className="text-memory-muted text-sm leading-relaxed font-inter">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => navigate('/about')}
            className="text-stardust-cyan hover:text-memory-white transition-colors font-inter text-sm tracking-wide"
          >
            Learn more about our mission →
          </button>
        </div>
      </div>
    </section>
  );
}
