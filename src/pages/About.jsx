import { Rocket, Globe, Archive, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  { year: '2031', event: 'Memory Archive Initiative founded', detail: 'A coalition of 47 nations commits to preserving human memory before the migration.' },
  { year: '2033', event: 'First million memories collected', detail: 'Contributors from 120 countries submit memories in 312 languages.' },
  { year: '2037', event: 'Archive Crystal technology developed', detail: 'Synthetic crystal storage capable of holding 10 billion memories per gram.' },
  { year: '2041', event: 'Global collection phase begins', detail: 'Mobile collection units deployed to every inhabited region on Earth.' },
  { year: '2044', event: 'Four million memories preserved', detail: 'The archive surpasses its original target three years ahead of schedule.' },
  { year: '2047', event: 'Departure — Archive Crystal loaded', detail: 'All twelve colony ships carry a complete copy of the Memory Archive.' },
];

const values = [
  { icon: Globe, title: 'Universal', desc: 'Every culture, every language, every life stage. No memory is too small or too ordinary.' },
  { icon: Archive, title: 'Permanent', desc: 'Archive Crystals are designed to last 10,000 years. Your memory will outlast the stars we know.' },
  { icon: Users, title: 'Collective', desc: 'Individual memories form a tapestry of shared humanity — our greatest inheritance.' },
  { icon: Star, title: 'Cosmic', desc: 'The archive travels to Kepler-452b, ensuring human memory survives across the galaxy.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cosmos-950 pt-24 pb-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nebula-500/20 border border-nebula-500/30 mb-8">
          <Rocket className="w-7 h-7 text-nebula-300" />
        </div>
        <h1 className="font-cinzel text-4xl md:text-6xl text-text-primary font-bold mb-6 leading-tight">
          Why We Remember
        </h1>
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          In 2047, twelve colony ships will carry humanity to a new world 1,400 light-years away.
          We will leave behind everything we have ever known. The Memory Archive exists so that
          we never leave behind who we are.
        </p>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(v => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-cosmos-800/60 rounded-2xl border border-nebula-500/20 p-6">
                <div className="w-10 h-10 rounded-xl bg-nebula-500/20 border border-nebula-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-nebula-300" />
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission statement */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-cosmos-800/40 rounded-3xl border border-nebula-500/20 p-8 md:p-12">
          <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-4">Our Mission</p>
          <blockquote className="font-cinzel text-2xl md:text-3xl text-text-primary leading-relaxed mb-6">
            "To ensure that every human life — however brief, however quiet — is remembered
            across the stars, so that the civilization we build tomorrow is rooted in the
            full truth of who we were today."
          </blockquote>
          <p className="text-text-muted font-mono text-sm">
            — Memory Archive Initiative Charter, 2031
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <p className="font-mono text-xs text-stardust-400 uppercase tracking-widest mb-3">Timeline</p>
        <h2 className="font-cinzel text-3xl text-text-primary font-semibold mb-12">
          The Road to Departure
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-500/40 via-aurora-500/30 to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 pl-2">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-cosmos-800 border-2 border-nebula-500/40 flex items-center justify-center z-10 relative">
                    <div className="w-2 h-2 rounded-full bg-nebula-400" />
                  </div>
                </div>
                <div className="pb-2">
                  <span className="font-mono text-xs text-stardust-300 uppercase tracking-widest">{item.year}</span>
                  <h3 className="font-cinzel text-lg text-text-primary font-semibold mt-1 mb-1">{item.event}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-8 text-center">
        <Link
          to="/submit"
          className="inline-flex items-center gap-2 bg-nebula-500 hover:bg-nebula-400 text-white rounded-full px-8 py-4 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-nebula-500/30"
        >
          Add Your Memory
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
