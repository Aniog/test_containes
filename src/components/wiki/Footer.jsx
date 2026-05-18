import { BookOpen, Github, ExternalLink, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: '产品',
    links: [
      { label: '功能特性', href: '#features' },
      { label: '工作原理', href: '#how-it-works' },
      { label: '架构设计', href: '#architecture' },
      { label: '技术栈', href: '#tech-stack' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: '快速开始', href: '#quickstart' },
      { label: 'GitHub 仓库', href: 'https://github.com/nashsu/llm_wiki', external: true },
      { label: '下载发布版', href: 'https://github.com/nashsu/llm_wiki/releases', external: true },
      { label: 'Karpathy 原文', href: 'https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f', external: true },
    ],
  },
  {
    title: '社区',
    links: [
      { label: '提交 Issue', href: 'https://github.com/nashsu/llm_wiki/issues', external: true },
      { label: '贡献代码', href: 'https://github.com/nashsu/llm_wiki/pulls', external: true },
      { label: 'Star 项目', href: 'https://github.com/nashsu/llm_wiki/stargazers', external: true },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#1e1e2e]">
      {/* CTA Banner */}
      <div className="border-b border-[#1e1e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            开始构建你的
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"> 个人知识库</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            免费开源，跨平台支持。让 LLM 帮你维护知识，你专注于思考和探索。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/nashsu/llm_wiki/releases"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-7 py-3.5 font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              免费下载
            </a>
            <a
              href="https://github.com/nashsu/llm_wiki"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-[#2d2d4e] hover:border-indigo-500/50 text-slate-300 hover:text-slate-100 rounded-xl px-7 py-3.5 font-semibold transition-all hover:bg-white/5"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-100 font-bold text-lg">LLM Wiki</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              将你的文档转化为结构化、相互关联的知识库。知识一次编译，持续更新。
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nashsu/llm_wiki"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-slate-300 font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      onClick={!link.external ? (e) => handleNavClick(e, link.href) : undefined}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      {link.external && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e2e] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 LLM Wiki. 基于{' '}
            <a href="https://github.com/nashsu/llm_wiki/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-400 transition-colors">
              GPL-3.0
            </a>{' '}
            开源协议。
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            基于{' '}
            <a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-400 transition-colors">
              Karpathy 的 LLM Wiki 模式
            </a>
            {' '}构建，用{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            {' '}打造
          </p>
        </div>
      </div>
    </footer>
  );
}
