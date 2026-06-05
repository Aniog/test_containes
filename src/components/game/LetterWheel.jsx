import React, { useRef, useState, useCallback } from "react";

const LetterWheel = ({ letters, selectedIndices, onLetterSelect, onLetterRelease }) => {
  const svgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [linePoints, setLinePoints] = useState([]);

  const radius = 110;
  const centerX = 150;
  const centerY = 150;
  const letterRadius = 85;

  // Position letters evenly around the circle
  const getLetterPos = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: centerX + letterRadius * Math.cos(angle),
      y: centerY + letterRadius * Math.sin(angle),
    };
  };

  const getLetterIndexFromPoint = (x, y) => {
    const total = letters.length;
    for (let i = 0; i < total; i++) {
      const pos = getLetterPos(i, total);
      const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      if (dist < 28) return i;
    }
    return -1;
  };

  const getSVGPoint = (e) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = 300 / rect.width;
    const scaleY = 300 / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const handleStart = useCallback((e) => {
    e.preventDefault();
    const pt = getSVGPoint(e);
    const idx = getLetterIndexFromPoint(pt.x, pt.y);
    if (idx >= 0) {
      setIsDragging(true);
      onLetterSelect(idx);
      setLinePoints([getLetterPos(idx, letters.length)]);
    }
  }, [letters, onLetterSelect]);

  const handleMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pt = getSVGPoint(e);
    const idx = getLetterIndexFromPoint(pt.x, pt.y);
    if (idx >= 0 && !selectedIndices.includes(idx)) {
      onLetterSelect(idx);
      setLinePoints(prev => [...prev, getLetterPos(idx, letters.length)]);
    }
    // Update last point for live line drawing
    setLinePoints(prev => {
      if (prev.length === 0) return prev;
      const newPts = [...prev];
      // Only update cursor position if last point is not a letter
      return newPts;
    });
  }, [isDragging, selectedIndices, letters, onLetterSelect]);

  const handleEnd = useCallback((e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setLinePoints([]);
    onLetterRelease();
  }, [isDragging, onLetterRelease]);

  const buildLinePath = () => {
    if (linePoints.length < 2) return "";
    return linePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  };

  return (
    <div className="relative flex items-center justify-center select-none">
      <svg
        ref={svgRef}
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="touch-none cursor-pointer"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {/* Outer glow ring */}
        <circle cx={centerX} cy={centerY} r={radius + 8} fill="url(#outerGlow)" />
        {/* Main disc */}
        <circle cx={centerX} cy={centerY} r={radius} fill="url(#discGrad)" />
        {/* Inner shadow ring */}
        <circle cx={centerX} cy={centerY} r={radius - 4} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="3" />

        <defs>
          <radialGradient id="discGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#c0622a" />
            <stop offset="60%" stopColor="#8b3a1a" />
            <stop offset="100%" stopColor="#5c2010" />
          </radialGradient>
          <radialGradient id="outerGlow" cx="50%" cy="50%">
            <stop offset="70%" stopColor="#d4a017" />
            <stop offset="100%" stopColor="#a07010" />
          </radialGradient>
          <filter id="letterShadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Connection lines */}
        {linePoints.length >= 2 && (
          <path
            d={buildLinePath()}
            fill="none"
            stroke="rgba(255,220,80,0.7)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Selected letter connections */}
        {selectedIndices.length >= 2 && selectedIndices.map((idx, i) => {
          if (i === 0) return null;
          const from = getLetterPos(selectedIndices[i - 1], letters.length);
          const to = getLetterPos(idx, letters.length);
          return (
            <line
              key={`line-${i}`}
              x1={from.x} y1={from.y}
              x2={to.x} y2={to.y}
              stroke="rgba(255,220,80,0.8)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}

        {/* Letters */}
        {letters.map((letter, i) => {
          const pos = getLetterPos(i, letters.length);
          const isSelected = selectedIndices.includes(i);
          const selOrder = selectedIndices.indexOf(i);

          return (
            <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
              {/* Letter background circle */}
              <circle
                r={22}
                fill={isSelected ? "rgba(255,220,80,0.95)" : "rgba(255,255,255,0.15)"}
                stroke={isSelected ? "#d4a017" : "rgba(255,255,255,0.3)"}
                strokeWidth={isSelected ? 2.5 : 1.5}
                className="transition-all duration-150"
              />
              {/* Letter text */}
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="20"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill={isSelected ? "#5c2010" : "white"}
                filter="url(#letterShadow)"
                className="transition-all duration-150"
              >
                {letter}
              </text>
              {/* Selection order badge */}
              {isSelected && (
                <text
                  x={14}
                  y={-14}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="10"
                  fontWeight="bold"
                  fill="#5c2010"
                >
                  {selOrder + 1}
                </text>
              )}
            </g>
          );
        })}

        {/* Center dot */}
        <circle cx={centerX} cy={centerY} r={8} fill="rgba(0,0,0,0.3)" />
        <circle cx={centerX} cy={centerY} r={5} fill="rgba(255,255,255,0.2)" />
      </svg>
    </div>
  );
};

export default LetterWheel;
