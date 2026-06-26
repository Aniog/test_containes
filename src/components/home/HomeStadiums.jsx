import { MapPin } from 'lucide-react';
import { stadiums } from '../../data/worldcup';

const HomeStadiums = () => (
  <section className="py-16 md:py-24 bg-[#111827]">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-[#f5c518]" />
          <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">赛事场馆</span>
        </div>
        <h2 className="text-3xl font-bold text-white">举办城市与球场</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stadiums.map((stadium) => (
          <div
            key={stadium.name}
            className="bg-[#1a2235] border border-[#2a3550] rounded-2xl p-5 card-hover"
          >
            <div className="text-3xl mb-3">{stadium.flag}</div>
            <h3 className="text-white font-semibold text-sm mb-1">{stadium.name}</h3>
            <p className="text-slate-500 text-xs mb-3">{stadium.city}, {stadium.country}</p>
            <div className="flex items-center gap-1.5 text-[#f5c518]">
              <span className="text-xs font-semibold">{stadium.capacity.toLocaleString()}</span>
              <span className="text-slate-600 text-xs">座位</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeStadiums;
