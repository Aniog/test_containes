import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1412] text-[#c8c0b8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium tracking-logo uppercase text-white block mb-4">
              Velmora
            </Link>
            <p className="text-sm leading-relaxed text-[#a09890] max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-[0.1em] uppercase text-[#a09890] hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-[#a09890] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#a09890] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#a09890] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2420] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6b5e54]">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment icons */}
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(icon => (
                <span
                  key={icon}
                  className="text-[10px] tracking-[0.1em] uppercase text-[#6b5e54] border border-[#2a2420] px-2 py-1"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
