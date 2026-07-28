import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, Shield, DollarSign, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const caseStudies = [
    {
      title: 'Electronics Manufacturer Sourcing for US Startup',
      industry: 'Electronics',
      challenge: 'A US-based hardware startup needed a reliable PCB manufacturer in China. They had struggled with quality inconsistencies and communication barriers with previous suppliers.',
      solution: 'We identified three verified PCB manufacturers in Shenzhen, conducted factory audits, and coordinated sample production. After quality evaluation, we recommended the best-fit supplier and managed the entire production process.',
      results: [
        '30% reduction in unit cost compared to previous supplier',
        'Defect rate reduced from 8% to under 1%',
        'Production timeline met consistently for 6 consecutive orders',
      ],
      quote: 'SSourcing China helped us find a reliable manufacturing partner. Their factory verification process saved us from making a costly mistake.',
      quoteAuthor: 'Product Manager, US Hardware Startup',
    },
    {
      title: 'Quality Control System for European Fashion Brand',
      industry: 'Textiles & Apparel',
      challenge: 'A European fashion brand was experiencing a 15% defect rate across three garment factories in Guangdong. Returns and customer complaints were increasing.',
      solution: 'We implemented a comprehensive quality control system including pre-production material inspection, during-production checks at 30% and 70% completion, and pre-shipment final inspection for all three factories.',
      results: [
        'Defect rate reduced from 15% to under 2%',
        'Customer returns decreased by 60%',
        'Factory compliance improved across all three suppliers',
      ],
      quote: 'The QC system they implemented transformed our supply chain. We now have confidence in every shipment.',
      quoteAuthor: 'Supply Chain Director, European Fashion Brand',
    },
    {
      title: 'End-to-End Shipping for UK Furniture Retailer',
      industry: 'Home & Garden',
      challenge: 'A UK furniture retailer needed to coordinate shipping for 20 containers of furniture from multiple factories in Foshan. They lacked experience with Chinese export procedures.',
      solution: 'We coordinated with all factories to consolidate shipments, prepared all export documentation, arranged freight forwarding, and managed customs clearance on both ends.',
      results: [
        '20 containers delivered on schedule',
        '15% savings on freight costs through consolidation',
        'Zero customs delays or documentation issues',
      ],
      quote: 'They handled everything from factory pickup to UK warehouse delivery. We did not have to worry about a single detail.',
      quoteAuthor: 'Operations Manager, UK Furniture Retailer',
    },
    {
      title: 'Supplier Verification for Australian Importer',
      industry: 'Industrial Equipment',
      challenge: 'An Australian importer wanted to verify a potential supplier of industrial tools before placing a large order. They were concerned about the legitimacy of the factory.',
      solution: 'We conducted a comprehensive on-site audit including business license verification, production capacity assessment, quality system review, and worker conditions evaluation.',
      results: [
        'Confirmed factory legitimacy and production capacity',
        'Identified two areas for quality improvement before order',
        'Client proceeded with confidence and placed $500K order',
      ],
      quote: 'The audit report was thorough and gave us the confidence to proceed with a significant order.',
      quoteAuthor: 'Procurement Manager, Australian Importer',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="case-studies-title" className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p id="case-studies-subtitle" className="text-lg text-slate-300">
              Real examples of how we have helped global buyers source successfully from China. Each case study shows the challenge, our approach, and the results achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <div
                    className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6"
                    data-strk-bg-id={`case-study-bg-${index + 1}`}
                    data-strk-bg={`[case-study-desc-${index}] [case-study-title-${index}] [case-studies-subtitle] [case-studies-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <h2 id={`case-study-title-${index}`} className="heading-3 mb-2">{study.title}</h2>
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {study.industry}
                  </span>
                </div>
                <div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                    <p id={`case-study-desc-${index}`} className="text-slate-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Our Solution</h3>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-700">
                    <p className="text-slate-700 text-sm italic mb-2">"{study.quote}"</p>
                    <p className="text-slate-500 text-xs">{study.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
