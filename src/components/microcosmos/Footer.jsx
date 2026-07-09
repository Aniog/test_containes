import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Microscope className="h-6 w-6 text-emerald-300" />
            <span className="font-serif text-xl font-bold text-slate-50">
              MicroCosmos
            </span>
          </div>
          <p className="text-center text-sm text-slate-400 md:text-right">
            A visual expedition into the hidden universe beneath the lens.
            <br className="hidden md:block" />
            Imagery is illustrative, generated for exploration.
          </p>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-widest text-slate-500">
          © {new Date().getFullYear()} MicroCosmos — All worlds reserved.
        </div>
      </div>
    </footer>
  );
}
