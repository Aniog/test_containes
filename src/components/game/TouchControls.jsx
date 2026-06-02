import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TouchControls({ onDirection, gameState }) {
  const active = gameState === 'playing';

  const handlePress = (dir) => {
    if (active) onDirection(dir);
  };

  return (
    <div className="flex flex-col items-center gap-1 select-none">
      <DPadButton icon={<ChevronUp size={28} />} onPress={() => handlePress('UP')} />
      <div className="flex gap-1">
        <DPadButton icon={<ChevronLeft size={28} />} onPress={() => handlePress('LEFT')} />
        <div className="w-14 h-14" />
        <DPadButton icon={<ChevronRight size={28} />} onPress={() => handlePress('RIGHT')} />
      </div>
      <DPadButton icon={<ChevronDown size={28} />} onPress={() => handlePress('DOWN')} />
    </div>
  );
}

function DPadButton({ icon, onPress }) {
  return (
    <button
      onPointerDown={(e) => {
        e.preventDefault();
        onPress();
      }}
      className="w-14 h-14 flex items-center justify-center rounded-xl active:scale-95 transition-transform"
      style={{
        backgroundColor: '#12121a',
        border: '1px solid #1e1e2e',
        color: '#e0e0ff',
        touchAction: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {icon}
    </button>
  );
}
