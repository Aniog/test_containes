export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-xl tracking-widest uppercase mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Animal Kingdom
            </div>
            <p className="text-stone-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Celebrating the diversity of life on Earth.
            </p>
          </div>
          <div className="flex gap-8 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <a href="#habitats" className="hover:text-white transition-colors">Habitats</a>
            <a href="#featured" className="hover:text-white transition-colors">Featured</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#facts" className="hover:text-white transition-colors">Facts</a>
            <a href="#conservation" className="hover:text-white transition-colors">Conservation</a>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-xs text-stone-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          © 2026 Animal Kingdom. All rights reserved. Made with love for wildlife.
        </div>
      </div>
    </footer>
  );
}
