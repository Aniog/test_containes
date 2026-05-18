import {
  Brain, Network, Search, Zap, FileText, Globe,
  GitBranch, Eye, RefreshCw, Shield, Layers, Cpu,
  MessageSquare, Download, FolderOpen, BarChart3
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    color: 'indigo',
    title: '两步思维链摄入',
    desc: 'LLM 先分析再生成，提取关键实体、概念、论点，并与现有知识建立连接，显著提升 Wiki 质量。',
  },
  {
    icon: Network,
    color: 'violet',
    title: '4 信号知识图谱',
    desc: '直接链接 ×3.0、来源重叠 ×4.0、Adamic-Adar ×1.5、类型亲和 ×1.0，构建精准的相关性模型。',
  },
  {
    icon: Search,
    color: 'purple',
    title: '向量语义搜索',
    desc: '基于 LanceDB 的嵌入检索，支持任意 OpenAI 兼容端点，混合 BM25 与向量搜索。',
  },
  {
    icon: Zap,
    color: 'amber',
    title: 'Louvain 社区检测',
    desc: '自动发现知识聚类，凝聚度评分，12 色调色板可视化，一键切换类型/社区着色模式。',
  },
  {
    icon: Globe,
    color: 'emerald',
    title: '深度研究',
    desc: '通过 Tavily、SerpApi 或 SearXNG 进行多查询网络搜索，LLM 自动合成研究结果并摄入 Wiki。',
  },
  {
    icon: FileText,
    color: 'sky',
    title: '多格式文档支持',
    desc: '支持 PDF、DOCX、PPTX、XLSX、图片、视频、音频及网页剪辑，保留文档语义结构。',
  },
  {
    icon: GitBranch,
    color: 'rose',
    title: '图谱洞察',
    desc: '自动发现惊人连接与知识空白，桥接节点识别，一键触发深度研究填补知识缺口。',
  },
  {
    icon: Eye,
    color: 'teal',
    title: 'Obsidian 兼容',
    desc: 'Wiki 目录即 Obsidian Vault，自动生成 .obsidian/ 配置，支持图谱视图、Dataview 插件。',
  },
  {
    icon: RefreshCw,
    color: 'indigo',
    title: '持久化摄入队列',
    desc: '串行处理防止并发 LLM 调用，队列持久化到磁盘，崩溃恢复，失败任务自动重试 3 次。',
  },
  {
    icon: Shield,
    color: 'violet',
    title: '异步审查系统',
    desc: 'LLM 在摄入时标记需要人工判断的条目，预定义操作类型，用户可随时处理，不阻塞摄入。',
  },
  {
    icon: Layers,
    color: 'purple',
    title: '文件夹导入与自动监控',
    desc: '递归导入保留目录结构，文件夹路径作为 LLM 分类提示，外部变更自动同步。',
  },
  {
    icon: Cpu,
    color: 'amber',
    title: 'Chrome 网页剪辑器',
    desc: '一键捕获网页，Mozilla Readability.js 精准提取，Turndown.js 转 Markdown，自动摄入知识库。',
  },
  {
    icon: MessageSquare,
    color: 'emerald',
    title: '多模态图像摄入',
    desc: '从 PDF 提取嵌入图像，视觉 LLM 生成事实性描述，图像感知搜索结果带灯箱预览。',
  },
  {
    icon: Download,
    color: 'sky',
    title: 'KaTeX 数学渲染',
    desc: '完整 LaTeX 数学支持，行内 $...$ 和块级 $$...$$ 公式渲染，100+ Unicode 符号映射。',
  },
  {
    icon: FolderOpen,
    color: 'rose',
    title: '级联删除清理',
    desc: '删除源文件时自动清理 Wiki 摘要页、更新 index.md、移除死链，保留共享实体页面。',
  },
  {
    icon: BarChart3,
    color: 'teal',
    title: '多 LLM 提供商支持',
    desc: '支持 OpenAI、Anthropic、Google、Ollama 及自定义端点，各提供商独立流式传输配置。',
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'hover:border-violet-500/40' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'hover:border-purple-500/40' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'hover:border-amber-500/40' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
  sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'hover:border-sky-500/40' },
  rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'hover:border-rose-500/40' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'hover:border-teal-500/40' },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-indigo-400 text-sm font-medium">功能特性</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            超越传统 RAG 的
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"> 知识管理</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            18+ 核心功能，从文档摄入到知识图谱，从深度研究到多平台支持，构建真正属于你的智能知识库。
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`bg-[#111118] border border-[#2d2d4e] ${colors.border} rounded-2xl p-6 transition-all duration-300 hover:bg-[#13131f] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 group`}
              >
                <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-slate-100 font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
