import { Terminal, Download, Settings, FolderOpen, MessageSquare, Network, CheckSquare, Wrench } from 'lucide-react';

const quickSteps = [
  { icon: Download, step: '01', title: '下载安装', desc: '从 GitHub Releases 下载对应平台的安装包（macOS .dmg / Windows .msi / Linux .deb）' },
  { icon: Settings, step: '02', title: '配置 LLM', desc: '进入设置页面，配置 LLM 提供商（OpenAI / Anthropic / Google / Ollama）和 API Key' },
  { icon: FolderOpen, step: '03', title: '创建项目', desc: '选择场景模板（研究、阅读、个人成长、商业、通用），创建新的知识库项目' },
  { icon: Terminal, step: '04', title: '导入文档', desc: '进入来源页面，导入 PDF、DOCX、Markdown 等文档，观察活动面板中的实时处理进度' },
  { icon: MessageSquare, step: '05', title: '查询知识', desc: '使用聊天界面向知识库提问，LLM 基于已构建的 Wiki 给出带引用的综合答案' },
  { icon: Network, step: '06', title: '探索图谱', desc: '在知识图谱视图中浏览节点连接，发现惊人关联，识别知识空白' },
  { icon: CheckSquare, step: '07', title: '处理审查', desc: '查看 LLM 标记的需要人工判断的条目，执行预定义操作或触发深度研究' },
  { icon: Wrench, step: '08', title: '定期整理', desc: '运行 Lint 检查 Wiki 健康状态，修复矛盾、孤立页面和缺失交叉引用' },
];

const useCases = [
  { emoji: '🔬', title: '学术研究', desc: '深入研究某个主题数周或数月，阅读论文、文章、报告，增量构建带有演进论点的综合 Wiki。' },
  { emoji: '📖', title: '读书笔记', desc: '逐章归档，构建人物、主题、情节线索及其连接的页面。读完后拥有丰富的伴侣 Wiki。' },
  { emoji: '🧠', title: '个人成长', desc: '追踪目标、健康、心理、自我提升——归档日记、文章、播客笔记，构建关于自己的结构化图景。' },
  { emoji: '🏢', title: '团队知识库', desc: '由 LLM 维护的内部 Wiki，从 Slack 线程、会议记录、项目文档、客户通话中提取知识。' },
];

export default function QuickStart() {
  return (
    <section id="quickstart" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Start */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-emerald-400 text-sm font-medium">快速开始</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            8 步构建
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> 你的知识库</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从下载到第一次查询，只需几分钟。无需复杂配置，开箱即用。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {quickSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="bg-[#111118] border border-[#2d2d4e] rounded-2xl p-5 hover:border-emerald-500/30 transition-all hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-emerald-400/60 font-mono text-xs font-bold">{step.step}</span>
                </div>
                <h3 className="text-slate-100 font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Build from source */}
        <div className="bg-[#111118] border border-[#2d2d4e] rounded-2xl overflow-hidden mb-24">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e1e2e] bg-[#0d0d1a]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-slate-500 text-xs ml-2 font-mono">从源码构建</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            {[
              { prompt: '#', cmd: '前置条件: Node.js 20+, Rust 1.70+', color: 'text-slate-600' },
              { prompt: '$', cmd: 'git clone https://github.com/nashsu/llm_wiki.git', color: 'text-slate-300' },
              { prompt: '$', cmd: 'cd llm_wiki', color: 'text-slate-300' },
              { prompt: '$', cmd: 'npm install', color: 'text-slate-300' },
              { prompt: '$', cmd: 'npm run tauri dev', color: 'text-emerald-400', comment: '# 开发模式' },
              { prompt: '$', cmd: 'npm run tauri build', color: 'text-indigo-400', comment: '# 生产构建' },
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-slate-600 select-none">{line.prompt}</span>
                <span className={line.color}>{line.cmd}</span>
                {line.comment && <span className="text-slate-600">{line.comment}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            适用场景
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            任何需要随时间积累知识的场景，LLM Wiki 都能帮你保持组织有序。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-[#111118] border border-[#2d2d4e] rounded-2xl p-6 hover:border-indigo-500/30 transition-all hover:-translate-y-0.5">
              <div className="text-3xl mb-4">{uc.emoji}</div>
              <h3 className="text-slate-100 font-semibold mb-2">{uc.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
