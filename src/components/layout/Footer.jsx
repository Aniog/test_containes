import { Link } from 'react-router-dom';
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-surface-card border-t border-surface-border mt-16">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-text-primary">
              Game<span className="text-brand-light">Vault</span>
            </span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            Your ultimate destination for game deals, news, and the best gaming store online.
          </p>
          <div className="flex gap-3 mt-4">
            {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
              <button key={i} className="w-8 h-8 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted hover:text-brand-light hover:border-brand/40 transition-colors">
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-text-primary font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            {[['Home', '/'], ['Store', '/store'], ['Deals', '/deals'], ['News', '/news']].map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-text-muted hover:text-text-primary text-sm transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-4">Platforms</h4>
          <ul className="space-y-2">
            {['Steam', 'Epic Games', 'Nintendo', 'PlayStation', 'Xbox'].map((p) => (
              <li key={p}>
                <Link to="/deals" className="text-text-muted hover:text-text-primary text-sm transition-colors">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
              <li key={item}>
                <span className="text-text-muted hover:text-text-primary text-sm transition-colors cursor-pointer">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">© 2025 GameVault. All rights reserved.</p>
        <p className="text-text-muted text-xs">
          Not affiliated with Steam, Epic Games, Nintendo, Sony, or Microsoft.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
