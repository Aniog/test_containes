import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'HomeGoods Retailer (USA)',
      industry: 'Home & Garden',
      challenge: 'A mid-size US retailer needed a reliable manufacturer for seasonal ceramic planters. Previous suppliers had inconsistent quality, color variation, and missed delivery windows, causing lost sales during peak seasons.',
      solution: 'We identified 12 potential factories, conducted on-site audits on 5, and presented a shortlist of 3. We implemented pre-production sample approval, weekly production monitoring, and a pre-shipment inspection protocol with AQL 2.5.',
      results: [
        'Defect rate reduced from 12% to under 2% across 4 seasons',
        'On-time delivery achieved for 4 consecutive peak seasons',
        '15% landed cost improvement vs previous supplier',
        'Supplier qualified for 3-year preferred vendor agreement',
      ],
    },
    {
      client: 'Industrial Equipment Distributor (Germany)',
      industry: 'Industrial Equipment',
      challenge: 'A German distributor needed a new supplier for custom-machined aluminum components with tight tolerances (±0.05mm) and ISO 9001 certification. Previous attempts with trading companies resulted in quality issues and communication delays.',
      solution: 'We verified 5 machining facilities with in-house metrology capabilities. We coordinated capability studies, first-article inspection, and established a 3-stage inspection protocol including 100% critical dimension checks.',
      results: [
        'Zero critical defects in first 8 production shipments',
        'Supplier qualified for long-term framework agreement',
        'Lead time reduced by 11 days through process optimization',
        'Annual cost savings of approximately €87,000',
      ],
    },
    {
      client: 'E-commerce Brand (Australia)',
      industry: 'Consumer Electronics Accessories',
      challenge: 'An Australian e-commerce brand needed to launch a private-label wireless earbud line. They had no prior China sourcing experience and needed support with supplier selection, quality control, and compliance documentation.',
      solution: 'We sourced 8 factories, conducted audits, and managed the full sampling process. We coordinated Bluetooth certification testing, packaging compliance, and established a pre-shipment inspection protocol with functional testing.',
      results: [
        'Product launched on schedule with 3 SKUs',
        'First production batch passed all compliance tests',
        'Return rate under 1.5% in first 6 months',
        'Client expanded to 7 additional products with same supplier',
      ],
    },
    {
      client: 'B2B Automotive Parts Wholesaler (UK)',
      industry: 'Automotive',
      challenge: 'A UK wholesaler needed to diversify supply for aftermarket brake components. They required IATF 16949 certified suppliers and consistent quality across multiple SKUs with annual volumes exceeding 80,000 units.',
      solution: 'We identified 4 IATF-certified brake component manufacturers, conducted detailed process audits, and implemented a sampling and approval process for each SKU. We established quarterly quality reviews and ongoing production monitoring.',
      results: [
        'Two suppliers qualified and onboarded within 5 months',
        'Quality consistency improved; PPM reduced from 850 to 120',
        'Pricing 9% below previous single-source arrangement',
        'Dual-sourcing strategy implemented for risk mitigation',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">Case Studies</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Real results for real businesses</h1>
            <p className="text-lg text-slate-600">These case studies illustrate how we help clients reduce risk, improve quality, and build reliable supply chains — not just find the lowest price.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {caseStudies.map((cs, idx) => (
            <CaseStudyCard key={idx} {...cs} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Your results may vary — but the approach is consistent</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Every sourcing project is different. We adapt our process to your product, quality requirements, and timeline. The common thread is documented verification and clear communication.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-white text-slate-900 rounded-md hover:bg-slate-100">Discuss Your Project</Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
