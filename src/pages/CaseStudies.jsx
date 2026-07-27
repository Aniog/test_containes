import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, TrendingDown, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    client: 'European Furniture Importer',
    location: 'Netherlands',
    product: 'Solid wood furniture & upholstered pieces',
    challenge: 'The client had been sourcing furniture from China for 3 years but experienced a consistent 12% defect rate. Returns and replacements were eroding margins, and their brand reputation was suffering from quality complaints.',
    solution: 'We conducted factory audits on their existing suppliers, identified quality control gaps, and introduced systematic pre-shipment inspections with detailed AQL checks. We also found two new factories with better quality management systems.',
    results: [
      { icon: TrendingDown, value: '85%', label: 'Defect rate reduction' },
      { icon: ShieldCheck, value: '2%', label: 'New defect rate' },
      { icon: TrendingUp, value: '30%', label: 'Margin improvement' },
    ],
    imgId: 'cs-furn-a1b2c3',
    titleId: 'cs-furn-title',
    descId: 'cs-furn-desc',
  },
  {
    client: 'US Electronics Distributor',
    location: 'California, USA',
    product: 'Consumer electronics & smart home devices',
    challenge: 'The client was working with trading companies that could not provide consistent lead times. Orders were frequently delayed by 2-4 weeks, and product quality varied between batches. They needed direct factory access.',
    solution: 'We verified and connected the client with 3 direct manufacturers in Shenzhen, replacing their trading company intermediaries. We established production monitoring protocols and negotiated better payment terms.',
    results: [
      { icon: Clock, value: '40%', label: 'Lead time reduction' },
      { icon: TrendingDown, value: '15%', label: 'Cost savings' },
      { icon: ShieldCheck, value: '3', label: 'Verified factories' },
    ],
    imgId: 'cs-elec-d4e5f6',
    titleId: 'cs-elec-title',
    descId: 'cs-elec-desc',
  },
  {
    client: 'Australian Home Goods Brand',
    location: 'Melbourne, Australia',
    product: 'Kitchenware & home organization products',
    challenge: 'A startup brand launching their first product line needed to go from concept to delivered goods within a tight timeline. They had no prior China sourcing experience and needed guidance through the entire process.',
    solution: 'We managed the full sourcing cycle: supplier search, factory verification, sample coordination, production monitoring, quality inspection, and shipping. From initial inquiry to first container delivery in 8 weeks.',
    results: [
      { icon: Clock, value: '8 wks', label: 'From inquiry to delivery' },
      { icon: CheckCircle2, value: '1st', label: 'Container shipment' },
      { icon: TrendingUp, value: '3', label: 'Product lines launched' },
    ],
    imgId: 'cs-home-g7h8i9',
    titleId: 'cs-home-title',
    descId: 'cs-home-desc',
  },
  {
    client: 'Middle East Auto Parts Distributor',
    location: 'Dubai, UAE',
    product: 'Aftermarket auto parts & accessories',
    challenge: 'The client needed to source a wide range of aftermarket auto parts but struggled with inconsistent quality and certification compliance. Several shipments had been rejected at customs due to missing documentation.',
    solution: 'We identified certified auto parts factories, established quality inspection protocols, and managed all certification and customs documentation. We also coordinated consolidated shipments to reduce logistics costs.',
    results: [
      { icon: ShieldCheck, value: '100%', label: 'Customs clearance rate' },
      { icon: TrendingDown, value: '25%', label: 'Logistics cost reduction' },
      { icon: CheckCircle2, value: '50+', label: 'Parts categories sourced' },
    ],
    imgId: 'cs-auto-j1k2l3',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
  },
  {
    client: 'UK Textile Brand',
    location: 'London, UK',
    product: 'Sustainable fashion & organic cotton apparel',
    challenge: 'The client required organic cotton certification (GOTS) and ethical manufacturing practices. Finding factories that could meet both certification requirements and quality standards proved difficult.',
    solution: 'We located and verified GOTS-certified factories in Jiangsu province, conducted social compliance audits, and established a quality control protocol that ensured both material authenticity and production quality.',
    results: [
      { icon: ShieldCheck, value: 'GOTS', label: 'Certification achieved' },
      { icon: TrendingUp, value: '4', label: 'Certified factories found' },
      { icon: CheckCircle2, value: '98%', label: 'First-pass quality rate' },
    ],
    imgId: 'cs-text-m4n5o6',
    titleId: 'cs-text-title',
    descId: 'cs-text-desc',
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
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="cs-page-title" className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p id="cs-page-subtitle" className="text-lg text-navy-200 max-w-2xl">
            Real results from clients who sourced through SSourcing China. Each case demonstrates how our services address specific sourcing challenges.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, idx) => (
        <section key={cs.client} className={`py-16 md:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  alt={cs.client}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cs-page-subtitle] [cs-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              <div>
                <div className="mb-2">
                  <span className="bg-primary-50 text-primary-500 px-3 py-1 rounded-full text-xs font-semibold">
                    {cs.location}
                  </span>
                </div>
                <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">{cs.client}</h2>
                <p id={cs.descId} className="text-sm text-navy-500 mb-6">{cs.product}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-navy-900 mb-2">Challenge</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{cs.challenge}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-navy-900 mb-2">Our Solution</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{cs.solution}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-navy-50 rounded-lg p-4 text-center border border-navy-100">
                      <r.icon className="w-5 h-5 text-accent-500 mx-auto mb-2" />
                      <div className="text-xl font-bold text-navy-900">{r.value}</div>
                      <div className="text-xs text-navy-500">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary-500 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Tell us about your sourcing challenge. We'll propose a solution tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors inline-flex items-center gap-2"
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
