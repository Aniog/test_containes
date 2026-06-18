import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Zap, Wifi, Shield } from 'lucide-react';

const features = [
  {
    id: 'feat-health',
    icon: Heart,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    title: 'Advanced Health Monitoring',
    description: 'Track your heart rate, blood oxygen, ECG, and sleep patterns with medical-grade precision. Your health, always in check.',
    imgId: 'feat-health-img-7a2b1d',
    titleId: 'feat-health-title',
    descId: 'feat-health-desc',
  },
  {
    id: 'feat-fitness',
    icon: Zap,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-50',
    title: 'Fitness & Activity Tracking',
    description: 'Over 60 workout modes, GPS tracking, and automatic workout detection. Crush every goal with real-time coaching.',
    imgId: 'feat-fitness-img-3c8e4f',
    titleId: 'feat-fitness-title',
    descId: 'feat-fitness-desc',
  },
  {
    id: 'feat-connect',
    icon: Wifi,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    title: 'Always Connected',
    description: 'Cellular connectivity keeps you reachable even without your iPhone. Messages, calls, and apps — right on your wrist.',
    imgId: 'feat-connect-img-5d9f2a',
    titleId: 'feat-connect-title',
    descId: 'feat-connect-desc',
  },
  {
    id: 'feat-safety',
    icon: Shield,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    title: 'Safety Features',
    description: 'Crash Detection, Fall Detection, and Emergency SOS give you and your loved ones peace of mind every day.',
    imgId: 'feat-safety-img-1e6c3b',
    titleId: 'feat-safety-title',
    descId: 'feat-safety-desc',
  },
];

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            What it does
          </p>
          <h2 id="features-title" className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Built for everything you do.
          </h2>
          <p id="features-subtitle" className="mt-4 text-lg text-zinc-500 max-w-2xl mx-auto">
            From morning workouts to late-night health checks, Apple Watch is the companion that never misses a beat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.id} className="rounded-2xl bg-zinc-50 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [features-subtitle] [features-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feat.iconBg} mb-4`}>
                    <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                  </div>
                  <h3 id={feat.titleId} className="text-xl font-bold text-zinc-900 mb-2">
                    {feat.title}
                  </h3>
                  <p id={feat.descId} className="text-zinc-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
