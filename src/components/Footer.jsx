import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#080d1a] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e8c97a] to-[#c084fc] flex items-center justify-center text-[#050810] text-xs font-bold">
                ✦
              </div>
              <span className="font-serif text-lg text-white font-semibold">Mnemo</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Preserving humanity's memories before the great migration. Every story matters. Every moment endures.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="text-slate-500 uppercase tracking-widest text-xs mb-4">Archive</div>
              <div className="space-y-2">
                <Link to="/explore" className="block text-slate-400 hover:text-white transition-colors">Explore Memories</Link>
                <Link to="/explore?era=Ancient" className="block text-slate-400 hover:text-white transition-colors">Ancient Era</Link>
                <Link to="/explore?era=Modern" className="block text-slate-400 hover:text-white transition-colors">Modern Era</Link>
                <Link to="/explore?era=Digital" className="block text-slate-400 hover:text-white transition-colors">Digital Era</Link>
              </div>
            </div>
            <div>
              <div className="text-slate-500 uppercase tracking-widest text-xs mb-4">Contribute</div>
              <div className="space-y-2">
                <Link to="/submit" className="block text-slate-400 hover:text-white transition-colors">Preserve a Memory</Link>
                <Link to="/explore?emotion=Joy" className="block text-slate-400 hover:text-white transition-colors">Memories of Joy</Link>
                <Link to="/explore?emotion=Grief" className="block text-slate-400 hover:text-white transition-colors">Memories of Grief</Link>
                <Link to="/explore?life_event=Migration" className="block text-slate-400 hover:text-white transition-colors">Migration Stories</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <span>© 2041 Mnemo — Interstellar Migration Archive. All memories preserved in perpetuity.</span>
          <span className="text-[#e8c97a]/40">✦ Carrying humanity's light to the stars</span>
        </div>
      </div>
    </footer>
  );
}
