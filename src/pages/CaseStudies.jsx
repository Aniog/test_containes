import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, TrendingDown, TrendingUp, DollarSign, Clock } from 'lucide-react';

const studies = [
  {
    title: 'US Retailer Cuts Defect Rate by 85%',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'A US-based electronics retailer was experiencing a 20% defect rate from their Chinese supplier, resulting in high return rates and customer complaints. They needed a sourcing partner who could ensure consistent quality.',
    solution: 'We identified a new factory with stronger quality management systems, implemented a three-stage inspection protocol (pre-production, during-production, and pre-shipment), and established clear quality benchmarks with the supplier.',
    results: [
      { label: 'Defect rate reduced', value: '85%', trend: 'down' },
      { label: 'Return rate dropped', value: 'from 20% to under 3%', trend: 'down' },
      { label: 'Customer satisfaction', value: 'improved significantly', trend: 'up' },
    ],
    imgId: 'case1-electronics-g5h6i7',
    titleId: 'case1-electronics-title',
    descId: 'case1-electronics-desc',
  },
  {
    title: 'European Brand Scales Production 5x',
    industry: 'Home & Garden',
    location: 'Germany',
    challenge: 'A German home goods brand needed to rapidly scale production for a new product line launching across Europe. Their existing supplier could not handle the volume increase, and they needed multiple factories coordinated simultaneously.',
    solution: 'We identified and verified three additional factories, created a unified production plan with standardized quality criteria, and assigned a dedicated project manager to coordinate across all production sites.',
    results: [
      { label: 'Production capacity', value: '5x increase', trend: 'up' },
      { label: 'On-time delivery', value: '98%', trend: 'up' },
      { label: 'Quality consistency', value: 'maintained across all sites', trend: 'up' },
    ],
    imgId: 'case2-home-j8k9l0',
    titleId: 'case2-home-title',
    descId: 'case2-home-desc',
  },
  {
    title: 'Australian Importer Saves 30% on Logistics',
    industry: 'Apparel & Textiles',
    location: 'Australia',
    challenge: 'An Australian clothing importer was paying premium rates for fragmented shipments. They had no visibility into shipping options and were over-relying on express freight for time-sensitive orders.',
    solution: 'We analyzed their shipping patterns, consolidated shipments across multiple orders, negotiated volume-based carrier contracts, and implemented a planned shipping schedule that balanced cost and speed.',
    results: [
      { label: 'Logistics cost savings', value: '30%', trend: 'down' },
      { label: 'Shipment consolidation', value: '3-4 orders per container', trend: 'up' },
      { label: 'Delivery reliability', value: 'improved by 40%', trend: 'up' },
    ],
    imgId: 'case3-apparel-m1n2o3',
    titleId: 'case3-apparel-title',
    descId: 'case3-apparel-desc',
  },
  {
    title: 'UK Startup Launches First Product Line',
    industry: 'Beauty & Personal Care',
    location: 'United Kingdom',
    challenge: 'A UK beauty startup had a product concept but no experience sourcing from China. They needed help finding a manufacturer for custom skincare packaging, navigating regulations, and managing their first production run.',
    solution: 'We guided them through the entire process — from finding a factory that could produce custom packaging, to arranging samples, conducting quality inspections, and coordinating their first shipment to the UK.',
    results: [
      { label: 'Time to market', value: '3 months from concept to delivery', trend: 'down' },
      { label: 'First production run', value: 'completed successfully', trend: 'up' },
      { label: 'Cost vs. local manufacturing', value: '60% savings', trend: 'down' },
    ],
    imgId: 'case4-beauty-p4q5r6',
    titleId: 'case4-beauty-title',
    descId: 'case4-beauty-desc',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Real Results for Real Buyers</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            See how businesses like yours have improved their China sourcing outcomes with our support.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {studies.map((study, i) => (
            <div key={study.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-xl overflow-hidden h-64 lg:h-80">
                  <img
                    alt={study.title}
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[${study.descId}] [${study.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full">{study.industry}</span>
                  <span className="text-gray-400 text-sm">{study.location}</span>
                </div>
                <h3 id={study.titleId} className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Challenge</h4>
                  <p id={study.descId} className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Our Solution</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Results</h4>
                  <div className="space-y-2">
                    {study.results.map((r) => (
                      <div key={r.label} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          <span className="font-semibold">{r.value}</span> — {r.label}
                        </span>
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Want Results Like These?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us about your sourcing challenges and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
