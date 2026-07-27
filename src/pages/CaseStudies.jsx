import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, CheckCircle, DollarSign, BarChart3, Star, Ship, Users } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Industrial Sensors',
    location: 'Germany',
    challenge: 'EuroTech had been sourcing industrial sensors from 3 different Chinese suppliers. Defect rates averaged 12%, and inconsistent quality was damaging their reputation with European clients.',
    solution: 'We conducted full audits of all 3 suppliers, identified 2 as unreliable, and sourced 2 new ISO-certified factories. We implemented a QC protocol including during-production and pre-shipment inspections.',
    result: 'Defect rate dropped from 12% to 1.5%. Production costs reduced by 40%. Lead times improved from 8 weeks to 5 weeks. EuroTech consolidated to 2 verified suppliers with unified quality standards.',
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Defect Rate', value: '1.5%' },
      { label: 'Lead Time', value: '5 weeks' },
    ],
    imgId: 'casestudy-eurotech-full-1a2b3c',
  },
  {
    company: 'Pacific Retail Group',
    industry: 'Home & Kitchen Products',
    location: 'Australia',
    challenge: 'Pacific Retail needed to source 15 SKUs of home and kitchen products across 8 different categories. They had no prior experience sourcing from China and needed a single point of contact to manage the entire process.',
    solution: 'We sourced and verified 8 factories across different product categories, negotiated pricing and MOQs, coordinated samples, and managed consolidated shipping to reduce freight costs.',
    result: 'All 15 SKUs successfully sourced and delivered within 10 weeks. Consolidated shipping saved 30% on freight costs. Client launched the product line on time and within budget.',
    metrics: [
      { label: 'SKUs Sourced', value: '15' },
      { label: 'Timeline', value: '10 weeks' },
      { label: 'Freight Savings', value: '30%' },
    ],
    imgId: 'casestudy-pacific-full-2b3c4d',
  },
  {
    company: 'MedEquip USA',
    industry: 'Medical Supplies',
    location: 'United States',
    challenge: 'A medical device company needed ISO 13485 certified suppliers for critical components. Previous attempts to source from China failed due to suppliers falsifying certifications and substandard manufacturing.',
    solution: 'We conducted rigorous factory audits focusing on ISO certification validity, cleanroom standards, quality management systems, and traceability protocols. We shortlisted 5 certified factories and managed the qualification process.',
    result: '5 ISO 13485 certified factories identified and qualified. First production run achieved 99.5% yield. Client saved 55% compared to their previous US-based supply chain.',
    metrics: [
      { label: 'Certified Factories', value: '5' },
      { label: 'Production Yield', value: '99.5%' },
      { label: 'Cost Savings', value: '55%' },
    ],
    imgId: 'casestudy-medequip-full-3c4d5e',
  },
  {
    company: 'BuildRight Construction',
    industry: 'Building Materials',
    location: 'Canada',
    challenge: 'A construction company needed to source specialty fittings and fixtures for a large commercial project. They needed consistent quality across multiple batches and strict adherence to North American building codes.',
    solution: 'We identified factories with experience exporting to North America, verified their certifications met Canadian standards, and set up a QC protocol including material testing and dimensional inspection.',
    result: 'Materials delivered on schedule across 6 shipments. Zero non-compliance issues. Client saved 35% compared to domestic suppliers and has since expanded to 12 product categories.',
    metrics: [
      { label: 'Cost Savings', value: '35%' },
      { label: 'Shipments', value: '6' },
      { label: 'Compliance Rate', value: '100%' },
    ],
    imgId: 'casestudy-buildright-4d5e6f',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real results from real partnerships. See how we have helped buyers around the world source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gray-200 overflow-hidden">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[cs-title-${idx}] [cs-industry-${idx}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span id={`cs-title-${idx}`} className="hidden">{cs.company}</span>
                  <span id={`cs-industry-${idx}`} className="hidden">{cs.industry}</span>
                </div>
                <div className="lg:w-3/5 p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full">{cs.industry}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {cs.location}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{cs.company}</h2>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Result</h3>
                    <p className="text-gray-600 leading-relaxed">{cs.result}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, mi) => (
                      <div key={mi} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-primary">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Let Us Write Your Success Story</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us today for a free consultation and see how we can help you source from China with confidence.</p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}