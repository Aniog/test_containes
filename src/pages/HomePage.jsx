import { useGame, formatTime } from '../utils/gameContext';
import { Star, Clock, Trophy, RotateCcw, Grid3x3, Grid2x2, Puzzle, Calculator, Link2, ArrowUpDown } from 'lucide-react';

const GAME_MODES = [
  {
    id: 'sudoku-4',
    title: '四宫数独',
    subtitle: '4×4 标准数独',
    desc: '适合入门，4×4格子，数字1-4',
    icon: '🔢',
    color: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: '入门',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'sudoku-6',
    title: '六宫数独',
    subtitle: '6×6 标准数独',
    desc: '进阶挑战，6×6格子，数字1-6',
    icon: '🎯',
    color: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    badge: '进阶',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'sudoku-9',
    title: '九宫数独',
    subtitle: '9×9 标准数独',
    desc: '经典数独，9×9格子，数字1-9',
    icon: '🏆',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: '经典',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'greater-than',
    title: '大小数数独',
    subtitle: '六宫大小数数独',
    desc: '6×6格子，相邻格子有大小关系约束',
    icon: '⚖️',
    color: 'from-orange-400 to-red-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: '特殊',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'siamese',
    title: '连体数独',
    subtitle: '四宫连体数独',
    desc: '两个4×4数独共享一个区域',
    icon: '🔗',
    color: 'from-teal-400 to-cyan-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    badge: '创意',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    id: 'arithmetic',
    title: '加减数独',
    subtitle: '四宫加减数独',
    desc: '4×4格子，区域内数字满足加减运算',
    icon: '➕',
    color: 'from-pink-400 to-rose-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    badge: '运算',
    badgeColor: 'bg-pink-100 text-pink-700',
  },
];

const GAME_TYPE_LABELS = {
  'sudoku-4': '四宫数独',
  'sudoku-6': '六宫数独',
  'sudoku-9': '九宫数独',
  'greater-than-6': '大小数数独',
  'siamese-4': '连体数独',
  'arithmetic-4': '加减数独',
};

export default function HomePage({ onSelectGame }) {
  const { totalScore, gamesPlayed, bestTimes, resetStats } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">数独训练营</h1>
              <p className="text-sm text-slate-500 mt-0.5">六种数独模式，挑战自我</p>
            </div>
            <div className="text-3xl">🧩</div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4">
        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs text-slate-500">总积分</span>
              </div>
              <div className="text-xl font-bold text-amber-600">{totalScore.toLocaleString()}</div>
            </div>
            <div className="text-center border-x border-slate-100">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Trophy className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-500">完成局数</span>
              </div>
              <div className="text-xl font-bold text-blue-600">{gamesPlayed}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-xs text-slate-500">最佳记录</span>
              </div>
              <div className="text-xl font-bold text-green-600">
                {Object.keys(bestTimes).length > 0
                  ? formatTime(Math.min(...Object.values(bestTimes)))
                  : '--:--'}
              </div>
            </div>
          </div>
        </div>

        {/* Best Times */}
        {Object.keys(bestTimes).length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-5">
            <h3 className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-1">
              <Trophy className="w-4 h-4 text-amber-500" />
              最佳用时记录
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(bestTimes).map(([key, time]) => (
                <div key={key} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
                  <span className="text-xs text-slate-600">{GAME_TYPE_LABELS[key] || key}</span>
                  <span className="text-xs font-bold text-blue-600 font-mono">{formatTime(time)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Game Mode Grid */}
        <h2 className="text-base font-semibold text-slate-700 mb-3">选择游戏模式</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {GAME_MODES.map(mode => (
            <button
              key={mode.id}
              onClick={() => onSelectGame(mode.id)}
              className={`${mode.bg} ${mode.border} border rounded-2xl p-4 text-left hover:shadow-md transition-all active:scale-95 group`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{mode.icon}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${mode.badgeColor}`}>
                  {mode.badge}
                </span>
              </div>
              <div className="font-bold text-slate-800 text-base">{mode.title}</div>
              <div className="text-xs text-slate-500 mt-0.5">{mode.subtitle}</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">{mode.desc}</div>
              {bestTimes[mode.id === 'sudoku-4' ? 'sudoku-4' :
                         mode.id === 'sudoku-6' ? 'sudoku-6' :
                         mode.id === 'sudoku-9' ? 'sudoku-9' :
                         mode.id === 'greater-than' ? 'greater-than-6' :
                         mode.id === 'siamese' ? 'siamese-4' : 'arithmetic-4'] && (
                <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  最佳: {formatTime(bestTimes[
                    mode.id === 'sudoku-4' ? 'sudoku-4' :
                    mode.id === 'sudoku-6' ? 'sudoku-6' :
                    mode.id === 'sudoku-9' ? 'sudoku-9' :
                    mode.id === 'greater-than' ? 'greater-than-6' :
                    mode.id === 'siamese' ? 'siamese-4' : 'arithmetic-4'
                  ])}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Reset Stats */}
        {(totalScore > 0 || gamesPlayed > 0) && (
          <div className="text-center">
            <button
              onClick={() => {
                if (window.confirm('确定要重置所有积分和记录吗？')) resetStats();
              }}
              className="text-xs text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1 mx-auto"
            >
              <RotateCcw className="w-3 h-3" />
              重置所有记录
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
