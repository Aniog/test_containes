import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingDown, TrendingUp, Clock, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    client: 'EU Home Goods Retail Chain',
    location: 'Germany',
    industry: 'Home & Garden',
    challenge: 'A 200-store retail chain needed to replace unreliable kitchenware suppliers. Previous orders had 8% defect rates, inconsistent lead times, and poor communication.',
    solution: 'We conducted on-site audits of 12 potential factories, selected 3 qualified partners, and implemented a 3-stage QC protocol. We also renegotiated payment terms for better cash flow.',
    results: [
      { label: 'Defect Rate', from: '8%', to: '<1%', positive: true },
      { label: 'Unit Cost Savings', from: '', to: '18%', positive: true },
      { label: 'Lead Time', from: '65 days', to: '42 days', positive: true },
    ],
    testimonial: '"SSourcing China transformed our supply chain. The quality reports are detailed, the communication is excellent, and we have not had a single rejected shipment in 18 months."',
    contact: '— Procurement Director',
    imgId: 'cs-home-goods-7a8b9c',
    titleId: 'cs-home-title',
    resultId: 'cs-home-result',
  },
  {
    client: 'US Consumer Electronics Brand',
    location: 'United States',
    industry: 'Electronics',
    challenge: 'A fast-growing DTC brand needed to launch a new line of wireless chargers within 8 weeks, including custom branding, FCC certification, and retail packaging.',
    solution: 'We sourced a factory with existing FCC-certified charger platforms, managed custom tooling and branding, coordinated certification testing, and supervised packaging design and production.',
    results: [
      { label: 'Time to Market', from: '12 weeks', to: '6 weeks', positive: true },
      { label: 'Monthly Volume', from: '0', to: '50K units', positive: true },
      { label: 'Return Rate', from: '', to: '<0.5%', positive: true },
    ],
    testimonial: '"We went from concept to selling on Amazon in 6 weeks. The team handled every detail — certification, packaging, shipping to FBA. Could not have done it without them."',
    contact: '— Founder & CEO',
    imgId: 'cs-electronics-d1e2f3',
    titleId: 'cs-electronics-title',
    resultId: 'cs-electronics-result',
  },
  {
    client: 'Australian Fitness Startup',
    location: 'Australia',
    industry: 'Apparel & Sports',
    challenge: 'A new fitness brand needed small-batch sportswear manufacturing (200-500 units per SKU) with fast sampling, custom fabrics, and quick turnaround for seasonal drops.',
    solution: 'We identified a flexible factory with low MOQ capabilities, established a 3-day sample turnaround process, and created a production schedule aligned with their seasonal marketing calendar.',
    results: [
      { label: 'Sample Turnaround', from: '2-3 weeks', to: '3 days', positive: true },
      { label: 'SKUs Launched', from: '0', to: '12 in 3 months', positive: true },
      { label: 'Minimum Order', from: '2,000 units', to: '200 units', positive: true },
    ],
    testimonial: '"As a startup, we could not meet typical factory MOQs. SSourcing China found us the perfect partner and our sampling speed is now a competitive advantage."',
    contact: '— Co-Founder',
    imgId: 'cs-fitness-g4h5i6',
    titleId: 'cs-fitness-title',
    resultId: 'cs-fitness-result',
  },
  {
    client: 'UK Industrial Equipment Distributor',
    location: 'United Kingdom',
    industry: 'Industrial & Hardware',
    challenge: 'A B2B distributor needed custom CNC-machined hydraulic components with tight tolerances (+-0.05mm) and ISO certification for European industrial clients.',
    solution: 'We audited 8 machine shops, selected one with ISO 9001 certification and 5-axis CNC capability, and implemented a first-article inspection process for every new part number.',
    results: [
      { label: 'Tolerance Achievement', from: '85%', to: '99.7%', positive: true },
      { label: 'Cost Reduction', from: '', to: '22%', positive: true },
      { label: 'Supplier Count', from: '5', to: '1 reliable', positive: true },
    ],
    testimonial: '"Precision parts are critical for our clients. The inspection reports and CMM data they provide give us and our customers complete confidence."',
    contact: '— Operations Manager',
    imgId: 'cs-industrial-j7k8l9',
    titleId: 'cs-industrial-title',
    resultId: 'cs-industrial-result',
  },
  {
    client: 'Canadian Beauty Brand',
    location: 'Canada',
    industry: 'Beauty & Personal Care',
    challenge: 'A clean beauty brand needed OEM skincare manufacturing with GMP certification, cruelty-free compliance, and sustainable packaging — all within a tight launch timeline.',
    solution: 'We sourced a GMP-certified factory with clean beauty experience, managed formula development and stability testing, and coordinated eco-friendly packaging sourcing and printing.',
    results: [
      { label: 'Formulation to Launch', from: '9 months', to: '5 months', positive: true },
      { label: 'Packaging Cost', from: '', to: '-15% vs quote', positive: true },
      { label: 'Certifications', from: 'None', to: 'GMP + Cruelty-Free', positive: true },
    ],
    testimonial: '"They understood our brand values from day one. The sustainable packaging options and clean manufacturing compliance were exactly what we needed."',
    contact: '— Brand Director',
    imgId: 'cs-beauty-m1n2o3',
    titleId: 'cs-beauty-title',
    resultId: 'cs-beauty-result',
  },
  {
    client: 'Nordic Toy Company',
    location: 'Sweden',
    industry: 'Toys & Baby',
    challenge: 'A European toy brand needed EN71-certified educational toys with custom designs, child-safe materials, and compliance with EU toy safety regulations.',
    solution: 'We identified a factory with EN71 and ASTM certification, managed the custom mold development, supervised material testing, and coordinated third-party lab certification.',
    results: [
      { label: 'Certification Pass Rate', from: 'N/A', to: '100%', positive: true },
      { label: 'Development Time', from: '4 months', to: '10 weeks', positive: true },
      { label: 'Repeat Orders', from: '0', to: '6 in first year', positive: true },
    ],
    testimonial: '"Safety compliance for toys is non-negotiable in Europe. Their thorough testing process and documentation made our product launch smooth and worry-free."',
    contact: '— Product Manager',
    imgId: 'cs-toys-p4q5r6',
    titleId: 'cs-toys-title',
    resultId: 'cs-toys-result',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Results</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Case Studies
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Real projects, real results. See how we have helped businesses across industries succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden mb-6">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.resultId}] [${study.titleId}] [case-studies-page-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent-500 uppercase tracking-wider bg-accent-50 px-2.5 py-1 rounded">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-500">{study.location}</span>
                  </div>
                  <h2 id={study.titleId} className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{study.client}</h2>

                  <div className="space-y-5 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1.5">Challenge</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1.5">Our Solution</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-slate-50 rounded-xl p-5 mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-4">Key Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, rIndex) => (
                        <div key={rIndex} className="text-center">
                          {result.from && (
                            <p className="text-xs text-slate-400 line-through">{result.from}</p>
                          )}
                          <p className="text-lg font-bold text-green-600">{result.to}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-primary-500 pl-5 py-1 mb-3">
                    <p className="text-slate-600 text-sm italic leading-relaxed">{study.testimonial}</p>
                  </blockquote>
                  <p className="text-slate-500 text-xs font-medium pl-5">{study.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Every business is different, but our approach is proven. Let us discuss how we can help you achieve similar outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;