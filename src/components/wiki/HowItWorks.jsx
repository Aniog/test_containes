import { ArrowRight, Upload, MessageSquare, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: '摄入 (Ingest)',
    color: 'indigo',
    desc: '将新文档放入原始集合，告知 LLM 处理。LLM 读取源文件，提取关键信息，并将其整合到现有 Wiki 中——更新实体页面、修订主题摘要、标记新数据与旧声明的矛盾。',
    steps: [
      '第一步：LLM 读取源文件 → 结构化分析（关键实体、概念、论点）',
      '第二步：LLM 基于分析 → 生成 Wiki 文件（摘要页、实体页、概念页）',
      '自动更新 index.md、log.md、overview.md',
      'SHA256 增量缓存，未变更文件自动跳过',
    ],
  },
  {
    icon: MessageSquare,
    number: '02',
    title: '查询 (Query)',
    color: 'violet',
    desc: '向 Wiki 提问。LLM 搜索相关页面，读取并综合答案，附带引用。优质答案可以归档回 Wiki 作为新页面，让你的探索在知识库中持续积累。',
    steps: [
      '分词搜索（英文词干 + 中文 CJK 二元组）',
      '图谱相关性排序（4 信号模型）',
      '可选向量语义搜索（LanceDB）',
      '答案可归档为新 Wiki 页面',
    ],
  },
  {
    icon: Wrench,
    number: '03',
    title: '整理 (Lint)',
    color: 'purple',
    desc: '定期让 LLM 对 Wiki 进行健康检查：查找矛盾、过时声明、孤立页面、缺失交叉引用、数据空白。LLM 擅长建议新的调查问题和需要查找的新来源。',
    steps: [
      '检测页面间矛盾与过时声明',
      '发现孤立页面（无入链）',
      '识别缺失的交叉引用',
      '建议新的研究方向和来源',
    ],
  },
];

const colorMap = {
  indigo: {
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    icon: 'bg-indigo-500/10 text-indigo-400',
    dot: 'bg-indigo-500',
    border: 'border-indigo-500/30',
    glow: 'shadow-indigo-500/10',
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: 'bg-violet-500/10 text-violet-400',
    dot: 'bg-violet-500',
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500/10',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: 'bg-purple-500/10 text-purple-400',
    dot: 'bg-purple-500',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/10',
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-400 text-sm font-medium">工作原理</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            三个核心操作
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"> 驱动知识积累</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            人类负责策划来源、引导分析、提出好问题。LLM 负责其他一切——摘要、交叉引用、归档和维护。
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const colors = colorMap[step.color];
            return (
              <div
                key={step.title}
                className={`bg-[#111118] border ${colors.border} rounded-2xl p-8 md:p-10 shadow-xl ${colors.glow} hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left: number + icon */}
                  <div className="flex items-start gap-4 md:w-64 flex-shrink-0">
                    <div className={`w-12 h-12 ${colors.icon} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className={`text-xs font-mono font-bold ${colors.badge.split(' ')[1]} mb-1`}>{step.number}</div>
                      <h3 className="text-xl font-bold text-slate-100">{step.title}</h3>
                    </div>
                  </div>

                  {/* Right: description + steps */}
                  <div className="flex-1">
                    <p className="text-slate-400 leading-relaxed mb-6">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.steps.map((s, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-1.5 flex-shrink-0`} />
                          <span className="text-slate-400 text-sm">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flow diagram */}
        <div className="mt-16 bg-[#111118] border border-[#2d2d4e] rounded-2xl p-8">
          <h3 className="text-slate-100 font-semibold text-center mb-8">知识积累流程</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { label: '原始来源', sub: '文档、网页、图片', color: 'bg-slate-700' },
              null,
              { label: 'LLM 处理', sub: '分析 → 生成', color: 'bg-indigo-600' },
              null,
              { label: 'Wiki 知识库', sub: '结构化 Markdown', color: 'bg-violet-600' },
              null,
              { label: '查询与洞察', sub: '问答 + 图谱', color: 'bg-purple-600' },
            ].map((item, i) =>
              item === null ? (
                <ArrowRight key={i} className="w-5 h-5 text-slate-600 flex-shrink-0 rotate-90 md:rotate-0" />
              ) : (
                <div key={i} className="text-center">
                  <div className={`${item.color} rounded-xl px-5 py-3 mb-2`}>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                  </div>
                  <div className="text-slate-500 text-xs">{item.sub}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
