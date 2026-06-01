import { Link } from 'react-router-dom';

const MISSION_POINTS = [
  {
    icon: '◈',
    color: '#7c83fd',
    title: 'Preserve',
    text: 'Every memory submitted is encoded in multiple formats and stored across distributed archives, ensuring nothing is lost to time or distance.',
  },
  {
    icon: '○',
    color: '#4ecdc4',
    title: 'Connect',
    text: 'Our constellation map reveals the invisible threads between memories — how a grandmother in Ghana and a scientist in Antarctica shared the same feeling of wonder.',
  },
  {
    icon: '☆',
    color: '#a5aaff',
    title: 'Carry Forward',
    text: 'When humanity departs, these memories travel with us. Not as data, but as the living record of what it meant to be human on Earth.',
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="nebula-blob"
        style={{ width: 600, height: 600, background: '#ff6b9d', top: '10%', right: '-15%', opacity: 0.08 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-rose font-mono text-sm tracking-widest uppercase mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              Before We Leave,
              <br />
              <span className="shimmer-text">We Remember</span>
            </h2>
            <p className="text-mist-light text-lg leading-relaxed mb-6">
              In 2051, the Mnemosyne Archive was founded with a single purpose: to ensure that
              the full breadth of human experience — every joy, every grief, every ordinary
              Tuesday — would survive the interstellar migration.
            </p>
            <p className="text-mist text-base leading-relaxed mb-8">
              We are not a museum. We are not a database. We are a living constellation of
              human consciousness, growing every day as people from every corner of Earth
              contribute the memories that matter most to them.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-aurora-glow font-semibold hover:text-aurora transition-colors"
            >
              Learn about our mission
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right: mission points */}
          <div className="space-y-6">
            {MISSION_POINTS.map((point) => (
              <div
                key={point.title}
                className="flex gap-5 p-6 rounded-2xl border border-white/8 transition-all hover:border-white/15"
                style={{ background: 'rgba(13,21,48,0.5)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${point.color}22`, color: point.color }}
                >
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-starlight mb-2">
                    {point.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
