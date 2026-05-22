import { ArrowRight, BookOpen, Github, Star } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50">
        <NetworkCanvas />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8">
          <Star className="w-3.5 h-3.5 text-blue-600 fill-indigo-500" />
          <span className="text-blue-700 text-sm font-medium">基于 Karpathy 的 LLM Wiki 模式</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-slate-900">让 LLM 自动构建</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
            你的个人知识库
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          将文档转化为结构化、相互关联的知识库。不同于传统 RAG，
          知识<strong className="text-slate-700">一次编译，持续更新</strong>，无需每次重新推导。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/nashsu/llm_wiki/releases"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-7 py-3.5 font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" />
            免费下载
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/nashsu/llm_wiki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-slate-300 hover:border-blue-400 text-slate-700 hover:text-slate-900 rounded-xl px-7 py-3.5 font-semibold transition-all hover:bg-white"
          >
            <Github className="w-5 h-5" />
            查看源码
          </a>
          <button
            onClick={() => handleScroll('#features')}
            className="text-slate-500 hover:text-blue-700 font-medium transition-colors flex items-center gap-1.5"
          >
            了解更多
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '18+', label: '核心功能' },
            { value: '5+', label: '文档格式' },
            { value: '4', label: 'LLM 提供商' },
            { value: '3', label: '跨平台支持' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

