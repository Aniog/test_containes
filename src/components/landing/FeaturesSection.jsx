import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Zap, Shield, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed so your team can move quickly and ship products your customers love.',
    titleId: 'feature-speed-title',
    descId: 'feature-speed-desc',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security built in from day one. Your data is always protected.',
    titleId: 'feature-secure-title',
    descId: 'feature-secure-desc',
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description: 'Get deep insights into your business with real-time dashboards and reports.',
    titleId: 'feature-analytics-title',
    descId: 'feature-analytics-desc',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with your team, no matter where they are in the world.',
    titleId: 'feature-collab-title',
    descId: 'feature-collab-desc',
  },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="features" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 id="features-heading" className="text-3xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p id="features-subheading" className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform gives you all the tools to build, grow, and scale your business with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleId}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 id={feature.titleId} className="text-base font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p id={feature.descId} className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            Get started today <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
