import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { SectionHeader, Card, Badge } from '@/components/ui/index.jsx';

const caseStudies = [
  {
    id: 'furniture-uk',
    flag: '🇬🇧',
    client: 'UK Furniture Retailer',
    industry: 'Furniture & Home',
    product: 'Solid Wood Dining Sets',
    challenge: 'The client had been sourcing from a single supplier for 3 years but was experiencing inconsistent quality and rising prices. They needed to diversify their supplier base without compromising on EN 71 and REACH compliance.',
    solution: 'We audited 6 factories in Guangdong and Fujian, shortlisted 3 that met compliance requirements, and arranged comparative samples. We negotiated a 22% unit cost reduction with the top-ranked factory.',
    results: ['22% reduction in unit cost', 'EN 71 and REACH compliance maintained', 'Lead time reduced from 90 to 65 days', '2 backup suppliers qualified'],
    duration: '8 weeks',
    imgId: 'cs-furniture-uk-img-a1b2c3',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    flag: '🇺🇸',
    client: 'US Consumer Electronics Brand',
    industry: 'Electronics & Tech',
    product: 'Smart Home Devices',
    challenge: 'A US startup needed to manufacture their first smart home product in China. They had no existing supplier relationships and needed FCC and UL certification support alongside production.',
    solution: 'We identified 3 factories with experience in FCC-certified products, coordinated pre-certification testing, and managed the production process through to first shipment.',
    results: ['FCC certification passed on first attempt', '3 qualified factories identified', 'First production run delivered on schedule', 'Ongoing production monitoring established'],
    duration: '12 weeks',
    imgId: 'cs-electronics-us-img-d4e5f6',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    flag: '🇦🇺',
    client: 'Australian Sustainable Apparel Brand',
    industry: 'Apparel & Textiles',
    product: 'Organic Cotton Clothing',
    challenge: 'The brand required GOTS-certified organic cotton fabric and factories with ethical labor practices. Previous sourcing attempts had resulted in suppliers claiming certifications they did not hold.',
    solution: 'We verified GOTS certification directly with the certifying body, audited 4 factories for labor practices, and coordinated sample development for 12 SKUs.',
    results: ['GOTS-certified supply chain established', 'Lead time reduced by 3 weeks', '12 SKUs sampled and approved', 'Ethical audit report provided'],
    duration: '10 weeks',
    imgId: 'cs-apparel-au-img-g7h8i9',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'tools-de',
    flag: '🇩🇪',
    client: 'German Hardware Distributor',
    industry: 'Tools & Hardware',
    product: 'Power Tools & Hand Tools',
    challenge: 'The distributor needed CE-marked power tools at competitive prices. They had received a shipment from a previous agent that failed CE testing, resulting in a costly recall.',
    solution: 'We sourced from factories with existing CE documentation, arranged third-party CE testing before shipment, and implemented a pre-shipment inspection protocol for all future orders.',
    results: ['CE compliance verified pre-shipment', 'Zero quality rejections in 18 months', '15% cost saving vs. previous supplier', 'Ongoing inspection protocol in place'],
    duration: '6 weeks',
    imgId: 'cs-tools-de-img-j1k2l3',
    titleId: 'cs-tools-de-title',
    descId: 'cs-tools-de-desc',
  },
  {
    id: 'toys-ca',
    flag: '🇨🇦',
    client: 'Canadian Toy Importer',
    industry: 'Toys & Baby Products',
    product: 'Wooden Educational Toys',
    challenge: 'The importer needed EN 71 and ASTM F963-compliant wooden toys. They had struggled to find factories willing to provide test reports and were concerned about paint safety.',
    solution: 'We sourced from factories with existing ASTM and EN 71 test reports, arranged additional paint safety testing, and conducted pre-shipment inspections on every order.',
    results: ['ASTM F963 and EN 71 compliance confirmed', 'Paint safety testing passed', 'Consistent quality across 4 orders', 'Supplier relationship established for 2+ years'],
    duration: '7 weeks',
    imgId: 'cs-toys-ca-img-m4n5o6',
    titleId: 'cs-toys-ca-title',
    descId: 'cs-toys-ca-desc',
  },
  {
    id: 'fitness-nl',
    flag: '🇳🇱',
    client: 'Dutch Fitness Equipment Brand',
    industry: 'Sports & Outdoor',
    product: 'Commercial Gym Equipment',
    challenge: 'The brand was expanding into commercial gym equipment and needed suppliers capable of producing to commercial-grade specifications with appropriate load testing documentation.',
    solution: 'We identified 2 factories with commercial gym equipment experience, arranged load testing, and negotiated OEM branding terms including custom packaging.',
    results: ['2 qualified commercial-grade suppliers', 'Load testing documentation provided', 'OEM branding and packaging arranged', 'First container delivered within 14 weeks'],
    duration: '9 weeks',
    imgId: 'cs-fitness-nl-img-p7q8r9',
    titleId: 'cs-fitness-nl-title',
    descId: 'cs-fitness-nl-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#1a4f8a] py-16 md:py-20">
        <div className="section-container">
          <Badge variant="gold" className="mb-4">Case Studies</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Real Results for Real Buyers
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            See how we've helped businesses across industries and countries source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="space-y-10">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? '' : ''}`}>
                  <div className="relative h-56 lg:h-auto min-h-56">
                    <img
                      alt={cs.product}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 text-3xl">{cs.flag}</div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="default">{cs.industry}</Badge>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4a017] text-[#d4a017]" />
                      ))}
                    </div>
                    <h2 id={cs.titleId} className="text-xl font-bold text-brand-dark mb-1">{cs.client}</h2>
                    <p className="text-[#1a4f8a] font-semibold text-sm mb-4">{cs.product}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-brand-body text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">Our Solution</h4>
                        <p className="text-brand-body text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-brand-bg rounded-xl p-4 mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-brand-dark">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-brand-muted text-sm">
                      <Clock className="w-4 h-4" />
                      Project duration: {cs.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to write your own success story?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Tell us about your product and sourcing goals. We'll put together a plan to help you source from China with confidence.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#a93226] transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
