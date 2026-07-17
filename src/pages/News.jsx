import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Tag } from 'lucide-react';

const newsData = [
  { id: 'n1', title: '湖人队以112-108击败勇士，詹姆斯砍下35分', category: '赛事报道', date: '2026-07-15', summary: '勒布朗·詹姆斯在关键时刻连续得分，帮助湖人队在主场以112-108险胜金州勇士，詹姆斯全场砍下35分8篮板7助攻。', titleId: 'news-n1-title', descId: 'news-n1-desc', imgId: 'news-img-n1-a1b2c3', featured: true },
  { id: 'n2', title: '约基奇荣获本赛季MVP，连续第四次获此殊荣', category: '球员动态', date: '2026-07-14', summary: '丹佛掘金中锋尼古拉·约基奇以压倒性优势荣获2025-26赛季MVP，这是他职业生涯第四次获得此项荣誉。', titleId: 'news-n2-title', descId: 'news-n2-desc', imgId: 'news-img-n2-d4e5f6', featured: false },
  { id: 'n3', title: '凯尔特人宣布续约塔图姆，合同总额超3亿美元', category: '球队动态', date: '2026-07-13', summary: '波士顿凯尔特人与明星球员杰森·塔图姆签署超级顶薪续约合同，合同总额高达3.12亿美元，为期5年。', titleId: 'news-n3-title', descId: 'news-n3-desc', imgId: 'news-img-n3-g7h8i9', featured: false },
  { id: 'n4', title: '东契奇单场砍下60分，创个人职业生涯新高', category: '赛事报道', date: '2026-07-12', summary: '达拉斯独行侠球星卢卡·东契奇在对阵篮网的比赛中砍下60分12篮板10助攻，创下个人职业生涯单场得分新高。', titleId: 'news-n4-title', descId: 'news-n4-desc', imgId: 'news-img-n4-j1k2l3', featured: false },
  { id: 'n5', title: 'NBA宣布2026年全明星赛将在上海举办', category: '联盟新闻', date: '2026-07-11', summary: 'NBA官方宣布，2026年全明星周末将首次在中国上海举办，这将是NBA历史上首次在亚洲举办全明星赛。', titleId: 'news-n5-title', descId: 'news-n5-desc', imgId: 'news-img-n5-m4n5o6', featured: false },
  { id: 'n6', title: '勇士队完成重大交易，引进全明星后卫', category: '球队动态', date: '2026-07-10', summary: '金州勇士在交易截止日前完成重大交易，从东部球队引进一名全明星级别后卫，以加强季后赛竞争力。', titleId: 'news-n6-title', descId: 'news-n6-desc', imgId: 'news-img-n6-p7q8r9', featured: false },
];

const categories = ['全部', '赛事报道', '球员动态', '球队动态', '联盟新闻'];

const categoryColors = {
  '赛事报道': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  '球员动态': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  '球队动态': 'bg-green-500/20 text-green-400 border-green-500/30',
  '联盟新闻': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export default function News() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const filtered = activeCategory === '全部' ? newsData : newsData.filter(n => n.category === activeCategory);
  const featured = filtered.find(n => n.featured) || filtered[0];
  const rest = filtered.filter(n => n.id !== featured?.id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">NBA 新闻</h1>
          <p className="text-gray-400 text-lg">最新赛事资讯、球队动态与球员新闻</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-8 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[featured.category] || 'bg-gray-700 text-gray-300 border-gray-600'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-orange-500 font-medium bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">头条</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl font-bold text-white mb-3 leading-tight">{featured.title}</h2>
                <p id={featured.descId} className="text-gray-400 leading-relaxed mb-4">{featured.summary}</p>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.date}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsCard({ article }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all group cursor-pointer">
      <div className="relative h-44 overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.descId}] [${article.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-3 h-3 text-gray-500" />
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[article.category] || 'bg-gray-700 text-gray-300 border-gray-600'}`}>
            {article.category}
          </span>
        </div>
        <h3 id={article.titleId} className="text-white font-semibold text-base mb-2 leading-snug line-clamp-2">{article.title}</h3>
        <p id={article.descId} className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">{article.summary}</p>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <Clock className="w-3 h-3" />
          {article.date}
        </div>
      </div>
    </div>
  );
}
