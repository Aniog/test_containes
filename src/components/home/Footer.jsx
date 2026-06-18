import { Cake, Instagram, Facebook } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#2d1b0e] text-white py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Cake className="w-6 h-6 text-[#f48fb1]" />
          <span className="font-playfair text-xl font-bold">Sweet Crumbs</span>
        </div>

        <p className="text-white/50 text-sm text-center">
          © {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved. Baked with love in New York.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c2185b] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c2185b] transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
