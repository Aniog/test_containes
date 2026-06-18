import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Activity, Moon, Droplets, Thermometer } from 'lucide-react';

const metrics = [
  { icon: Activity, label: 'Heart Rate', value: '24/7', color: 'text-red-500' },
  { icon: Droplets, label: 'Blood Oxygen', value: 'SpO₂', color: 'text-blue-500' },
  { icon: Moon, label: 'Sleep Tracking', value: 'All Night', color: 'text-purple-500' },
  { icon: Thermometer, label: 'Temperature', value: 'Wrist Temp', color: 'text-orange-500' },
];

export default function Health() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="health" ref={containerRef} className="bg-zinc-950 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
              Health & Wellness
            </p>
            <h2 id="health-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Your health. On your wrist.
            </h2>
            <p id="health-desc" className="text-lg text-zinc-400 leading-relaxed mb-10">
              Apple Watch Series 9 packs more health sensors than ever before. Monitor your heart, track your sleep, and detect irregularities — all passively, all day long.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                    <Icon className={`w-6 h-6 ${m.color} mb-3`} />
                    <p className="text-white font-bold text-lg">{m.value}</p>
                    <p className="text-zinc-500 text-sm">{m.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                alt="Apple Watch health monitoring"
                data-strk-img-id="health-main-img-4b7e9c"
                data-strk-img="[health-desc] [health-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
              <p className="text-zinc-900 font-bold text-2xl">98<span className="text-sm font-medium text-zinc-500">%</span></p>
              <p className="text-zinc-500 text-xs font-medium">SpO₂ Normal</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-red-500 rounded-2xl p-4 shadow-2xl">
              <p className="text-white font-bold text-2xl">72</p>
              <p className="text-red-100 text-xs font-medium">BPM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
