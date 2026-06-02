import { Link } from 'react-router-dom';

const footerLinks = {
  Explore: [
    { label: 'Bacteria', path: '/explore' },
    { label: 'Cells', path: '/explore' },
    { label: 'Fungi', path: '/explore' },
    { label: 'Plankton', path: '/explore' },
  ],
  Learn: [
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Research', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4c8] to-[#7c3aed] flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="font-heading font-bold text-lg text-[#e2f0ff]">MicroCosmos</span>
            </Link>
            <p className="text-[#7ba7cc] text-sm leading-relaxed max-w-xs">
              Unveiling the hidden universe beneath our feet — a journey into the microscopic world that shapes all life on Earth.
            </p>
            <div className="flex gap-3 mt-6">
              {['Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#1a3a5c] flex items-center justify-center text-[#7ba7cc] hover:border-[#00d4c8] hover:text-[#00d4c8] transition-all text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#e2f0ff] font-semibold text-sm mb-4 font-heading">{category}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-[#7ba7cc] text-sm hover:text-[#00d4c8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1a3a5c] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7ba7cc] text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-[#7ba7cc] text-sm">
            Exploring the invisible world, one microbe at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
