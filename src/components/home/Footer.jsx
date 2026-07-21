import { useState } from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const footerLinks = {
  '快速导航': [
    { label: '关于帆船', href: '#about' },
    { label: '赛事活动', href: '#events' },
    { label: '装备指南', href: '#equipment' },
    { label: '精彩图集', href: '#gallery' },
  ],
  '赛事信息': [
    { label: '中国帆船联赛', href: '#events' },
    { label: '三亚国际帆船周', href: '#events' },
    { label: '青少年夏令营', href: '#events' },
    { label: '环海南岛帆船赛', href: '#events' },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Anchor className="w-6 h-6 text-seafoam" />
              <span className="font-serif font-bold text-xl">扬帆远航</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              致力于推广帆船运动文化，连接每一位热爱大海的人。
              无论你是初学者还是资深水手，这里都是你的港湾。
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-seafoam hover:text-navy flex items-center justify-center transition-colors duration-200"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/60 hover:text-seafoam text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">联系我们</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2.5 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-seafoam shrink-0" />
                info@sailing-china.com
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-seafoam shrink-0" />
                +86 400-888-8888
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-seafoam shrink-0 mt-0.5" />
                山东省青岛市奥帆中心
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-white/80 text-xs font-medium mb-2">订阅赛事资讯</p>
              {subscribed ? (
                <p className="text-seafoam text-sm">感谢订阅！我们会及时通知你。</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="输入邮箱地址"
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-seafoam transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="w-9 h-9 rounded-full bg-seafoam text-navy flex items-center justify-center hover:bg-sky hover:text-white transition-colors shrink-0"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 扬帆远航. 保留所有权利.
          </p>
          <div className="flex gap-6">
            {['隐私政策', '使用条款', '网站地图'].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
