import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const caseStudies = [
  {
    id: 'uk-furniture',
    category: 'Furniture & Home Decor',
    client: 'HomeGoods Direct',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'Sourcing Outdoor Furniture for a UK Retailer',
    challenge: 'A UK-based home goods retailer needed to source a range of outdoor furniture for their spring collection. They had been quoted high prices by trading companies and had no way to verify factory quality.',
    solution: 'We identified three verified outdoor furniture manufacturers in Foshan, conducted factory audits, and negotiated directly with the best-fit supplier. We managed sample production and conducted a pre-shipment inspection before the container was loaded.',
    results: [
      '23% cost reduction vs. trading company quotes',
      'Factory audit confirmed ISO 9001 certification',
      'Pre-shipment inspection: 0 critical defects',
      'On-time delivery for spring season launch',
    ],
    rating: 5,
    quote: 'SSourcing found us a reliable furniture supplier within two weeks. Their factory audit report gave us the confidence to place a large order. Quality was exactly as specified.',
    quoteName: 'James Whitfield, Purchasing Manager',
    titleId: 'cs-uk-furn-title',
    descId: 'cs-uk-furn-desc',
    imgId: 'cs-uk-furn-img-a1b2c3',
  },
  {
    id: 'brazil-electronics',
    category: 'Electronics & Components',
    client: 'Bella Imports',
    country: 'Brazil',
    flag: '🇧🇷',
    title: 'LED Lighting Procurement for a Brazilian Distributor',
    challenge: 'A Brazilian electronics distributor had previously received a shipment of LED lights that failed local safety tests. They needed a reliable supplier with proper certifications and consistent quality.',
    solution: 'We sourced three certified LED manufacturers, verified their CE and RoHS certifications, and arranged sample testing. We implemented a strict in-line inspection protocol and conducted a full pre-shipment inspection on every order.',
    results: [
      'All products passed Brazilian INMETRO certification',
      'Zero quality rejections across 4 consecutive orders',
      'Supplier relationship established for ongoing supply',
      'Delivery time reduced by 2 weeks vs. previous supplier',
    ],
    rating: 5,
    quote: 'We had been burned by bad suppliers before. SSourcing\'s verification process is thorough and professional. Our first order went smoothly from production to delivery.',
    quoteName: 'Maria Santos, Director',
    titleId: 'cs-br-elec-title',
    descId: 'cs-br-elec-desc',
    imgId: 'cs-br-elec-img-d4e5f6',
  },
  {
    id: 'usa-auto',
    category: 'Auto Parts',
    client: 'TechParts Inc.',
    country: 'United States',
    flag: '🇺🇸',
    title: 'Auto Parts Sourcing for a US Aftermarket Distributor',
    challenge: 'A US auto parts distributor wanted to expand their product range with Chinese-manufactured aftermarket parts. They needed suppliers who could meet US quality standards and provide consistent supply.',
    solution: 'We identified and audited five auto parts manufacturers, focusing on quality management systems and testing capabilities. We implemented a production monitoring program with weekly photo updates and conducted pre-shipment inspections on all orders.',
    results: [
      'Established supply relationships with 3 verified manufacturers',
      'Weekly production updates with photo documentation',
      'Product return rate below 0.5% across all SKUs',
      'Landed cost 31% lower than previous domestic sourcing',
    ],
    rating: 5,
    quote: 'The production follow-up service is invaluable. We get weekly updates with photos. No more surprises when the container arrives. Highly recommended.',
    quoteName: 'David Kim, VP Operations',
    titleId: 'cs-us-auto-title',
    descId: 'cs-us-auto-desc',
    imgId: 'cs-us-auto-img-g7h8i9',
  },
  {
    id: 'australia-toys',
    category: 'Toys & Baby Products',
    client: 'KidsBright Retail',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Educational Toy Sourcing for an Australian Retailer',
    challenge: 'An Australian toy retailer needed to source a range of educational toys that met Australian safety standards (AS/NZS). They had no experience sourcing from China and were concerned about compliance and quality.',
    solution: 'We identified toy manufacturers with experience in Australian market compliance, verified their testing capabilities, and coordinated third-party safety testing. We managed the entire process from supplier selection to delivery.',
    results: [
      'All products passed AS/NZS safety certification',
      'Supplier shortlisted and audited within 10 days',
      'Sample approval completed in 3 weeks',
      'First order delivered on schedule for Christmas season',
    ],
    rating: 5,
    quote: 'As a first-time importer, I was nervous about sourcing from China. SSourcing held our hand through every step. The compliance support was especially valuable.',
    quoteName: 'Sarah Chen, Founder',
    titleId: 'cs-au-toys-title',
    descId: 'cs-au-toys-desc',
    imgId: 'cs-au-toys-img-j1k2l3',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            See how we've helped buyers from around the world source successfully from China.
          </p>
          <CTAButton to="/contact" variant="primary" showArrow>
            Start Your Sourcing Project
          </CTAButton>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map(({ id, category, client, country, flag, title, challenge, solution, results, rating, quote, quoteName, imgId, titleId, descId }, index) => (
              <div key={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{flag}</span>
                      <div>
                        <span className="text-brand-red text-xs font-bold uppercase tracking-widest block">{category}</span>
                        <span className="text-gray-500 text-sm">{client} — {country}</span>
                      </div>
                    </div>
                    <h2 id={titleId} className="text-2xl font-bold text-brand-dark mb-5">{title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-2">The Challenge</h3>
                        <p id={descId} className="text-gray-500 text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-2">Our Solution</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{solution}</p>
                      </div>
                      <div>
                        <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-2">Results</h3>
                        <ul className="space-y-1.5">
                          {results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-bg rounded-xl p-4 border border-gray-100">
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm italic mb-2">"{quote}"</p>
                      <p className="text-gray-400 text-xs font-medium">{quoteName}</p>
                    </div>
                  </div>
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-blue-100 mb-8">
            Join hundreds of buyers who source from China with confidence through SSourcing China.
          </p>
          <CTAButton to="/contact" variant="primary" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
