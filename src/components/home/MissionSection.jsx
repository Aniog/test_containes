import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="bg-[#050810] py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[#e8c97a] text-xs font-semibold uppercase tracking-widest mb-4">
          ✦ Our Mission
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-8 leading-tight">
          We Are Leaving Earth.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c97a] to-[#c084fc]">
            We Are Taking Everything.
          </span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          In 2041, the Interstellar Migration Initiative began the largest coordinated departure in human history.
          Before the first ships launched, we asked a simple question: what do we carry with us?
        </p>
        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Not just technology. Not just genetics. But memory. The smell of rain on hot pavement.
          A grandmother's voice. The weight of a child's hand. The specific grief of a particular Tuesday.
          These are the things that make us human. These are the things we refuse to leave behind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/submit"
            className="px-8 py-4 bg-[#e8c97a] text-[#050810] font-semibold rounded-lg hover:bg-[#f0d98a] transition-colors text-base shadow-[0_0_30px_rgba(232,201,122,0.2)]"
          >
            Add Your Memory
          </Link>
          <Link
            to="/explore"
            className="px-8 py-4 border border-[#e8c97a]/40 text-[#e8c97a] font-semibold rounded-lg hover:bg-[#e8c97a]/10 transition-colors text-base"
          >
            Explore the Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
