import { Sparkles, Twitter, Github, Instagram, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: '产品',
    links: ['功能介绍', '定价方案', '更新日志', '路线图'],
  },
  {
    title: '资源',
    links: ['帮助中心', '开发者文档', '社区论坛', '博客'],
  },
  {
    title: '公司',
    links: ['关于我们', '加入团队', '新闻媒体', '联系我们'],
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-purple-950 border-t border-purple-800/40 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                Lumina
              </span>
            </a>
            <p className="text-purple-400 text-sm leading-relaxed max-w-xs mb-6">
              为创意人士打造的紫色宇宙平台，将你的灵感转化为令人惊叹的作品。
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-purple-800/50 border border-purple-700/40 flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-700/60 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-200 text-sm transition-colors duration-200"
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
        <div className="border-t border-purple-800/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-purple-500 text-sm">
            © 2026 Lumina. 保留所有权利。
          </p>
          <div className="flex items-center gap-6">
            {['隐私政策', '服务条款', 'Cookie 设置'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-purple-500 hover:text-purple-300 text-sm transition-colors duration-200"
              >
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
