import { useState, useEffect } from 'react';
import { Wifi, Battery, BatteryCharging } from 'lucide-react';

const StatusBar = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
      setDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 pointer-events-none select-none">
      {/* Left: Date */}
      <div className="text-white/80 text-sm font-medium tracking-wide">{date}</div>

      {/* Center: Vision Pro brand */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/90" />
        </div>
        <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">Vision Pro</span>
      </div>

      {/* Right: Status icons + time */}
      <div className="flex items-center gap-3 text-white/80">
        <Wifi className="w-4 h-4" />
        <Battery className="w-5 h-4" />
        <span className="text-sm font-medium tabular-nums">{time}</span>
      </div>
    </div>
  );
};

export default StatusBar;
