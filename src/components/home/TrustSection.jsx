import React from 'react';
import { Globe, Award, Users, BadgeCheck } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Delivered', icon: BadgeCheck },
  { number: '40+', label: 'Countries Served', icon: Globe },
  { number: '12+', label: 'Years Experience', icon: Award },
  { number: '98%', label: 'Client Retention', icon: Users },
];

const trustPoints = [
  {
    title: 'On-the-Ground Presence',
    description: 'Our team is based in Shenzhen, Guangzhou, and Yiwu — the heart of China manufacturing. We visit factories in person, not over video calls.',
  },
  {
    title: 'Transparent Reporting',
    description: 'You get detailed inspection reports with photos, videos, and data — no hidden information, no surprises.',
  },
  {
    title: 'No Factory Kickbacks',
    description: 'We work for you, not the factory. Our fees are transparent, and we never accept commissions from suppliers that would compromise your interests.',
  },
  {
    title: 'Bilingual Expertise',
    description: 'Native Mandarin speakers with international business experience. We bridge the cultural and language gap seamlessly.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-500">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.number}</p>
              <p className="text-primary-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-primary-200">
              We have built our reputation on reliability, transparency, and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;