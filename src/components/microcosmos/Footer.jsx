import { Microscope, Github, Twitter, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Ecosystem', href: '#ecosystem' },
];

export default function Footer() {
  return (
    <footer className="bg-cosmos-bg border-t border-cosmos-teal/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-cosmos-teal" />
              <span className="text-slate-50 font-bold text-lg tracking-tight">
                Micro<span className="text-cosmos-teal">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that surrounds us — one microscopic
              organism at a time.
            </p>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm tracking-widest uppercase mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-cosmos-teal text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm tracking-widest uppercase mb-5">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
                { icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                { icon: <Mail className="w-4 h-4" />, label: 'Email' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:border-cosmos-teal hover:text-cosmos-teal transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-6 leading-relaxed">
              Subscribe to our newsletter for the latest discoveries in microscopy and microbiology.
            </p>
            <div className="flex mt-3 gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-cosmos-surface border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cosmos-teal/50 transition-colors"
              />
              <button className="px-4 py-2 bg-cosmos-teal text-cosmos-bg text-sm font-semibold rounded-lg hover:bg-cosmos-teal/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cosmos-teal/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Dedicated to the beauty of the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
}
