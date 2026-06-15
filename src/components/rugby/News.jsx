import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const news = [
  {
    id: 'news-1',
    date: '2026年6月15日',
    category: '赛事报道',
    titleId: 'news-1-title',
    descId: 'news-1-desc',
    imgId: 'news-img-1-y7z8a9',
    title: '主场大胜深圳闪电队，积分榜跃升第一',
    desc: '在昨日的主场比赛中，AB橄榄球CD以34比18的大比分击败深圳闪电队，成功登顶联赛积分榜首位。',
  },
  {
    id: 'news-2',
    date: '2026年6月10日',
    category: '球队动态',
    titleId: 'news-2-title',
    descId: 'news-2-desc',
    imgId: 'news-img-2-b1c2d3',
    title: '新赛季训练营正式开营，全队备战联赛',
    desc: '随着新赛季的临近，球队全体成员已进入高强度训练状态，教练组制定了详细的备战计划。',
  },
  {
    id: 'news-3',
    date: '2026年6月5日',
    category: '球员新闻',
    titleId: 'news-3-title',
    descId: 'news-3-desc',
    imgId: 'news-img-3-e4f5g6',
    title: '张伟荣获本月最佳球员称号',
    desc: '凭借出色的场上表现和稳定的发挥，锋线球员张伟荣获本月最佳球员称号，成为球队的精神领袖。',
  },
];

export default function News() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="news" ref={containerRef} className="py-20 md:py-28 bg-rugby-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-block bg-rugby-gold/20 border border-rugby-gold/30 text-rugby-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              最新动态
            </div>
            <h2 id="news-section-title" className="text-3xl md:text-4xl font-extrabold text-white">
              球队<span className="text-rugby-gold">新闻</span>
            </h2>
          </div>
          <a href="#" className="text-rugby-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            查看全部 <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-rugby-green-dark rounded-2xl overflow-hidden border border-rugby-green-light/20 hover:border-rugby-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rugby-gold/10"
            >
              <div className="overflow-hidden aspect-[16/9]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [news-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-rugby-gold/20 text-rugby-gold text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
                <h3 id={item.titleId} className="text-white font-bold text-base leading-snug mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-rugby-gold text-sm font-semibold hover:gap-2 transition-all">
                  阅读更多 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
