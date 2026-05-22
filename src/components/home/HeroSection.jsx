import { ArrowRight, Chrome, Star } from 'lucide-react';

const stats = [
  { value: '50,000+', label: '活跃用户' },
  { value: '4.9★', label: 'Chrome 商店评分' },
  { value: '100%', label: '免费开源' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <Chrome className="w-4 h-4" />
          Chrome 扩展程序 · 完全免费
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
          将任意网页
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            一键转为 Markdown
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          HTML2MD 是一款强大的 Chrome 扩展，让开发者、写作者和研究人员能够即时将网页内容转换为干净、格式化的 Markdown 文本。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" id="install">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            <Chrome className="w-5 h-5" />
            添加到 Chrome — 免费
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-100 transition"
          >
            查看演示
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Preview mockup */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(124,58,237,0.12)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-100">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 text-left">
                https://example.com/article
              </div>
            </div>

            {/* Split view */}
            <div className="grid grid-cols-2 divide-x divide-slate-200">
              {/* HTML side */}
              <div className="p-5">
                <div className="text-xs text-slate-400 font-mono mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  HTML
                </div>
                <pre className="text-xs font-mono text-left leading-relaxed overflow-hidden">
                  <code>
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'article'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'h1'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    <span className="text-slate-300">{'Getting Started'}</span>
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'h1'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'p'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    <span className="text-slate-300">{'This is a '}</span>
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'strong'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    <span className="text-slate-300">{'guide'}</span>
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'strong'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'p'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'ul'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    {'    '}
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'li'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    <span className="text-slate-300">{'Install extension'}</span>
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'li'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    {'    '}
                    <span className="text-slate-500">{'<'}</span>
                    <span className="text-red-400">{'li'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    <span className="text-slate-300">{'Click convert'}</span>
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'li'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'ul'}</span>
                    <span className="text-slate-500">{'>'}</span>
                    {'\n'}
                    <span className="text-slate-500">{'</'}</span>
                    <span className="text-red-400">{'article'}</span>
                    <span className="text-slate-500">{'>'}</span>
                  </code>
                </pre>
              </div>

              {/* Markdown side */}
              <div className="p-5">
                <div className="text-xs text-slate-400 font-mono mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Markdown
                </div>
                <pre className="text-xs font-mono text-left leading-relaxed">
                  <code>
                    <span className="text-violet-600">{'# '}</span>
                    <span className="text-slate-700">{'Getting Started'}</span>
                    {'\n\n'}
                    <span className="text-slate-600">{'This is a '}</span>
                    <span className="text-violet-600">{'**'}</span>
                    <span className="text-slate-600">{'guide'}</span>
                    <span className="text-violet-600">{'**'}</span>
                    {'\n\n'}
                    <span className="text-cyan-600">{'- '}</span>
                    <span className="text-slate-600">{'Install extension'}</span>
                    {'\n'}
                    <span className="text-cyan-600">{'- '}</span>
                    <span className="text-slate-600">{'Click convert'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg z-10">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
