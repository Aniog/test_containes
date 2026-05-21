export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-black text-xl tracking-tight">
          Micro<span className="text-teal-400">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[['#explore', 'Explore'], ['#gallery', 'Gallery'], ['#organisms-title', 'Organisms']].map(([href, label]) => (
            <a key={href} href={href} className="text-gray-400 hover:text-teal-400 transition text-sm font-medium">
              {label}
            </a>
          ))}
        </div>
        <a href="#explore" className="bg-teal-400 text-gray-950 font-bold px-5 py-2 rounded-full hover:bg-teal-300 transition text-sm">
          Explore
        </a>
      </div>
    </nav>
  );
}
