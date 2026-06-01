import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 'news-summer-sale',
    titleId: 'news-summer-sale-title',
    descId: 'news-summer-sale-desc',
    imgId: 'news-img-summersale-h1i2j3',
    title: 'Steam Summer Sale 2025 Is Live',
    desc: 'Thousands of games discounted up to 90%. Explore deals on AAA titles, indie favorites, and everything in between.',
    date: 'June 1, 2025',
    category: 'Sales',
    categoryColor: 'bg-green-600',
  },
  {
    id: 'news-deck',
    titleId: 'news-deck-title',
    descId: 'news-deck-desc',
    imgId: 'news-img-steamdeck-k4l5m6',
    title: 'Steam Deck OLED: Next-Gen Handheld Gaming',
    desc: 'Valve unveils the new Steam Deck OLED with a stunning display, longer battery life, and improved performance.',
    date: 'May 28, 2025',
    category: 'Hardware',
    categoryColor: 'bg-[#1a9fff]',
  },
  {
    id: 'news-workshop',
    titleId: 'news-workshop-title',
    descId: 'news-workshop-desc',
    imgId: 'news-img-workshop-n7o8p9',
    title: 'Steam Workshop Hits 1 Billion Mod Downloads',
    desc: 'The Steam Workshop community celebrates a massive milestone with over one billion mod downloads across all supported games.',
    date: 'May 20, 2025',
    category: 'Community',
    categoryColor: 'bg-purple-600',
  },
];

export default function News() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="news" className="py-20 px-4 md:px-8 bg-[#0f1923]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-start justify-between flex-wrap gap-4">
          <div>
            <span className="text-[#1a9fff] text-sm font-semibold uppercase tracking-widest">Latest</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Steam News</h2>
            <p className="text-[#8f98a0] mt-2">Stay up to date with the latest from the Steam universe.</p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[#1a9fff] hover:text-[#66c0f4] text-sm font-medium transition">
            View all news <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-[#16202d] border border-[#2a475e] rounded-xl overflow-hidden hover:border-[#1a9fff] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 bg-[#1b2838]"
                />
                <span className={`absolute top-3 left-3 ${item.categoryColor} text-white text-xs font-semibold px-2.5 py-1 rounded`}>
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[#8f98a0] text-xs mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 id={item.titleId} className="text-white font-semibold text-base mb-2 group-hover:text-[#66c0f4] transition">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#8f98a0] text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#1a9fff] text-sm font-medium group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
