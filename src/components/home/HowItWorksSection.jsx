import { Chrome, MousePointerClick, Copy, Download } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Chrome,
    title: '访问 Chrome 商店',
    description:
      '打开 Chrome 浏览器，前往 Chrome 网上应用店，搜索 "HTML2MD" 或点击下方安装按钮直达页面。',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    glow: 'shadow-[0_0_20px_rgba(124,58,237,0.2)]',
  },
  {
    step: '02',
    icon: Download,
    title: '点击添加到 Chrome',
    description:
      '在扩展详情页点击"添加到 Chrome"按钮，在弹出的权限确认框中点击"添加扩展程序"完成安装。',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]',
  },
  {
    step: '03',
    icon: MousePointerClick,
    title: '浏览任意网页',
    description:
      '打开你想要转换的网页，点击浏览器工具栏中的 HTML2MD 扩展图标，扩展面板将自动弹出。',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.2)]',
  },
  {
    step: '04',
    icon: Copy,
    title: '转换并复制',
    description:
      '点击"转换"按钮，Markdown 内容将立即显示在面板中。点击"复制"即可粘贴到任何编辑器使用。',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    glow: 'shadow-[0_0_20px_rgba(249,115,22,0.2)]',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0f1117]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            安装步骤
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            4 步开始使用
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            安装简单，上手即用。从安装到第一次转换，只需不到 2 分钟。
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-orange-500/30 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative z-10 flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div
                  className={`w-24 h-24 rounded-2xl ${step.bg} border ${step.border} ${step.glow} flex flex-col items-center justify-center mb-5 relative`}
                >
                  <span className="text-xs font-bold text-slate-500 mb-1">{step.step}</span>
                  <Icon className={`w-7 h-7 ${step.color}`} />
                </div>

                <h3 className="text-slate-100 font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            <Chrome className="w-5 h-5" />
            立即免费安装
          </a>
          <p className="text-slate-500 text-sm mt-3">无需注册，无需登录，完全免费</p>
        </div>
      </div>
    </section>
  );
}
