import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0a0318] border-t border-purple-900/50 py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
              Lumina
            </span>
          </div>
          <p className="text-violet-400 text-sm leading-relaxed max-w-xs">
            用紫色的力量，点亮您的数字世界。我们致力于打造最优雅的产品体验。
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 bg-purple-900/50 border border-purple-700/40 rounded-lg flex items-center justify-center text-violet-400 hover:text-purple-200 hover:border-purple-500 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-purple-200 font-semibold text-sm mb-4">产品</h4>
          <ul className="space-y-2.5">
            {['功能介绍', '定价方案', '更新日志', '路线图'].map((item) => (
              <li key={item}>
                <a href="#" className="text-violet-400 hover:text-purple-200 text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-purple-200 font-semibold text-sm mb-4">公司</h4>
          <ul className="space-y-2.5">
            {['关于我们', '博客', '招聘', '联系我们'].map((item) => (
              <li key={item}>
                <a href="#" className="text-violet-400 hover:text-purple-200 text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-purple-900/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-violet-500 text-sm">© 2026 Lumina. 保留所有权利。</p>
        <div className="flex items-center gap-5">
          {['隐私政策', '服务条款', 'Cookie 设置'].map((item) => (
            <a key={item} href="#" className="text-violet-500 hover:text-purple-300 text-xs transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
