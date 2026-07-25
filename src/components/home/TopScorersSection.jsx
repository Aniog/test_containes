import { Target } from 'lucide-react';

const scorers = [
  { rank: 1, name: '姆巴佩', team: '法国', flag: '🇫🇷', goals: 5, assists: 3, apps: 4, imgId: 'scorer-mbappe-a1b2c3', titleId: 'scorer-1-name', teamId: 'scorer-1-team' },
  { rank: 2, name: '梅西', team: '阿根廷', flag: '🇦🇷', goals: 4, assists: 5, apps: 4, imgId: 'scorer-messi-d4e5f6', titleId: 'scorer-2-name', teamId: 'scorer-2-team' },
  { rank: 3, name: 'C罗', team: '葡萄牙', flag: '🇵🇹', goals: 4, assists: 1, apps: 4, imgId: 'scorer-ronaldo-g7h8i9', titleId: 'scorer-3-name', teamId: 'scorer-3-team' },
  { rank: 4, name: '恩里克', team: '巴西', flag: '🇧🇷', goals: 3, assists: 2, apps: 3, imgId: 'scorer-richarlison-j1k2l3', titleId: 'scorer-4-name', teamId: 'scorer-4-team' },
  { rank: 5, name: '穆勒', team: '德国', flag: '🇩🇪', goals: 3, assists: 4, apps: 3, imgId: 'scorer-muller-m4n5o6', titleId: 'scorer-5-name', teamId: 'scorer-5-team' },
];

const maxGoals = scorers[0].goals;

export default function TopScorersSection() {
  return (
    <section id="scorers" className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div>
            <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">FIFA 世界杯 2026</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">射手榜</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              本届世界杯进球最多的球员排名，追踪进球数、助攻数与出场次数。
            </p>

            {/* Top scorer highlight */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">金靴奖领跑者</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-black text-white">{scorers[0].name}</div>
                  <div className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                    <span>{scorers[0].flag}</span>
                    {scorers[0].team}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-black text-yellow-500">{scorers[0].goals}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">进球</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scorers list */}
          <div className="flex flex-col gap-3">
            {scorers.map((scorer) => (
              <div
                key={scorer.rank}
                className="bg-gray-900 border border-gray-800 hover:border-yellow-500/40 rounded-xl p-4 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-black w-6 text-center ${scorer.rank === 1 ? 'text-yellow-400' : 'text-gray-600'}`}>
                    {scorer.rank}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{scorer.flag}</span>
                      <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors truncate">
                        {scorer.name}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{scorer.team}</div>

                    <div className="mt-2 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                        style={{ width: `${(scorer.goals / maxGoals) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right shrink-0">
                    <div>
                      <div className="text-xl font-black text-white">{scorer.goals}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider">进球</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold text-gray-400">{scorer.assists}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider">助攻</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold text-gray-400">{scorer.apps}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider">出场</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
