import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'us-electronics-retailer',
    title: 'US Electronics Retailer — Custom Bluetooth Speakers',
    location: 'United States',
    challenge: 'A US-based electronics retailer needed 5,000 units of custom-designed Bluetooth speakers with strict quality requirements and a 6-week lead time. They had no existing supplier in China and were concerned about quality consistency.',
    approach: 'We searched our verified supplier network and identified three qualified manufacturers in Shenzhen within 3 days. After factory verification and sample evaluation, the client selected a supplier with ISO 9001 certification. We conducted pre-production, during-production, and pre-shipment inspections.',
    result: 'All 5,000 units delivered on time with zero defects. The client has since placed three repeat orders with the same supplier.',
    metrics: [
      { label: 'Supplier found', value: '3 days' },
      { label: 'Defect rate', value: '0%' },
      { label: 'On-time delivery', value: 'Yes' },
    ],
    imgId: 'case-page-us-electronics-m1n2o3',
    titleId: 'case-page-us-electronics-title',
    descId: 'case-page-us-electronics-desc',
  },
  {
    id: 'eu-furniture-distributor',
    title: 'European Furniture Distributor — Quality Recovery',
    location: 'Germany',
    challenge: 'A German furniture distributor was experiencing a 12% defect rate and frequent shipment delays from their existing Chinese supplier. They needed a more reliable partner without disrupting their supply chain.',
    approach: 'We conducted a factory audit on the existing supplier and identified systemic quality management issues. We then sourced and verified a new manufacturer in Foshan with better QC processes. We managed the transition, including first-order production monitoring and full quality inspections.',
    result: 'Defect rate reduced from 12% to under 1%. All shipments delivered on schedule. The client saved approximately 15% on unit costs with the new supplier.',
    metrics: [
      { label: 'Defect rate', value: '<1%' },
      { label: 'Cost savings', value: '15%' },
      { label: 'On-time delivery', value: '100%' },
    ],
    imgId: 'case-page-eu-furniture-p4q5r6',
    titleId: 'case-page-eu-furniture-title',
    descId: 'case-page-eu-furniture-desc',
  },
  {
    id: 'au-textile-brand',
    title: 'Australian Textile Brand — Sustainable Fabric Sourcing',
    location: 'Australia',
    challenge: 'An Australian textile brand needed certified organic cotton fabric with full traceability documentation for compliance with Australian textile standards. They had struggled to find suppliers who could provide proper certification.',
    approach: 'We identified certified organic cotton suppliers with GOTS and OEKO-TEX certifications. We verified factory credentials, arranged sample fabric for testing, and managed all certification documentation for Australian import compliance.',
    result: 'First order of 10,000 meters delivered in 8 weeks with full certification documentation. The client now sources regularly through our verified supplier.',
    metrics: [
      { label: 'Certifications', value: 'GOTS + OEKO-TEX' },
      { label: 'First delivery', value: '8 weeks' },
      { label: 'Documentation', value: 'Complete' },
    ],
    imgId: 'case-page-au-textiles-s7t8u9',
    titleId: 'case-page-au-textiles-title',
    descId: 'case-page-au-textiles-desc',
  },
  {
    id: 'ca-hardware-importer',
    title: 'Canadian Hardware Importer — New Product Line Launch',
    location: 'Canada',
    challenge: 'A Canadian hardware distributor wanted to launch a new line of professional-grade hand tools but had no experience sourcing from China. They needed help with everything from supplier selection to first shipment.',
    approach: 'We managed the full sourcing process — from supplier search and factory verification to sample evaluation, production monitoring, and shipping coordination. We also helped negotiate favorable pricing for the initial order.',
    result: 'New product line launched successfully with 20 SKUs. First shipment of 15,000 units delivered with less than 0.5% defect rate. The client expanded to 50 SKUs within the first year.',
    metrics: [
      { label: 'SKUs launched', value: '20' },
      { label: 'Defect rate', value: '<0.5%' },
      { label: 'Year 1 expansion', value: '50 SKUs' },
    ],
    imgId: 'case-page-ca-hardware-v1w2x3',
    titleId: 'case-page-ca-hardware-title',
    descId: 'case-page-ca-hardware-desc',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="bg-navy-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Case Studies
          </h1>
          <p id="cases-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Real results from real clients. See how businesses across the world have improved their China sourcing with our support.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      {cases.map((caseItem, index) => (
        <section key={caseItem.id} className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="aspect-[3/2] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    alt={caseItem.title}
                    data-strk-img-id={caseItem.imgId}
                    data-strk-img={`[${caseItem.descId}] [${caseItem.titleId}] [cases-page-subtitle] [cases-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-amber-500">{caseItem.location}</span>
                </div>
                <h2 id={caseItem.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{caseItem.title}</h2>

                <div className="mt-6">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Challenge</span>
                  <p id={caseItem.descId} className="text-slate-600 text-sm leading-relaxed mt-2">{caseItem.challenge}</p>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-semibold text-navy-700 uppercase tracking-wide">Our Approach</span>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">{caseItem.approach}</p>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Result</span>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">{caseItem.result}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {caseItem.metrics.map((metric) => (
                    <div key={metric.label} className="bg-navy-50 rounded-lg px-4 py-3">
                      <span className="text-xs text-slate-500">{metric.label}</span>
                      <span className="block text-lg font-bold text-navy-700">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Want Similar Results for Your Business?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Every sourcing challenge is unique. Tell us about yours and we will propose a tailored approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors mt-8"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
