export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-black text-white tracking-tight">
          Micro<span className="text-cyan-400">Cosmos</span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          Exploring the invisible universe — one microbe at a time.
        </p>
        <p className="text-slate-600 text-xs">© 2026 MicroCosmos. All rights reserved.</p>
      </div>
    </footer>
  );
}
