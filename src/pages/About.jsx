import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cosmos-black pt-20">
      {/* Hero */}
      <div className="bg-cosmos-navy border-b border-cosmos-blue/20 py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-stardust-cyan mb-4 font-inter">About the Initiative</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-memory-white mb-6 leading-tight">
            Why We Preserve
          </h1>
          <p className="text-memory-muted text-lg font-inter leading-relaxed max-w-2xl mx-auto">
            The Global Memory Preservation Initiative was born from a simple belief:
            that the most important thing humanity can carry to the stars is not technology —
            it is memory.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-cinzel text-2xl text-memory-white mb-6">Our Story</h2>
            <div className="space-y-4 text-memory-muted font-inter leading-relaxed text-sm">
              <p>
                In 2047, as the first interstellar migration ships were being constructed in orbit,
                a group of historians, archivists, and ordinary people asked a question that had
                never been asked before: what happens to human memory when humanity leaves?
              </p>
              <p>
                The answer was the Memory Archive — a living repository of human experience,
                designed to travel with the Exodus Fleet and ensure that the people of the stars
                never forget where they came from.
              </p>
              <p>
                Today, we have collected over 47 million memories from every continent, in 847
                languages, spanning five thousand years of recorded human history.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-cinzel text-2xl text-memory-white mb-6">Our Principles</h2>
            <div className="space-y-4">
              {[
                { icon: '◈', title: 'Every Memory Matters', desc: 'No memory is too small. The ordinary is as precious as the extraordinary.' },
                { icon: '✦', title: 'Dignity Above All', desc: 'Every memory is treated with the respect it deserves, regardless of origin.' },
                { icon: '◉', title: 'Universal Access', desc: 'The Archive belongs to all of humanity, now and in the stars.' },
                { icon: '★', title: 'Faithful Preservation', desc: 'We preserve memories as they were given, without alteration or judgment.' },
              ].map(p => (
                <div key={p.title} className="flex gap-3">
                  <span className="text-nebula-violet mt-0.5 flex-shrink-0">{p.icon}</span>
                  <div>
                    <div className="text-memory-white text-sm font-semibold mb-1 font-inter">{p.title}</div>
                    <div className="text-memory-muted text-sm font-inter">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-cinzel text-2xl text-memory-white mb-10 text-center">Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cosmos-blue/40" />
            {[
              { year: '2047', event: 'Initiative Founded', desc: 'The Global Memory Preservation Initiative is established by the United Nations Migration Council.' },
              { year: '2051', event: 'First Million', desc: 'The Archive reaches one million preserved memories, spanning 120 countries.' },
              { year: '2058', event: 'Ancient Memories', desc: 'Partnership with archaeologists enables the inclusion of memories reconstructed from ancient texts and artifacts.' },
              { year: '2067', event: 'Orbital Archive', desc: 'A backup of the entire Archive is established aboard the first orbital station.' },
              { year: '2089', event: 'Exodus Integration', desc: 'The Archive is formally integrated into the Exodus Fleet mission plan.' },
              { year: '2094', event: 'Launch', desc: 'The Exodus Fleet departs, carrying the full Archive — 47 million memories — into the stars.' },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex gap-8 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                  <div className="bg-cosmos-dark border border-cosmos-blue/30 rounded-xl p-5 inline-block text-left">
                    <div className="font-cinzel text-stardust-gold text-sm mb-1">{item.year}</div>
                    <div className="font-cinzel text-memory-white mb-2">{item.event}</div>
                    <div className="text-memory-muted text-sm font-inter">{item.desc}</div>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-5 w-2 h-2 rounded-full bg-nebula-violet -translate-x-1/2"
                  style={{ boxShadow: '0 0 8px rgba(5,150,105,0.8)' }} />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-cosmos-dark border border-cosmos-blue/30 rounded-2xl p-12">
          <h2 className="font-cinzel text-2xl text-memory-white mb-4">Add Your Memory</h2>
          <p className="text-memory-muted font-inter mb-8 max-w-md mx-auto">
            The Archive is still growing. Your memory — however ordinary it may seem —
            is a piece of humanity's story.
          </p>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-4 bg-nebula-violet hover:bg-nebula-violet/80 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(5,150,105,0.3)] font-inter"
          >
            Submit Your Memory
          </button>
        </div>
      </div>
    </div>
  );
}
