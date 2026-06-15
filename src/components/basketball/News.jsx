import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'news-1',
    category: '赛事报道',
    title: '雷霆队主场大胜猛龙，连续第八场胜利',
    excerpt: '昨晚的比赛中，雷霆队以118-97的比分大胜猛龙队，李明远砍下全场最高的34分，带领球队取得本赛季第八连胜。',
    date: '2026年6月14日',
    readTime: '3分钟',
    titleId: 'news-1-title',
    descId: 'news-1-desc',
    imgId: 'news-img-1-j1k2l3',
  },
  {
    id: 'news-2',
    category: '球员动态',
    title: '王浩天荣获本月最佳球员，场均篮板创新高',
    excerpt: '联盟官方宣布，雷霆队中锋王浩天荣获本月最佳球员称号。本月他场均贡献23.4分和13.2个篮板，表现令人叹为观止。',
    date: '2026年6月12日',
    readTime: '2分钟',
    titleId: 'news-2-title',
    descId: 'news-2-desc',
    imgId: 'news-img-2-m4n5o6',
  },
  {
    id: 'news-3',
    category: '训练营',
    title: '夏季青少年篮球训练营正式开放报名',
    excerpt: '雷霆队官方宣布，2026年夏季青少年篮球训练营正式开放报名。本次训练营将由多名现役球员亲自指导，名额有限。',
    date: '2026年6月10日',
    readTime: '4分钟',
    titleId: 'news-3-title',
    descId: 'news-3-desc',
    imgId: 'news-img-3-p7q8r9',
  },
  {
    id: 'news-4',
    category: '赛季展望',
    title: '季后赛倒计时：雷霆队能否卫冕总冠军？',
    excerpt: '随着常规赛进入尾声，雷霆队以联盟第一的战绩昂首进入季后赛。分析人士普遍看好他们卫冕总冠军的前景。',
    date: '2026年6月8日',
    readTime: '5分钟',
    titleId: 'news-4-title',
    descId: 'news-4-desc',
    imgId: 'news-img-4-s1t2u3',
  },
];

const categoryColors = {
  '赛事报道': 'bg-hoop-orange/20 text-hoop-orange',
  '球员动态': 'bg-blue-500/20 text-blue-400',
  '训练营': 'bg-green-500/20 text-green-400',
  '赛季展望': 'bg-purple-500/20 text-purple-400',
};

const News = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="news" className="py-20 md:py-28 bg-court-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-hoop-orange text-xs font-body font-semibold uppercase tracking-[0.3em] mb-3">
              最新资讯
            </p>
            <h2 className="font-heading font-black text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              新闻动态
            </h2>
          </div>
          <a href="#" className="text-gray-400 hover:text-hoop-orange font-body text-sm font-medium uppercase tracking-wider transition-colors duration-200 self-start md:self-auto">
            全部新闻 →
          </a>
        </div>

        {/* Featured Article */}
        <div className="group mb-6 bg-court-dark rounded-2xl border border-court-border hover:border-hoop-orange/40 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-56 md:h-auto overflow-hidden">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-court-dark/30 hidden md:block" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className={`inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start ${categoryColors[featured.category]}`}>
                {featured.category}
              </span>
              <h3 id={featured.titleId} className="font-heading font-bold text-white text-2xl md:text-3xl uppercase leading-tight mb-3">
                {featured.title}
              </h3>
              <p id={featured.descId} className="text-gray-400 font-body text-sm leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-gray-600 text-xs font-body">
                <span>{featured.date}</span>
                <span>·</span>
                <span>阅读 {featured.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((article) => (
            <div
              key={article.id}
              className="group bg-court-dark rounded-2xl border border-court-border hover:border-hoop-orange/40 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-court-dark/60 to-transparent" />
              </div>
              <div className="p-5">
                <span className={`inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <h3 id={article.titleId} className="font-heading font-bold text-white text-lg uppercase leading-tight mb-2">
                  {article.title}
                </h3>
                <p id={article.descId} className="text-gray-500 font-body text-sm leading-relaxed line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-gray-600 text-xs font-body">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
