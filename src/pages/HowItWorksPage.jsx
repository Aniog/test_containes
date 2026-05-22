import { useEffect } from 'react';
import {
  FileText, Brain, Network, Search, MessageSquare,
  ArrowRight, ArrowDown, Database, Layers, Zap, RefreshCw
} from 'lucide-react';

const pipeline = [
  {
    step: '01',
    icon: FileText,
    color: 'indigo',
    title: '文档摄入',
    subtitle: 'Document Ingestion',
    desc: '支持 PDF、DOCX、PPTX、图片、视频、音频、网页等多种格式。系统提取文本内容，保留语义结构，加入持久化处理队列。',
    details: ['格式解析与文本提取', '队列持久化，崩溃可恢复', '失败任务自动重试 3 次'],
  },
  {
    step: '02',
    icon: Brain,
    color: 'violet',
    title: '两步思维链分析',
    subtitle: 'Two-Step Chain-of-Thought',
    desc: 'LLM 先进行深度分析（提取实体、概念、论点、关系），再基于分析结果生成结构化 Wiki 内容，显著优于单步生成。',
    details: ['第一步：分析文档，识别关键信息', '第二步：基于分析生成 Wiki 页面', '与现有知识库建立交叉引用'],
  },
  {
    step: '03',
    icon: Database,
    color: 'purple',
    title: '知识库写入',
    subtitle: 'Wiki Construction',
    desc: '生成的内容以 Markdown 格式写入 Wiki 目录。每个实体、概念、来源都有独立页面，通过 [[WikiLink]] 相互关联。',
    details: ['实体页、概念页、来源摘要页', '[[WikiLink]] 双向链接', '兼容 Obsidian Vault 格式'],
  },
  {
    step: '04',
    icon: Network,
    color: 'sky',
    title: '知识图谱构建',
    subtitle: 'Knowledge Graph',
    desc: '基于 4 种信号计算节点间相关性，构建加权知识图谱。Louvain 算法自动发现知识社区，识别桥接节点与知识空白。',
    details: ['直接链接 ×3.0 / 来源重叠 ×4.0', 'Adamic-Adar ×1.5 / 类型亲和 ×1.0', 'Louvain 社区检测与可视化'],
  },
  {
    step: '05',
    icon: Search,
    color: 'emerald',
    title: '混合检索',
    subtitle: 'Hybrid Retrieval',
    desc: '查询时同时使用 BM25 分词检索与 LanceDB 向量语义检索，融合两种结果，精准定位相关知识页面。',
    details: ['BM25 关键词匹配', 'LanceDB 向量嵌入检索', '结果融合排序'],
  },
  {
    step: '06',
    icon: MessageSquare,
    color: 'amber',
    title: '知识问答',
    subtitle: 'Knowledge Q&A',
    desc: 'LLM 基于检索到的 Wiki 页面生成带引用的综合答案。知识已预先编译，无需每次重新推导，响应更快、更准确。',
    details: ['基于 Wiki 上下文生成答案', '答案附带来源引用', '知识一次编译，持续复用'],
  },
];

const vsItems = [
  { label: '知识存储', rag: '原始文档向量', wiki: '结构化 Wiki 页面' },
  { label: '知识更新', rag: '重新索引全量文档', wiki: '增量更新受影响页面' },
  { label: '关系表达', rag: '隐式（向量相似度）', wiki: '显式（[[WikiLink]] 图谱）' },
  { label: '可读性', rag: '机器可读', wiki: '人机均可读' },
  { label: '知识积累', rag: '每次查询独立推导', wiki: '持续积累，复用已有知识' },
  { label: '知识空白', rag: '无法感知', wiki: '自动识别并触发深度研究' },
];

const colorMap = {
  indigo: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', num: 'text-blue-500' },
  violet: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', num: 'text-sky-400' },
  purple: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', num: 'text-blue-500' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', num: 'text-sky-400' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', num: 'text-emerald-400' },
  amber: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', num: 'text-blue-400' },
};

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">工作原理</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            LLM Wiki 如何
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent"> 构建知识库</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            从文档到结构化知识，LLM Wiki 通过六个核心步骤，将零散信息转化为持续生长的个人知识图谱。
          </p>
        </div>

        {/* Pipeline */}
        <div className="mb-20">
          {pipeline.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            const isLast = index === pipeline.length - 1;
            return (
              <div key={item.step}>
                <div className={`bg-white border ${colors.border} rounded-2xl p-6 md:p-8`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left: icon + step */}
                    <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2 md:w-20 flex-shrink-0">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`font-mono text-xs font-bold ${colors.num}`}>{item.step}</span>
                    </div>
                    {/* Right: content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3 className="text-slate-900 font-bold text-xl">{item.title}</h3>
                        <span className="text-slate-400 text-sm font-mono">{item.subtitle}</span>
                      </div>
                      <p className="text-slate-500 leading-relaxed mb-4">{item.desc}</p>
                      <ul className="flex flex-wrap gap-2">
                        {item.details.map((d) => (
                          <li key={d} className={`flex items-center gap-1.5 ${colors.bg} ${colors.text} text-xs px-3 py-1.5 rounded-full`}>
                            <Zap className="w-3 h-3 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {!isLast && (
                  <div className="flex justify-center my-3">
                    <ArrowDown className="w-5 h-5 text-slate-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* vs RAG */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              与传统 RAG 的区别
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              RAG 每次查询都从原始文档推导，LLM Wiki 将知识预先编译为结构化 Wiki，一次构建，持续复用。
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
              <div className="px-6 py-4 text-slate-500 text-sm font-medium"></div>
              <div className="px-6 py-4 text-slate-600 text-sm font-semibold border-l border-slate-200">传统 RAG</div>
              <div className="px-6 py-4 text-blue-700 text-sm font-semibold border-l border-slate-200 flex items-center gap-2">
                LLM Wiki
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2 py-0.5 rounded-full">推荐</span>
              </div>
            </div>
            {vsItems.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 ${i < vsItems.length - 1 ? 'border-b border-slate-200' : ''}`}>
                <div className="px-6 py-4 text-slate-700 text-sm font-medium">{row.label}</div>
                <div className="px-6 py-4 text-slate-400 text-sm border-l border-slate-100">{row.rag}</div>
                <div className="px-6 py-4 text-slate-700 text-sm border-l border-slate-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {row.wiki}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incremental update */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-xl mb-1">增量更新机制</h3>
              <p className="text-slate-500">新文档加入时，只更新受影响的 Wiki 页面，而非重建整个知识库。</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '新增文档', desc: '分析新内容，创建新实体页，更新相关概念页，建立新连接。' },
              { title: '更新文档', desc: '对比前后差异，仅修改受影响的 Wiki 页面，保留已有知识。' },
              { title: '删除文档', desc: '级联清理来源摘要页，移除死链，保留被多个来源共享的实体页。' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-slate-800 font-semibold text-sm">{item.title}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/nashsu/llm_wiki/releases"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-3.5 font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            立即体验 LLM Wiki
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
