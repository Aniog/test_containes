export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-white font-black text-xl tracking-tight mb-1">
            Micro<span className="text-teal-400">Cosmos</span>
          </div>
          <p className="text-gray-500 text-sm">Exploring the invisible world, one cell at a time.</p>
        </div>
        <div className="flex gap-8">
          {['Explore', 'Gallery', 'Organisms', 'Discoveries'].map((item) => (
            <a key={item} href="#explore" className="text-gray-500 hover:text-teal-400 transition text-sm">
              {item}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">© 2026 MicroCosmos. All rights reserved.</p>
      </div>
    </footer>
  );
}
