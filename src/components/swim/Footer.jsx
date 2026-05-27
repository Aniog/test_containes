import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-extrabold text-lg">SwimGear</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#brands" className="hover:text-white transition">Brands</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <p className="text-sky-400 text-sm">
            © {new Date().getFullYear()} SwimGear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
