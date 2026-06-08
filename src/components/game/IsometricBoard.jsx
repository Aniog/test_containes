import React from 'react';
import TargetRing from './TargetRing';

const buildings = [
  {
    id: 'castle',
    emoji: '🏰',
    color: '#6600ff',
    border: '#9944ff',
    style: { top: '20%', left: '5%', width: 140, height: 150 },
    ringSize: 100,
    zIndex: 6,
  },
  {
    id: 'church',
    emoji: '⛪',
    color: '#00aadd',
    border: '#00ccff',
    style: { top: '16%', right: '8%', width: 108, height: 118 },
    ringSize: 82,
    zIndex: 5,
  },
  {
    id: 'tent',
    emoji: '⛺',
    color: '#ff5500',
    border: '#ff7733',
    style: { top: '40%', left: '32%', width: 96, height: 100 },
    ringSize: 74,
    zIndex: 7,
  },
  {
    id: 'barn',
    emoji: '🏚',
    color: '#00ccff',
    border: '#44ddff',
    style: { top: '60%', left: '3%', width: 118, height: 122 },
    ringSize: 86,
    zIndex: 4,
  },
  {
    id: 'wagon',
    emoji: '🎠',
    color: '#6600ff',
    border: '#9944ff',
    style: { top: '58%', left: '40%', width: 112, height: 116 },
    ringSize: 84,
    zIndex: 5,
  },
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

const squarePatternSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect x='1' y='1' width='34' height='34' fill='none' stroke='rgba(255,255,255,0.13)' stroke-width='1'/><rect x='5' y='5' width='26' height='26' fill='none' stroke='rgba(255,255,255,0.10)' stroke-width='1'/><rect x='9' y='9' width='18' height='18' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'/><rect x='13' y='13' width='10' height='10' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/></svg>`;
const patternUrl = `url("data:image/svg+xml,${encodeURIComponent(squarePatternSvg)}")`;

const Building = ({ building }) => {
  const { emoji, color, border, style, ringSize, zIndex } = building;
  const w = style.width || 100;
  const h = style.height || 110;

  return (
    <div style={{ position: 'absolute', ...style, width: w, height: h, zIndex }}>
      <div style={{
        position: 'absolute',
        bottom: -8, left: '8%',
        width: '84%', height: 14,
        background: 'rgba(0,0,0,0.4)',
        borderRadius: '50%',
        filter: 'blur(6px)',
      }} />
      <div style={{
        width: '100%', height: '100%',
        background: `linear-gradient(145deg, ${color}ee 0%, ${color}99 100%)`,
        borderRadius: 14,
        border: `2.5px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: Math.min(w, h) * 0.42,
        boxShadow: `0 0 0 1px rgba(255,255,255,0.15), 4px 6px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '28%',
          background: `linear-gradient(180deg, ${border} 0%, ${color} 100%)`,
          borderRadius: '14px 14px 0 0',
          opacity: 0.9,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: patternUrl,
          opacity: 0.25,
          borderRadius: 14,
        }} />
        <span style={{
          position: 'relative', zIndex: 2,
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))',
          lineHeight: 1,
        }}>
          {emoji}
        </span>
      </div>
      <TargetRing size={ringSize} />
    </div>
  );
};

const GeometricBoard = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      flex: 1,
      overflow: 'hidden',
      background: '#5555cc',
      backgroundImage: patternUrl,
    }}>
      {/* Purple block top-left */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '58%', height: '46%',
        background: '#6600ff',
        clipPath: 'polygon(0 0, 100% 0, 58% 100%, 0 100%)',
        zIndex: 1,
        backgroundImage: patternUrl,
      }} />

      {/* Cyan block bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0,
        width: '65%', height: '62%',
        background: '#00ccff',
        clipPath: 'polygon(0 28%, 72% 0, 100% 100%, 0 100%)',
        zIndex: 1,
        backgroundImage: patternUrl,
      }} />

      {/* Orange block right */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '18%', height: '100%',
        background: '#ff5500',
        zIndex: 1,
        backgroundImage: patternUrl,
      }} />

      {/* Buildings */}
      {buildings.map((b) => (
        <Building key={b.id} building={b} />
      ))}

      {/* Characters */}
      {characters.map((c) => (
        <div key={c.id} style={{
          position: 'absolute',
          ...c.style,
          fontSize: c.size,
          zIndex: 8,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
        }}>
          {c.emoji}
        </div>
      ))}
    </div>
  );
};

export default GeometricBoard;
