import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = {
  产品: ['功能介绍', '定价方案', '更新日志', '路线图'],
  公司: ['关于我们', '团队介绍', '新闻动态', '加入我们'],
  支持: ['帮助中心', '文档中心', '社区论坛', '联系客服'],
  法律: ['隐私政策', '服务条款', 'Cookie 政策', '合规声明'],
};

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1e3a8a' }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BlueSky</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              为全球企业提供领先的云端解决方案，助力数字化转型，共创美好未来。
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-blue-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition"
                >
                  <Icon className="w-4 h-4 text-blue-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-200 hover:text-white text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © 2026 BlueSky. 保留所有权利。
          </p>
          <p className="text-blue-400 text-sm">
            用 ❤️ 打造，为了更美好的数字世界
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
