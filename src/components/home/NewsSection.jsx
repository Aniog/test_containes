import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 'mbappe-hat-trick',
    category: '赛事报道',
    categoryColor: 'text-yellow-400 bg-yellow-500/10',
    title: '姆巴佩帽子戏法！法国3-1大胜澳大利亚',
    excerpt: '基利安·姆巴佩在本届世界杯首场比赛中上演帽子戏法，率领法国队以3-1轻松击败澳大利亚，强势开启卫冕之旅。',
    time: '2小时前',
    imgId: 'news-mbappe-a1b2c3',
    titleId: 'news-mbappe-title',
    excerptId: 'news-mbappe-excerpt',
  },
  {
    id: 'argentina-upset',
    category: '爆冷',
    categoryColor: 'text-red-400 bg-red-500/10',
    title: '沙特阿拉伯爆冷！梅西领衔阿根廷首战告负',
    excerpt: '世界杯历史性时刻！沙特阿拉伯以2-1击败阿根廷，创造本届世界杯最大冷门，梅西的夺冠之路遭遇重大挫折。',
    time: '5小时前',
    imgId: 'news-argentina-d4e5f6',
    titleId: 'news-argentina-title',
    excerptId: 'news-argentina-excerpt',
  },
  {
    id: 'ronaldo-record',
    category: '历史纪录',
    categoryColor: 'text-blue-400 bg-blue-500/10',
    title: 'C罗创造世界杯历史，成首位五届进球球员',
    excerpt: '克里斯蒂亚诺·罗纳尔多在对阵加纳的比赛中打入一球，成为历史上首位在五届世界杯中均有进球的球员。',
    time: '8小时前',
    imgId: 'news-ronaldo-g7h8i9',
    titleId: 'news-ronaldo-title',
    excerptId: 'news-ronaldo-excerpt',
  },
  {
    id: 'brazil-preview',
    category: '赛前预测',
    categoryColor: 'text-green-400 bg-green-500/10',
    title: '巴西VS塞尔维亚：桑巴军团能否延续统治？',
    excerpt: '五星巴西将在今晚迎战塞尔维亚，内马尔领衔的桑巴军团被普遍看好，但塞尔维亚的强力中场不容小觑。',
    time: '1天前',
    imgId: 'news-brazil-j1k2l3',
    titleId: 'news-brazil-title',
    excerptId: 'news-brazil-excerpt',
  },
];

function NewsCard({ article, featured = false }) {
  if (featured) {
    return (
      <div className="relative bg-gray-900 border border-gray-800 hover:border-yellow-500/40 rounded-xl overflow-hidden transition-all duration-200 group cursor-pointer">
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            alt={article.title}
            data-strk-img-id={article.imgId}
            data-strk-img={`[${article.excerptId}] [${article.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
            {article.category}
          </span>
        </div>
        <div className="p-5">
          <h3 id={article.titleId} className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors leading-snug mb-2">
            {article.title}
          </h3>
          <p id={article.excerptId} className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-600">
            <Clock className="w-3 h-3" />
            {article.time}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 bg-gray-900 border border-gray-800 hover:border-yellow-500/40 rounded-xl p-4 transition-all duration-200 group cursor-pointer">
      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.excerptId}] [${article.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${article.categoryColor}`}>
          {article.category}
        </span>
        <h3 id={article.titleId} className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors leading-snug mt-1.5 line-clamp-2">
          {article.title}
        </h3>
        <p id={article.excerptId} className="hidden" aria-hidden="true">{article.excerpt}</p>
        <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
          <Clock className="w-3 h-3" />
          {article.time}
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="news" ref={containerRef} className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">最新动态</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">赛事资讯</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
            全部资讯 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:row-span-2">
            <NewsCard article={featured} featured />
          </div>
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <button className="w-full flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium py-3 border border-gray-800 rounded-xl hover:border-gray-700">
            查看全部资讯 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
