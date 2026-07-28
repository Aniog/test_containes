import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = ['全部', '商事诉讼', '知识产权', '刑事辩护', '公司法务'];

const cases = [
  {
    id: 'case-1',
    category: '商事诉讼',
    title: '某上市公司股权纠纷案',
    result: '胜诉',
    amount: '涉案金额 2.3亿元',
    desc: '代理原告方成功追回被侵占股权，获得全额赔偿，创下同类案件赔偿金额新高。',
    imgId: 'case-1-img-p7q8r9',
    titleId: 'case-1-title',
    descId: 'case-1-desc',
  },
  {
    id: 'case-2',
    category: '知识产权',
    title: '跨国企业商标侵权案',
    result: '胜诉',
    amount: '赔偿金额 800万元',
    desc: '成功为国内知名品牌维权，打击跨境商标侵权行为，有效保护了客户的品牌价值。',
    imgId: 'case-2-img-s1t2u3',
    titleId: 'case-2-title',
    descId: 'case-2-desc',
  },
  {
    id: 'case-3',
    category: '刑事辩护',
    title: '重大经济犯罪辩护案',
    result: '无罪释放',
    amount: '当事人获无罪判决',
    desc: '通过严密的证据分析和法庭辩论，成功为当事人洗清冤屈，维护了司法公正。',
    imgId: 'case-3-img-v4w5x6',
    titleId: 'case-3-title',
    descId: 'case-3-desc',
  },
  {
    id: 'case-4',
    category: '公司法务',
    title: '大型企业并购重组项目',
    result: '顺利完成',
    amount: '交易金额 15亿元',
    desc: '全程参与某集团旗下子公司并购重组，完成尽职调查、交易架构设计及合规审查全流程。',
    imgId: 'case-4-img-y7z8a9',
    titleId: 'case-4-title',
    descId: 'case-4-desc',
  },
  {
    id: 'case-5',
    category: '商事诉讼',
    title: '建设工程合同纠纷案',
    result: '调解成功',
    amount: '追回欠款 4500万元',
    desc: '通过诉前调解与诉讼并行策略，高效解决建设工程款项纠纷，为客户节省大量时间成本。',
    imgId: 'case-5-img-b1c2d3',
    titleId: 'case-5-title',
    descId: 'case-5-desc',
  },
  {
    id: 'case-6',
    category: '知识产权',
    title: '软件著作权侵权案',
    result: '胜诉',
    amount: '赔偿金额 1200万元',
    desc: '代理国内头部科技公司，成功追究竞争对手软件著作权侵权责任，有效维护了技术创新成果。',
    imgId: 'case-6-img-e4f5g6',
    titleId: 'case-6-title',
    descId: 'case-6-desc',
  },
];

const resultColors = {
  '胜诉': 'bg-green-100 text-green-800',
  '无罪释放': 'bg-blue-100 text-blue-800',
  '顺利完成': 'bg-purple-100 text-purple-800',
  '调解成功': 'bg-amber-100 text-amber-800',
};

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const containerRef = useRef(null);

  const filtered = activeCategory === '全部'
    ? cases
    : cases.filter((c) => c.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="cases" className="py-24 lg:py-32 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">成功案例</p>
          <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-5">
            经典案例展示
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            每一个案例背后，都是我们对专业精神的坚守和对客户权益的全力守护
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded transition-all ${
                activeCategory === cat
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c) => (
            <div key={c.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] law court legal`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/20" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded">
                    {c.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded ${resultColors[c.result] || 'bg-gray-100 text-gray-700'}`}>
                    {c.result}
                  </span>
                  <span className="text-xs text-gray-400">{c.amount}</span>
                </div>
                <h3 id={c.titleId} className="font-serif font-bold text-navy text-lg mb-2 leading-snug">
                  {c.title}
                </h3>
                <p id={c.descId} className="text-gray-600 text-sm leading-relaxed">
                  {c.desc}
                </p>
                <button className="mt-4 flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
