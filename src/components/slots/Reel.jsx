import { useEffect, useRef, useState } from 'react';

const SYMBOLS = ['🍒', '🍋', '🍊', '🍇', '💎', '7️⃣', '⭐', '🔔'];
const SYMBOL_HEIGHT = 100; // px per symbol in the strip

const generateStrip = (length = 40) => {
  const strip = [];
  for (let i = 0; i < length; i++) {
    strip.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
  }
  return strip;
};

// Target index: always place the result symbol here (near end of strip)
const TARGET_INDEX = 34; // strip[34] = result, center of reel at offset = 34 * SYMBOL_HEIGHT

const Reel = ({ spinning, targetSymbol, onStop, delay = 0, isWinReel = false }) => {
  const stripRef = useRef(null);
  const stripRef2 = useRef(generateStrip(40));
  const strip = stripRef2.current;
  const [offset, setOffset] = useState(0);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const spinDuration = 1800 + delay;

  useEffect(() => {
    if (!spinning) return;

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    startTimeRef.current = null;

    // Regenerate the strip with fresh random symbols each spin
    for (let i = 0; i < strip.length; i++) {
      strip[i] = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    }
    // Place target symbol at TARGET_INDEX so it lands in center
    strip[TARGET_INDEX] = targetSymbol;

    const endOffset = TARGET_INDEX * SYMBOL_HEIGHT;

    // Reset to 0 so every spin travels the same distance
    setOffset(0);

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / spinDuration, 1);

      // Ease-out quart for satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentOffset = endOffset * eased;

      setOffset(currentOffset);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setOffset(endOffset);
        onStop && onStop();
      }
    };

    // Small delay before starting (stagger effect)
    const timer = setTimeout(() => {
      animFrameRef.current = requestAnimationFrame(animate);
    }, delay > 0 ? 0 : 0);

    return () => {
      clearTimeout(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [spinning]);

  // Calculate which symbols to show in the 300px window (3 symbols visible)
  const visibleStart = Math.floor(offset / SYMBOL_HEIGHT);
  const pixelOffset = offset % SYMBOL_HEIGHT;

  // Generate 5 symbols for smooth scrolling (one above and one below the 3-symbol window)
  const visibleSymbols = [];
  for (let i = -1; i <= 3; i++) {
    const idx = ((visibleStart + i) % strip.length + strip.length) % strip.length;
    visibleSymbols.push({ symbol: strip[idx], key: visibleStart + i });
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
        isWinReel
          ? 'border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)]'
          : 'border-yellow-400/30'
      }`}
      style={{ width: 100, height: 300, background: 'linear-gradient(180deg, #0d0d20 0%, #1a1a35 50%, #0d0d20 100%)' }}
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0d0d20 0%, transparent 100%)' }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0d0d20 0%, transparent 100%)' }} />

      {/* Win line highlight */}
      <div
        className={`absolute left-0 right-0 z-20 pointer-events-none transition-opacity duration-300 ${isWinReel ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: '50%', transform: 'translateY(-50%)', height: 100, background: 'rgba(34,197,94,0.08)', borderTop: '2px solid rgba(34,197,94,0.5)', borderBottom: '2px solid rgba(34,197,94,0.5)' }}
      />

      {/* Center payline indicator */}
      <div className="absolute left-0 right-0 z-5 pointer-events-none"
        style={{ top: '50%', transform: 'translateY(-50%)', height: 100, border: '1px solid rgba(245,197,24,0.15)' }} />

      {/* Symbol strip — translateY(-pixelOffset) scrolls symbols upward */}
      <div
        ref={stripRef}
        className="absolute left-0 right-0"
        style={{
          transform: `translateY(${-pixelOffset}px)`,
          willChange: 'transform',
        }}
      >
        {visibleSymbols.map(({ symbol, key }) => (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ height: SYMBOL_HEIGHT, fontSize: 48, lineHeight: 1 }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reel;
export { SYMBOLS };

