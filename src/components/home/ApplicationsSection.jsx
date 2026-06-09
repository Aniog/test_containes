import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Stethoscope, Car, Landmark, Gamepad2, ShoppingCart, Leaf } from 'lucide-react';

const applications = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare',
    subtitle: 'Saving lives with precision',
    desc: 'AI diagnoses diseases from medical images with accuracy surpassing human specialists, accelerates drug discovery, and personalizes treatment plans.',
    highlight: 'Early cancer detection with 99% accuracy',
    color: 'text-red-400',
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/10',
    titleId: 'app-healthcare-title',
    descId: 'app-healthcare-desc',
    imgId: 'app-healthcare-img-4a2b9f',
  },
  {
    id: 'autonomous',
    icon: Car,
    title: 'Autonomous Vehicles',
    subtitle: 'Redefining transportation',
    desc: 'Self-driving cars use computer vision, sensor fusion, and real-time decision-making to navigate complex environments safely.',
    highlight: 'Over 50M miles driven autonomously',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    titleId: 'app-auto-title',
    descId: 'app-auto-desc',
    imgId: 'app-auto-img-6c3d1e',
  },
  {
    id: 'finance',
    icon: Landmark,
    title: 'Finance & Banking',
    subtitle: 'Smarter money management',
    desc: 'AI detects fraud in milliseconds, automates trading strategies, assesses credit risk, and provides personalized financial advice.',
    highlight: '$447B saved annually from fraud prevention',
    color: 'text-green-400',
    borderColor: 'border-green-500/30',
    bgColor: 'bg-green-500/10',
    titleId: 'app-finance-title',
    descId: 'app-finance-desc',
    imgId: 'app-finance-img-9e5f2a',
  },
  {
    id: 'gaming',
    icon: Gamepad2,
    title: 'Gaming & Entertainment',
    subtitle: 'Immersive experiences',
    desc: 'AI creates adaptive game opponents, generates realistic environments, personalizes content recommendations, and powers virtual characters.',
    highlight: 'AI NPCs that learn from player behavior',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10',
    titleId: 'app-gaming-title',
    descId: 'app-gaming-desc',
    imgId: 'app-gaming-img-2d7c4b',
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    subtitle: 'Personalized shopping',
    desc: 'Recommendation engines, demand forecasting, visual search, and automated customer service transform the retail experience.',
    highlight: '35% of Amazon revenue from AI recommendations',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    bgColor: 'bg-orange-500/10',
    titleId: 'app-retail-title',
    descId: 'app-retail-desc',
    imgId: 'app-retail-img-8b1e6d',
  },
  {
    id: 'climate',
    icon: Leaf,
    title: 'Climate & Environment',
    subtitle: 'Protecting our planet',
    desc: 'AI optimizes energy grids, predicts extreme weather, monitors deforestation via satellite, and accelerates clean energy research.',
    highlight: '20% reduction in data center energy use',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/10',
    titleId: 'app-climate-title',
    descId: 'app-climate-desc',
    imgId: 'app-climate-img-3f9a7c',
  },
];

const ApplicationsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="ai-applications"
      ref={containerRef}
      className="py-20 md:py-28 bg-[#080818]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs text-ai-blue uppercase tracking-widest font-medium mb-4">
          Real-World Impact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI in Action
          </span>
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-4">
          Transforming industries and solving humanity's greatest challenges
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className={`group p-6 rounded-2xl bg-ai-card border ${app.borderColor} hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-300 flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${app.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${app.color}`} />
                  </div>
                  <div>
                    <h3 id={app.titleId} className="text-lg font-semibold text-slate-100">
                      {app.title}
                    </h3>
                    <p className={`text-xs font-medium ${app.color}`}>{app.subtitle}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden border border-indigo-500/10 mb-4 h-40">
                  <img
                    alt={app.title}
                    data-strk-img-id={app.imgId}
                    data-strk-img={`[${app.descId}] [${app.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-300"
                  />
                </div>

                {/* Description */}
                <p id={app.descId} className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {app.desc}
                </p>

                {/* Highlight pill */}
                <div className={`px-3 py-2 rounded-lg ${app.bgColor} border ${app.borderColor}`}>
                  <p className={`text-xs font-medium ${app.color}`}>✦ {app.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
