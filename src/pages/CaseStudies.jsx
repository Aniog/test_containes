import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 'us-electronics',
    tag: 'Electronics',
    country: 'United States',
    client: 'Mid-size US electronics retailer',
    challenge: 'The client was sourcing PCB components from a single supplier with no backup and no on-site verification. Quality issues were causing returns and damaging their brand reputation.',
    solution: 'We identified 4 qualified PCB manufacturers, conducted factory audits at each, and negotiated pricing. We implemented a dual-supplier strategy and set up a pre-shipment inspection protocol.',
    result: '28% reduction in component costs, zero quality-related returns in the following 12 months, and a reliable backup supplier in place.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '28%' },
      { icon: ShieldCheck, label: 'Quality Returns', value: '0' },
      { icon: Clock, label: 'Time to First Shipment', value: '6 weeks' },
    ],
    titleId: 'cs-us-elec-title',
    descId: 'cs-us-elec-desc',
    imgId: 'cs-us-elec-img-a1b2c3',
  },
  {
    id: 'au-furniture',
    tag: 'Furniture',
    country: 'Australia',
    client: 'Australian home goods startup',
    challenge: 'A startup launching a private label furniture line had no China sourcing experience. They needed to find manufacturers, develop samples, and get goods to Australia within a tight launch window.',
    solution: 'We sourced 3 furniture factories, managed the sample development process, coordinated revisions, and arranged sea freight consolidation for the first order.',
    result: 'First shipment delivered in 14 weeks from initial inquiry. The client launched on schedule and has since placed 4 repeat orders.',
    metrics: [
      { icon: Clock, label: 'Time to First Shipment', value: '14 weeks' },
      { icon: ShieldCheck, label: 'Repeat Orders', value: '4' },
      { icon: TrendingDown, label: 'vs. Domestic Cost', value: '–42%' },
    ],
    titleId: 'cs-au-furn-title',
    descId: 'cs-au-furn-desc',
    imgId: 'cs-au-furn-img-d4e5f6',
  },
  {
    id: 'uk-apparel',
    tag: 'Apparel',
    country: 'United Kingdom',
    client: 'UK fashion brand',
    challenge: 'The client had placed a 10,000-unit order with a new factory and was concerned about quality consistency. They had no visibility into production and had experienced issues with a previous supplier.',
    solution: 'We conducted an in-line inspection mid-production and identified stitching defects on approximately 15% of units. We worked with the factory to correct the issue before production was completed.',
    result: 'All 10,000 units passed final inspection. The client avoided a costly return shipment and maintained their retail launch date.',
    metrics: [
      { icon: ShieldCheck, label: 'Units Passed Inspection', value: '10,000' },
      { icon: TrendingDown, label: 'Defect Rate at Final Check', value: '<1%' },
      { icon: Clock, label: 'Issue Resolved In', value: '3 days' },
    ],
    titleId: 'cs-uk-app-title',
    descId: 'cs-uk-app-desc',
    imgId: 'cs-uk-app-img-g7h8i9',
  },
  {
    id: 'de-industrial',
    tag: 'Industrial',
    country: 'Germany',
    client: 'German industrial distributor',
    challenge: 'The client needed to source a range of pneumatic tools and safety equipment from China but required CE certification and specific technical documentation for the European market.',
    solution: 'We identified manufacturers with existing CE certification, verified documentation, and coordinated with a testing lab for additional compliance checks on two product lines.',
    result: 'Full product range sourced and certified within 10 weeks. The client successfully launched the China-sourced line alongside their existing European suppliers.',
    metrics: [
      { icon: ShieldCheck, label: 'Products Certified', value: '100%' },
      { icon: Clock, label: 'Time to Compliance', value: '10 weeks' },
      { icon: TrendingDown, label: 'Cost vs. EU Suppliers', value: '–35%' },
    ],
    titleId: 'cs-de-ind-title',
    descId: 'cs-de-ind-desc',
    imgId: 'cs-de-ind-img-j1k2l3',
  },
  {
    id: 'ca-toys',
    tag: 'Toys',
    country: 'Canada',
    client: 'Canadian toy importer',
    challenge: 'The client was importing educational toys but had received a shipment that failed Canadian safety standards. They needed a new supplier and a reliable inspection process.',
    solution: 'We sourced 3 toy manufacturers with ASTM and EN71 certification experience, conducted factory audits, and implemented a pre-shipment inspection protocol with safety-focused checklists.',
    result: 'New supplier onboarded within 8 weeks. All subsequent shipments have passed Canadian customs inspection without issue.',
    metrics: [
      { icon: ShieldCheck, label: 'Customs Failures Since', value: '0' },
      { icon: Clock, label: 'Supplier Onboarding', value: '8 weeks' },
      { icon: TrendingDown, label: 'Cost vs. Previous Supplier', value: '–18%' },
    ],
    titleId: 'cs-ca-toy-title',
    descId: 'cs-ca-toy-desc',
    imgId: 'cs-ca-toy-img-m4n5o6',
  },
  {
    id: 'sg-packaging',
    tag: 'Packaging',
    country: 'Singapore',
    client: 'Singapore-based e-commerce brand',
    challenge: 'The client needed custom printed packaging boxes and poly mailers for their e-commerce operation. Previous suppliers had delivered inconsistent print quality and missed deadlines.',
    solution: 'We sourced 2 packaging manufacturers, ran print quality trials, and set up a production monitoring process with milestone check-ins before each shipment.',
    result: 'Consistent print quality across 6 consecutive orders. On-time delivery rate improved from 60% to 97%.',
    metrics: [
      { icon: ShieldCheck, label: 'On-Time Delivery Rate', value: '97%' },
      { icon: Clock, label: 'Lead Time Reduction', value: '–30%' },
      { icon: TrendingDown, label: 'Cost per Unit', value: '–22%' },
    ],
    titleId: 'cs-sg-pkg-title',
    descId: 'cs-sg-pkg-desc',
    imgId: 'cs-sg-pkg-img-p7q8r9',
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
      <section className="bg-gradient-to-br from-brand-navy-dark to-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              Client Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real sourcing challenges, real solutions, and measurable results for buyers across industries and countries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-b border-brand-border pb-16 last:border-0 last:pb-0">
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-3 py-1 rounded-full">
                      {cs.tag}
                    </span>
                    <div className="flex items-center gap-1 text-brand-muted text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {cs.country}
                    </div>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                    {cs.client}
                  </h2>

                  <div className="space-y-4 mt-5">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-brand-mid text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-1">Our Approach</h4>
                      <p className="text-brand-mid text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-1">Result</h4>
                      <p className="text-brand-mid text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {cs.metrics.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.label} className="bg-brand-surface rounded-xl border border-brand-border p-4 text-center">
                          <div className="text-xl font-bold text-brand-navy mb-1">{m.value}</div>
                          <div className="text-brand-muted text-xs">{m.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    alt={cs.client}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] China factory sourcing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-brand-mid text-lg mb-8">
            Tell us about your sourcing challenge and we'll put together a plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
