import { Link } from 'react-router-dom';
import { topScorers } from '../../data/worldcup';
import { ArrowRight, Target } from 'lucide-react';

const TopScorers = () => (
  <section className="py-16 md:py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">射手榜</h2>
          <p className="text-gray-500 mt-1">本届世界杯进球排行</p>
        </div>
        <Link
          to="/standings"
          className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
        >
          查看全部 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 text-xs text-gray-500 uppercase tracking-wider px-6 py-3 border-b border-gray-800">
          <span className="col-span-1">#</span>
          <span className="col-span-5">球员</span>
          <span className="col-span-3 text-center">球队</span>
          <span className="col-span-2 text-center">进球</span>
          <span className="col-span-1 text-center">助攻</span>
        </div>

        {topScorers.map((scorer, idx) => (
          <div
            key={scorer.rank}
            className={`grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-gray-900 ${
              idx < topScorers.length - 1 ? 'border-b border-gray-800/50' : ''
            }`}
          >
            <div className="col-span-1">
              {scorer.rank <= 3 ? (
                <span className={`text-lg font-black ${
                  scorer.rank === 1 ? 'text-yellow-400' :
                  scorer.rank === 2 ? 'text-gray-300' : 'text-amber-600'
                }`}>
                  {scorer.rank === 1 ? '🥇' : scorer.rank === 2 ? '🥈' : '🥉'}
                </span>
              ) : (
                <span className="text-gray-600 font-semibold">{scorer.rank}</span>
              )}
            </div>
            <div className="col-span-5">
              <span className="text-white font-semibold text-sm">{scorer.name}</span>
            </div>
            <div className="col-span-3 flex items-center justify-center gap-1.5">
              <span className="text-lg">{scorer.flag}</span>
              <span className="text-gray-400 text-sm">{scorer.team}</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="text-yellow-400 font-black text-lg">{scorer.goals}</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="text-green-400 font-semibold text-sm">{scorer.assists}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TopScorers;
