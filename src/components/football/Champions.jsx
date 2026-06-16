import { Trophy } from 'lucide-react';

const champions = [
  { country: '巴西', flag: '🇧🇷', wins: 5, years: ['1958', '1962', '1970', '1994', '2002'] },
  { country: '德国', flag: '🇩🇪', wins: 4, years: ['1954', '1974', '1990', '2014'] },
  { country: '意大利', flag: '🇮🇹', wins: 4, years: ['1934', '1938', '1982', '2006'] },
  { country: '阿根廷', flag: '🇦🇷', wins: 3, years: ['1978', '1986', '2022'] },
  { country: '法国', flag: '🇫🇷', wins: 2, years: ['1998', '2018'] },
  { country: '乌拉圭', flag: '🇺🇾', wins: 2, years: ['1930', '1950'] },
  { country: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', wins: 1, years: ['1966'] },
  { country: '西班牙', flag: '🇪🇸', wins: 1, years: ['2010'] },
];

export default function Champions() {
  return (
    <section id="champions" className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-400 text-gray-950 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            荣誉殿堂
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">历届冠军榜</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            这些国家在世界杯历史上留下了最辉煌的印记，每一座奖杯都是无数球员汗水与荣耀的结晶。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {champions.map((c, i) => (
            <div
              key={c.country}
              className={`bg-gray-800 rounded-2xl p-6 border transition-colors hover:border-yellow-400 ${
                i === 0 ? 'border-yellow-400' : 'border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{c.flag}</span>
                {i === 0 && (
                  <span className="bg-yellow-400 text-gray-950 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Trophy className="w-3 h-3" /> 最多
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{c.country}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-black text-yellow-400">{c.wins}</span>
                <span className="text-sm text-gray-400">次冠军</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {c.years.map((y) => (
                  <span
                    key={y}
                    className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full"
                  >
                    {y}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
