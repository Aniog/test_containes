const techStack = [
  { category: '桌面框架', tech: 'Tauri v2', sub: 'Rust 后端', color: 'text-sky-400', bg: 'bg-sky-500/10' },
  { category: '前端框架', tech: 'React 19', sub: 'TypeScript + Vite', color: 'text-sky-400', bg: 'bg-sky-500/10' },
  { category: 'UI 组件', tech: 'shadcn/ui', sub: 'Tailwind CSS v4', color: 'text-slate-300', bg: 'bg-slate-500/10' },
  { category: '富文本编辑', tech: 'Milkdown', sub: 'ProseMirror WYSIWYG', color: 'text-green-400', bg: 'bg-green-500/10' },
  { category: '知识图谱', tech: 'sigma.js', sub: 'graphology + ForceAtlas2', color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { category: '搜索引擎', tech: '混合搜索', sub: '分词 + 图谱相关性', color: 'text-blue-600', bg: 'bg-blue-500/10' },
  { category: '向量数据库', tech: 'LanceDB', sub: 'Rust 嵌入式（可选）', color: 'text-amber-400', bg: 'bg-blue-500/10' },
  { category: 'PDF 处理', tech: 'pdf-extract', sub: 'Rust 原生', color: 'text-red-400', bg: 'bg-red-500/10' },
  { category: 'Office 文档', tech: 'docx-rs', sub: 'calamine（Excel）', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { category: '国际化', tech: 'react-i18next', sub: '中文 + 英文', color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { category: '状态管理', tech: 'Zustand', sub: '轻量级全局状态', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { category: 'LLM 接入', tech: '流式 Fetch', sub: 'OpenAI / Anthropic / Google / Ollama', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

const platforms = [
  { name: 'macOS', icon: '🍎', desc: 'Apple Silicon + Intel', badge: '.dmg' },
  { name: 'Windows', icon: '🪟', desc: 'Windows 10/11', badge: '.msi' },
  { name: 'Linux', icon: '🐧', desc: 'Ubuntu / Debian', badge: '.deb / .AppImage' },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sky-400 text-sm font-medium">技术栈</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            现代化技术栈
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"> 精心选型</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Rust 驱动的高性能后端，React 构建的流畅前端，每一项技术都经过深思熟虑的选择。
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {techStack.map((item) => (
            <div
              key={item.tech}
              className="bg-[#111118] border border-[#2d2d4e] rounded-xl p-4 hover:border-slate-600/60 transition-all hover:-translate-y-0.5"
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 ${item.bg} rounded-lg mb-3`}>
                <span className={`text-xs font-bold ${item.color}`}>{item.tech.slice(0, 2)}</span>
              </div>
              <div className={`font-semibold text-sm ${item.color} mb-0.5`}>{item.tech}</div>
              <div className="text-slate-500 text-xs">{item.category}</div>
              <div className="text-slate-600 text-xs mt-1">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Cross-platform */}
        <div className="bg-[#111118] border border-[#2d2d4e] rounded-2xl p-8">
          <h3 className="text-slate-100 font-bold text-xl mb-2 text-center">跨平台支持</h3>
          <p className="text-slate-500 text-sm text-center mb-8">GitHub Actions CI/CD 自动构建，支持三大主流操作系统</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="text-center bg-[#0d0d1a] rounded-xl p-6 border border-[#1e1e2e]">
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-slate-100 font-semibold mb-1">{p.name}</div>
                <div className="text-slate-500 text-sm mb-3">{p.desc}</div>
                <span className="bg-blue-500/10 text-blue-600 border border-indigo-500/20 rounded-full px-3 py-1 text-xs font-mono">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
