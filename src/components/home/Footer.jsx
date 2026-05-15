import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brown-dark text-parchment">
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="md:col-span-2">
        <h2 className="font-playfair text-3xl font-bold text-butter mb-3">Creamery</h2>
        <p className="text-parchment/70 text-sm leading-relaxed max-w-xs">
          Handcrafted butter and cheese from pasture-raised cows. Tradition, quality,
          and flavour in every bite since 1987.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" aria-label="Instagram" className="text-parchment/60 hover:text-butter transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="text-parchment/60 hover:text-butter transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-parchment/60 hover:text-butter transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Products */}
      <div>
        <h3 className="text-cream font-semibold uppercase tracking-widest text-xs mb-4">Products</h3>
        <ul className="space-y-2 text-sm text-parchment/70">
          {['Cultured Butter', 'Sea Salt Butter', 'Brown Butter', 'Aged Cheddar', 'Brie', 'Manchego'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-butter transition-colors">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-cream font-semibold uppercase tracking-widest text-xs mb-4">Company</h3>
        <ul className="space-y-2 text-sm text-parchment/70">
          {['Our Story', 'The Farm', 'Recipes', 'Wholesale', 'Contact Us', 'FAQ'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-butter transition-colors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-parchment/10 py-6 text-center text-parchment/40 text-xs">
      © {new Date().getFullYear()} Creamery. All rights reserved. Made with love and good butter.
    </div>
  </footer>
);

export default Footer;
