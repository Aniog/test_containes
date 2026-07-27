import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'garden-tools',
    title: 'Garden Tools for European Retail Chain',
    client: 'Major European home & garden retailer',
    industry: 'Garden & Outdoor',
    location: 'Zhejiang Province',
    challenge: 'The client needed a complete line of premium garden hand tools — 45 SKUs including pruners, trowels, weeders, and loppers — with consistent quality matching their existing European quality standards. Previous attempts with other agents resulted in inconsistent quality across SKUs and missed seasonal deadlines.',
    approach: 'We identified 8 potential factories in Yongkang (China\'s hardware hub), audited all 8 on-site, and shortlisted 3. We coordinated simultaneous sampling across all 45 SKUs, conducted a unified QC standards workshop with the chosen factory, and set up a dedicated production line.',
    results: [
      '120,000 units delivered across 45 SKUs in 3 shipments',
      '20% cost reduction vs. previous European supplier',
      'AQL 2.5 inspection — 98.7% pass rate on first inspection',
      '100% on-time delivery for seasonal launch window',
      'Ongoing relationship — now in 4th year of partnership',
    ],
    imgId: 'cs-detail-garden-tools-a1b2c3',
  },
  {
    id: 'led-lighting',
    title: 'LED Commercial Lighting for US Distributor',
    client: 'US-based electrical products distributor',
    industry: 'Electronics & Lighting',
    location: 'Guangdong Province',
    challenge: 'The client wanted to launch a private-label line of LED panel lights for commercial buildings. Requirements included UL certification, DLC listing for energy rebates, 5-year warranty, and competitive pricing against established brands. Timeline was aggressive — 6 months to market.',
    approach: 'We identified 5 LED manufacturers in Shenzhen and Zhongshan with UL certification experience. Our team managed the full certification process, coordinated with UL labs, set up production QC checkpoints, and created a warranty and after-sales support structure.',
    results: [
      'Product line launched in 6 months with 12 SKUs',
      'Full UL and DLC certification achieved on schedule',
      '50,000 units in first production run',
      'Zero quality returns in the first year',
      'Client expanded to 3 additional product categories with us',
    ],
    imgId: 'cs-detail-led-lighting-d4e5f6',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Collection for Australian Brand',
    client: 'Australian designer furniture brand',
    industry: 'Furniture & Home Decor',
    location: 'Guangdong Province (Foshan)',
    challenge: 'The client designed a 30-piece indoor furniture collection using mixed materials — solid wood, metal, and upholstery. They needed a manufacturing partner who could handle the material complexity, maintain design integrity, and achieve a premium finish at a competitive price.',
    approach: 'We focused on the Foshan furniture cluster, auditing 6 factories with mixed-material capability. Our team facilitated material sourcing (wood from North America, hardware from local specialists), managed 3 rounds of sampling, and conducted in-line QC at each material processing stage.',
    results: [
      '30-piece collection successfully manufactured',
      '35% cost savings vs. Australian manufacturing quote',
      'Consistent premium finish — passed client\'s in-store quality audit',
      'Long-term factory partnership with dedicated production team',
      'Now managing annual collection updates and reorders',
    ],
    imgId: 'cs-detail-furniture-brand-g7h8i9',
  },
  {
    id: 'medical-ppe',
    title: 'Medical PPE for European Healthcare Group',
    client: 'European healthcare supply chain company',
    industry: 'Medical & Healthcare',
    location: 'Multiple provinces',
    challenge: 'During the global PPE shortage, the client urgently needed reliable supply of certified medical-grade PPE — Type IIR surgical masks, nitrile examination gloves, and isolation gowns — meeting EU MDR and EN standards, with consistent quality at scale.',
    approach: 'We rapidly identified and audited 12 factories across 3 provinces. Our team verified every certification in person, implemented enhanced QC protocols for medical-grade products, and managed logistics during a period of extreme port congestion and freight rate volatility.',
    results: [
      '5 million units delivered across 3 product categories in 8 weeks',
      'Full EU MDR and EN standards compliance verified',
      'Established a qualified supplier base for ongoing medical procurement',
      'Implemented a supplier performance scorecard system',
      'Client expanded to sourcing general medical consumables with us',
    ],
    imgId: 'cs-detail-medical-ppe-j0k1l2',
  },
  {
    id: 'packaging-solution',
    title: 'Custom Packaging for US E-Commerce Brand',
    client: 'Fast-growing US D2C e-commerce brand',
    industry: 'Packaging & Printing',
    location: 'Guangdong Province',
    challenge: 'The client needed premium custom packaging — rigid magnetic closure boxes, tissue paper, and thank-you cards — that reflected their luxury brand positioning. They required consistent color matching across materials, quick turnaround, and the ability to scale from 5,000 to 50,000 units as they grew.',
    approach: 'We sourced from a specialized packaging cluster in Dongguan, audited 4 factories, and managed the complete color-matching and proofing process. We negotiated tiered pricing based on volume and set up a Kanban inventory system to ensure supply continuity.',
    results: [
      'Full packaging suite delivered with Pantone-matched consistency',
      '40% cost savings vs. US-based packaging suppliers',
      'Scalable supply — seamless transition from 5K to 50K units',
      'Established 3-supplier backup system for risk management',
      'Now managing all packaging and print materials for the brand',
    ],
    imgId: 'cs-detail-packaging-solution-m3n4o5',
  },
  {
    id: 'industrial-components',
    title: 'Precision Metal Components for German Engineering Firm',
    client: 'German industrial automation company',
    industry: 'Industrial Machinery & Parts',
    location: 'Jiangsu Province',
    challenge: 'The client required precision CNC-machined stainless steel components with tolerances of ±0.01mm, material certification traceability, and ISO 9001-compliant manufacturing processes. Previous attempts with other Chinese suppliers failed on tolerance consistency.',
    approach: 'We focused on the precision machining cluster in Suzhou, auditing 8 factories with CMM inspection capability. We implemented a PPAP (Production Part Approval Process) framework, arranged for third-party material testing, and established an SPC (Statistical Process Control) system for ongoing production.',
    results: [
      '25,000 precision components delivered with zero tolerance failures',
      'Full material certification traceability for every batch',
      'PPAP Level 3 approved on first submission',
      '30% cost reduction vs. German domestic manufacturing',
      'Ongoing partnership for multiple component families',
    ],
    imgId: 'cs-detail-industrial-components-p6q7r8',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Real projects, real results. See how we help buyers across industries source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.id}
                id={cs.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                    {cs.industry} — {cs.location}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-1">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Client: {cs.client}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Challenge</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Our Approach</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{cs.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Results</h3>
                      <ul className="mt-1 space-y-1.5">
                        {cs.results.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold shrink-0">&bull;</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                    <img
                      alt={cs.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[cs-detail-desc-${cs.id}] [cs-detail-title-${cs.id}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="hidden" id={`cs-detail-title-${cs.id}`}>{cs.title}</div>
                  <div className="hidden" id={`cs-detail-desc-${cs.id}`}>{cs.challenge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Your Success Story Starts Here
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every project is unique. Tell us about yours and we will create a tailored sourcing plan.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
