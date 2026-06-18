import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Activity, Wifi, Shield } from 'lucide-react';

const features = [
  {
    id: 'feat-health',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    title: 'Advanced Health',
    titleId: 'feat-health-title',
    desc: 'Monitor your heart rate, blood oxygen, ECG, and sleep patterns around the clock with medical-grade sensors.',
    descId: 'feat-health-desc',
    imgId: 'feat-health-img-aw-3c8f1a',
  },
  {
    id: 'feat-fitness',
    icon: Activity,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    title: 'Fitness Tracking',
    titleId: 'feat-fitness-title',
    desc: 'Track over 80 workout types automatically. Close your rings, compete with friends, and crush your goals.',
    descId: 'feat-fitness-desc',
    imgId: 'feat-fitness-img-aw-5d2e9b',
  },
  {
    id: 'feat-connect',
    icon: Wifi,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    title: 'Always Connected',
    titleId: 'feat-connect-title',
    desc: 'Stay in touch with calls, messages, and apps — even without your iPhone nearby, thanks to built-in cellular.',
    descId: 'feat-connect-desc',
    imgId: 'feat-connect-img-aw-8b4c7d',
  },
  {
    id: 'feat-safety',
    icon: Shield,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    title: 'Safety Features',
    titleId: 'feat-safety-title',
    desc: 'Crash Detection, Fall Detection, and Emergency SOS keep you protected wherever life takes you.',
    descId: 'feat-safety-desc',
    imgId: 'feat-safety-img-aw-2a6f3e',
  },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Why Apple Watch
          </p>
          <h2
            id="features-title"
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Built for your life.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            From the moment you wake up to the moment you fall asleep, Apple Watch is there for every beat.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    alt={f.title}
                    data-strk-img-id={f.imgId}
                    data-strk-img={`[${f.descId}] [${f.titleId}] [features-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${f.bgColor} mb-4`}>
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <h3 id={f.titleId} className="text-lg font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p id={f.descId} className="text-sm text-gray-500 leading-relaxed">
                    {f.desc}
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
