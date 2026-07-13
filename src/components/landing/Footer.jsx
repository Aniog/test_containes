import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            Launchpad
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Launchpad. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
