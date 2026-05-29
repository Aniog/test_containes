import { Microscope } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Microscope className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-bold text-lg">
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Exploring the invisible universe — one microbe at a time.
        </p>
        <div className="flex gap-6">
          {['Explore', 'Gallery', 'Organisms', 'Science', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 hover:text-cyan-400 text-sm transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} MicroCosmos. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
