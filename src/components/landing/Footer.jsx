import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Zap className="w-5 h-5 text-indigo-400" />
            Launchpad
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Launchpad. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors no-underline">Features</a>
            <a href="#contact" className="hover:text-white transition-colors no-underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
