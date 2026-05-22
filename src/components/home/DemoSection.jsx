import { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

const examples = [
  {
    label: '文章内容',
    html: `<article>
  <h1>Markdown 简介</h1>
  <p>Markdown 是一种<strong>轻量级标记语言</strong>，
  由 <a href="#">John Gruber</a> 创建。</p>
  <h2>主要特点</h2>
  <ul>
    <li>语法简洁易读</li>
    <li>支持多种输出格式</li>
    <li>广泛应用于文档编写</li>
  </ul>
  <blockquote>
    <p>Markdown 的目标是实现易读易写。</p>
  </blockquote>
</article>`,
    markdown: `# Markdown 简介

Markdown 是一种**轻量级标记语言**，
由 [John Gruber](#) 创建。

## 主要特点

- 语法简洁易读
- 支持多种输出格式
- 广泛应用于文档编写

> Markdown 的目标是实现易读易写。`,
  },
  {
    label: '代码示例',
    html: `<div>
  <h2>安装方法</h2>
  <p>使用 npm 安装依赖：</p>
  <pre><code class="language-bash">npm install html2md
npm run build</code></pre>
  <p>然后在项目中引入：</p>
  <pre><code class="language-js">import html2md from 'html2md';
const result = html2md(htmlString);</code></pre>
</div>`,
    markdown: `## 安装方法

使用 npm 安装依赖：

\`\`\`bash
npm install html2md
npm run build
\`\`\`

然后在项目中引入：

\`\`\`js
import html2md from 'html2md';
const result = html2md(htmlString);
\`\`\``,
  },
  {
    label: '数据表格',
    html: `<table>
  <thead>
    <tr>
      <th>功能</th>
      <th>免费版</th>
      <th>专业版</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>基础转换</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>自定义规则</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>批量导出</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>`,
    markdown: `| 功能 | 免费版 | 专业版 |
|------|--------|--------|
| 基础转换 | ✅ | ✅ |
| 自定义规则 | ❌ | ✅ |
| 批量导出 | ❌ | ✅ |`,
  },
];

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(examples[activeTab].markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            在线演示
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            看看转换效果
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            选择不同的示例，查看 HTML 到 Markdown 的实时转换结果。
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {examples.map((ex, i) => (
            <button
              key={ex.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === i
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-violet-300'
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* Code Panel */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">{examples[activeTab].label}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition bg-white border border-slate-200 px-3 py-1.5 rounded-lg"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600">已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  复制 Markdown
                </>
              )}
            </button>
          </div>

          {/* Split code view */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* HTML */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-xs text-slate-500 font-mono font-semibold uppercase tracking-wider">
                  HTML 输入
                </span>
              </div>
              <pre className="text-xs font-mono text-slate-600 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {examples[activeTab].html}
              </pre>
            </div>

            {/* Markdown */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-xs text-slate-500 font-mono font-semibold uppercase tracking-wider">
                  Markdown 输出
                </span>
              </div>
              <pre className="text-xs font-mono text-violet-700 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {examples[activeTab].markdown}
              </pre>
            </div>
          </div>

          {/* Convert arrow indicator */}
          <div className="hidden md:flex absolute pointer-events-none" />
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-6">
          以上为示例效果。实际使用时，扩展将自动处理当前网页的 HTML 内容。
        </p>
      </div>
    </section>
  );
}
