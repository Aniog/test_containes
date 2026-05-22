import { useState } from 'react';
import { MapPin, Users } from 'lucide-react';

const cities = [
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '纽约/新泽西',
    stadium: '大都会人寿球场',
    capacity: '82500',
    matches: '8场（含决赛）',
    tag: '决赛场地',
    tagColor: 'bg-amber-400 text-black',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '洛杉矶',
    stadium: 'SoFi球场',
    capacity: '70240',
    matches: '8场',
    tag: '重点赛场',
    tagColor: 'bg-blue-500 text-white',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '达拉斯',
    stadium: 'AT&T球场',
    capacity: '80000',
    matches: '8场',
    tag: '重点赛场',
    tagColor: 'bg-blue-500 text-white',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '旧金山湾区',
    stadium: '李维斯球场',
    capacity: '68500',
    matches: '7场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '迈阿密',
    stadium: '硬石球场',
    capacity: '65326',
    matches: '7场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '西雅图',
    stadium: '流明球场',
    capacity: '69000',
    matches: '7场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '波士顿',
    stadium: '吉列球场',
    capacity: '65878',
    matches: '7场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '亚特兰大',
    stadium: '梅赛德斯-奔驰球场',
    capacity: '71000',
    matches: '7场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '堪萨斯城',
    stadium: '箭头球场',
    capacity: '76416',
    matches: '6场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '费城',
    stadium: '林肯金融球场',
    capacity: '69796',
    matches: '6场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇺🇸',
    countryCode: 'USA',
    city: '休斯顿',
    stadium: 'NRG球场',
    capacity: '72220',
    matches: '6场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇲🇽',
    countryCode: 'MEX',
    city: '墨西哥城',
    stadium: '阿兹特克球场',
    capacity: '87523',
    matches: '5场（含揭幕战）',
    tag: '揭幕战场地',
    tagColor: 'bg-green-500 text-white',
  },
  {
    country: '🇲🇽',
    countryCode: 'MEX',
    city: '瓜达拉哈拉',
    stadium: 'Akron球场',
    capacity: '49850',
    matches: '4场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇲🇽',
    countryCode: 'MEX',
    city: '蒙特雷',
    stadium: 'BBVA球场',
    capacity: '53500',
    matches: '4场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇨🇦',
    countryCode: 'CAN',
    city: '多伦多',
    stadium: 'BMO球场',
    capacity: '45736',
    matches: '6场',
    tag: '',
    tagColor: '',
  },
  {
    country: '🇨🇦',
    countryCode: 'CAN',
    city: '温哥华',
    stadium: 'BC Place球场',
    capacity: '54500',
    matches: '6场',
    tag: '',
    tagColor: '',
  },
];

const filters = ['全部', '🇺🇸 美国', '🇲🇽 墨西哥', '🇨🇦 加拿大'];
const filterMap = { '全部': null, '🇺🇸 美国': 'USA', '🇲🇽 墨西哥': 'MEX', '🇨🇦 加拿大': 'CAN' };

export default function HostCities() {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filtered = activeFilter === '全部'
    ? cities
    : cities.filter((c) => c.countryCode === filterMap[activeFilter]);

  return (
    <section id="cities" className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            举办城市
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            16座<span className="text-amber-400">世界杯城市</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从墨西哥城到温哥华，从纽约到洛杉矶，16座城市共同构成这届世界杯的壮阔版图。
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-amber-400 text-black'
                  : 'bg-white/5 text-slate-300 border border-gray-700 hover:border-amber-400/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((city) => (
            <div
              key={`${city.city}-${city.stadium}`}
              className="bg-[#1a2035] border border-gray-700/50 rounded-xl p-5 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{city.country}</span>
                    <h3 className="text-white font-bold text-base">{city.city}</h3>
                  </div>
                  <p className="text-slate-400 text-xs">{city.stadium}</p>
                </div>
                {city.tag && (
                  <span className={`${city.tagColor} text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2`}>
                    {city.tag}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-700/50">
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <Users className="w-3 h-3" />
                  <span>{Number(city.capacity).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>{city.matches}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { label: '美国城市', value: '11', flag: '🇺🇸' },
            { label: '墨西哥城市', value: '3', flag: '🇲🇽' },
            { label: '加拿大城市', value: '2', flag: '🇨🇦' },
          ].map((item) => (
            <div key={item.label} className="text-center bg-[#1a2035] rounded-xl p-4 border border-gray-700/50">
              <div className="text-2xl mb-1">{item.flag}</div>
              <div className="text-2xl font-black text-amber-400">{item.value}</div>
              <div className="text-slate-400 text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
