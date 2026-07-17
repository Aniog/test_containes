import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'Gifts', path: '/collections/gifts' }
  ];

  const helpLinks = [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Taxes & Duties', path: '/taxes' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Stockists', path: '/stockists' }
  ];

  return (
    <footer className="bg-velmora-bg border-t border-velmora-text/5 pt-20 pb-10">
      <div className="container-custom max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="font-serif text-3xl tracking-widest text-velmora-text">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-muted max-w-sm leading-relaxed">
              Demifine jewelry designed for the modern romantic. Each piece is crafted with intention, using 18k gold plating and ethically sourced materials.
            </p>
            <div className="flex items-center space-x-6">
              <Instagram className="w-5 h-5 text-velmora-text hover:text-velmora-accent cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-velmora-text hover:text-velmora-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-velmora-text hover:text-velmora-accent cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-velmora-text hover:text-velmora-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-xs text-velmora-muted hover:text-velmora-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-xs text-velmora-muted hover:text-velmora-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-xs text-velmora-muted hover:text-velmora-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-velmora-text/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-velmora-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4 opacity-50 grayscale">
            {/* Payment icons would go here */}
            <div className="w-10 h-6 bg-velmora-beige rounded" />
            <div className="w-10 h-6 bg-velmora-beige rounded" />
            <div className="w-10 h-6 bg-velmora-beige rounded" />
            <div className="w-10 h-6 bg-velmora-beige rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
