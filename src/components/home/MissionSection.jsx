import { useNavigate } from 'react-router-dom';
import { Archive, Globe, Rocket, Heart } from 'lucide-react';

const PILLARS = [
  {
    icon: <Archive className="w-6 h-6" />,
    title: 'Preserve',
    description: 'Every memory submitted is encrypted, replicated across seven data centers, and encoded into the colony ship\'s permanent archive.',
    color: '#4f8ef7',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Connect',
    description: 'Memories from 312 languages and every inhabited region of Earth, woven together into a single tapestry of human experience.',
    color: '#2dd4bf',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Carry Forward',
    description: 'The archive travels with the colony ships. Future generations, born among the stars, will know where they came from.',
    color: '#a78bfa',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Honor',
    description: 'No memory is too small. A grandmother\'s recipe. A child\'s first word. The smell of rain. These are the things worth saving.',
    color: '#e879a0',
  },
];

export default function MissionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 md:px-8 bg-space-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-inter text-stardust-gold text-sm uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We Are Leaving Earth.<br />
              <span className="text-nebula-blue">We Will Not Forget It.</span>
            </h2>
            <p className="font-inter text-slate-300 text-lg leading-relaxed mb-6">
              In 2051, the Global Memory Preservation Initiative was founded with a single purpose: to ensure that the story of humanity on Earth is never lost.
            </p>
            <p className="font-inter text-slate-400 leading-relaxed mb-8">
              As the first colony ships prepare for departure, we are racing against time to collect, digitize, and archive the memories of every person who has ever lived on this planet. From ancient oral traditions to digital diaries, from cave paintings to social media posts — all of it belongs to the archive.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 border border-stardust-gold/40 text-stardust-gold rounded-full hover:bg-stardust-gold/10 transition-all duration-300 font-inter text-sm"
            >
              Learn About the Initiative
            </button>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl border border-slate-800 bg-space-navy/50 hover:border-opacity-60 transition-all duration-300"
                style={{ '--pillar-color': pillar.color }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-cinzel text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="font-inter text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
