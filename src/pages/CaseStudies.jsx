import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);
  const cases = [
    {
      client: 'European Home Retailer',
      location: 'Germany',
      product: 'LED Lighting Products',
      challenge: 'Needed to replace an unreliable supplier and establish consistent quality for a private-label lighting range. Previous shipments had high defect rates and inconsistent specifications.',
      approach: 'We conducted a full supplier search across three provinces, audited eight factories, and coordinated sample production from three finalists. Selected supplier based on audit findings and sample quality.',
      results: [
        'Reduced defect rate from 12% to under 2%',
        'Unit cost reduced by 18% vs. previous supplier',
        'Established ongoing QC program with quarterly audits',
        'First container delivered on schedule; repeat orders now monthly',
      ],
      timeline: '14 weeks from initial inquiry to first delivery',
    },
    {
      client: 'US Industrial Distributor',
      location: 'United States',
      product: 'Precision Metal Components',
      challenge: 'Expanding product line required new suppliers for machined parts. Needed suppliers with ISO certification, tight tolerances, and capacity for 5,000+ units per month.',
      approach: 'Identified 12 potential suppliers through industry networks. Conducted detailed audits focusing on quality systems and equipment. Coordinated capability samples and negotiated terms with top two candidates.',
      results: [
        'Selected supplier with documented process controls',
        'Achieved required tolerances on first production run',
        'Implemented monthly production monitoring visits',
        'Established backup supplier for supply security',
      ],
      timeline: '11 weeks to supplier approval; ongoing relationship',
    },
    {
      client: 'Australian Outdoor Products Importer',
      location: 'Australia',
      product: 'Outdoor Furniture Collection',
      challenge: 'First-time importer needed end-to-end support for a new product line. Limited internal resources for supplier management and quality oversight.',
      approach: 'Managed complete sourcing cycle: supplier identification, factory audits, sample coordination, production monitoring, and shipping. Provided weekly updates and handled all supplier communications.',
      results: [
        'Three-product collection launched on schedule',
        'All quality specifications met on first shipment',
        'Documentation package enabled smooth customs clearance',
        'Client now sources additional products through us',
      ],
      timeline: '16 weeks from concept to warehouse delivery',
    },
    {
      client: 'UK Hardware Wholesaler',
      location: 'United Kingdom',
      product: 'Hand Tools & Accessories',
      challenge: 'Existing supplier quality declining; needed to qualify alternative sources quickly without disrupting supply to customers.',
      approach: 'Rapid supplier search focused on factories already producing similar products. Parallel sample orders from two suppliers. Quality audit and first production run completed while maintaining existing supply.',
      results: [
        'New supplier qualified in 6 weeks',
        'Transition completed with no stockouts',
        'Improved product finish and packaging quality',
        'Negotiated 9% cost reduction on key SKUs',
      ],
      timeline: '6 weeks to qualified alternative; 4 weeks transition',
    },
    {
      client: 'Canadian Equipment Manufacturer',
      location: 'Canada',
      product: 'Custom Fabricated Assemblies',
      challenge: 'Required a supplier for a new sub-assembly with complex welding and finishing requirements. No prior experience sourcing from China.',
      approach: 'Detailed technical review with client engineering team. Supplier search focused on welding capability and finishing quality. Multiple sample iterations to achieve required specifications.',
      results: [
        'Supplier selected after three sample rounds',
        'Production process validated before volume order',
        'First 500-unit order delivered with zero defects',
        'Supplier now produces three additional assemblies',
      ],
      timeline: '18 weeks including sample iterations',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="relative text-white py-16 overflow-hidden">
        <div
          data-strk-bg-id="case-studies-hero-bg"
          data-strk-bg="[case-studies-hero-subtitle] [case-studies-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 id="case-studies-hero-title" className="text-4xl font-semibold text-white mb-4">Case Studies</h1>
          <p id="case-studies-hero-subtitle" className="text-lg text-slate-200 max-w-2xl mx-auto">
            Real projects showing how we help buyers find suppliers, verify capabilities, 
            and manage production and quality.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {cases.map((c, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="relative h-56 bg-slate-100">
                <img
                  data-strk-img-id={`case-study-${i}-img`}
                  data-strk-img={`[case-study-${i}-product] [case-study-${i}-client] factory production quality control`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${c.product} - ${c.client}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="text-sm opacity-80 mb-1">{c.location}</div>
                  <div id={`case-study-${i}-client`} className="text-xl font-semibold">{c.client}</div>
                  <div id={`case-study-${i}-product`} className="text-sm opacity-90">{c.product}</div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="uppercase text-xs tracking-wide text-slate-500 mb-2">Challenge</div>
                    <p className="text-sm text-slate-700">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="uppercase text-xs tracking-wide text-slate-500 mb-2">Our Approach</div>
                    <p className="text-sm text-slate-700">{c.approach}</p>
                  </div>
                  <div>
                    <div className="uppercase text-xs tracking-wide text-slate-500 mb-2">Results</div>
                    <ul className="text-sm text-slate-700 space-y-1.5">
                      {c.results.map((r, j) => (
                        <li key={j}>• {r}</li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs text-brand-teal font-medium">{c.timeline}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="text-slate-300 mb-6">Contact us to discuss your sourcing requirements.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-navy hover:bg-slate-100">Get a Free Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
