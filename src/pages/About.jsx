import { useNavigate } from 'react-router-dom';

const TIMELINE = [
  { year: '2041', event: 'Archive Founded', desc: 'The Global Memory Archive Initiative is established by the United Nations Migration Council.' },
  { year: '2043', event: 'First Million', desc: 'One million memories submitted from 94 countries in the first two years.' },
  { year: '2045', event: 'Digital Preservation', desc: 'All memories encoded in quantum-stable format for interstellar transmission.' },
  { year: '2049', event: 'Archive Satellites', desc: 'Three orbital archive nodes launched to ensure redundant preservation.' },
  { year: '2053', event: 'Four Million', desc: 'Over four million memories preserved, representing every inhabited region on Earth.' },
  { year: '2057', event: 'Migration Begins', desc: 'The first colony ships depart, carrying the complete Archive in their memory cores.' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: '#050810' }}>
      {/* Hero */}
      <div
        className="py-24 md:py-32 px-4 text-center"
        style={{ background: 'linear-gradient(180deg, #080d1a 0%, #050810 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#4a9eff' }}>
            About the Initiative
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6" style={{ color: '#e8edf5' }}>
            Why We Remember
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#8899b4' }}>
            The Memory Archive is humanity's most ambitious cultural preservation project —
            a living record of what it means to be human, built to survive the stars.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div
          className="rounded-2xl p-8 md:p-12 mb-16"
          style={{ background: '#0d1526', border: '1px solid rgba(74,158,255,0.12)' }}
        >
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold mb-6" style={{ color: '#e8edf5' }}>
            Our Mission
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#8899b4' }}>
            <p>
              When the decision was made to begin the Great Migration — humanity's first
              interstellar colonization effort — scientists, engineers, and politicians focused
              on the practical: fuel, genetics, food systems, governance.
            </p>
            <p>
              But a group of archivists, poets, and historians asked a different question:
              what happens to memory when a civilization leaves its home?
            </p>
            <p>
              The Memory Archive was their answer. We collect personal memories — not history
              books, not official records, but the lived experience of ordinary people.
              The smell of a grandmother's kitchen. The sound of a city at dawn.
              The feeling of soil between your fingers.
            </p>
            <p>
              These memories will travel with the colony ships. They will be accessible to
              every human born on a new world who wants to know what Earth felt like.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: '#e8edf5' }}>
          Archive Timeline
        </h2>
        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(74,158,255,0.3), transparent)' }}
          />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div
                    className="rounded-xl p-5"
                    style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="font-cinzel text-sm font-bold mb-1" style={{ color: '#4a9eff' }}>
                      {item.year}
                    </div>
                    <h3 className="font-semibold mb-1.5" style={{ color: '#e8edf5' }}>{item.event}</h3>
                    <p className="text-sm" style={{ color: '#8899b4' }}>{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-2.5 md:left-1/2 top-5 w-3 h-3 rounded-full -translate-x-1/2 md:-translate-x-1/2"
                  style={{ background: '#4a9eff', boxShadow: '0 0 8px rgba(74,158,255,0.6)' }}
                />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e8edf5' }}>
            Your Memory Belongs Here
          </h2>
          <p className="mb-8" style={{ color: '#8899b4' }}>
            The Archive is only complete when every voice is included. Add yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/submit')}
              className="px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                background: 'linear-gradient(135deg, #4a9eff, #2563eb)',
                color: '#fff',
                boxShadow: '0 0 24px rgba(74,158,255,0.3)',
              }}
            >
              Submit Your Memory
            </button>
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-3.5 rounded-full font-semibold text-sm border border-white/20 text-[#e8edf5] hover:bg-white/5 transition-all"
            >
              Explore the Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
