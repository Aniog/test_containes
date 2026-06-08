import React from 'react';
import TargetRing from './TargetRing';

const buildings = [
  {
    id: 'castle',
    label: '城堡',
    emoji: '🏰',
    color: '#d4b87a',
    roofColor: '#e05a3a',
    style: { top: '20%', left: '5%', width: 140, height: 150 },
    ringSize: 100,
    zIndex: 6,
  },
  {
    id: 'church',
    label: '教堂',
    emoji: '⛪',
    color: '#d4c4a8',
    roofColor: '#c87060',
    style: { top: '16%', right: '8%', width: 108, height: 118 },
    ringSize: 82,
    zIndex: 5,
  },
  {
    id: 'tent',
    label: '营地',
    emoji: '⛺',
    color: '#c4b488',
    roofColor: '#8fad6a',
    style: { top: '40%', left: '32%', width: 96, height: 100 },
    ringSize: 74,
    zIndex: 7,
  },
  {
    id: 'barn',
    label: '谷仓',
    emoji: '🏚',
    color: '#c4a070',
    roofColor: '#d04030',
    style: { top: '60%', left: '3%', width: 118, height: 122 },
    ringSize: 86,
    zIndex: 4,
  },
  {
    id: 'wagon',
    label: '马车',
    emoji: '🎠',
    color: '#c0a878',
    roofColor: '#c83030',
    style: { top: '58%', left: '40%', width: 112, height: 116 },
    ringSize: 84,
    zIndex: 5,
  },
];

const trees = [
  { id: 't1', style: { top: '30%', left: '28%' }, size: 28 },
  { id: 't2', style: { top: '35%', left: '32%' }, size: 22 },
  { id: 't3', style: { top: '55%', left: '22%' }, size: 30 },
  { id: 't4', style: { top: '58%', left: '28%' }, size: 24 },
  { id: 't5', style: { top: '25%', left: '55%' }, size: 26 },
  { id: 't6', style: { top: '20%', left: '60%' }, size: 20 },
  { id: 't7', style: { top: '48%', right: '8%' }, size: 28 },
  { id: 't8', style: { top: '52%', right: '14%' }, size: 22 },
  { id: 't9', style: { top: '70%', left: '18%' }, size: 32 },
  { id: 't10', style: { top: '72%', right: '5%' }, size: 26 },
  { id: 't11', style: { top: '15%', left: '42%' }, size: 18 },
  { id: 't12', style: { top: '78%', left: '35%' }, size: 24 },
];

const characters = [
  { id: 'c1', emoji: '🧑‍🌾', style: { bottom: '22%', left: '18%' }, size: 22 },
  { id: 'c2', emoji: '🧑‍🤝‍🧑', style: { bottom: '30%', left: '38%' }, size: 20 },
  { id: 'c3', emoji: '🏇', style: { bottom: '15%', left: '45%' }, size: 26 },
  { id: 'c4', emoji: '🐴', style: { bottom: '8%', right: '8%' }, size: 28 },
  { id: 'c5', emoji: '🧑', style: { top: '55%', right: '20%' }, size: 20 },
  { id: 'c6', emoji: '👨‍🦳', style: { top: '48%', right: '28%' }, size: 20 },
  { id: 'c7', emoji: '🧑‍🦱', style: { top: '65%', right: '12%' }, size: 20 },
  { id: 'c8', emoji: '🏇', style: { top: '38%', left: '22%' }, size: 22 },
];

const haystacks = [
  { id: 'h1', style: { top: '28%', left: '50%' } },
  { id: 'h2', style: { top: '32%', left: '54%' } },
];

const Tree = ({ size = 26 }) => (
  <div style={{ position: 'relative', width: size, height: size * 1.3 }}>
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size * 0.5}px solid transparent`,
        borderRight: `${size * 0.5}px solid transparent`,
        borderBottom: `${size * 0.8}px solid #6a9a4a`,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
    <div
      style={{
        width: size * 0.2,
        height: size * 0.4,
        background: '#7a5a3a',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 2,
      }}
    />
  </div>
);

const Building = ({ building }) => {
  const { emoji, color, roofColor, style, ringSize, zIndex } = building;
  const w = style.width || 100;
  const h = style.height || 110;

  return (
    <div
      style={{
        position: 'absolute',
        ...style,
        width: w,
        height: h,
        zIndex,
      }}
    >
      {/* Shadow */}
      <div style={{
        position: 'absolute',
        bottom: -6,
        left: '10%',
        width: '80%',
        height: 12,
        background: 'rgba(0,0,0,0.18)',
        borderRadius: '50%',
        filter: 'blur(4px)',
      }} />

      {/* Building body */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(160deg, ${color}ee 0%, ${color}99 100%)`,
          borderRadius: 10,
          border: `2px solid ${color}aa`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: Math.min(w, h) * 0.42,
          boxShadow: `3px 5px 16px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.3)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Roof accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '32%',
            background: `linear-gradient(180deg, ${roofColor} 0%, ${roofColor}cc 100%)`,
            borderRadius: '10px 10px 0 0',
          }}
        />
        {/* Wall texture lines */}
        <div style={{
          position: 'absolute',
          top: '32%',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.04) 10px, rgba(0,0,0,0.04) 11px)`,
        }} />
        <span style={{
          position: 'relative',
          zIndex: 2,
          filter: 'drop-shadow(1px 2px 4px rgba(0,0,0,0.35))',
          lineHeight: 1,
        }}>
          {emoji}
        </span>
      </div>
      {/* Target ring overlay */}
      <TargetRing size={ringSize} />
    </div>
  );
};

const IsometricBoard = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        flex: 1,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #9ed4e8 0%, #b8ddd0 28%, #c8c890 52%, #d4b896 100%)',
      }}
    >
      {/* Sky gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '30%',
        background: 'linear-gradient(180deg, #8ecce0 0%, #a8d8e8 60%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* Clouds */}
      <div style={{ position: 'absolute', top: '3%', left: '12%', zIndex: 2 }}>
        <div style={{
          width: 80, height: 30,
          background: 'rgba(255,255,255,0.75)',
          borderRadius: 20,
          boxShadow: '18px -6px 0 12px rgba(255,255,255,0.55), -12px 4px 0 8px rgba(255,255,255,0.45)',
        }} />
      </div>
      <div style={{ position: 'absolute', top: '5%', right: '18%', zIndex: 2 }}>
        <div style={{
          width: 55, height: 22,
          background: 'rgba(255,255,255,0.65)',
          borderRadius: 15,
          boxShadow: '12px -4px 0 8px rgba(255,255,255,0.45)',
        }} />
      </div>
      <div style={{ position: 'absolute', top: '2%', right: '5%', zIndex: 2 }}>
        <div style={{
          width: 35, height: 16,
          background: 'rgba(255,255,255,0.5)',
          borderRadius: 10,
        }} />
      </div>

      {/* Distant hills */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '70%',
        height: 80,
        background: 'linear-gradient(180deg, #7a9e5a 0%, #8fad6a 100%)',
        borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        zIndex: 1,
        opacity: 0.55,
      }} />
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '-5%',
        width: '55%',
        height: 70,
        background: 'linear-gradient(180deg, #7a9e5a 0%, #8fad6a 100%)',
        borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        zIndex: 1,
        opacity: 0.45,
      }} />

      {/* Ground terrain */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, #c8c890 0%, #d4b896 35%, #c8a870 100%)',
        zIndex: 2,
      }} />

      {/* Grass patches */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: 0,
        right: 0,
        height: '12%',
        background: 'linear-gradient(180deg, #a8c47a 0%, #c8c890 100%)',
        zIndex: 2,
        opacity: 0.7,
      }} />

      {/* Paths */}
      <div style={{
        position: 'absolute',
        top: '44%',
        left: '28%',
        width: '44%',
        height: '7%',
        background: 'rgba(196,168,120,0.55)',
        transform: 'skewX(-18deg)',
        zIndex: 3,
        borderRadius: 6,
      }} />
      <div style={{
        position: 'absolute',
        top: '28%',
        left: '18%',
        width: '6%',
        height: '42%',
        background: 'rgba(196,168,120,0.45)',
        transform: 'skewY(-8deg)',
        zIndex: 3,
      }} />

      {/* Fence */}
      <div style={{
        position: 'absolute',
        top: '66%',
        left: '6%',
        width: '20%',
        height: 3,
        background: '#8B5E3C',
        zIndex: 4,
        borderRadius: 2,
      }} />
      {[0, 14, 28, 42, 56, 70, 84, 98].map((pct) => (
        <div key={pct} style={{
          position: 'absolute',
          top: '64%',
          left: `${6 + pct * 0.2}%`,
          width: 3,
          height: 16,
          background: '#8B5E3C',
          zIndex: 4,
          borderRadius: 1,
        }} />
      ))}

      {/* Haystacks */}
      {haystacks.map((h) => (
        <div key={h.id} style={{ position: 'absolute', ...h.style, zIndex: 3 }}>
          <div style={{
            width: 24, height: 20,
            background: 'radial-gradient(ellipse, #e0b840 60%, #c89820 100%)',
            borderRadius: '50% 50% 40% 40%',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }} />
        </div>
      ))}

      {/* Trees */}
      {trees.map((t) => (
        <div key={t.id} style={{ position: 'absolute', ...t.style, zIndex: 3 }}>
          <Tree size={t.size} />
        </div>
      ))}

      {/* Buildings */}
      {buildings.map((b) => (
        <Building key={b.id} building={b} />
      ))}

      {/* Characters */}
      {characters.map((c) => (
        <div
          key={c.id}
          style={{
            position: 'absolute',
            ...c.style,
            fontSize: c.size,
            zIndex: 8,
            filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.3))',
          }}
        >
          {c.emoji}
        </div>
      ))}
    </div>
  );
};

export default IsometricBoard;
