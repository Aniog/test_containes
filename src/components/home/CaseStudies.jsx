import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    title: 'Consumer Electronics',
    subtitle: 'US-based e-commerce brand scales sourcing of smart home devices',
    result: 'Reduced unit cost by 22% while improving defect rate from 5.2% to 0.8%',
    stats: [
      { icon: DollarSign, label: '22% Cost Reduction' },
      { icon: Star, label: '0.8% Defect Rate' },
      { icon: Clock, label: '45-Day Lead Time' },
    ],
    imgId: 'case-electronics-5s6t7u',
  },
  {
    id: 'case-2',
    title: 'Industrial Components',
    subtitle: 'European machinery brand sources precision CNC parts from Guangdong',
    result: 'Qualified 3 ISO-certified factories, established long-term production with consistent quality',
    stats: [
      { icon: TrendingUp, label: '3 Qualified Factories' },
      { icon: Star, label: 'ISO 9001 Certified' },
      { icon: DollarSign, label: '18% Annual Savings' },
    ],
    imgId: 'case-industrial-8v9w0x',
  },
  {
    id: 'case-3',
    title: 'Textile & Apparel',
    subtitle: 'Australian fashion label finds reliable garment manufacturer in Zhejiang',
    result: 'Full production cycle managed from sampling to bulk delivery across 4 seasons',
    stats: [
      { icon: TrendingUp, label: '4 Seasonal Collections' },
      { icon: Star, label: '99.2% On-Time' },
      { icon: Clock, label: '60-Day Turnaround' },
    ],
    imgId: 'case-textile-1y2z3a',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real results from real clients. See how we helped businesses source smarter from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-study-heading] [case-title-${c.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">{c.title}</span>
                <h3 id={`case-title-${c.id}`} className="text-lg font-semibold text-navy mt-1 mb-2">{c.subtitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.result}</p>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  {c.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <stat.icon className="w-3.5 h-3.5 text-emerald-600" />
                      {stat.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <span id="case-study-heading" className="hidden">China sourcing case study success story</span>
      </div>
    </section>
  );
};

export default CaseStudies;
