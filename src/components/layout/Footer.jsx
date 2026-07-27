import { Leaf, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  产品: ['功能介绍', '定价方案', '使用案例', '更新日志'],
  公司: ['关于我们', '团队成员', '合作伙伴', '新闻动态'],
  资源: ['帮助中心', '博客文章', '环保指南', '开发者 API'],
  法律: ['隐私政策', '服务条款', 'Cookie 设置', '合规声明'],
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">GreenLife</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              致力于推广可持续生活方式，帮助每个人为地球的未来做出贡献。
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-mint transition-colors"
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 GreenLife. 保留所有权利。
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Leaf className="w-4 h-4 text-emerald" />
            <span>用绿色技术构建，为地球而生</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
