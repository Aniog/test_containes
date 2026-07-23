import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#story' },
    { label: 'Sustainability', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Wholesale', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="font-serif text-2xl tracking-widest uppercase mb-5">Velmora</h3>
            <p className="text-sm leading-relaxed text-stone-300 max-w-xs">
              Demi-fine gold jewelry designed for everyday luxury. Crafted to be treasured, worn, and gifted.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-stone-300 hover:text-gold transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone-300 hover:text-gold transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-stone-300 hover:text-gold transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-stone-300 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
              Payment
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="inline-flex items-center rounded border border-stone-700 px-2 py-1 text-[10px] uppercase tracking-wide text-stone-400"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 md:flex-row">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}