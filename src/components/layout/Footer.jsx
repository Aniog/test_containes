import { Trophy, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-wc-surface border-t border-wc-border py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-wc-gold rounded-full flex items-center justify-center">
            <Trophy className="w-4 h-4 text-black" />
          </div>
          <div>
            <span className="text-white font-black text-sm">FIFA</span>
            <span className="text-wc-gold font-black text-sm ml-1">WORLD CUP</span>
            <span className="text-gray-500 text-xs ml-1">2026™</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {['赛程', '积分榜', '射手榜', '淘汰赛', '场馆'].map((item) => (
            <span key={item} className="hover:text-wc-gold cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs text-center">
          © 2026 FIFA World Cup™ · 仅供展示用途
        </p>
      </div>

      {/* Host Countries */}
      <div className="mt-8 pt-6 border-t border-wc-border flex justify-center gap-8">
        {[
          { flag: '🇺🇸', name: '美国' },
          { flag: '🇨🇦', name: '加拿大' },
          { flag: '🇲🇽', name: '墨西哥' },
        ].map((host) => (
          <div key={host.name} className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-xl">{host.flag}</span>
            <span>{host.name}</span>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
