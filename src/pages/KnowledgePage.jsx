import { useState, useEffect } from 'react';
import { Search, BookOpen, Tag, ChevronRight, Clock, Star, TrendingUp, Layers } from 'lucide-react';

const categories = [
  { id: 'all', label: '全部', icon: Layers },
  { id: 'foundation', label: '基础原理', icon: BookOpen },
  { id: 'architecture', label: '模型架构', icon: TrendingUp },
  { id: 'training', label: '训练技术', icon: Star },
  { id: 'application', label: '应用实践', icon: Tag },
];

const articles = [
  {
    id: 1,
    title: 'Transformer 架构详解',
    summary: '深入解析 Transformer 的自注意力机制、多头注意力、位置编码等核心组件，理解现代大语言模型的基石。',
    category: 'architecture',
    tags: ['Transformer', 'Attention', '自注意力'],
    readTime: '12 分钟',
    level: '进阶',
    levelColor: 'bg-orange-50 text-orange-600',
    hot: true,
  },
  {
    id: 2,
    title: '大语言模型基础概念',
    summary: '什么是大语言模型？从 N-gram 到神经网络语言模型，再到现代 LLM，梳理语言模型的发展脉络。',
    category: 'foundation',
    tags: ['LLM', '语言模型', '基础'],
    readTime: '8 分钟',
    level: '入门',
    levelColor: 'bg-emerald-50 text-emerald-600',
    hot: false,
  },
  {
    id: 3,
    title: 'RAG 检索增强生成',
    summary: '检索增强生成（RAG）技术原理与实践，如何将外部知识库与 LLM 结合，解决幻觉问题并提升回答准确性。',
    category: 'application',
    tags: ['RAG', '检索', '知识库'],
    readTime: '15 分钟',
    level: '进阶',
    levelColor: 'bg-orange-50 text-orange-600',
    hot: true,
  },
  {
    id: 4,
    title: 'Prompt Engineering 提示工程',
    summary: '系统学习提示词设计技巧，包括 Chain-of-Thought、Few-shot、Zero-shot 等主流提示策略及最佳实践。',
    category: 'application',
    tags: ['Prompt', 'CoT', 'Few-shot'],
    readTime: '10 分钟',
    level: '入门',
    levelColor: 'bg-emerald-50 text-emerald-600',
    hot: true,
  },
  {
    id: 5,
    title: 'RLHF 人类反馈强化学习',
    summary: '理解 InstructGPT、ChatGPT 背后的对齐技术——RLHF，包括奖励模型训练与 PPO 优化过程。',
    category: 'training',
    tags: ['RLHF', '对齐', 'PPO'],
    readTime: '18 分钟',
    level: '高级',
    levelColor: 'bg-red-50 text-red-600',
    hot: false,
  },
  {
    id: 6,
    title: 'LoRA 低秩适配微调',
    summary: '参数高效微调方法 LoRA 的原理与实现，如何用极少的参数量对大模型进行任务适配，大幅降低微调成本。',
    category: 'training',
    tags: ['LoRA', '微调', 'PEFT'],
    readTime: '14 分钟',
    level: '进阶',
    levelColor: 'bg-orange-50 text-orange-600',
    hot: true,
  },
  {
    id: 7,
    title: 'GPT 系列模型演进',
    summary: '从 GPT-1 到 GPT-4，梳理 OpenAI GPT 系列的技术演进路线，理解规模定律与涌现能力的关系。',
    category: 'architecture',
    tags: ['GPT', 'OpenAI', '规模定律'],
    readTime: '20 分钟',
    level: '进阶',
    levelColor: 'bg-orange-50 text-orange-600',
    hot: false,
  },
  {
    id: 8,
    title: 'Token 与分词技术',
    summary: '深入理解 BPE、WordPiece、SentencePiece 等分词算法，以及 Token 对模型性能和成本的影响。',
    category: 'foundation',
    tags: ['Tokenizer', 'BPE', '分词'],
    readTime: '9 分钟',
    level: '入门',
    levelColor: 'bg-emerald-50 text-emerald-600',
    hot: false,
  },
  {
    id: 9,
    title: 'Agent 智能体设计模式',
    summary: '探索基于 LLM 的 Agent 架构，包括 ReAct、Reflexion、工具调用等设计模式，构建自主推理系统。',
    category: 'application',
    tags: ['Agent', 'ReAct', '工具调用'],
    readTime: '16 分钟',
    level: '高级',
    levelColor: 'bg-red-50 text-red-600',
    hot: true,
  },
];

const levelOrder = { '入门': 0, '进阶': 1, '高级': 2 };

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'all' || a.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || a.title.includes(q) || a.summary.includes(q) || a.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <span>首页</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-600 font-medium">知识库</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">LLM 知识库</h1>
          <p className="text-slate-500 text-lg mb-8">系统整理大语言模型核心知识，从基础原理到前沿应用</p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="搜索文章、标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sticky top-24">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">分类</p>
              <nav className="space-y-1">
                {categories.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === id
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeCategory === id ? 'text-emerald-600' : 'text-slate-400'}`} />
                    {label}
                    <span className={`ml-auto text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === id ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {id === 'all' ? articles.length : articles.filter(a => a.category === id).length}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">热门标签</p>
                <div className="flex flex-wrap gap-2 px-1">
                  {['Transformer', 'RAG', 'Agent', 'LoRA', 'Prompt', 'RLHF'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Article Grid */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">
                共 <span className="font-semibold text-slate-700">{filtered.length}</span> 篇文章
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="text-lg">未找到相关文章</p>
                <p className="text-sm mt-1">试试其他关键词</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((article) => (
                  <article
                    key={article.id}
                    onMouseEnter={() => setHoveredId(article.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`bg-white rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col ${
                      hoveredId === article.id
                        ? 'border-emerald-300 shadow-lg shadow-emerald-500/10 -translate-y-0.5'
                        : 'border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${article.levelColor}`}>
                          {article.level}
                        </span>
                        {article.hot && (
                          <span className="flex items-center gap-1 text-xs text-orange-500 font-medium">
                            <TrendingUp className="w-3.5 h-3.5" /> 热门
                          </span>
                        )}
                      </div>

                      <h2 className={`font-semibold text-slate-900 mb-2 leading-snug transition-colors ${
                        hoveredId === article.id ? 'text-emerald-700' : ''
                      }`}>
                        {article.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed flex-1">{article.summary}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                      <span className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                        hoveredId === article.id ? 'text-emerald-600' : 'text-slate-400'
                      }`}>
                        阅读 <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
