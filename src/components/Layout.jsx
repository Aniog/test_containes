import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />
      <main>{children}</main>
      <footer className="border-t border-ash py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-ink font-semibold">MicroCosmos</p>
            <p className="text-xs font-mono text-graphite tracking-widest uppercase mt-1">
              The Microscopic World
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-graphite tracking-wide">
              An Educational Platform for Biology & Microscopy
            </p>
            <p className="text-xs text-silver mt-1 font-mono">
              © {new Date().getFullYear()} — All specimens catalogued with scientific rigour
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-graphite tracking-widest uppercase">
              Est. MMXXVI
            </p>
            <p className="text-xs text-silver mt-1">
              Magnifying the invisible
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
