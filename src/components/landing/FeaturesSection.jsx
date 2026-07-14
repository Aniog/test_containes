import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Shield, BarChart3, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'feat-speed',
    icon: Zap,
    title: 'Lightning Fast',
    titleId: 'feat-speed-title',
    descId: 'feat-speed-desc',
    description: 'Optimized for performance so your team can move at the speed of thought.',
    imgId: 'feat-speed-img-a1b2c3',
  },
  {
    id: 'feat-secure',
    icon: Shield,
    title: 'Enterprise Security',
    titleId: 'feat-secure-title',
    descId: 'feat-secure-desc',
    description: 'Bank-grade encryption and compliance built in from day one.',
    imgId: 'feat-secure-img-d4e5f6',
  },
  {
    id: 'feat-analytics',
    icon: BarChart3,
    title: 'Deep Analytics',
    titleId: 'feat-analytics-title',
    descId: 'feat-analytics-desc',
    description: 'Real-time dashboards and reports that turn data into decisions.',
    imgId: 'feat-analytics-img-g7h8i9',
  },
  {
    id: 'feat-collab',
    icon: Users,
    title: 'Team Collaboration',
    titleId: 'feat-collab-title',
    descId: 'feat-collab-desc',
    description: 'Invite your whole team and work together seamlessly in one place.',
    imgId: 'feat-collab-img-j1k2l3',
  },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" className="py-20 px-4 bg-gray-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p id="features-sub" className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete platform built for modern teams who want to move fast without breaking things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [features-sub] [features-heading]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 id={feat.titleId} className="text-lg font-semibold text-gray-900">
                      {feat.title}
                    </h3>
                  </div>
                  <p id={feat.descId} className="text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Get started today
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
