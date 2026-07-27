import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  产品: ['功能介绍', '价格方案', '更新日志', '路线图'],
  公司: ['关于我们', '团队', '博客', '新闻'],
  支持: ['帮助中心', '文档', 'API 参考', '状态页面'],
  法律: ['隐私政策', '服务条款', 'Cookie 政策', '合规认证'],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">BluePeak</span>
            </a>
            <p className="text-blue-400 text-sm leading-relaxed mb-6">
              为企业提供安全、高效、可扩展的云端解决方案。
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 bg-blue-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition"
                >
                  <Icon className="w-4 h-4 text-blue-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-white text-sm transition"
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
        <div className="border-t border-blue-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-500 text-sm">
            © 2026 BluePeak. 保留所有权利。
          </p>
          <p className="text-blue-600 text-xs">
            用 ❤️ 构建于中国
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
