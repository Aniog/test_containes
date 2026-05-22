import { Mountain, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-black text-xl">
            <Mountain className="w-6 h-6 text-amber-500" />
            <span>SummitQuest</span>
          </div>

          <p className="text-slate-500 text-sm text-center">
            Dedicated to the art and science of mountain climbing. Always respect the mountain.
          </p>

          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all duration-200"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} SummitQuest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
