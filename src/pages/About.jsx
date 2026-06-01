import { Link } from 'react-router-dom';
import { STATS } from '../data/memories';

const TimelineItem = ({ year, event, detail }) => (
  <div className="flex gap-6">
    <div className="flex flex-col items-center">
      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1" style={{ boxShadow: '0 0 8px rgba(6,182,212,0.6)' }} />
      <div className="w-px flex-1 bg-slate-800 mt-2" />
    </div>
    <div className="pb-8">
      <span className="text-xs text-cyan-400 font-mono">{year}</span>
      <h3 className="font-cinzel text-base font-semibold text-slate-100 mt-1 mb-1">{event}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-[#050810] pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/4 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-4">About the Archive</p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            The Last Gift<br />
            <span className="text-gradient-cosmic">We Leave Behind</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            The Global Memory Archive is humanity's most ambitious preservation project —
            a living record of every experience, emotion, and story from our 12,000 years
            of recorded civilization.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8 border-y border-slate-800/60 bg-[#080d1a]/60">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { value: '847M+', label: 'Memories' },
            { value: '2.8M+', label: 'Contributors' },
            { value: '194', label: 'Countries' },
            { value: '7,109', label: 'Languages' },
            { value: '12,000+', label: 'Years Spanned' },
            { value: '∞', label: 'Years to Last' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-cinzel text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-xs text-slate-600 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs text-amber-400 uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-5">
                Why We Preserve
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  In 2051, the Interstellar Migration Authority announced that humanity would
                  begin its departure from Earth over the following century. The first arks
                  would carry ten thousand people each to habitable worlds in the Kepler system.
                </p>
                <p>
                  The question arose immediately: what do we take with us? We can carry seeds,
                  technology, and knowledge. But what about the texture of a grandmother's voice?
                  The smell of rain on hot pavement? The feeling of watching your child take
                  their first steps?
                </p>
                <p>
                  The Memory Archive was founded to answer that question. We take everything.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-rose-400 uppercase tracking-widest mb-3">Our Method</p>
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-5">
                How We Preserve
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  Contributors submit memories through our neural resonance interface — a
                  non-invasive process that captures not just the narrative of a memory,
                  but its emotional signature, sensory texture, and cultural context.
                </p>
                <p>
                  Each memory is encoded in crystalline data structures designed to remain
                  stable for at least 10,000 years. The Archive is housed in a solar-powered
                  orbital station that will continue broadcasting long after the last human
                  leaves Earth.
                </p>
                <p>
                  We are not just preserving history. We are preserving humanity itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 bg-[#080d1a]/40 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-cyan-400 uppercase tracking-widest mb-3">History</p>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-10">
            The Archive's Story
          </h2>
          <div>
            <TimelineItem
              year="2051"
              event="The Migration Announcement"
              detail="The IMA announces humanity's departure. The Memory Archive project is proposed within 48 hours by a coalition of historians, artists, and scientists."
            />
            <TimelineItem
              year="2053"
              event="First Memory Submitted"
              detail="Amara Kofi of Accra submits the first memory: her grandmother teaching her to press her palms into warm earth. It receives 2.8 million views in its first week."
            />
            <TimelineItem
              year="2055"
              event="One Million Memories"
              detail="The Archive reaches its first milestone. The UN declares it a protected heritage site. Contributions begin arriving from every country on Earth."
            />
            <TimelineItem
              year="2060"
              event="The Oral Tradition Initiative"
              detail="A dedicated program launches to capture memories from communities with oral rather than written traditions, adding 40 million new fragments."
            />
            <TimelineItem
              year="2065"
              event="Orbital Station Launched"
              detail="The Archive's permanent home — a solar-powered orbital station — is placed in a stable orbit. It will outlast Earth's biosphere."
            />
            <TimelineItem
              year="2071"
              event="One Billion Memories"
              detail="The Archive surpasses one billion preserved memories. The milestone is marked by a global day of remembrance."
            />
            <TimelineItem
              year="2100"
              event="The Last Ark Departs"
              detail="The final migration vessel leaves Earth. The Archive continues broadcasting, a lighthouse in the dark for anyone who might one day listen."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Your Memory Belongs Here
          </h2>
          <p className="text-slate-400 mb-8">
            Every human experience is worth preserving. Add yours to the constellation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="px-8 py-3.5 rounded-full bg-cyan-500 text-black font-semibold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Explore the Archive
            </Link>
            <Link
              to="/submit"
              className="px-8 py-3.5 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm uppercase tracking-wider hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
            >
              Submit a Memory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
