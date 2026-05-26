import { Bike, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Shop: ['Road Bikes', 'Mountain Bikes', 'City Bikes', 'Electric Bikes', 'Accessories'],
  Support: ['FAQ', 'Shipping & Returns', 'Bike Sizing Guide', 'Warranty', 'Contact Us'],
  Company: ['About VeloRide', 'Careers', 'Press', 'Sustainability', 'Affiliates'],
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a] pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 text-neutral-100 mb-4">
              <Bike className="w-7 h-7 text-orange-500" />
              <span className="text-xl font-extrabold tracking-tight">VeloRide</span>
            </a>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6 max-w-xs">
              Premium bikes for every rider. From city streets to mountain peaks — we build bikes that inspire adventure.
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                { icon: Mail, text: 'hello@veloride.com' },
                { icon: Phone, text: '+1 (800) 835-6743' },
                { icon: MapPin, text: 'San Francisco, CA' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-neutral-500">
                  <Icon className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#2a2a2a] hover:border-orange-500 flex items-center justify-center text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-neutral-100 mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#2a2a2a] pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-neutral-100">Stay in the loop</p>
              <p className="text-sm text-neutral-500">Get the latest bike news, deals, and riding tips.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-orange-500 text-neutral-100 placeholder-neutral-600 text-sm px-4 py-2.5 rounded-full outline-none transition-colors duration-200"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">© 2026 VeloRide. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs text-neutral-600 hover:text-orange-500 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
