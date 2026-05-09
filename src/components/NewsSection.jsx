import { Calendar, ArrowRight, Flame } from 'lucide-react';
import { NEWS } from '../data/gameData';

const platformBadgeStyle = {
  steam: 'bg-blue-50 text-[#1b6fa8] border border-[#1b6fa8]/30',
  epic: 'bg-blue-50 text-[#0060c0] border border-[#0060c0]/30',
  nintendo: 'bg-red-50 text-[#c0000d] border border-[#c0000d]/30',
  playstation: 'bg-blue-50 text-[#0058a8] border border-[#0058a8]/30',
  xbox: 'bg-green-50 text-[#107c10] border border-[#107c10]/30',
};

const platformLabel = {
  steam: 'Steam',
  epic: 'Epic Games',
  nintendo: 'Nintendo',
  playstation: 'PlayStation',
  xbox: 'Xbox',
};

const platformAccentBorder = {
  steam: 'hover:border-[#1b6fa8]/40',
  epic: 'hover:border-[#0060c0]/40',
  nintendo: 'hover:border-[#c0000d]/40',
  playstation: 'hover:border-[#0058a8]/40',
  xbox: 'hover:border-[#107c10]/40',
};

function NewsCard({ item }) {
  return (
    <article
      className={`group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100/60 ${platformAccentBorder[item.platform]}`}
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {item.hot && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            <Flame className="w-3 h-3" /> HOT
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${platformBadgeStyle[item.platform]}`}>
            {platformLabel[item.platform]}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {item.tag}
          </span>
        </div>
        <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
          {item.summary}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </div>
          <span className="text-green-600 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function NewsSection({ activePlatform, searchQuery }) {
  const filtered = NEWS.filter(n => {
    const matchPlatform = activePlatform === 'all' || n.platform === activePlatform;
    const matchSearch = !searchQuery || 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlatform && matchSearch;
  });

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-gray-900 text-xl font-bold">Latest News</h2>
          <p className="text-gray-500 text-sm mt-0.5">{filtered.length} articles found</p>
        </div>
        <button className="text-green-600 text-sm font-medium flex items-center gap-1 hover:text-green-700 transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">No news found</p>
          <p className="text-sm mt-1">Try a different platform or search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
