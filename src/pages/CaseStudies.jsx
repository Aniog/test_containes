import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, ShieldAlert } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs1',
    title: 'European Electronics Brand Cuts Production Costs by 30%',
    client: 'German Consumer Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'A German electronics brand was sourcing PCBs and assembled components from a single Chinese supplier with steadily increasing prices and inconsistent delivery. They needed to diversify their supply chain while maintaining quality.',
    solution: 'We identified and audited 3 ISO 9001-certified PCB assembly factories in Shenzhen. After on-site audits and sample evaluation, we helped the client negotiate competitive pricing and established a dual-supplier strategy to reduce risk.',
    results: [
      '30% reduction in unit production cost',
      '98% on-time delivery rate (up from 72%)',
      'Defect rate reduced from 3.2% to 0.8%',
      'Dual-supplier strategy eliminates single-source risk',
    ],
    imgId: 'cs-electronics-a1b2c3',
    titleId: 'cs1-title',
    descId: 'cs1-challenge',
  },
  {
    id: 'cs2',
    title: 'US Furniture Retailer Launches 15 New SKUs in 6 Months',
    client: 'US Online Furniture Retailer',
    industry: 'Furniture & Home Decor',
    challenge: 'A fast-growing US e-commerce furniture brand wanted to expand from 3 to 15 product SKUs. They needed reliable factories across different furniture categories (solid wood, metal, upholstered) and consistent quality across all suppliers.',
    solution: 'We sourced and audited 5 specialized factories in Guangdong and Zhejiang provinces. Our team managed the sampling process for all 15 SKUs, coordinated production schedules, and conducted in-line and pre-shipment inspections.',
    results: [
      '15 new SKUs successfully launched within 6 months',
      '40% improvement in gross margin vs. previous supplier',
      'Consistent quality across all product categories',
      'Established long-term supplier relationships',
    ],
    imgId: 'cs-furniture-d4e5f6',
    titleId: 'cs2-title',
    descId: 'cs2-challenge',
  },
  {
    id: 'cs3',
    title: 'Australian Brand Avoids $200K Quality Disaster',
    client: 'Australian Home & Garden Brand',
    industry: 'Home & Garden Products',
    challenge: 'The client had placed an order for 10,000 units of garden equipment with a new factory. Our QC team was engaged for a pre-shipment inspection, which revealed a critical material defect that would have caused product failure within months of use.',
    solution: 'Our inspection team identified the material substitution during pre-shipment inspection. We documented the issue, negotiated with the factory to rework the entire order using the specified materials, and supervised the rework process.',
    results: [
      'Estimated $200,000 saved in potential returns and warranty claims',
      'Zero customer complaints or returns on the order',
      'Factory agreed to material compliance guarantees for future orders',
      'Brand reputation protected from a damaging recall',
    ],
    imgId: 'cs-quality-g7h8i9',
    titleId: 'cs3-title',
    descId: 'cs3-challenge',
  },
  {
    id: 'cs4',
    title: 'UK Startup Goes from Idea to First Shipment in 12 Weeks',
    client: 'UK Fitness Equipment Startup',
    industry: 'Sports & Fitness',
    challenge: 'A UK startup had a design for an innovative resistance band system but no manufacturing experience. They needed help with DFM (Design for Manufacturing), material selection, factory identification, and managing the entire production process.',
    solution: 'We connected the client with an industrial designer in Shenzhen for DFM optimization, sourced appropriate materials, identified a factory with injection molding and assembly capabilities, and managed the entire process from prototype to production.',
    results: [
      'From concept to first shipment in 12 weeks',
      'Design optimized for manufacturing, reducing unit cost by 25%',
      'Successfully passed EU safety compliance testing',
      'Established scalable production pipeline for future orders',
    ],
    imgId: 'cs-startup-j1k2l3',
    titleId: 'cs4-title',
    descId: 'cs4-challenge',
  },
  {
    id: 'cs5',
    title: 'Canadian Distributor Streamlines Supply Chain, Saves 18%',
    client: 'Canadian Industrial Supply Distributor',
    industry: 'Industrial Hardware & Tools',
    challenge: 'A Canadian distributor was sourcing from 8 different suppliers across China, managing communication, quality, and logistics separately for each. This created significant overhead and inconsistent product quality.',
    solution: 'We consolidated their supply chain, audited all existing suppliers, retained the top 4, and introduced 2 new factories for better pricing. We took over all supplier communication, quality control, and logistics coordination.',
    results: [
      '18% overall cost reduction through consolidation',
      'Supplier count reduced from 8 to 6 while maintaining product range',
      'Quality consistency improved with standardized inspection protocols',
      'Client freed 20+ hours/week previously spent on supplier management',
    ],
    imgId: 'cs-distributor-m4n5o6',
    titleId: 'cs5-title',
    descId: 'cs5-challenge',
  },
  {
    id: 'cs6',
    title: 'French Brand Achieves Ethical Sourcing Compliance',
    client: 'French Fashion & Accessories Brand',
    industry: 'Textiles & Fashion',
    challenge: 'A French fashion brand needed to ensure their Chinese textile suppliers met European ethical sourcing standards (BSCI, SMETA). Previous attempts to audit factories remotely had been unreliable.',
    solution: 'Our team conducted comprehensive on-site social compliance audits at 7 factories, identifying areas for improvement. We worked with the top 3 factories to implement corrective actions and achieve BSCI certification.',
    results: [
      '3 factories achieved BSCI certification within 4 months',
      'Full supply chain transparency for brand\'s CSR reporting',
      'Product quality improved alongside working conditions',
      'Brand successfully launched "Ethically Made" product line',
    ],
    imgId: 'cs-ethical-p7q8r9',
    titleId: 'cs6-title',
    descId: 'cs6-challenge',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Real Results from Real Sourcing Projects
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              See how we've helped businesses around the world overcome sourcing challenges, 
              reduce costs, and build reliable supply chains in China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-navy mb-2">{cs.title}</h2>
                  <p className="text-brand-blue font-medium text-sm mb-4">{cs.client}</p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Challenge</h4>
                    <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{cs.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Results</h4>
                    <ul className="space-y-2">
                      {cs.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Bar */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: TrendingUp, value: '35%', label: 'Average Cost Savings' },
              { icon: DollarSign, value: '$50M+', label: 'Client Revenue Generated' },
              { icon: Clock, value: '98%', label: 'On-Time Delivery Rate' },
              { icon: ShieldAlert, value: '0.3%', label: 'Average Defect Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Write Your Success Story
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Every sourcing challenge has a solution. Tell us about your project and let's find it together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover transition-colors text-lg shadow-lg"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}