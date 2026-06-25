export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white">ARTITECT MACHINERY</p>
          <p className="mt-2 text-sm text-slate-400">Double folding machines and sheet metal folding solutions.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="#products" className="transition hover:text-amber-300">Products</a>
          <a href="#engineering" className="transition hover:text-amber-300">Engineering</a>
          <a href="#advantages" className="transition hover:text-amber-300">Advantages</a>
          <a href="#contact" className="transition hover:text-amber-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}
