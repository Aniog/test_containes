import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050d12] text-[#e8f4f8]">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="border-t border-[#1a3a4a] bg-[#0a1a24] py-10 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg text-white">
              Micro<span className="text-[#00c9b1]">Cosmos</span>
            </span>
          </div>
          <p className="text-[#4a7a8a] text-sm text-center">
            Exploring the invisible world beneath the lens. © 2026 MicroCosmos.
          </p>
          <div className="flex gap-6 text-sm text-[#7fb3c8]">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/explore" className="hover:text-white transition-colors">Explore</a>
            <a href="/gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
