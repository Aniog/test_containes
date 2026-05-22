import { useState, useEffect } from 'react';
import { ArrowRight, Github, Star, Terminal } from 'lucide-react';

const typingLines = [
  '> 帮我重构这个函数，提升性能...',
  '> 为这段代码添加单元测试...',
  '> 找出并修复这个 bug...',
  '> 将这个 REST API 迁移到 GraphQL...',
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const line = typingLines[currentLine];
    let i = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (i < line.length) {
        setDisplayText(line.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % typingLines.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-200/60 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-100/80 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-100/60 blur-[60px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-8">
            <Star className="w-3.5 h-3.5 text-violet-600 fill-violet-600" />
            <span className="text-violet-700 text-sm font-medium">全新发布 · 支持 100+ 编程语言</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            <span className="gradient-text">你的 AI 编程伙伴</span>
            <br />
            <span className="text-gray-900">随时随地，写出更好的代码</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            CodeAgent 是一款深度集成于你工作流的 AI 编程 Agent。
            它理解你的代码库，自主完成复杂任务，让你专注于真正重要的事情。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href="#"
              className="group flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 text-base"
            >
              免费开始使用
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-base hover:bg-gray-50"
            >
              <Github className="w-4 h-4" />
              查看 GitHub
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 mb-16 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-semibold">✓</span> 无需信用卡
            </span>
            <span className="w-px h-4 bg-gray-200" />
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-semibold">✓</span> 免费额度每月更新
            </span>
            <span className="w-px h-4 bg-gray-200" />
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-semibold">✓</span> 30 秒完成配置
            </span>
          </div>

          {/* Terminal Demo */}
          <div className="w-full max-w-3xl animate-float">
            <div className="code-block overflow-hidden shadow-xl shadow-gray-200/80">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-100">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="flex items-center gap-2 ml-3">
                  <Terminal className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-gray-400 text-xs font-mono">codeagent</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm space-y-3 bg-gray-50">
                <div className="text-gray-400 text-xs mb-4">
                  # CodeAgent v2.1.0 — 已连接到你的代码库
                </div>

                {/* Typing line */}
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold shrink-0">$</span>
                  <span className="text-gray-700">
                    {displayText}
                    <span
                      className="inline-block w-0.5 h-4 bg-violet-500 ml-0.5 align-middle"
                      style={{ animation: 'blink 1s step-end infinite' }}
                    />
                  </span>
                </div>

                {/* Response */}
                <div className="mt-4 space-y-2 text-gray-500 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-violet-500">◆</span>
                    <span>分析代码库结构...</span>
                    <span className="text-emerald-500 ml-auto">✓ 完成</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-violet-500">◆</span>
                    <span>识别性能瓶颈...</span>
                    <span className="text-emerald-500 ml-auto">✓ 完成</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-violet-500">◆</span>
                    <span>生成优化方案...</span>
                    <span className="text-amber-500 ml-auto animate-pulse">⟳ 进行中</span>
                  </div>
                </div>

                {/* Code output */}
                <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-2">// 优化后的代码</div>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-purple-600">const</span>
                      <span className="text-blue-600"> processData</span>
                      <span className="text-gray-700"> = </span>
                      <span className="text-amber-600">useMemo</span>
                      <span className="text-gray-700">{'(() => {'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-600">return</span>
                      <span className="text-gray-700"> data.</span>
                      <span className="text-amber-600">filter</span>
                      <span className="text-gray-700">{'(item => item.active)'}</span>
                    </div>
                    <div className="pl-4 text-gray-700">
                      {'  .'}
                      <span className="text-amber-600">sort</span>
                      <span className="text-gray-700">{'((a, b) => b.score - a.score);'}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{'}, [data]);'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 w-full max-w-2xl">
            {[
              { value: '10M+', label: '开发者信赖' },
              { value: '500K+', label: '每日代码提交' },
              { value: '98%', label: '用户满意度' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text-accent mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
