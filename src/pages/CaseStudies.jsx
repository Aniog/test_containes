import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock, Star, Shield, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    category: 'Consumer Electronics',
    title: 'US E-Commerce Brand Scales Smart Home Product Line',
    challenge: 'A fast-growing US-based e-commerce brand needed reliable sourcing for a new line of smart home devices. They struggled with inconsistent quality from their previous suppliers and needed a partner who could ensure product consistency at scale.',
    solution: 'We identified and audited 5 factories in Shenzhen specializing in smart home electronics. After comprehensive audits, we shortlisted 2 ISO 9001 certified manufacturers. We managed the sampling process, negotiated pricing 22% below the client\'s previous costs, and implemented a rigorous 3-stage QC protocol.',
    results: [
      { icon: DollarSign, label: '22% Cost Reduction', detail: 'Per-unit cost down from $12.80 to $9.95' },
      { icon: Star, label: '0.8% Defect Rate', detail: 'Down from 5.2% with previous supplier' },
      { icon: Clock, label: '45-Day Lead Time', detail: 'Consistent delivery within 45 days' },
      { icon: TrendingUp, label: '300% Volume Growth', detail: 'Scaled from 5K to 20K units/month' },
    ],
    imgId: 'cs-electronics-n6o7p8',
  },
  {
    id: 'case-2',
    category: 'Industrial Components',
    title: 'European Machinery Brand Establishes Precision Parts Supply Chain',
    challenge: 'A German machinery manufacturer needed precision CNC-machined components with tight tolerances (±0.01mm). They had tried sourcing from China before but faced quality inconsistency and communication issues.',
    solution: 'Our engineering-savvy team translated technical specifications into Chinese, identified 7 potential factories in Guangdong, and conducted detailed technical audits. We qualified 3 ISO-certified factories, set up quality checkpoints, and established a Kanban production tracking system.',
    results: [
      { icon: Shield, label: '3 Qualified Factories', detail: 'All ISO 9001 certified with advanced CNC' },
      { icon: Star, label: '99.6% Pass Rate', detail: 'Across 12 months of continuous production' },
      { icon: DollarSign, label: '18% Annual Savings', detail: 'Compared to European suppliers' },
      { icon: Users, label: 'Long-Term Partnership', detail: '3-year ongoing supply agreement' },
    ],
    imgId: 'cs-industrial-q9r0s1',
  },
  {
    id: 'case-3',
    category: 'Textile & Apparel',
    title: 'Australian Fashion Label Finds Reliable Garment Manufacturer',
    challenge: 'An Australian women\'s fashion brand needed a manufacturing partner capable of handling seasonal collections with short turnaround times, consistent sizing, and high-quality finishing.',
    solution: 'We sourced manufacturers in Zhejiang province\'s textile hub, conducted factory audits focusing on garment quality and ethical compliance (BSCI), and managed the entire production cycle across 4 seasonal collections — from tech pack translation to final QC.',
    results: [
      { icon: TrendingUp, label: '4 Seasonal Collections', detail: 'Successfully delivered across Spring to Winter' },
      { icon: Clock, label: '99.2% On-Time', detail: 'Every collection delivered on schedule' },
      { icon: Star, label: '60-Day Turnaround', detail: 'From tech pack approval to delivery' },
      { icon: DollarSign, label: '35% Cost Advantage', detail: 'Vs. local Australian manufacturing' },
    ],
    imgId: 'cs-textile-t2u3v4',
  },
  {
    id: 'case-4',
    category: 'Furniture & Home Goods',
    title: 'Middle Eastern Retail Chain Sources Custom Hotel Furniture',
    challenge: 'A hospitality group in Dubai needed custom-designed furniture for a new 200-room hotel. They required specific materials, fire-retardant certifications, and tight delivery deadlines aligned with the hotel opening.',
    solution: 'We identified and audited 4 specialized furniture manufacturers in Foshan. Managed custom sampling, material certification (BS 5852 fire retardancy), production monitoring, and coordinated consolidated shipping across 12 containers.',
    results: [
      { icon: Star, label: '200 Rooms Furnished', detail: 'Complete hotel furniture package delivered' },
      { icon: Shield, label: 'Full Compliance', detail: 'All materials passed BS 5852 certification' },
      { icon: DollarSign, label: '40% Budget Saving', detail: 'Below client\'s allocated furniture budget' },
      { icon: Clock, label: '2 Weeks Early', detail: 'Delivered ahead of construction deadline' },
    ],
    imgId: 'cs-furniture-w5x6y7',
  },
];

const CaseStudiesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real results from real clients across industries, product categories, and continents.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((c) => (
              <article key={c.id} className="group">
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Image */}
                  <div className="lg:col-span-2">
                    <img
                      alt={c.title}
                      className="rounded-xl shadow-md border border-gray-100 w-full aspect-[4/3] object-cover"
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[cs-category-${c.id}] [cs-title-${c.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <span id={`cs-category-${c.id}`} className="hidden">{c.category}</span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">{c.category}</span>
                    <h2 id={`cs-title-${c.id}`} className="text-2xl font-bold text-navy mt-1 mb-4">{c.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-sm font-semibold text-navy">Challenge:</span>
                        <p className="text-gray-600 text-sm mt-1">{c.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-navy">Our Solution:</span>
                        <p className="text-gray-600 text-sm mt-1">{c.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                      {c.results.map((r) => (
                        <div key={r.label} className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <r.icon className="w-4 h-4 text-emerald-700" />
                          </div>
                          <div>
                            <div className="font-bold text-navy text-sm">{r.label}</div>
                            <div className="text-xs text-gray-500">{r.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-gray-600 mb-8">Tell us about your sourcing needs and we'll show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;