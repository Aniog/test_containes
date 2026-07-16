import { topScorers, stats } from '@/data/worldcup';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function TopScorers() {
  return (
    <section className="py-16 md:py-20 bg-[#0d1526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Scorers Table */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">进球榜</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">射手排行</h2>
            </div>

            <div className="bg-[#0a0e1a] border border-gray-700/50 rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 px-5 py-3 border-b border-gray-700/50">
                <div className="col-span-1 text-gray-500 text-xs font-semibold">#</div>
                <div className="col-span-7 text-gray-500 text-xs font-semibold">球员</div>
                <div className="col-span-2 text-gray-500 text-xs font-semibold text-center">国家</div>
                <div className="col-span-2 text-gray-500 text-xs font-semibold text-right">进球</div>
              </div>

              {/* Rows */}
              {topScorers.map((player, idx) => (
                <div
                  key={player.rank}
                  className={`grid grid-cols-12 gap-2 px-5 py-4 items-center transition-colors hover:bg-white/3 ${
                    idx < topScorers.length - 1 ? 'border-b border-gray-800/50' : ''
                  }`}
                >
                  <div className="col-span-1">
                    {player.rank <= 3 ? (
                      <span className={`text-sm font-black ${
                        player.rank === 1 ? 'text-[#ffd700]' :
                        player.rank === 2 ? 'text-gray-300' :
                        'text-[#cd7f32]'
                      }`}>
                        {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}
                      </span>
                    ) : (
                      <span className="text-gray-500 text-sm font-semibold">{player.rank}</span>
                    )}
                  </div>
                  <div className="col-span-7 flex items-center gap-3">
                    <span className="text-xl">{player.flag}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{player.nameZh}</div>
                      <div className="text-gray-500 text-xs">{player.name}</div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-gray-400 text-xs">{player.country}</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="text-[#f5a623] font-black text-lg">{player.goals}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tournament Stats */}
          <div>
            <div className="mb-8">
              <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">赛事数据</div>
              <h2 className="text-3xl font-bold text-white">本届统计</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0a0e1a] border border-gray-700/50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f5a623]/15 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <div className="text-gray-400 text-sm">总进球数</div>
                </div>
                <div className="text-4xl font-black text-white">{stats.totalGoals}</div>
                <div className="text-gray-500 text-xs mt-1">场均 {stats.avgGoalsPerMatch} 球</div>
              </div>

              <div className="bg-[#0a0e1a] border border-gray-700/50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#e63946]/15 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#e63946]" />
                  </div>
                  <div className="text-gray-400 text-sm">黄红牌</div>
                </div>
                <div className="text-4xl font-black text-white">{stats.totalCards}</div>
                <div className="text-gray-500 text-xs mt-1">点球 {stats.totalPenalties} 次</div>
              </div>

              <div className="bg-[#0a0e1a] border border-gray-700/50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#2ecc71]/15 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#2ecc71]" />
                  </div>
                  <div className="text-gray-400 text-sm">最大比分差</div>
                </div>
                <div className="text-xl font-black text-white">{stats.biggestWin}</div>
                <div className="text-gray-500 text-xs mt-1">单场最多 {stats.mostGoalsInMatch} 球</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
