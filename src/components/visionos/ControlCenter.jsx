import { useState } from 'react';
import { Wifi, Bluetooth, Moon, Maximize2, Sun, Volume2, SkipBack, Play, Pause, SkipForward, X } from 'lucide-react';

const Toggle = ({ icon: Icon, label, active, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-200 cursor-pointer"
    style={{
      background: active ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
      border: `1px solid ${active ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.12)'}`,
      boxShadow: active ? '0 0 12px rgba(255,255,255,0.15)' : 'none',
    }}
  >
    <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-white/50'}`} />
    <span className={`text-xs font-medium ${active ? 'text-white' : 'text-white/50'}`}>{label}</span>
  </button>
);

const Slider = ({ icon: Icon, label, value, onChange }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-4 h-4 text-white/60 flex-shrink-0" />
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-white/60">{label}</span>
        <span className="text-xs text-white/60">{value}%</span>
      </div>
      <input
        type="range" min="0" max="100" value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{ accentColor: 'rgba(255,255,255,0.8)' }}
      />
    </div>
  </div>
);

const ControlCenter = ({ onClose }) => {
  const [wifi, setWifi] = useState(true);
  const [bt, setBt] = useState(true);
  const [focus, setFocus] = useState(false);
  const [immerse, setImmerse] = useState(false);
  const [brightness, setBrightness] = useState(75);
  const [volume, setVolume] = useState(60);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="fixed top-14 right-6 z-50 w-72 rounded-3xl p-4 flex flex-col gap-4"
      style={{
        background: 'rgba(20,20,30,0.65)',
        backdropFilter: 'blur(60px) saturate(200%)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-white/90 text-sm font-semibold">Control Center</span>
        <button onClick={onClose} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
          <X className="w-3 h-3 text-white/70" />
        </button>
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-4 gap-2">
        <Toggle icon={Wifi}      label="Wi-Fi"   active={wifi}    onToggle={() => setWifi(!wifi)} />
        <Toggle icon={Bluetooth} label="BT"      active={bt}      onToggle={() => setBt(!bt)} />
        <Toggle icon={Moon}      label="Focus"   active={focus}   onToggle={() => setFocus(!focus)} />
        <Toggle icon={Maximize2} label="Immerse" active={immerse} onToggle={() => setImmerse(!immerse)} />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Sliders */}
      <div className="flex flex-col gap-3">
        <Slider icon={Sun}      label="Brightness" value={brightness} onChange={setBrightness} />
        <Slider icon={Volume2}  label="Volume"     value={volume}     onChange={setVolume} />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Now Playing */}
      <div
        className="rounded-2xl p-3"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-lg flex-shrink-0">🎵</div>
          <div className="flex-1 min-w-0">
            <p className="text-white/90 text-xs font-semibold truncate">Spatial Audio Mix</p>
            <p className="text-white/50 text-xs truncate">Apple Music</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <SkipBack className="w-4 h-4 text-white/60 cursor-pointer hover:text-white transition-colors" />
          <button
            onClick={() => setPlaying(!playing)}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {playing ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
          </button>
          <SkipForward className="w-4 h-4 text-white/60 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ControlCenter;
