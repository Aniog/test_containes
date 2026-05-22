import { Code2, Github, Twitter, Chrome, ArrowRight } from 'lucide-react';

const footerLinks = {
  产品: [
    { label: '功能特性', href: '#features' },
    { label: '在线演示', href: '#demo' },
    { label: '安装步骤', href: '#how-it-works' },
    { label: '更新日志', href: '#' },
  ],
  支持: [
    { label: '使用文档', href: '#' },
    { label: '常见问题', href: '#' },
    { label: '问题反馈', href: '#' },
    { label: '联系我们', href: '#' },
  ],
  开发者: [
    { label: 'GitHub 仓库', href: '#' },
    { label: '贡献指南', href: '#' },
    { label: 'API 文档', href: '#' },
    { label: '开源协议', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0f18] border-t border-[#2e3347]">
      {/* CTA Banner */}
      <div className="border-b border-[#2e3347]">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              准备好开始了吗？
            </h3>
            <p className="text-slate-400">
              加入 50,000+ 开发者，立即体验最流畅的 HTML 转 Markdown 工具。
            </p>
          </div>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            <Chrome className="w-5 h-5" />
            免费添加到 Chrome
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-100 text-lg">
                HTML<span className="text-violet-400">2MD</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              将任意网页内容一键转换为干净的 Markdown 格式。开发者的必备 Chrome 扩展。
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#1a1d27] border border-[#2e3347] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-violet-500/40 transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#1a1d27] border border-[#2e3347] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-violet-500/40 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#1a1d27] border border-[#2e3347] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-violet-500/40 transition"
                aria-label="Chrome Store"
              >
                <Chrome className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-slate-100 font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#2e3347] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 HTML2MD. 基于 MIT 协议开源。
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
