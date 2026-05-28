import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold">
          <Camera className="w-5 h-5 text-amber-400" />
          <span>LUMORA</span>
        </div>
        <p className="text-zinc-500 text-sm text-center">
          © 2026 Lumora Camera Co. All rights reserved.
        </p>
        <div className="flex gap-6 text-zinc-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
