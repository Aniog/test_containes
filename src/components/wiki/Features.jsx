import { Brain, Network, Search, Globe, FileText, Cpu } from 'lucide-react';

const features = [
  {
    icon: Brain,
    color: 'indigo',
    title: '两步思维链摄入',
    desc: 'LLM 先分析再生成，提取关键实体、概念、论点，与现有知识建立连接。',
  },
  {
    icon: Network,
    color: 'violet',
    title: '知识图谱',
    desc: '4 信号相关性模型，自动发现知识聚类与惊人连接，可视化浏览。',
  },
  {
    icon: Search,
    color: 'purple',
    title: '混合语义搜索',
    desc: '分词 + 向量双引擎，基于 LanceDB 嵌入检索，精准定位知识。',
  },
  {
    icon: Globe,
    color: 'emerald',
    title: '深度研究',
    desc: '联网多查询搜索，LLM 自动合成结果并摄入 Wiki，填补知识空白。',
  },
  {
    icon: FileText,
    color: 'sky',
    title: '多格式支持',
    desc: '支持 PDF、DOCX、PPTX、图片、视频、音频及网页剪辑。',
  },
  {
    icon: Cpu,
    color: 'amber',
    title: '多 LLM 提供商',
    desc: '支持 OpenAI、Anthropic、Google、Ollama 及自定义端点。',
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'hover:border-violet-500/40' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'hover:border-purple-500/40' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
  sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'hover:border-sky-500/40' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'hover:border-amber-500/40' },
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            超越传统 RAG 的
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"> 知识管理</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            知识一次编译，持续更新，构建真正属于你的智能知识库。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`bg-[#111118] border border-[#2d2d4e] ${colors.border} rounded-2xl p-6 transition-all duration-300 hover:bg-[#13131f] hover:-translate-y-0.5 group`}
              >
                <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-slate-100 font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

