import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  服务: ['品牌设计', '网站开发', '动效设计', '数字营销'],
  公司: ['关于我们', '团队介绍', '加入我们', '新闻动态'],
  资源: ['案例研究', '设计博客', '开发文档', '常见问题'],
};

const socials = [
  { icon: Github, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#c8a96e] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-black" />
              </span>
              <span className="text-white font-bold text-lg tracking-tight">NOIR</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-6">
              专注于高端数字体验设计，将创意与技术完美融合，
              为品牌注入无与伦比的视觉冲击力。
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-600 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-500 text-sm hover:text-neutral-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © 2024 NOIR Studio. 保留所有权利。
          </p>
          <div className="flex items-center gap-6">
            {['隐私政策', '服务条款', 'Cookie 设置'].map((item) => (
              <a key={item} href="#" className="text-neutral-600 text-xs hover:text-neutral-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
