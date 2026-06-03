import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Explore',
    links: ['Gallery', 'Categories', 'Featured Specimens', 'Latest Discoveries'],
  },
  {
    heading: 'Science',
    links: ['Electron Microscopy', 'Fluorescence Imaging', 'Cryo-EM', 'Atomic Force Microscopy'],
  },
  {
    heading: 'About',
    links: ['Our Mission', 'The Team', 'Research Partners', 'Contact Us'],
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Mail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-[#1e3050] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-7 h-7 text-[#00d4c8]" />
              <span className="text-[#f0f4ff] font-black text-xl tracking-tight">
                Micro<span className="text-[#00d4c8]">Cosmos</span>
              </span>
            </div>
            <p className="text-[#8ba3c7] text-sm leading-relaxed mb-6 max-w-xs">
              Revealing the breathtaking universe hidden beneath the lens. Explore the microscopic world through stunning high-resolution imagery.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#1e3050] flex items-center justify-center text-[#8ba3c7] hover:text-[#00d4c8] hover:border-[#00d4c8]/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[#f0f4ff] font-bold text-sm uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#8ba3c7] text-sm hover:text-[#00d4c8] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e3050] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4a6080] text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-[#4a6080] text-sm">
            Dedicated to the beauty of the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
}
