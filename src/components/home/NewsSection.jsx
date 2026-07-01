import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, ChevronRight, TrendingUp } from 'lucide-react';

const articles = [
  {
    id: 'news-1',
    category: '英超',
    titleId: 'news-title-1',
    descId: 'news-desc-1',
    imgId: 'news-img-1-d4e5f6',
    title: '曼城主场大胜阿森纳，积分榜领跑优势扩大',
    desc: '哈兰德梅开二度，德布劳内助攻两球，曼城以4-1大胜阿森纳，在英超积分榜上领先优势扩大至5分。',
    time: '2小时前',
    hot: true,
  },
  {
    id: 'news-2',
    category: '西甲',
    titleId: 'news-title-2',
    descId: 'news-desc-2',
    imgId: 'news-img-2-g7h8i9',
    title: '皇马欧冠小组赛首战告捷，维尼修斯独造三球',
    desc: '皇家马德里在欧冠小组赛首轮以3-0击败对手，维尼修斯状态火热，贡献一球两助攻。',
    time: '4小时前',
    hot: false,
  },
  {
    id: 'news-3',
    category: '德甲',
    titleId: 'news-title-3',
    descId: 'news-desc-3',
    imgId: 'news-img-3-j1k2l3',
    title: '拜仁慕尼黑签下新援，中场实力大幅提升',
    desc: '拜仁慕尼黑官方宣布完成重磅签约，新援将在本赛季剩余比赛中为球队效力，球迷期待值拉满。',
    time: '6小时前',
    hot: false,
  },
  {
    id: 'news-4',
    category: '意甲',
    titleId: 'news-title-4',
    descId: 'news-desc-4',
    imgId: 'news-img-4-m4n5o6',
    title: '国际米兰德比大战在即，双方备战情况一览',
    desc: '米兰德比即将上演，国际米兰与AC米兰双方均进行了充分备战，本场比赛将对积分榜格局产生重大影响。',
    time: '8小时前',
    hot: false,
  },
];

const NewsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="news" ref={containerRef} className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-2">
              <TrendingUp className="w-4 h-4" />
              热门资讯
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">最新足球新闻</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
            查看全部 <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Article */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-green-600/50 transition-all h-full flex flex-col">
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">热门</span>
                  <span className="bg-green-600/90 text-white text-xs font-medium px-2 py-0.5 rounded">{featured.category}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 id={featured.titleId} className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p id={featured.descId} className="text-slate-400 text-sm leading-relaxed flex-1">
                  {featured.desc}
                </p>
                <div className="flex items-center gap-1 mt-4 text-slate-500 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.time}
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <div key={article.id} className="group cursor-pointer bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-green-600/50 transition-all flex gap-4 p-4">
                <div className="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    alt={article.title}
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span className="text-xs font-medium text-green-400 bg-green-600/10 px-1.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <h4 id={article.titleId} className="text-sm font-semibold text-white mt-1.5 leading-snug group-hover:text-green-400 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p id={article.descId} className="hidden">{article.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-2">
                    <Clock className="w-3 h-3" />
                    {article.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
