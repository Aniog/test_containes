import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Package, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-usa',
    title: 'LED Lighting Importer — USA',
    category: 'Electronics',
    country: 'United States',
    result: '35% cost reduction vs. previous supplier',
    challenge: 'A US-based lighting distributor had been receiving LED products that failed to meet their quality specifications. Their existing supplier in China was unresponsive to complaints and delivery times were inconsistent.',
    solution: 'We audited 8 LED manufacturers across Guangdong and Zhejiang, shortlisted 2 that met CE and UL certification requirements, and arranged sample testing. The buyer selected a new supplier with a 35% lower unit cost and a formal quality agreement in place.',
    outcome: 'Three consecutive orders delivered on time with zero inspection failures. The buyer has since expanded their product range with the same supplier.',
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Factories Audited', value: '8' },
      { label: 'Orders Delivered', value: '3' },
    ],
    imgId: 'case-page-led-3a7f2b',
    titleId: 'case-page-led-title',
    descId: 'case-page-led-desc',
  },
  {
    id: 'furniture-au',
    title: 'Furniture Brand — Australia',
    category: 'Furniture',
    country: 'Australia',
    result: 'On-time delivery for 3 consecutive orders',
    challenge: 'An Australian furniture brand was experiencing production delays of 4–6 weeks beyond agreed timelines and receiving goods with inconsistent finish quality. They had no local presence in China to monitor the situation.',
    solution: 'We implemented a production monitoring schedule with weekly factory visits during production, introduced a mid-production inspection checkpoint, and established a pre-shipment inspection protocol with clear pass/fail criteria.',
    outcome: 'All three subsequent orders were delivered within the agreed timeline. The defect rate dropped from 8% to under 1% after the inspection protocol was introduced.',
    metrics: [
      { label: 'Defect Rate Reduction', value: '87%' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Orders Monitored', value: '3' },
    ],
    imgId: 'case-page-furniture-7c3e1d',
    titleId: 'case-page-furniture-title',
    descId: 'case-page-furniture-desc',
  },
  {
    id: 'apparel-uk',
    title: 'Private Label Apparel — UK',
    category: 'Apparel',
    country: 'United Kingdom',
    result: 'Launched 3 SKUs within 90 days',
    challenge: 'A UK fashion startup wanted to launch a private label sportswear line but had no experience with Chinese manufacturing. They needed help with supplier selection, sample development, labeling compliance, and managing the first production run.',
    solution: 'We identified 4 sportswear manufacturers in Fujian with OEM experience, managed the sample development process through 3 revision rounds, coordinated CE labeling compliance, and supervised the first production run of 500 units per SKU.',
    outcome: 'Three SKUs launched within 90 days of project start. The buyer has since placed a second order with a 40% volume increase.',
    metrics: [
      { label: 'SKUs Launched', value: '3' },
      { label: 'Days to Launch', value: '90' },
      { label: 'Volume Increase (Reorder)', value: '40%' },
    ],
    imgId: 'case-page-apparel-2b9f5c',
    titleId: 'case-page-apparel-title',
    descId: 'case-page-apparel-desc',
  },
  {
    id: 'tools-de',
    title: 'Power Tools Distributor — Germany',
    category: 'Machinery',
    country: 'Germany',
    result: 'CE certification secured for full product range',
    challenge: 'A German distributor wanted to source a range of power tools from China but needed to ensure all products met CE certification requirements for the European market. Previous attempts had resulted in non-compliant products being rejected at customs.',
    solution: 'We identified manufacturers with existing CE-certified product lines, coordinated third-party lab testing for the specific models required, and worked with the supplier to address two compliance gaps identified during testing.',
    outcome: 'Full product range cleared customs on first attempt. The distributor now has a reliable supply chain for 12 SKUs with annual volume contracts.',
    metrics: [
      { label: 'SKUs Certified', value: '12' },
      { label: 'Customs Clearance', value: '100%' },
      { label: 'Annual Contract Value', value: 'Ongoing' },
    ],
    imgId: 'case-page-tools-5e1a8d',
    titleId: 'case-page-tools-title',
    descId: 'case-page-tools-desc',
  },
  {
    id: 'packaging-ca',
    title: 'Eco Packaging Brand — Canada',
    category: 'Plastics & Packaging',
    country: 'Canada',
    result: 'Custom packaging developed in 60 days',
    challenge: 'A Canadian e-commerce brand needed custom eco-friendly packaging with specific material certifications (FSC, compostable). They had struggled to find suppliers willing to work with their MOQ and material requirements.',
    solution: 'We identified 3 packaging manufacturers in Zhejiang with FSC certification and experience with compostable materials, managed the custom die-cut development, and coordinated material certification documentation.',
    outcome: 'Custom packaging developed and delivered within 60 days. Material certifications provided for all components. The brand has since expanded to 5 packaging SKUs.',
    metrics: [
      { label: 'Development Time', value: '60 days' },
      { label: 'Packaging SKUs', value: '5' },
      { label: 'Certifications Secured', value: 'FSC + Compostable' },
    ],
    imgId: 'case-page-packaging-9d4b2f',
    titleId: 'case-page-packaging-title',
    descId: 'case-page-packaging-desc',
  },
  {
    id: 'health-sg',
    title: 'Health Products Importer — Singapore',
    category: 'Health & Beauty',
    country: 'Singapore',
    result: 'Supplier switched without production disruption',
    challenge: 'A Singapore-based health products importer needed to switch suppliers after their existing manufacturer raised prices by 25% with no notice. They needed a replacement supplier quickly without disrupting their supply chain.',
    solution: 'We fast-tracked supplier research and identified 2 qualified alternatives within 7 days. We managed parallel sample development and negotiated a transition timeline that allowed the buyer to maintain stock levels throughout the switch.',
    outcome: 'New supplier onboarded within 45 days. Unit cost 18% lower than the previous supplier\'s new pricing. No stockouts during the transition.',
    metrics: [
      { label: 'Transition Time', value: '45 days' },
      { label: 'Cost Saving vs. New Price', value: '18%' },
      { label: 'Stockouts During Transition', value: '0' },
    ],
    imgId: 'case-page-health-6c2e7a',
    titleId: 'case-page-health-title',
    descId: 'case-page-health-desc',
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
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Case Studies</span>
          <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Real Results for Real Buyers
          </h1>
          <p id="cases-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            Here are examples of how we've helped global buyers source successfully from China across different industries and challenges.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c) => (
              <div key={c.id} className="bg-brand-gray rounded-2xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow">
                <div className="relative h-52 overflow-hidden bg-brand-blue-light">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [cases-page-subtitle] [cases-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                    <span className="bg-white/90 text-brand-text text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {c.country}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                    <span className="text-brand-orange text-xs font-semibold">{c.result}</span>
                  </div>
                  <h2 id={c.titleId} className="text-xl font-bold text-brand-text mb-4">{c.title}</h2>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5 p-4 bg-white rounded-xl border border-brand-border">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="font-bold text-brand-blue text-lg leading-none">{m.value}</p>
                        <p className="text-brand-muted text-xs mt-1 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-brand-text uppercase tracking-wide mb-1">Challenge</p>
                      <p id={c.descId} className="text-brand-muted text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-text uppercase tracking-wide mb-1">Outcome</p>
                      <p className="text-brand-muted text-sm leading-relaxed">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-brand-muted mb-8">
            Tell us about your sourcing challenge and we'll put together a plan to help you source from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
