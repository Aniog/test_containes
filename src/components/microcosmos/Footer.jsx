import { Microscope, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="bg-deep-space border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-teal-glow font-extrabold text-xl">
          <Microscope className="w-6 h-6" />
          MicroCosmos
        </div>
        <p className="text-muted-blue text-sm text-center">
          Exploring the invisible universe — one micron at a time.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-muted-blue hover:text-teal-glow transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-muted-blue hover:text-teal-glow transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="text-muted-blue hover:text-teal-glow transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 text-center text-muted-blue text-xs">
        © 2026 MicroCosmos. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
