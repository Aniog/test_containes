import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, CheckCircle, Star, Trophy, BookOpen } from 'lucide-react';
import { LEVELS, TYPE_LABELS, DIFFICULTY_BG, PUZZLE_TYPES } from '@/data/puzzles';
import { cn } from '@/lib/utils';

const TYPE_ICONS = {
  standard: '⊞',
  diagonal: '✕',
  irregular: '⬡',
  window: '⊡',
  consecutive: '⊕',
};

const TYPE_COLORS = {
  standard: 'from-blue-600 to-blue-800',
  diagonal: 'from-purple-600 to-purple-800',
  irregular: 'from-emerald-600 to-emerald-800',
  window: 'from-indigo-600 to-indigo-800',
  consecutive: 'from-amber-600 to-amber-800',
};

const RULE_CARDS = [
  {
    type: PUZZLE_TYPES.STANDARD,
    title: '标准数独',
    icon: '⊞',
    color: 'border-blue-500',
    desc: '在9×9方格中，每行、每列、每个3×3宫格内填入1-9，每个数字只出现一次。',
  },
  {
    type: PUZZLE_TYPES.DIAGONAL,
    title: '对角线数独',
    icon: '✕',
    color: 'border-purple-500',
    desc: '在标准数独基础上，两条主对角线上的数字也必须各包含1-9。',
  },
  {
    type: PUZZLE_TYPES.IRREGULAR,
    title: '不规则数独',
    icon: '⬡',
    color: 'border-emerald-500',
    desc: '用不规则形状的区域代替标准3×3宫格，每行、每列、每个区域内填入1-9。',
  },
  {
    type: PUZZLE_TYPES.WINDOW,
    title: '窗口数独',
    icon: '⊡',
    color: 'border-indigo-500',
    desc: '在标准数独基础上，额外标注的4个窗口区域内的数字也必须各包含1-9。',
  },
  {
    type: PUZZLE_TYPES.CONSECUTIVE,
    title: '连续数独',
    icon: '⊕',
    color: 'border-amber-500',
    desc: '相邻格子间若有圆点标记，则两格数字必须连续（相差1）；无标记则不连续。',
  },
];

export default function LevelSelect() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState({});
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('sudoku-progress') || '{}');
    setProgress(saved);
  }, []);

  const isUnlocked = (level) => {
    if (level.id === 1) return true;
    return !!progress[`unlocked-${level.id}`];
  };

  const isCompleted = (level) => !!progress[level.id]?.completed;

  const getStars = (level) => {
    const p = progress[level.id];
    if (!p) return 0;
    if (p.hints === 0 && p.mistakes === 0) return 3;
    if (p.hints <= 1 && p.mistakes <= 2) return 2;
    return 1;
  };

  const completedCount = LEVELS.filter(l => isCompleted(l)).length;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 py-4">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">数独闯关</h1>
              <p className="text-slate-400 text-sm mt-0.5">小学乙组竞赛题型</p>
            </div>
            <button
              onClick={() => setShowRules(r => !r)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              规则
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-slate-400">总进度</span>
              <span className="text-slate-300 font-semibold">{completedCount} / {LEVELS.length}</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / LEVELS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rules panel */}
      {showRules && (
        <div className="bg-slate-800/80 border-b border-slate-700 px-4 py-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-white font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              题型说明
            </h2>
            <div className="space-y-2">
              {RULE_CARDS.map(rule => (
                <div key={rule.type} className={cn('rounded-xl p-3 bg-slate-700/50 border', rule.color)}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{rule.icon}</span>
                    <span className="text-white font-semibold text-sm">{rule.title}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Level grid */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {LEVELS.map(level => {
              const unlocked = isUnlocked(level);
              const completed = isCompleted(level);
              const stars = getStars(level);
              const p = progress[level.id];

              return (
                <button
                  key={level.id}
                  onClick={() => unlocked && navigate(`/game/${level.id}`)}
                  disabled={!unlocked}
                  className={cn(
                    'relative rounded-2xl p-4 text-left transition-all duration-200 border',
                    unlocked
                      ? completed
                        ? 'bg-slate-800 border-emerald-600 hover:border-emerald-400 hover:bg-slate-700'
                        : 'bg-slate-800 border-slate-600 hover:border-blue-500 hover:bg-slate-700'
                      : 'bg-slate-800/50 border-slate-700 opacity-50 cursor-not-allowed',
                  )}
                >
                  {/* Lock / Check icon */}
                  <div className="absolute top-3 right-3">
                    {!unlocked ? (
                      <Lock className="w-4 h-4 text-slate-500" />
                    ) : completed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : null}
                  </div>

                  {/* Type icon */}
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 bg-gradient-to-br',
                    TYPE_COLORS[level.type],
                  )}>
                    {TYPE_ICONS[level.type]}
                  </div>

                  {/* Level name */}
                  <div className="text-white font-bold text-sm">{level.name}</div>

                  {/* Type label */}
                  <div className="text-slate-400 text-xs mt-0.5">{TYPE_LABELS[level.type]}</div>

                  {/* Difficulty badge */}
                  <div className={cn('inline-block text-xs px-2 py-0.5 rounded-full mt-2', DIFFICULTY_BG[level.difficulty])}>
                    {level.difficulty}
                  </div>

                  {/* Stars */}
                  {completed && (
                    <div className="flex gap-0.5 mt-2">
                      {[1,2,3].map(i => (
                        <Star
                          key={i}
                          className={cn('w-3.5 h-3.5', i <= stars ? 'text-amber-400 fill-amber-400' : 'text-slate-600')}
                        />
                      ))}
                    </div>
                  )}

                  {/* Time if completed */}
                  {completed && p?.time && (
                    <div className="text-slate-500 text-xs mt-1 font-mono">
                      {Math.floor(p.time/60).toString().padStart(2,'0')}:{(p.time%60).toString().padStart(2,'0')}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Trophy section */}
          {completedCount === LEVELS.length && (
            <div className="mt-6 bg-gradient-to-r from-amber-900/50 to-yellow-900/50 border border-amber-600 rounded-2xl p-4 text-center">
              <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-amber-300 font-bold text-lg">全部完成！</div>
              <div className="text-amber-400/70 text-sm mt-1">你已完成所有关卡，太棒了！</div>
            </div>
          )}

          {/* Type legend */}
          <div className="mt-6 bg-slate-800 rounded-2xl p-4 border border-slate-700">
            <h3 className="text-slate-300 font-semibold text-sm mb-3">题型图例</h3>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(TYPE_LABELS).map(([type, label]) => (
                <div key={type} className="flex items-center gap-3">
                  <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br', TYPE_COLORS[type])}>
                    {TYPE_ICONS[type]}
                  </div>
                  <span className="text-slate-300 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
