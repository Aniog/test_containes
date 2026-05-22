import {
  Brain,
  GitBranch,
  Shield,
  Zap,
  Code2,
  Search,
  RefreshCw,
  MessageSquare,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: '深度代码理解',
    description: '不只是补全代码——CodeAgent 真正理解你的整个代码库、架构模式和业务逻辑，提供精准的上下文感知建议。',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Zap,
    title: '自主任务执行',
    description: '描述你想要的结果，CodeAgent 会自动规划、执行多步骤任务——从重构到添加功能，全程无需手动干预。',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: GitBranch,
    title: '原生 Git 集成',
    description: '自动创建分支、提交代码、生成 PR 描述。CodeAgent 遵循你团队的 Git 工作流，无缝融入现有流程。',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Search,
    title: '智能代码搜索',
    description: '用自然语言搜索代码库。"找到所有处理用户认证的地方"——CodeAgent 秒速定位，精准无误。',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Shield,
    title: '安全审查',
    description: '自动检测安全漏洞、SQL 注入、XSS 攻击等常见风险，在代码合并前提前发现问题。',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Code2,
    title: '多语言支持',
    description: '支持 Python、TypeScript、Go、Rust、Java 等 100+ 编程语言，以及主流框架和工具链。',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: RefreshCw,
    title: '持续学习',
    description: '随着你的使用，CodeAgent 不断学习你的编码风格、偏好和项目规范，越用越懂你。',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    icon: MessageSquare,
    title: '自然语言交互',
    description: '用中文或英文直接描述需求，无需记忆特殊命令。像和同事对话一样，轻松完成复杂编程任务。',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-300 text-sm font-medium">核心功能</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            不只是代码补全
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            CodeAgent 是一个真正的 AI 编程 Agent，能够理解、规划并自主完成复杂的开发任务。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group bg-[#111118] border border-white/8 rounded-2xl p-6 hover:border-white/20 hover:bg-[#16161f] transition-all duration-300 cursor-default`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            还有更多功能持续更新中 ·{' '}
            <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
              查看完整功能列表 →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
