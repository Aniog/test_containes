import { useState, useRef, useCallback, useEffect } from 'react';

const LETTER_RADIUS = 60;

export default function LetterWheel({ letters, onWordSubmit, disabled }) {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const dragStarted = useRef(false);
  const dragMoved = useRef(false);

  const currentWord = selectedIndices.map(i => letters[i]).join('');

  const getLetterPositions = useCallback(() => {
    const count = letters.length;
    return letters.map((_, i) => {
      const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
      return {
        x: Math.cos(angle) * LETTER_RADIUS,
        y: Math.sin(angle) * LETTER_RADIUS,
      };
    });
  }, [letters]);

  const positions = getLetterPositions();

  const getWheelCenter = () => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  };

  const getLetterAtPoint = useCallback((pageX, pageY) => {
    const center = getWheelCenter();
    const dx = pageX - center.x;
    const dy = pageY - center.y;

    let closest = -1;
    let minDist = 38;
    positions.forEach((pos, i) => {
      const ldx = dx - pos.x;
      const ldy = dy - pos.y;
      const d = Math.sqrt(ldx * ldx + ldy * ldy);
      if (d < minDist) {
        minDist = d;
        closest = i;
      }
    });
    return closest;
  }, [positions]);

  const getClientCoords = (e) => {
    if (e.touches && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  // Drag handlers on the container
  const handleContainerMouseDown = useCallback((e) => {
    if (disabled) return;
    const { x, y } = getClientCoords(e);
    const idx = getLetterAtPoint(x, y);
    if (idx >= 0) {
      dragStarted.current = true;
      dragMoved.current = false;
      setIsDragging(true);
      setSelectedIndices([idx]);
    }
  }, [disabled, getLetterAtPoint]);

  const handleContainerMouseMove = useCallback((e) => {
    if (!isDragging || disabled) return;
    dragMoved.current = true;
    const { x, y } = getClientCoords(e);
    const idx = getLetterAtPoint(x, y);
    if (idx >= 0) {
      setSelectedIndices(prev => {
        if (prev.includes(idx)) return prev;
        return [...prev, idx];
      });
    }
  }, [isDragging, disabled, getLetterAtPoint]);

  const handleContainerMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    dragStarted.current = false;
    if (dragMoved.current) {
      // Only submit on drag-release if user actually moved (dragged)
      setSelectedIndices(prev => {
        if (prev.length >= 2) {
          const word = prev.map(i => letters[i]).join('');
          onWordSubmit(word);
          return [];
        }
        return prev;
      });
    }
    dragMoved.current = false;
  }, [isDragging, letters, onWordSubmit]);

  // Click handler on individual letter buttons (for tap/click interaction)
  const handleLetterClick = useCallback((e, idx) => {
    e.stopPropagation();
    if (disabled) return;
    // If we just finished a drag, ignore the click event
    if (dragMoved.current) return;

    setSelectedIndices(prev => {
      // If clicking the last selected letter and we have 2+, submit
      if (prev.length >= 2 && prev[prev.length - 1] === idx) {
        const word = prev.map(i => letters[i]).join('');
        setTimeout(() => onWordSubmit(word), 0);
        return [];
      }
      // If already selected (not last), ignore
      if (prev.includes(idx)) return prev;
      // Add to selection
      return [...prev, idx];
    });
  }, [disabled, letters, onWordSubmit]);

  const handleSubmit = useCallback(() => {
    if (selectedIndices.length >= 2) {
      const word = selectedIndices.map(i => letters[i]).join('');
      onWordSubmit(word);
      setSelectedIndices([]);
    }
  }, [selectedIndices, letters, onWordSubmit]);

  const handleClear = useCallback(() => {
    setSelectedIndices([]);
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && selectedIndices.length >= 2) {
        const word = selectedIndices.map(i => letters[i]).join('');
        onWordSubmit(word);
        setSelectedIndices([]);
      }
      if (e.key === 'Escape') setSelectedIndices([]);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndices, letters, onWordSubmit]);

  const wheelSize = (LETTER_RADIUS + 44) * 2;
  const cx = wheelSize / 2;
  const cy = wheelSize / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Word preview */}
      <div className="h-8 flex items-center justify-center">
        <div className={`px-6 py-1.5 rounded-full text-xl font-bold tracking-widest transition-all duration-150 ${
          currentWord.length > 0
            ? 'bg-amber-100 text-amber-900 shadow-md border-2 border-amber-400'
            : 'text-amber-200/50'
        }`}>
          {currentWord || '· · ·'}
        </div>
      </div>

      {/* Wheel */}
      <div
        ref={containerRef}
        className="relative select-none"
        style={{ width: wheelSize, height: wheelSize }}
        onMouseDown={handleContainerMouseDown}
        onMouseMove={handleContainerMouseMove}
        onMouseUp={handleContainerMouseUp}
        onMouseLeave={handleContainerMouseUp}
        onTouchStart={(e) => {
          if (disabled) return;
          e.preventDefault();
          const { x, y } = getClientCoords(e);
          const idx = getLetterAtPoint(x, y);
          if (idx >= 0) {
            dragStarted.current = true;
            dragMoved.current = false;
            setIsDragging(true);
            setSelectedIndices([idx]);
          }
        }}
        onTouchMove={(e) => {
          if (!isDragging || disabled) return;
          e.preventDefault();
          dragMoved.current = true;
          const { x, y } = getClientCoords(e);
          const idx = getLetterAtPoint(x, y);
          if (idx >= 0) {
            setSelectedIndices(prev => prev.includes(idx) ? prev : [...prev, idx]);
          }
        }}
        onTouchEnd={handleContainerMouseUp}
      >
        {/* Wheel background */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #8B4513 0%, #5C2A0A 60%, #3D1A06 100%)',
            boxShadow: '0 0 0 4px #D4A017, 0 0 0 7px #8B6914, 0 8px 32px rgba(0,0,0,0.5)',
          }}
        />

        {/* Inner circle decoration */}
        <div
          className="absolute rounded-full"
          style={{
            width: 60,
            height: 60,
            top: cy - 30,
            left: cx - 30,
            background: 'radial-gradient(circle, #6B3410 0%, #4A2008 100%)',
            border: '2px solid rgba(212,160,23,0.4)',
          }}
        />

        {/* SVG connection lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={wheelSize}
          height={wheelSize}
          style={{ zIndex: 10 }}
        >
          {selectedIndices.length > 1 && selectedIndices.map((si, i) => {
            if (i === 0) return null;
            const from = positions[selectedIndices[i - 1]];
            const to = positions[si];
            return (
              <line
                key={i}
                x1={cx + from.x}
                y1={cy + from.y}
                x2={cx + to.x}
                y2={cy + to.y}
                stroke="rgba(255,220,100,0.75)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Letter buttons */}
        {letters.map((letter, i) => {
          const pos = positions[i];
          const isSelected = selectedIndices.includes(i);
          const selOrder = selectedIndices.indexOf(i);

          return (
            <button
              key={i}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => handleLetterClick(e, i)}
              className="absolute flex items-center justify-center rounded-full font-black transition-all duration-100 cursor-pointer"
              style={{
                width: 44,
                height: 44,
                left: cx + pos.x - 22,
                top: cy + pos.y - 22,
                fontSize: 22,
                background: isSelected
                  ? 'radial-gradient(circle, #FFE066 0%, #D4A017 100%)'
                  : 'radial-gradient(circle, #FFFDE7 0%, #F5E6C8 100%)',
                color: isSelected ? '#5C2A0A' : '#3D1A06',
                boxShadow: isSelected
                  ? '0 0 12px rgba(255,220,50,0.8), 0 2px 8px rgba(0,0,0,0.4)'
                  : '0 3px 8px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.6)',
                transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                zIndex: isSelected ? 20 : 5,
                border: isSelected ? '2px solid #D4A017' : '2px solid rgba(180,140,80,0.5)',
                userSelect: 'none',
              }}
            >
              {letter}
              {isSelected && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center"
                  style={{ fontSize: 9, fontWeight: 'bold' }}
                >
                  {selOrder + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Submit / Clear buttons */}
      <div className="flex gap-3 mt-1">
        <button
          onClick={handleClear}
          disabled={selectedIndices.length === 0}
          className="px-4 py-1.5 rounded-full text-sm font-bold bg-amber-800/80 text-amber-100 border border-amber-600 disabled:opacity-40 hover:bg-amber-700 transition-colors"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          disabled={selectedIndices.length < 2}
          className="px-5 py-1.5 rounded-full text-sm font-bold bg-amber-500 text-white border border-amber-400 disabled:opacity-40 hover:bg-amber-400 transition-colors shadow-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

