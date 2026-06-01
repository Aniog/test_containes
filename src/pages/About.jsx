const TEAM = [
  { name: 'Dr. Aisha Okonkwo', role: 'Founder & Director', origin: 'Lagos, Nigeria', color: '#7c83fd' },
  { name: 'Prof. Hiroshi Yamamoto', role: 'Chief Archivist', origin: 'Tokyo, Japan', color: '#4ecdc4' },
  { name: 'Léa Moreau', role: 'Memory Curator', origin: 'Paris, France', color: '#ff6b9d' },
  { name: 'Dr. Mei Lin Chen', role: 'Preservation Science', origin: 'Shanghai, China', color: '#ffd166' },
  { name: 'Sipho Dlamini', role: 'Community Outreach', origin: 'Johannesburg, South Africa', color: '#ff8c42' },
  { name: 'Dr. Ingrid Larsen', role: 'Data Architecture', origin: 'Oslo, Norway', color: '#a5aaff' },
];

const VALUES = [
  { icon: '◈', color: '#7c83fd', title: 'Every Memory Matters', text: 'We do not rank or judge. A grandmother\'s recipe is as precious as a world-historical event. The ordinary is extraordinary.' },
  { icon: '○', color: '#4ecdc4', title: 'Radical Inclusivity', text: 'We actively seek memories from every culture, language, and corner of Earth. No voice is too small for the archive.' },
  { icon: '☆', color: '#a5aaff', title: 'Consent & Dignity', text: 'Every memory is submitted with full consent. Contributors control how their memories are shared and can withdraw at any time.' },
  { icon: '◉', color: '#ff8c42', title: 'Permanence', text: 'The archive is designed to last. Multiple redundant copies, distributed storage, and format-agnostic encoding ensure nothing is lost.' },
];

export default function About() {
  return (
    <main className="bg-void min-h-screen pt-20 pb-16 px-6">
      <div className="nebula-blob" style={{ width: 600, height: 400, background: '#7c83fd', top: '10%', left: '-10%' }} />
      <div className="nebula-blob" style={{ width: 500, height: 500, background: '#ff6b9d', bottom: '20%', right: '-10%', opacity: 0.1 }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-aurora font-mono text-sm tracking-widest uppercase mb-3">
            About the Initiative
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-starlight mb-6 leading-tight">
            Why We Remember
          </h1>
          <p className="text-mist-light text-xl max-w-3xl mx-auto leading-relaxed">
            In 2051, as humanity prepared for the greatest journey in its history,
            a group of archivists, scientists, and storytellers asked a simple question:
            what do we take with us?
          </p>
        </div>

        {/* Origin story */}
        <div
          className="rounded-3xl border border-white/8 p-8 md:p-12 mb-16"
          style={{ background: 'rgba(13,21,48,0.6)' }}
        >
          <div className="max-w-3xl mx-auto space-y-5 text-mist-light text-base leading-relaxed">
            <p>
              The answer, we decided, was everything. Not the monuments — those would be
              photographed and scanned and rendered in three dimensions. Not the books —
              those would be digitized and carried in the ship's libraries. What we needed
              to preserve was something harder to capture: the texture of lived experience.
              The smell of rain on red dust. The weight of a sleeping child. The sound of
              a language dying.
            </p>
            <p>
              The Mnemosyne Archive was founded on the belief that human identity is not
              stored in objects or institutions, but in memory. In the stories we tell
              ourselves about who we are and where we came from. In the moments — small
              and large, private and public — that shaped us.
            </p>
            <p>
              We built a system to collect those moments. Not just from the famous and
              the powerful, but from everyone. From the farmer in Ghana who remembered
              the last harvest festival. From the scientist in Antarctica who held
              800,000-year-old air in her hands. From the father in Tokyo who heard
              the migration lottery call his family's number.
            </p>
            <p className="text-starlight font-medium">
              These are the memories we carry. This is who we are.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-starlight mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-6 rounded-2xl border border-white/8"
                style={{ background: 'rgba(13,21,48,0.5)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${v.color}22`, color: v.color }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-starlight mb-2">{v.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-starlight mb-8 text-center">
            The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-2xl border border-white/8 text-center"
                style={{ background: 'rgba(13,21,48,0.5)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3"
                  style={{ background: `${member.color}22`, color: member.color }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-starlight text-sm mb-0.5">{member.name}</h3>
                <p className="text-aurora-glow text-xs mb-1">{member.role}</p>
                <p className="text-mist-dark text-xs">{member.origin}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl border border-aurora/20 p-10 text-center"
          style={{ background: 'rgba(124,131,253,0.05)' }}
        >
          <h2 className="font-display text-2xl font-bold text-starlight mb-3">
            Add Your Memory
          </h2>
          <p className="text-mist-light text-base mb-6 max-w-md mx-auto">
            The archive is only as complete as the memories it holds.
            Your story belongs here.
          </p>
          <a
            href="/contribute"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-aurora text-white font-semibold transition-all hover:bg-aurora-glow hover:shadow-[0_0_40px_rgba(124,131,253,0.4)]"
          >
            Contribute a Memory
          </a>
        </div>
      </div>
    </main>
  );
}
