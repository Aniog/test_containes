const layers = [
  {
    title: '原始来源层',
    subtitle: 'Raw Sources',
    color: 'from-slate-700 to-slate-600',
    border: 'border-slate-600/40',
    items: ['PDF 文档', 'DOCX/PPTX', 'Markdown', '网页剪辑', '图片/视频'],
    desc: '不可变的原始文档集合，LLM 只读不写，是知识库的真实来源。',
  },
  {
    title: 'LLM 处理层',
    subtitle: 'LLM Processing',
    color: 'from-indigo-700 to-violet-700',
    border: 'border-indigo-500/40',
    items: ['两步思维链分析', '实体/概念提取', '交叉引用建立', '矛盾检测', '知识图谱更新'],
    desc: 'LLM 完全拥有这一层，负责创建、更新和维护所有 Wiki 内容。',
  },
  {
    title: 'Wiki 知识层',
    subtitle: 'Wiki Knowledge',
    color: 'from-violet-700 to-purple-700',
    border: 'border-violet-500/40',
    items: ['index.md 目录', 'overview.md 概览', '实体页面', '概念页面', 'log.md 操作日志'],
    desc: '结构化的 Markdown 文件集合，可直接在 Obsidian 中浏览，知识持续积累。',
  },
  {
    title: 'Schema 配置层',
    subtitle: 'Schema & Config',
    color: 'from-purple-700 to-pink-700',
    border: 'border-purple-500/40',
    items: ['purpose.md 目标', 'schema.md 规则', 'LLM 提供商配置', '上下文窗口设置', '语言偏好'],
    desc: '告知 LLM Wiki 的结构规范和工作流程，是 LLM 成为纪律严明维护者的关键配置。',
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-600 text-sm font-medium">架构设计</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            三层架构
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> 清晰分离关注点</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            基于 Karpathy 的设计，原始来源不可变，Wiki 由 LLM 完全维护，Schema 定义规则与目标。
          </p>
        </div>

        {/* Architecture layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {layers.map((layer, idx) => (
            <div
              key={layer.title}
              className={`bg-[#111118] border ${layer.border} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`bg-gradient-to-r ${layer.color} px-5 py-4`}>
                <div className="text-white/60 text-xs font-mono mb-1">{String(idx + 1).padStart(2, '0')}</div>
                <div className="text-white font-bold">{layer.title}</div>
                <div className="text-white/70 text-xs">{layer.subtitle}</div>
              </div>
              <div className="p-5">
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{layer.desc}</p>
                <ul className="space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1 h-1 bg-slate-600 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Project structure */}
        <div className="bg-[#111118] border border-[#2d2d4e] rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e1e2e] bg-[#0d0d1a]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-slate-500 text-xs ml-2 font-mono">项目目录结构</span>
          </div>
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 leading-relaxed whitespace-pre space-y-0.5">
              {[
                { text: 'my-wiki/', color: 'text-slate-300' },
                { text: '├── purpose.md              ', color: 'text-slate-400', comment: '# 目标、关键问题、研究范围', commentColor: 'text-amber-600' },
                { text: '├── schema.md               ', color: 'text-slate-400', comment: '# Wiki 结构规则、页面类型', commentColor: 'text-amber-600' },
                { text: '├── raw/', color: 'text-slate-400' },
                { text: '│   ├── sources/            ', color: 'text-slate-400', comment: '# 上传的文档（不可变）', commentColor: 'text-slate-500' },
                { text: '│   └── assets/             ', color: 'text-slate-400', comment: '# 本地图片', commentColor: 'text-slate-500' },
                { text: '├── wiki/', color: 'text-slate-400' },
                { text: '│   ├── index.md            ', color: 'text-slate-400', comment: '# 内容目录', commentColor: 'text-orange-500' },
                { text: '│   ├── log.md              ', color: 'text-slate-400', comment: '# 操作历史', commentColor: 'text-orange-500' },
                { text: '│   ├── overview.md         ', color: 'text-slate-400', comment: '# 全局摘要（自动更新）', commentColor: 'text-orange-500' },
                { text: '│   ├── entities/           ', color: 'text-slate-400', comment: '# 人物、组织、产品', commentColor: 'text-slate-500' },
                { text: '│   ├── concepts/           ', color: 'text-slate-400', comment: '# 理论、方法、技术', commentColor: 'text-slate-500' },
                { text: '│   ├── sources/            ', color: 'text-slate-400', comment: '# 来源摘要', commentColor: 'text-slate-500' },
                { text: '│   ├── queries/            ', color: 'text-slate-400', comment: '# 保存的问答 + 研究', commentColor: 'text-slate-500' },
                { text: '│   └── synthesis/          ', color: 'text-slate-400', comment: '# 跨来源分析', commentColor: 'text-slate-500' },
                { text: '├── .obsidian/              ', color: 'text-slate-400', comment: '# Obsidian Vault 配置（自动生成）', commentColor: 'text-emerald-400' },
                { text: '└── .llm-wiki/              ', color: 'text-slate-400', comment: '# 应用配置、聊天历史、审查条目', commentColor: 'text-slate-500' },
              ].map((line, i) => (
                <div key={i} className="flex">
                  <span className={line.color}>{line.text}</span>
                  {line.comment && <span className={line.commentColor}>{line.comment}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
