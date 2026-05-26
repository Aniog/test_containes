import { Trophy, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  赛事信息: ['赛程安排', '小组赛', '淘汰赛', '决赛'],
  球队资讯: ['参赛球队', '球员名单', '教练团队', '历史战绩'],
  场馆城市: ['举办城市', '比赛场馆', '交通指南', '住宿信息'],
  关于赛事: ['关于FIFA', '赞助商', '媒体中心', '联系我们'],
};

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-[#C8102E] via-[#FFD700] to-[#003DA5]" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8102E] via-[#FFD700] to-[#003DA5] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-white">
                FIFA <span className="text-[#FFD700]">2026</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              美国 · 加拿大 · 墨西哥联合举办，史上最大规模世界杯
            </p>
            {/* Host flags */}
            <div className="flex gap-3">
              <span className="text-2xl" title="USA">🇺🇸</span>
              <span className="text-2xl" title="Canada">🇨🇦</span>
              <span className="text-2xl" title="Mexico">🇲🇽</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#FFD700] text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 FIFA World Cup™. 本网站为展示用途，非官方网站。
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 bg-gray-800 hover:bg-[#FFD700] rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
