import { ShoppingBag, Wrench, Cpu, Home, Car, Package, ArrowUpRight, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    icon: ShoppingBag,
    industry: 'Retail / E-commerce',
    title: 'Private-Label Kitchenware for a US Amazon Seller',
    client: 'US-based Amazon FBA seller',
    challenge: 'The client needed to source high-quality stainless steel kitchenware with custom branding at competitive prices. Previous suppliers had quality inconsistencies and missed deadlines.',
    solution: 'We identified 5 potential suppliers, conducted on-site factory audits for the top 3, and negotiated better payment terms. Implemented a 3-stage QC process.',
    results: [
      'Unit cost reduced by 22% compared to previous supplier',
      'Zero defects on first mass production shipment',
      'Delivery completed 1 week ahead of schedule',
      'Client reordered 3x quantity within 6 months',
    ],
    imgId: 'cs-kitchenware-a1b2c3',
    tag: 'Cost Reduction',
  },
  {
    icon: Wrench,
    industry: 'Industrial / B2B',
    title: 'Custom CNC Machined Parts for a German Manufacturer',
    client: 'German industrial automation company',
    challenge: 'Precision-machined aluminum parts with tight tolerances (±0.01mm) were needed for a new product line. The client had struggled to find a Chinese supplier capable of consistent quality.',
    solution: 'We audited 7 CNC workshops, tested sample parts from the top 3, and selected a factory with ISO 9001 certification and advanced 5-axis CNC equipment.',
    results: [
      'Achieved ±0.008mm tolerance consistently',
      'Pass rate on first article inspection: 99.2%',
      'Production cycle time reduced by 15%',
      'Ongoing partnership for 2+ years',
    ],
    imgId: 'cs-cnc-parts-b2c3d4',
    tag: 'Quality Assurance',
  },
  {
    icon: Cpu,
    industry: 'Electronics',
    title: 'Custom PCB Assembly for a UK IoT Startup',
    client: 'UK-based IoT device startup',
    challenge: 'The startup needed a reliable PCB assembly partner for a new smart sensor product. Required RoHS compliance, functional testing, and small-batch flexibility.',
    solution: 'Sourced an EMS factory in Shenzhen with experience in IoT products. Set up automated functional testing protocols and managed component procurement.',
    results: [
      'First batch of 2,000 units delivered on time',
      'Functional defect rate below 0.3%',
      'Scaled smoothly from 2K to 20K units/month',
      'Helped client achieve CE certification',
    ],
    imgId: 'cs-pcb-c3d4e5',
    tag: 'On-Time Delivery',
  },
  {
    icon: Home,
    industry: 'Home & Garden',
    title: 'Outdoor Furniture Collection for a European Retailer',
    client: 'Mid-size furniture retailer in the Netherlands',
    challenge: 'The client wanted to launch a new outdoor furniture line but lacked direct China sourcing experience. Concerned about material quality and weather resistance.',
    solution: 'We visited 4 furniture factories in Foshan, evaluated material samples, and arranged independent lab testing for weather resistance and load capacity.',
    results: [
      'Product line launched successfully across 12 stores',
      'Material pass rate: 100% on all lab tests',
      'Total sourcing cost 18% under budget',
      'Repeat order placed within 4 months',
    ],
    imgId: 'cs-furniture-d4e5f6',
    tag: 'Quality Assurance',
  },
  {
    icon: Car,
    industry: 'Automotive',
    title: 'EV Charging Cable Assembly for a UK Startup',
    client: 'UK electric vehicle charging startup',
    challenge: 'Needed a supplier for custom EV charging cables with specific connectors, cable gauges, and IP ratings. Tight timeline for product launch.',
    solution: 'Identified a cable assembly specialist in Dongguan with automotive experience. Managed tooling, sample approval, and production ramp-up.',
    results: [
      'Delivered 2 weeks ahead of schedule',
      'All units passed IP67 testing',
      ' tooling investment recovered within first order',
      'Ongoing production at 5,000 units/month',
    ],
    imgId: 'cs-ev-cable-e5f6g7',
    tag: 'On-Time Delivery',
  },
  {
    icon: Package,
    industry: 'Packaging',
    title: 'Custom Retail Packaging for a Beauty Brand',
    client: 'Australian organic beauty brand',
    challenge: 'Needed eco-friendly custom packaging (boxes, labels, bottles) with consistent color matching across multiple suppliers. Previous colors varied between batches.',
    solution: 'Consolidated packaging sourcing under one project manager. Implemented Pantone color control and pre-production sample approval for every batch.',
    results: [
      'Color consistency improved from 78% to 98%',
      'Packaging cost reduced by 12%',
      'Switched to 80% recycled materials',
      'Production lead time cut by 20%',
    ],
    imgId: 'cs-packaging-f6g7h8',
    tag: 'Cost Reduction',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Results We Deliver
          </h1>
          <p className="text-text-secondary text-lg">
            Real projects with real outcomes. See how we have helped businesses like yours source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl space-y-16">
          {caseStudies.map((study, index) => {
            const titleId = `cs-title-${index}`;
            const descId = `cs-desc-${index}`;
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden border border-border">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                      <study.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.tag}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">{study.industry}</p>
                  <h2 id={titleId} className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                    {study.title}
                  </h2>
                  <p className="text-sm text-text-muted mb-1"><span className="font-medium">Client:</span> {study.client}</p>
                  <p id={descId} className="text-text-secondary text-sm leading-relaxed mb-4">{study.challenge}</p>

                  <div className="bg-surface rounded-lg p-4 border border-border mb-4">
                    <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Key Results</p>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-text-secondary mb-8">
            Let us help you find the right suppliers, ensure quality, and deliver on time.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
