import {
  Zap,
  Copy,
  Settings2,
  FileCode2,
  Table2,
  Link2,
  Image,
  Code,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '一键转换',
    description: '点击扩展图标，立即将当前页面的 HTML 内容转换为格式化的 Markdown 文本。',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    icon: Copy,
    title: '一键复制',
    description: '转换完成后，一键将 Markdown 内容复制到剪贴板，无缝粘贴到任何编辑器。',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    icon: Settings2,
    title: '自定义规则',
    description: '支持自定义转换规则，可以选择保留或忽略特定 HTML 元素，满足不同场景需求。',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    icon: Table2,
    title: '表格支持',
    description: '完美支持 HTML 表格转换为 Markdown 表格格式，保留所有数据结构。',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    icon: Code,
    title: '代码块保留',
    description: '智能识别 <code> 和 <pre> 标签，转换为带语言标注的 Markdown 代码块。',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    icon: Link2,
    title: '链接与图片',
    description: '自动转换超链接和图片标签，保留 href、alt 等属性，确保内容完整性。',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    icon: FileCode2,
    title: '导出文件',
    description: '支持将转换结果直接导出为 .md 文件，方便保存和分享。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    icon: Image,
    title: '选区转换',
    description: '支持选中页面中的特定区域进行转换，而不是整个页面，更加灵活精准。',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            功能特性
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            专为开发者打造的
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {' '}转换工具
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            HTML2MD 提供全面的 HTML 到 Markdown 转换能力，覆盖所有常见的 HTML 元素和格式。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
