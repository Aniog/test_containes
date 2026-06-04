import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-forest-deep text-mist-light">
      <Nav />
      <main>{children}</main>
      <footer className="border-t border-mist-grey/15 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-fog-white font-black text-lg tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ancient Canopy
          </span>
          <p className="text-mist-grey text-xs uppercase tracking-widest">
            Old-growth photography — {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
