import { ArrowRight, BookOpen, Github, Star } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
          <Star className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
          <span className="text-indigo-400 text-sm font-medium">基于 Karpathy 的 LLM Wiki 模式</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-slate-100">让 LLM 自动构建</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            你的个人知识库
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          LLM Wiki 将你的文档转化为结构化、相互关联的知识库。
          不同于传统 RAG，它<strong className="text-slate-300">增量构建并持续维护</strong>一个永久性 Wiki，
          知识一次编译，持续更新，不再每次重新推导。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/nashsu/llm_wiki/releases"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-7 py-3.5 font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" />
            免费下载
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/nashsu/llm_wiki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#2d2d4e] hover:border-indigo-500/50 text-slate-300 hover:text-slate-100 rounded-xl px-7 py-3.5 font-semibold transition-all hover:bg-white/5"
          >
            <Github className="w-5 h-5" />
            查看源码
          </a>
          <button
            onClick={() => handleScroll('#features')}
            className="text-slate-400 hover:text-indigo-400 font-medium transition-colors flex items-center gap-1.5"
          >
            了解更多
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '18+', label: '核心功能' },
            { value: '5+', label: '文档格式支持' },
            { value: '4', label: 'LLM 提供商' },
            { value: '3', label: '跨平台支持' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-slate-100">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Screenshot preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10 pointer-events-none" style={{ top: '60%' }} />
          <div className="bg-[#111118] border border-[#2d2d4e] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 max-w-5xl mx-auto">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e2e] bg-[#0d0d1a]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4">
                <div className="bg-[#1a1a2e] rounded-md px-3 py-1 text-xs text-slate-500 text-center max-w-xs mx-auto">
                  LLM Wiki — 个人知识库
                </div>
              </div>
            </div>
            {/* App mockup */}
            <div className="flex h-80 md:h-96">
              {/* Sidebar */}
              <div className="w-12 bg-[#0d0d1a] border-r border-[#1e1e2e] flex flex-col items-center py-4 gap-3">
                {['📚', '🔍', '🕸️', '✏️', '⚙️'].map((icon, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-600 hover:text-slate-400'}`}>
                    {icon}
                  </div>
                ))}
              </div>
              {/* File tree */}
              <div className="w-48 bg-[#0d0d1a] border-r border-[#1e1e2e] p-3 hidden sm:block">
                <div className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wider">Wiki</div>
                {['index.md', 'overview.md', '▸ entities/', '▸ concepts/', '▸ sources/'].map((item, i) => (
                  <div key={i} className={`text-xs py-1 px-2 rounded cursor-pointer ${i === 0 ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500 hover:text-slate-300'}`}>
                    {item}
                  </div>
                ))}
              </div>
              {/* Chat area */}
              <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs flex-shrink-0">🤖</div>
                  <div className="bg-[#1a1a2e] rounded-xl rounded-tl-sm px-4 py-2.5 text-xs text-slate-300 max-w-xs">
                    已完成文档分析，发现 12 个新实体，更新了 5 个概念页面，并在知识图谱中建立了 8 个新连接。
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-xl rounded-tr-sm px-4 py-2.5 text-xs text-indigo-300 max-w-xs">
                    请总结一下 Transformer 架构的核心创新点
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs flex-shrink-0">👤</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs flex-shrink-0">🤖</div>
                  <div className="bg-[#1a1a2e] rounded-xl rounded-tl-sm px-4 py-2.5 text-xs text-slate-300 max-w-xs">
                    根据知识库中的 [[Transformer]] 和 [[Attention Mechanism]] 页面...
                    <span className="inline-block w-1.5 h-3 bg-indigo-400 ml-0.5 animate-pulse" />
                  </div>
                </div>
              </div>
              {/* Preview panel */}
              <div className="w-56 border-l border-[#1e1e2e] p-3 hidden lg:block">
                <div className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wider">预览</div>
                <div className="text-xs text-slate-400 space-y-1.5">
                  <div className="text-slate-200 font-semibold">Transformer</div>
                  <div className="text-slate-500">类型: 概念</div>
                  <div className="text-slate-500">来源: 3 个文档</div>
                  <div className="mt-2 text-slate-400 leading-relaxed">
                    Transformer 是一种基于自注意力机制的神经网络架构...
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['[[Attention]]', '[[BERT]]', '[[GPT]]'].map(tag => (
                      <span key={tag} className="bg-indigo-500/10 text-indigo-400 text-xs px-1.5 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
