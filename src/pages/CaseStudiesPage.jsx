import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionLabel from '@/components/SectionLabel';

const caseStudies = [
  {
    id: 'cs-uk-furniture',
    category: 'Furniture',
    country: '🇬🇧 United Kingdom',
    title: 'UK Furniture Retailer Reduces Defect Rate and Sourcing Costs',
    challenge: 'A UK-based furniture importer was experiencing high defect rates (8–12%) from their existing Chinese supplier and needed to diversify their supply chain without disrupting ongoing sales.',
    solution: 'We identified and audited 5 alternative furniture factories in Foshan, shortlisted 3 based on quality standards and pricing, arranged sample production, and implemented a pre-shipment inspection protocol.',
    results: ['Defect rate reduced from 11% to under 1%', 'Sourcing cost reduced by 22%', 'Lead time improved by 8 days', 'Two backup suppliers qualified'],
    quote: 'SSourcing China gave us the confidence to switch suppliers without the usual risk. Their factory audits and QC reports were thorough and professional.',
    author: 'Operations Director, UK Furniture Retailer',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
  },
  {
    id: 'cs-us-electronics',
    category: 'Electronics',
    country: '🇺🇸 United States',
    title: 'US E-Commerce Brand Launches Private Label Electronics Line',
    challenge: 'An American e-commerce entrepreneur wanted to launch a private label smart home product line on Amazon but had no experience sourcing from China and no existing supplier relationships.',
    solution: 'We managed the entire process: product research, OEM manufacturer sourcing, sample development, packaging design coordination, quality inspection, and Amazon FBA shipping arrangement.',
    results: ['Product launched in 4 months from brief to delivery', 'Achieved 4.6-star average rating on Amazon', '3x ROI in the first year', 'Expanded to 3 additional SKUs in year two'],
    quote: 'As a first-time importer, I had no idea where to start. SSourcing China handled everything and kept me informed throughout. The product quality exceeded my expectations.',
    author: 'Founder, US E-Commerce Brand',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
  },
  {
    id: 'cs-au-apparel',
    category: 'Apparel',
    country: '🇦🇺 Australia',
    title: 'Australian Fashion Brand Scales Production Across 6 Seasons',
    challenge: 'A growing Australian fashion brand needed to scale production from 2,000 to 8,000 units per season while maintaining consistent quality and meeting tight retail deadlines.',
    solution: 'We established relationships with two complementary garment factories in Guangzhou, implemented in-line and pre-shipment inspections, and managed production scheduling across multiple concurrent orders.',
    results: ['Production scaled 3x over 18 months', 'On-time delivery rate of 96%', 'Consistent quality across all seasons', 'Cost per unit reduced by 15% through volume negotiation'],
    quote: 'Having a reliable team on the ground in China has been transformative for our business. We can now plan seasons with confidence knowing quality and delivery are managed.',
    author: 'CEO, Australian Fashion Brand',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'cs-de-machinery',
    category: 'Machinery',
    country: '🇩🇪 Germany',
    title: 'German Distributor Sources Industrial Equipment at Competitive Prices',
    challenge: 'A German industrial equipment distributor wanted to add Chinese-manufactured power tools and equipment to their product range but needed assurance of quality and CE certification compliance.',
    solution: 'We sourced CE-certified manufacturers in Zhejiang, conducted factory audits focusing on quality management systems, arranged third-party testing, and managed the first three container shipments.',
    results: ['CE-certified products sourced and verified', '35% lower cost vs. European alternatives', 'Zero compliance issues on import', 'Ongoing supply relationship established'],
    quote: 'The compliance and certification verification was critical for us. SSourcing China understood our requirements and found suppliers who met our standards.',
    author: 'Procurement Manager, German Distributor',
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
    imgId: 'cs-de-machinery-img-j1k2l3',
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel className="text-red-400">Case Studies</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Sourcing Projects, Real Results
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              See how we've helped businesses across different industries and countries source products from China more efficiently, with better quality and lower risk.
            </p>
            <CTAButton to="/contact" className="text-base px-8 py-4">
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">{cs.category}</span>
                      <span className="text-sm text-slate-500">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">{cs.title}</h2>

                    <div className="mb-5">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">The Challenge</p>
                      <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Our Approach</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Results</p>
                      <ul className="flex flex-col gap-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-3 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="border-l-4 border-red-500 pl-4 py-1">
                      <p className="text-slate-600 text-sm italic leading-relaxed mb-2">"{cs.quote}"</p>
                      <cite className="text-slate-500 text-xs not-italic font-medium">— {cs.author}</cite>
                    </blockquote>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing project and let's discuss how we can help.
          </p>
          <CTAButton to="/contact" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
