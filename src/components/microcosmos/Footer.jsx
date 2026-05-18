export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-white font-black text-2xl tracking-tighter">MICROCOSMOS</p>
            <p className="text-neutral-500 text-sm mt-2">The invisible world, made visible.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm text-neutral-500">
            <span>Microscopy Archive</span>
            <span>Scientific Imaging</span>
            <span>Field Research</span>
          </div>
        </div>
        <div className="border-t border-neutral-900 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">© 2026 MicroCosmos. All rights reserved.</p>
          <p className="text-neutral-600 text-xs uppercase tracking-widest">Exploring Life at the Nanoscale</p>
        </div>
      </div>
    </footer>
  );
}
