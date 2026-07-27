import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, Award, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'electronics-brand',
    title: 'Consumer Electronics Brand Cuts Sourcing Costs by 23%',
    client: 'European electronics brand',
    industry: 'Consumer Electronics',
    challenge: 'A European consumer electronics brand was struggling with rising costs from their existing supplier and inconsistent product quality. They needed to find alternative manufacturers without compromising on quality or delivery timelines.',
    approach: 'We identified and audited 8 potential factories across Shenzhen and Dongguan. After thorough evaluation, we shortlisted 3 suppliers with the right certifications (ISO 9001, CE, RoHS). We arranged samples, facilitated negotiations, and helped the client transition to a new supplier.',
    results: [
      '23% reduction in unit cost',
      'Improved quality consistency (defect rate dropped from 4.2% to 0.8%)',
      'Faster lead times (45 days to 30 days)',
      'Established backup supplier for risk mitigation',
    ],
    imgId: 'case-electronics-brand-a1b2c3',
  },
  {
    id: 'furniture-importer',
    title: 'Furniture Importer Establishes Reliable Supply Chain for 50+ Containers/Year',
    client: 'North American furniture retailer',
    industry: 'Furniture Manufacturing',
    challenge: 'A North American furniture retailer wanted to expand their product line with Chinese-manufactured furniture but had no prior experience sourcing from China. They needed a trusted partner to manage the entire process.',
    approach: 'We guided the client through the entire sourcing journey — from product specification and supplier identification to factory audits, production monitoring, and logistics coordination. We established quality control checkpoints at every stage and provided weekly progress reports.',
    results: [
      'Successfully launched 3 furniture collections',
      '50+ containers shipped annually with consistent quality',
      'Zero major quality disputes in 3 years',
      'Average 18% cost savings vs. domestic sourcing',
    ],
    imgId: 'case-furniture-b2c3d4',
  },
  {
    id: 'packaging-company',
    title: 'Custom Packaging Company Reduces Lead Time by 40%',
    client: 'UK-based packaging distributor',
    industry: 'Packaging & Printing',
    challenge: 'A UK packaging distributor was facing long lead times and communication issues with their Chinese packaging supplier, causing delays and lost sales. They needed more reliable suppliers and better production oversight.',
    approach: 'We audited 12 packaging factories and identified 3 qualified suppliers with strong export experience. We implemented a production monitoring system with weekly updates and on-site QC. We also helped negotiate better payment terms and established clear communication protocols.',
    results: [
      'Lead time reduced from 8 weeks to under 5 weeks',
      'On-time delivery rate improved from 72% to 96%',
      'Quality rejection rate decreased by 60%',
      'Established long-term supplier relationships',
    ],
    imgId: 'case-packaging-c3d4e5',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Parts Distributor Saves $120K Annually Through Strategic Sourcing',
    client: 'Australian industrial supplier',
    industry: 'Industrial Machinery & Parts',
    challenge: 'An Australian industrial parts distributor was sourcing from multiple agents with inconsistent pricing and quality. They needed a single reliable partner to consolidate their sourcing and improve cost efficiency.',
    approach: 'We consolidated their sourcing across 15 product categories under one managed program. Our team identified overlapping suppliers, negotiated volume discounts, and implemented standardized quality inspection protocols across all categories.',
    results: [
      '$120,000 annual cost savings',
      'Supplier base consolidated from 8 to 3 strategic partners',
      'Consistent quality across all product categories',
      'Streamlined logistics with consolidated shipments',
    ],
    imgId: 'case-industrial-d4e5f6',
  },
  {
    id: 'sportswear-startup',
    title: 'Sportswear Startup Launches First Collection with China Manufacturing',
    client: 'US-based fitness apparel startup',
    industry: 'Textiles & Apparel',
    challenge: 'A fitness apparel startup needed to find a manufacturer for their first collection but had no experience with overseas production. They needed guidance on materials, MOQs, and quality standards for activewear.',
    approach: 'We connected the client with 5 sportswear manufacturers specializing in performance fabrics. Our team helped refine tech packs, arranged sample development, and managed the entire pre-production process. We conducted inline and final inspections to ensure quality.',
    results: [
      'Successful launch of first collection (8 SKUs)',
      'Competitive per-unit cost within target budget',
      'Quality met international activewear standards',
      'Established scalable production capacity for growth',
    ],
    imgId: 'case-sportswear-e5f6g7',
  },
  {
    id: 'medical-device',
    title: 'Medical Device Company Navigates Regulatory Compliance for China Sourcing',
    client: 'German medical device company',
    industry: 'Medical & Healthcare',
    challenge: 'A German medical device company needed to source components from China while meeting strict EU medical device regulations (MDR). They required suppliers with ISO 13485 certification and cleanroom manufacturing capabilities.',
    approach: 'We identified and audited 6 ISO 13485 certified manufacturers with cleanroom facilities. Our team verified regulatory documentation, conducted factory audits focused on quality systems, and managed the sampling and validation process.',
    results: [
      'Identified 2 fully compliant suppliers',
      'All regulatory documentation verified and approved',
      'Successful component validation and production',
      'Ongoing QC monitoring with zero compliance issues',
    ],
    imgId: 'case-medical-f6g7h8',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from real clients across industries and continents
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.id}
                id={`case-${cs.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-xs font-medium mb-4">
                    {cs.industry}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-4">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-gold-500 font-medium mb-4">Client: {cs.client}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wider mb-2">Our Approach</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.approach}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">Results</h3>
                    <ul className="space-y-2">
                      {cs.results.map((r, j) => (
                        <li key={j} className="flex items-start space-x-2 text-sm text-gray-700">
                          <TrendingDown className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[case-${cs.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span id={`case-${cs.id}-title`} className="hidden">{cs.client} - {cs.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <Star className="w-10 h-10 text-gold-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-navy-600">98%</div>
              <div className="text-sm text-gray-500 mt-1">Client Retention Rate</div>
            </div>
            <div className="text-center p-6">
              <TrendingDown className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-navy-600">15-25%</div>
              <div className="text-sm text-gray-500 mt-1">Average Cost Savings</div>
            </div>
            <div className="text-center p-6">
              <Award className="w-10 h-10 text-navy-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-navy-600">30+</div>
              <div className="text-sm text-gray-500 mt-1">Countries Served</div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors shadow-sm"
            >
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}