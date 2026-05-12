import { NavLink } from 'react-router-dom';
import { Telescope, Github, Twitter, Mail } from 'lucide-react';

const footerLinks = [
  { to: '/',          label: 'Home' },
  { to: '/knowledge', label: 'Knowledge Hub' },
  { to: '/gallery',   label: 'Sky Map' },
  { to: '/contact',   label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-stardust/40 bg-deep-space">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Telescope className="w-4 h-4 text-aurora" />
              <span className="font-cormorant text-lg font-medium text-moonlight">Starry Night</span>
            </div>
            <p className="font-inter text-sm text-comet leading-relaxed max-w-xs">
              An educational astronomy resource for physics students — exploring the cosmos, one concept at a time.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="font-inter text-xs uppercase tracking-widest text-aurora">Explore</p>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="font-inter text-sm text-comet hover:text-moonlight transition-colors duration-200"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="font-inter text-xs uppercase tracking-widest text-aurora">Connect</p>
            <p className="font-inter text-sm text-comet">
              Have a question about the cosmos? Your curiosity is the first step toward discovery.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-aurora hover:text-amber-star transition-colors duration-200 font-inter"
            >
              <Mail className="w-4 h-4" />
              Send a message
            </NavLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stardust/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-horizon">
            © {new Date().getFullYear()} Starry Night — Astronomy for Physics Students
          </p>
          <p className="font-inter text-xs text-horizon italic">
            "The cosmos is within us. We are made of star-stuff." — Carl Sagan
          </p>
        </div>
      </div>
    </footer>
  );
}
