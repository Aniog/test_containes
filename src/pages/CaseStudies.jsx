import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingDown, TrendingUp, Clock, Award } from 'lucide-react';

const cases = [
  {
    id: 'german-electronics',
    title: 'German Electronics Brand Saves 32% on PCB Assembly',
    industry: 'Electronics',
    region: 'Germany',
    challenge: 'A mid-sized German electronics company needed high-quality PCB assembly for industrial controllers but struggled with inconsistent quality and late deliveries from their existing supplier in Southeast Asia.',
    approach: 'We searched our network in Shenzhen and identified 3 ISO 9001 certified PCB assembly factories. We conducted on-site audits of all three, evaluated their quality systems, and coordinated sample runs with each.',
    result: 'The client selected a factory that delivered 99.5% first-pass yield versus 92% from their previous supplier. Unit costs dropped 32% while quality improved significantly. Delivery reliability went from 70% on-time to 98%.',
    stats: [
      { label: 'Cost Reduction', value: '32%', icon: TrendingDown },
      { label: 'Quality Improvement', value: '+7.5%', icon: TrendingUp },
      { label: 'On-Time Delivery', value: '98%', icon: Clock },
      { label: 'First-Pass Yield', value: '99.5%', icon: Award },
    ],
    imgId: 'cs-german-electronics-k7l8m9',
    titleId: 'cs-german-electronics-title',
    descId: 'cs-german-electronics-desc',
  },
  {
    id: 'us-furniture',
    title: 'US Furniture Brand Scales Production 3x in 6 Months',
    industry: 'Furniture',
    region: 'United States',
    challenge: 'A fast-growing US DTC furniture brand needed to scale solid wood furniture manufacturing from 1 container per month to 3, while maintaining premium quality standards. Their existing factory could not scale.',
    approach: 'We identified two solid wood furniture factories in Foshan with spare capacity. We negotiated pricing, set up weekly in-line QC inspections, and implemented a production tracking system with photo updates at each stage.',
    result: 'Production scaled to 3 containers per month within 6 months. Defect rate stayed below 1%. The client launched 5 new SKUs during this period, all sourced through the same factory relationship.',
    stats: [
      { label: 'Production Growth', value: '3x', icon: TrendingUp },
      { label: 'New SKUs Launched', value: '5', icon: Award },
      { label: 'Defect Rate', value: '<1%', icon: TrendingDown },
      { label: 'Scale Timeline', value: '6 months', icon: Clock },
    ],
    imgId: 'cs-us-furniture-n0o1p2',
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
  },
  {
    id: 'uk-textile',
    title: 'UK Sportswear Startup Finds Premium Knitwear Supplier',
    industry: 'Textiles & Apparel',
    region: 'United Kingdom',
    challenge: 'A UK-based sportswear startup needed premium custom knitwear with low MOQs (200 units per design). Large factories turned them away, and they could not find a reliable partner willing to work with a startup.',
    approach: 'We connected them with a specialized knitwear workshop in Dongguan that specializes in small-batch premium production. We negotiated flexible MOQs, set up quality standards, and managed the first three production runs.',
    result: 'Unit cost was 40% below UK manufacturing. The client launched with 6 designs and has since expanded to 15. They now run monthly production cycles with consistent quality and on-time delivery.',
    stats: [
      { label: 'Cost vs UK', value: '-40%', icon: TrendingDown },
      { label: 'Initial Designs', value: '6', icon: Award },
      { label: 'MOQ Achieved', value: '200', icon: TrendingDown },
      { label: 'Current SKUs', value: '15', icon: TrendingUp },
    ],
    imgId: 'cs-uk-textile-q3r4s5',
    titleId: 'cs-uk-textile-title',
    descId: 'cs-uk-textile-desc',
  },
  {
    id: 'australian-hardware',
    title: 'Australian Hardware Importer Cuts Lead Time from 12 to 6 Weeks',
    industry: 'Hardware & Tools',
    region: 'Australia',
    challenge: 'An Australian hardware distributor was sourcing power tools and hand tools through a trading company in Hong Kong with 12-week lead times and frequent communication delays. They wanted direct factory relationships.',
    approach: 'We identified 4 factories in Yongkang (the hardware capital of China), conducted factory audits, and set up direct relationships. We implemented weekly production tracking and pre-shipment QC.',
    result: 'Lead times were cut in half from 12 to 6 weeks. The client saved 18% by eliminating the middleman while gaining direct quality control and faster communication.',
    stats: [
      { label: 'Lead Time', value: '-50%', icon: TrendingDown },
      { label: 'Cost Savings', value: '18%', icon: TrendingDown },
      { label: 'Factories Audited', value: '4', icon: Award },
      { label: 'Weekly Updates', value: 'Yes', icon: Clock },
    ],
    imgId: 'cs-australian-hardware-t6u7v8',
    titleId: 'cs-australian-hardware-title',
    descId: 'cs-australian-hardware-desc',
  },
  {
    id: 'canadian-medical',
    title: 'Canadian Medical Supply Company Achieves FDA-Compliant Production',
    industry: 'Medical Devices',
    region: 'Canada',
    challenge: 'A Canadian company needed FDA-registered factories in China to produce Class I medical devices. They required ISO 13485 certification, clean room production, and full traceability documentation.',
    approach: 'We identified 3 FDA-registered, ISO 13485 certified factories in the Yangtze River Delta region. We conducted detailed compliance audits and coordinated sample production with full documentation packages.',
    result: 'The client established production with a factory that met all regulatory requirements. First shipment passed FDA customs inspection without issues. They have since placed 4 repeat orders.',
    stats: [
      { label: 'Repeat Orders', value: '4', icon: Award },
      { label: 'FDA Clearance', value: 'Passed', icon: TrendingUp },
      { label: 'Factories Vetted', value: '3', icon: Clock },
      { label: 'Certifications', value: 'ISO 13485', icon: Award },
    ],
    imgId: 'cs-canadian-medical-w9x0y1',
    titleId: 'cs-canadian-medical-title',
    descId: 'cs-canadian-medical-desc',
  },
  {
    id: 'french-packaging',
    title: 'French Cosmetics Brand Secures Premium Packaging Supply',
    industry: 'Packaging & Printing',
    region: 'France',
    challenge: 'A French natural cosmetics brand needed premium custom packaging (rigid boxes, glass jars, and labels) with sustainable materials and luxury finishing. European suppliers were 3x their target cost.',
    approach: 'We sourced specialized packaging factories in Guangdong with experience serving European beauty brands. We coordinated material certifications, color matching, and multiple sample rounds.',
    result: 'The client achieved 60% cost savings versus European suppliers while maintaining premium quality. They now source all packaging through our recommended factory with quarterly production runs.',
    stats: [
      { label: 'Cost Savings', value: '60%', icon: TrendingDown },
      { label: 'Quality Standard', value: 'Luxury', icon: Award },
      { label: 'Materials', value: 'Sustainable', icon: Award },
      { label: 'Production', value: 'Quarterly', icon: Clock },
    ],
    imgId: 'cs-french-packaging-z2a3b4',
    titleId: 'cs-french-packaging-title',
    descId: 'cs-french-packaging-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider">Case Studies</p>
          <h1 id="cs-page-title" className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Real Results from Real Projects
          </h1>
          <p id="cs-page-subtitle" className="mt-4 text-lg text-steel-400 max-w-2xl mx-auto leading-relaxed">
            Detailed case studies showing how we have helped businesses across industries source better from China.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((c, idx) => (
              <article key={c.id} id={`cs-section-${idx}`} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [cs-page-subtitle] [cs-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-steel-400 mb-3">
                    <span className="rounded-full bg-brand-50 text-brand-600 px-2.5 py-0.5 font-medium">{c.industry}</span>
                    <span>{c.region}</span>
                  </div>
                  <h2 id={c.titleId} className="text-2xl font-extrabold text-steel-900">{c.title}</h2>
                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-xs font-semibold text-steel-400 uppercase tracking-wider mb-1">Challenge</p>
                      <p id={c.descId} className="text-sm text-steel-600 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-steel-400 uppercase tracking-wider mb-1">Our Approach</p>
                      <p className="text-sm text-steel-600 leading-relaxed">{c.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-steel-400 uppercase tracking-wider mb-1">Result</p>
                      <p className="text-sm text-steel-600 leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {c.stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-steel-50 p-3 text-center">
                        <stat.icon className="h-4 w-4 text-brand-600 mx-auto mb-1" />
                        <p className="text-lg font-extrabold text-steel-900">{stat.value}</p>
                        <p className="text-xs text-steel-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-brand-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Want Similar Results?
          </h2>
          <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto leading-relaxed">
            Every successful project starts with a conversation. Tell us about your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
