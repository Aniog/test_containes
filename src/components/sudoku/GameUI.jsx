import { formatTime } from '../../utils/gameContext';
import { Clock, Star, RefreshCw, ChevronLeft, Lightbulb } from 'lucide-react';

export function GameHeader({ title, seconds, score, errors, onRefresh, onBack, onHint, difficulty }) {
  return (
    <div className="bg-white shadow-sm border-b border-slate-200 px-3 py-2">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors p-1"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">返回</span>
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-base font-bold text-slate-800">{title}</h1>
          {difficulty && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              difficulty === 'easy' ? 'bg-green-100 text-green-700' :
              difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {difficulty === 'easy' ? '简单' : difficulty === 'medium' ? '中等' : '困难'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onHint && (
            <button
              onClick={onHint}
              className="p-1.5 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors"
              title="提示"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onRefresh}
            className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            title="刷新"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-1.5 max-w-lg mx-auto">
        <div className="flex items-center gap-1 text-slate-600">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-sm font-mono font-semibold">{formatTime(seconds)}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-600">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span className="text-sm font-semibold">{score}</span>
        </div>
        {errors > 0 && (
          <div className="flex items-center gap-1 text-red-500">
            <span className="text-xs">错误:</span>
            <span className="text-sm font-semibold">{errors}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function NumberPad({ maxNum, onNumber, onErase, selectedNum }) {
  const nums = Array.from({ length: maxNum }, (_, i) => i + 1);
  return (
    <div className="flex flex-wrap justify-center gap-2 p-3">
      {nums.map(n => (
        <button
          key={n}
          onClick={() => onNumber(n)}
          className={`num-pad-btn w-10 h-10 text-lg ${selectedNum === n ? 'bg-blue-500 text-white border-blue-500' : ''}`}
        >
          {n}
        </button>
      ))}
      <button
        onClick={onErase}
        className="num-pad-btn px-3 h-10 text-sm text-red-500 border-red-200 hover:bg-red-500 hover:text-white hover:border-red-500"
      >
        清除
      </button>
    </div>
  );
}

export function WinModal({ show, score, time, errors, onPlayAgain, onBack, gameType }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center celebrate">
        <div className="text-5xl mb-3">🎉</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">恭喜完成！</h2>
        <p className="text-slate-500 text-sm mb-4">{gameType}</p>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-amber-50 rounded-xl p-3">
            <div className="text-2xl font-bold text-amber-600">{score}</div>
            <div className="text-xs text-slate-500 mt-0.5">积分</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-3">
            <div className="text-2xl font-bold text-blue-600">{formatTime(time)}</div>
            <div className="text-xs text-slate-500 mt-0.5">用时</div>
          </div>
          <div className="bg-green-50 rounded-xl p-3">
            <div className="text-2xl font-bold text-green-600">{errors}</div>
            <div className="text-xs text-slate-500 mt-0.5">错误</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
          >
            返回主页
          </button>
          <button
            onClick={onPlayAgain}
            className="flex-1 py-2.5 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            再来一局
          </button>
        </div>
      </div>
    </div>
  );
}

export function DifficultySelector({ onSelect }) {
  const levels = [
    { key: 'easy', label: '简单', color: 'bg-green-500', desc: '适合入门' },
    { key: 'medium', label: '中等', color: 'bg-yellow-500', desc: '挑战自我' },
    { key: 'hard', label: '困难', color: 'bg-red-500', desc: '高手专属' },
  ];
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold text-slate-800 text-center mb-4">选择难度</h2>
        <div className="flex flex-col gap-3">
          {levels.map(l => (
            <button
              key={l.key}
              onClick={() => onSelect(l.key)}
              className={`${l.color} text-white rounded-xl py-3 px-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
            >
              <span className="font-bold text-lg">{l.label}</span>
              <span className="text-sm opacity-80">{l.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
