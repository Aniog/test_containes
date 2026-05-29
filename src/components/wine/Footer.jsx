import { Wine } from 'lucide-react';

const Footer = () => (
  <footer className="bg-wine-surface border-t border-wine-border py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 text-wine-cream font-serif text-xl font-semibold">
        <Wine className="w-5 h-5 text-wine-gold" />
        Vino
      </div>
      <p className="text-wine-muted text-sm text-center">
        © 2024 Vino Fine Wine Collection. All rights reserved.
      </p>
      <div className="flex gap-6">
        {['Privacy', 'Terms', 'Shipping'].map((link) => (
          <a key={link} href="#" className="text-wine-muted hover:text-wine-cream text-sm transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
