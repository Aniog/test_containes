import { useState } from 'react';
import { LEVELS, COLORS } from '../data/levels';

const LEVEL_STARS = [3, 2, 3, 1, 0]; // mock star ratings

export default function LevelSelect({ onSelectLevel, completedLevels }) {
  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 py-8" style={{ backgroundColor: '#F0EBE3', fontFamily: "'PingFang SC', 'Hiragino Sans GB', sans-serif" }}>
      {/* Header */}
      <div className="w-full max-w-md mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-4xl">🐱</span>
          <h1 className="text-3xl font-bold" style={{ color: '#5A3A2A' }}>猫咪数独</h1>
        </div>
        <p className="text-center text-sm" style={{ color: '#9A7A6A' }}>放置猫咪，解开谜题</p>
      </div>

      {/* Rules Card */}
      <div className="w-full max-w-md rounded-2xl p-5 mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.7)', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        <h3 className="font-bold text-base mb-3" style={{ color: '#5A3A2A' }}>游戏规则</h3>
        <div className="flex flex-col gap-2">
          {[
            { icon: '🎨', text: '每种颜色区域放置一只猫' },
            { icon: '↔️', text: '每行每列只能有一只猫' },
            { icon: '🚫', text: '猫咪之间不能相邻（含对角线）' },
            { icon: '👆', text: '点击一次标记✕，再次点击放猫' },
          ].map((rule, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-lg">{rule.icon}</span>
              <span className="text-sm" style={{ color: '#7A5C4A' }}>{rule.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Level Grid */}
      <div className="w-full max-w-md">
        <h3 className="font-bold text-base mb-3" style={{ color: '#5A3A2A' }}>选择关卡</h3>
        <div className="grid grid-cols-1 gap-3">
          {LEVELS.map((level, idx) => {
            const isCompleted = completedLevels.includes(level.id);
            const isLocked = idx > 0 && !completedLevels.includes(LEVELS[idx - 1].id);
            const stars = isCompleted ? LEVEL_STARS[idx] : 0;

            return (
              <button
                key={level.id}
                onClick={() => !isLocked && onSelectLevel(level)}
                className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all duration-150 active:scale-98"
                style={{
                  backgroundColor: isLocked ? 'rgba(200,190,180,0.4)' : 'rgba(255,255,255,0.8)',
                  boxShadow: isLocked ? 'none' : '0 2px 12px rgba(0,0,0,0.08)',
                  border: 'none',
                  opacity: isLocked ? 0.6 : 1,
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                }}
              >
                {/* Level number */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{
                    backgroundColor: isCompleted ? '#6BBF6B' : isLocked ? '#C0B0A0' : '#E8748A',
                    color: 'white',
                  }}
                >
                  {isLocked ? '🔒' : level.id}
                </div>

                {/* Level info */}
                <div className="flex-1 text-left">
                  <div className="font-bold text-base" style={{ color: '#5A3A2A' }}>
                    第 {level.id} 关
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#9A7A6A' }}>
                    {level.size}×{level.size} · {level.colors.length} 种颜色
                  </div>
                  {isCompleted && (
                    <div className="flex gap-0.5 mt-1">
                      {[1,2,3].map(s => (
                        <span key={s} className="text-sm">{s <= stars ? '⭐' : '☆'}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Color preview */}
                <div className="flex gap-1 flex-wrap justify-end" style={{ maxWidth: '80px' }}>
                  {level.colors.slice(0, 6).map(c => (
                    <div
                      key={c}
                      className="w-4 h-4 rounded-sm"
                      style={{ backgroundColor: COLORS[c].bg }}
                    />
                  ))}
                </div>

                {!isLocked && (
                  <span className="text-lg" style={{ color: '#C0A090' }}>›</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs" style={{ color: '#B0A090' }}>🐾 猫咪数独 · 益智解谜</p>
      </div>
    </div>
  );
}
