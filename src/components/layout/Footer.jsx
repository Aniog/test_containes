import { Zap } from 'lucide-react';

const footerLinks = {
  产品: ['功能介绍', '定价方案', '更新日志', '路线图'],
  公司: ['关于我们', '团队介绍', '新闻动态', '加入我们'],
  支持: ['帮助中心', '文档中心', '社区论坛', '联系客服'],
  法律: ['隐私政策', '服务条款', 'Cookie 政策', '合规声明'],
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">BlueSpark</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              专注数字化转型，助力企业腾飞。
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-400 text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 BlueSpark. 保留所有权利。
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-slate-500 text-sm">所有系统运行正常</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
