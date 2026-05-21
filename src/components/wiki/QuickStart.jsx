import { Download, Settings, FolderOpen, MessageSquare } from 'lucide-react';

const steps = [
  { icon: Download, step: '01', title: '下载安装', desc: '从 GitHub Releases 下载对应平台安装包（macOS / Windows / Linux）' },
  { icon: Settings, step: '02', title: '配置 LLM', desc: '配置 OpenAI、Anthropic、Google 或 Ollama 的 API Key' },
  { icon: FolderOpen, step: '03', title: '导入文档', desc: '导入 PDF、DOCX、Markdown 等文档，LLM 自动构建 Wiki' },
  { icon: MessageSquare, step: '04', title: '查询知识', desc: '向知识库提问，获得带引用的综合答案，探索知识图谱' },
];

export default function QuickStart() {
  return (
    <section id="quickstart" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            4 步开始使用
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            从下载到第一次查询，只需几分钟。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-md transition-all hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-indigo-400 font-mono text-xs font-bold">{step.step}</span>
                </div>
                <h3 className="text-slate-900 font-semibold mb-1.5">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

