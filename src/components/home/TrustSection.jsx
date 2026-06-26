import React from 'react';
import { Shield, Users, Award, Clock, Globe, CheckCircle } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Supplier Network',
    description: 'Every supplier in our network has been vetted through on-site audits and background checks.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our bilingual sourcing professionals have 10+ years of experience in Chinese manufacturing.',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'We stand behind our inspections and offer re-inspection services if issues are found.',
  },
  {
    icon: Clock,
    title: 'Transparent Process',
    description: 'Regular updates, detailed reports, and full visibility into every step of the sourcing process.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We serve buyers from 50+ countries and coordinate shipping to destinations worldwide.',
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    description: 'Clear, upfront pricing with detailed breakdowns. What we quote is what you pay.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Buyers Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have built our reputation on transparency, reliability, and results. Here is what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white p-6 lg:p-8 rounded-xl border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
