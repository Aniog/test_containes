import { ArrowRight, Zap } from 'lucide-react';

const footerLinks = {
  产品: ['功能特性', '定价方案', '更新日志', '路线图', 'API 文档'],
  开发者: ['快速开始', '集成指南', 'SDK 下载', '示例项目', '社区论坛'],
  公司: ['关于我们', '博客', '招聘', '新闻', '联系我们'],
  法律: ['隐私政策', '服务条款', 'Cookie 设置', '安全说明'],
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-white border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-purple-50 to-violet-50" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-violet-200/40 blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            准备好提升你的编程效率了吗？
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            加入 1000 万开发者，体验 AI 驱动的编程新方式。免费开始，无需信用卡。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30"
            >
              免费开始使用
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              查看演示视频 →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-900 font-bold text-lg">
                Code<span className="text-violet-600">Agent</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              AI 驱动的编程 Agent，帮助开发者更快、更好地构建软件。
            </p>
            <div className="flex items-center gap-3">
              {['GitHub', 'Twitter', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all text-xs font-bold"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-gray-900 text-sm font-semibold mb-4">{category}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-700 text-sm transition-colors"
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
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © 2026 CodeAgent Inc. 保留所有权利。
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            所有系统正常运行
          </div>
        </div>
      </div>
    </footer>
  );
}
