import { Link } from 'react-router-dom';
import { Archive, Globe, Heart, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nebula-600/40 bg-nebula-600/10 mb-8">
            <Archive className="w-3.5 h-3.5 text-nebula-400" />
            <span className="font-mono text-xs text-nebula-400 tracking-widest uppercase">
              About the Initiative
            </span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            Why We Preserve
            <br />
            <span className="text-nebula-300 text-glow-nebula">Memory</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            In 2047, the Global Migration Council authorized the largest coordinated departure
            in human history. Before we leave, we must remember who we were.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-12 mb-20">
          {[
            {
              icon: <Globe className="w-6 h-6" />,
              color: '#38bdf8',
              title: 'A Record of All Humanity',
              text: 'The Mnemosynē Archive was founded in 2048 with a single mandate: preserve every human memory before the interstellar migration. Not just the memories of the powerful or the famous — every grandmother, every farmer, every child who ever looked up at the stars and wondered.',
            },
            {
              icon: <Heart className="w-6 h-6" />,
              color: '#f43f5e',
              title: 'What Makes Us Human',
              text: "We believe that what we carry to the stars is not just our bodies or our technology — it is our stories. The grief of a Viking woman watching her brother's funeral pyre. The joy of a monsoon wedding. The wonder of a child seeing Earth from the moon for the first time. These are the things that make us who we are.",
            },
            {
              icon: <Star className="w-6 h-6" />,
              color: '#fbbf24',
              title: 'Organized for Eternity',
              text: 'Every memory in the archive is tagged by era, location, emotion, and life event — so that future generations, wherever they are in the galaxy, can find the threads that connect them to their origins. A child born on Kepler-452b will be able to search for "first steps" and find ten million memories of parents watching their children walk.',
            },
            {
              icon: <Users className="w-6 h-6" />,
              color: '#a78bfa',
              title: 'Built by Everyone',
              text: 'The archive has no gatekeepers. Any human being can contribute a memory — in any of the 4,891 languages we support. Our AI translation layer ensures that a memory written in Swahili can be read by someone who speaks only Mandarin, and that the emotional truth survives the translation.',
            },
          ].map(({ icon, color, title, text }) => (
            <div key={title} className="flex gap-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: `${color}15`, color }}
              >
                {icon}
              </div>
              <div>
                <h2 className="font-cinzel text-xl font-bold text-slate-100 mb-3">{title}</h2>
                <p className="text-slate-400 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="relative p-8 md:p-12 rounded-2xl border border-nebula-600/30 bg-space-800/50 mb-20 text-center">
          <div className="absolute inset-0 nebula-glow-purple opacity-40 rounded-2xl pointer-events-none" />
          <blockquote className="relative z-10">
            <p className="font-cinzel text-xl md:text-2xl text-slate-200 italic leading-relaxed mb-6">
              "We are not leaving Earth behind. We are carrying it with us — in every story,
              every song, every memory we have preserved. The stars will know our names
              because we remembered them."
            </p>
            <cite className="font-mono text-sm text-nebula-400 not-italic">
              — Dr. Amara Osei-Bonsu, Founding Director, Mnemosynē Archive, 2048
            </cite>
          </blockquote>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-nebula-600 hover:bg-nebula-700 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)]"
          >
            Explore the Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
