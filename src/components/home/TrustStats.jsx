import React from 'react';
import { trustStats } from '../../data/content';
import { Award, Users, CheckCircle, Globe, Heart } from 'lucide-react';

const iconMap = {
  Award,
  Users,
  CheckCircle,
  Globe,
  Heart,
};

const TrustStats = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {trustStats.map((stat, index) => {
            const IconComponent = iconMap[Object.keys(iconMap)[index]] || Award;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#E67E22]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B7280]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;