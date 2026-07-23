import { MapPin, Clock, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navyBlack border-t border-steelBorder py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-accentGold text-2xl font-bold mb-3">胡佛大坝</h3>
            <p className="text-mutedBlue text-sm leading-relaxed mb-4">
              美国国家历史地标 · 现代土木工程七大奇迹之一
            </p>
            <p className="text-dimGrey text-xs">
              本网站为教育性专题网站，旨在介绍胡佛大坝的历史、工程与文化遗产。
            </p>
          </div>

          {/* Visit Info */}
          <div>
            <h4 className="text-warmWhite font-semibold mb-4 uppercase tracking-widest text-xs">参观信息</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-mutedBlue text-sm">
                <MapPin size={16} className="text-accentGold mt-0.5 flex-shrink-0" />
                <span>美国内华达州博尔德城，US-93，邮编89005</span>
              </li>
              <li className="flex items-start gap-3 text-mutedBlue text-sm">
                <Clock size={16} className="text-accentGold mt-0.5 flex-shrink-0" />
                <span>每日 09:00 – 17:00（感恩节和圣诞节除外）</span>
              </li>
              <li className="flex items-start gap-3 text-mutedBlue text-sm">
                <Phone size={16} className="text-accentGold mt-0.5 flex-shrink-0" />
                <span>+1 (702) 494-2517</span>
              </li>
              <li className="flex items-start gap-3 text-mutedBlue text-sm">
                <Globe size={16} className="text-accentGold mt-0.5 flex-shrink-0" />
                <span>usbr.gov/lc/hooverdam</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-warmWhite font-semibold mb-4 uppercase tracking-widest text-xs">快速导航</h4>
            <ul className="space-y-2">
              {[
                { label: '概览', href: '#overview' },
                { label: '历史沿革', href: '#history' },
                { label: '工程奇迹', href: '#engineering' },
                { label: '关键数据', href: '#stats' },
                { label: '影像画廊', href: '#gallery' },
                { label: '历史遗产', href: '#legacy' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-mutedBlue hover:text-accentGold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-steelBorder pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-dimGrey text-xs">
            © 2026 胡佛大坝专题网站 · 仅供教育参考
          </p>
          <p className="text-dimGrey text-xs">
            建于 1931–1936 · 高度 221m · 科罗拉多河，黑峡谷
          </p>
        </div>
      </div>
    </footer>
  );
}
