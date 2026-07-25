import { useState } from 'react';
import { Clock, ChevronRight } from 'lucide-react';

const tabs = ['全部', '直播', '今日', '即将开赛'];

const matches = [
  {
    id: 1,
    league: 'A组',
    leagueShort: 'A',
    status: 'live',
    minute: "67'",
    homeTeam: '巴西',
    homeFlag: '🇧🇷',
    homeScore: 2,
    awayTeam: '塞尔维亚',
    awayFlag: '🇷🇸',
    awayScore: 0,
    stadium: '卢萨尔体育场',
  },
  {
    id: 2,
    league: 'B组',
    leagueShort: 'B',
    status: 'live',
    minute: "45+1'",
    homeTeam: '阿根廷',
    homeFlag: '🇦🇷',
    homeScore: 1,
    awayTeam: '墨西哥',
    awayFlag: '🇲🇽',
    awayScore: 1,
    stadium: '艾哈迈德·本·阿里体育场',
  },
  {
    id: 3,
    league: 'C组',
    leagueShort: 'C',
    status: 'today',
    minute: '20:00',
    homeTeam: '法国',
    homeFlag: '🇫🇷',
    homeScore: null,
    awayTeam: '澳大利亚',
    awayFlag: '🇦🇺',
    awayScore: null,
    stadium: '教育城体育场',
  },
  {
    id: 4,
    league: 'D组',
    leagueShort: 'D',
    status: 'today',
    minute: '23:00',
    homeTeam: '英格兰',
    homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    homeScore: null,
    awayTeam: '伊朗',
    awayFlag: '🇮🇷',
    awayScore: null,
    stadium: '哈利法国际体育场',
  },
  {
    id: 5,
    league: 'E组',
    leagueShort: 'E',
    status: 'upcoming',
    minute: '明日 20:00',
    homeTeam: '西班牙',
    homeFlag: '🇪🇸',
    homeScore: null,
    awayTeam: '哥斯达黎加',
    awayFlag: '🇨🇷',
    awayScore: null,
    stadium: '阿尔图玛玛体育场',
  },
  {
    id: 6,
    league: 'F组',
    leagueShort: 'F',
    status: 'upcoming',
    minute: '明日 23:00',
    homeTeam: '德国',
    homeFlag: '🇩🇪',
    homeScore: null,
    awayTeam: '日本',
    awayFlag: '🇯🇵',
    awayScore: null,
    stadium: '哈利法国际体育场',
  },
];

const groupColors = {
  A: 'bg-yellow-500',
  B: 'bg-orange-500',
  C: 'bg-blue-500',
  D: 'bg-red-500',
  E: 'bg-purple-500',
  F: 'bg-green-500',
};

const tabMap = { '全部': 'all', '直播': 'live', '今日': 'today', '即将开赛': 'upcoming' };

function MatchCard({ match }) {
  const isLive = match.status === 'live';
  const hasScore = match.homeScore !== null;

  return (
    <div className="bg-gray-900 border border-gray-800 hover:border-yellow-500/40 rounded-xl p-4 transition-all duration-200 cursor-pointer group">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded text-[10px] font-black flex items-center justify-center text-gray-950 ${groupColors[match.leagueShort] || 'bg-gray-500'}`}>
            {match.leagueShort}
          </span>
          <span className="text-xs text-gray-500 font-medium">世界杯 {match.league}</span>
        </div>
        {isLive ? (
          <span className="flex items-center gap-1 text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            {match.minute}
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {match.minute}
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 text-right">
          <div className="text-lg mb-0.5">{match.homeFlag}</div>
          <div className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">{match.homeTeam}</div>
        </div>

        <div className="flex items-center gap-2 min-w-[80px] justify-center">
          {hasScore ? (
            <>
              <span className={`text-2xl font-black ${isLive ? 'text-white' : 'text-gray-400'}`}>{match.homeScore}</span>
              <span className="text-gray-600 font-bold">–</span>
              <span className={`text-2xl font-black ${isLive ? 'text-white' : 'text-gray-400'}`}>{match.awayScore}</span>
            </>
          ) : (
            <span className="text-gray-600 font-bold text-sm">VS</span>
          )}
        </div>

        <div className="flex-1 text-left">
          <div className="text-lg mb-0.5">{match.awayFlag}</div>
          <div className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">{match.awayTeam}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
        <span className="text-xs text-gray-600">{match.stadium}</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-yellow-500 transition-colors" />
      </div>
    </div>
  );
}

export default function MatchesSection() {
  const [activeTab, setActiveTab] = useState('全部');

  const filtered = matches.filter((m) => {
    const key = tabMap[activeTab];
    if (key === 'all') return true;
    return m.status === key;
  });

  return (
    <section id="matches" className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">小组赛阶段</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">今日赛程</h2>
          </div>
          <div className="flex items-center gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  activeTab === tab
                    ? 'bg-yellow-500 text-gray-950 shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
                {tab === '直播' && (
                  <span className="ml-1.5 w-1.5 h-1.5 bg-red-500 rounded-full inline-block animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            <p className="text-lg font-semibold">暂无比赛</p>
            <p className="text-sm mt-1">请切换其他筛选条件</p>
          </div>
        )}
      </div>
    </section>
  );
}
