import { MessageSquare, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: '用自然语言描述任务',
    description:
      '直接告诉 CodeAgent 你想做什么。无需特殊语法，用中文或英文描述你的需求，就像和同事沟通一样自然。',
    example: '"帮我把这个 REST API 重构成 GraphQL，保持向后兼容"',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/20',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Agent 自主规划执行',
    description:
      'CodeAgent 分析你的代码库，制定执行计划，自动完成文件修改、依赖安装、测试运行等一系列操作。',
    example: '分析 → 规划 → 执行 → 验证 → 报告',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    glow: 'shadow-purple-500/20',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: '审查并一键应用',
    description:
      '查看 CodeAgent 生成的变更 diff，理解每一处修改的原因。满意后一键应用，或继续对话调整细节。',
    example: '完整的变更说明 + 可回滚的操作记录',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/20',
  },
];

const integrations = [
  'VS Code', 'JetBrains', 'Neovim', 'GitHub', 'GitLab',
  'Jira', 'Slack', 'Linear', 'Figma', 'Vercel',
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-purple-100/80 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-700 text-sm font-medium">工作原理</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            三步完成复杂任务
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            从描述到交付，CodeAgent 处理所有中间步骤。你只需要告诉它目标，它负责实现。
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full z-10">
                    <div className="flex items-center justify-center w-8 -ml-4">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  </div>
                )}

                <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <span className="text-5xl font-black text-gray-100 font-mono">{step.number}</span>
                  </div>

                  <h3 className="text-gray-900 font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{step.description}</p>

                  <div className={`${step.bg} border ${step.border} rounded-xl p-3`}>
                    <div className="text-gray-400 text-xs mb-1 font-mono">示例</div>
                    <div className={`${step.color} text-sm font-mono`}>{step.example}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrations */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-6">无缝集成你喜爱的工具</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrations.map((tool) => (
              <div
                key={tool}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-gray-500 text-sm font-medium hover:border-gray-300 hover:text-gray-900 transition-all duration-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
