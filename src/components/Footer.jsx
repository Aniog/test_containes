import { Microscope } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#050a0f] border-t border-teal-900/30 py-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Microscope className="w-5 h-5 text-teal-400" />
        <span className="text-white font-black text-base tracking-tight">
          Micro<span className="text-teal-400">Cosmos</span>
        </span>
      </div>
      <p className="text-slate-600 text-sm text-center">
        © {new Date().getFullYear()} MicroCosmos. Exploring the invisible universe.
      </p>
      <div className="flex gap-6">
        {['Explore', 'Gallery', 'Science'].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-slate-500 hover:text-teal-400 text-sm transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
