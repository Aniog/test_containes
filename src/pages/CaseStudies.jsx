import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, CheckCircle, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-electronics',
    industry: 'Consumer Electronics',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'Reducing Defect Rate by 73% for a UK Electronics Retailer',
    challenge: 'A UK-based electronics retailer was experiencing a 28% defect rate on LED lighting products sourced independently from China. Customer returns were damaging their brand reputation.',
    solution: 'We conducted factory audits on 4 candidate suppliers, identified a certified manufacturer with ISO 9001 and CE compliance, and implemented a 3-stage inspection protocol.',
    results: [
      'Defect rate reduced from 28% to 7.5%',
      'On-time delivery rate improved to 96%',
      '18% reduction in unit cost through renegotiation',
      'CE and RoHS certification verified',
    ],
    duration: '6 weeks to first shipment',
    titleId: 'cs-elec-title',
    descId: 'cs-elec-desc',
    imgId: 'cs-img-elec-a1b2c3',
  },
  {
    id: 'cs-furniture',
    industry: 'Home Furniture',
    country: 'United States',
    flag: '🇺🇸',
    title: 'Scaling Production for a US E-Commerce Furniture Brand',
    challenge: 'A fast-growing US e-commerce brand needed to triple their furniture production capacity while maintaining quality. Their existing supplier could not scale.',
    solution: 'We identified and audited 6 furniture manufacturers in Foshan, negotiated competitive pricing, and set up a dual-supplier strategy to ensure supply continuity.',
    results: [
      '3× production capacity achieved',
      '22% lower unit cost vs. previous supplier',
      'Dual-supplier setup for supply security',
      'CARB P2 and FSC certification verified',
    ],
    duration: '8 weeks to first bulk shipment',
    titleId: 'cs-furn-title',
    descId: 'cs-furn-desc',
    imgId: 'cs-img-furn-d4e5f6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Private Label Launch for an Australian Fashion Brand',
    challenge: 'An Australian fashion startup wanted to launch a private label activewear line but had no experience sourcing from China and no existing supplier relationships.',
    solution: 'We managed the full OEM development process — from fabric sourcing and manufacturer selection to sample development, branding, and first production run.',
    results: [
      'Full OEM setup completed in 8 weeks',
      'OEKO-TEX certified fabric sourced',
      'Private label branding implemented',
      'First order delivered on schedule',
    ],
    duration: '8 weeks from inquiry to delivery',
    titleId: 'cs-app-title',
    descId: 'cs-app-desc',
    imgId: 'cs-img-app-g7h8i9',
  },
  {
    id: 'cs-industrial',
    industry: 'Industrial Equipment',
    country: 'Germany',
    flag: '🇩🇪',
    title: 'Sourcing CE-Certified Power Tools for a German Distributor',
    challenge: 'A German industrial distributor needed a reliable source of CE-certified power tools at competitive prices to expand their product range.',
    solution: 'We audited 5 power tool manufacturers, verified CE certification documentation, and negotiated an exclusive distribution agreement with the top-ranked supplier.',
    results: [
      'CE certification independently verified',
      '31% cost saving vs. European alternatives',
      'Exclusive distribution terms negotiated',
      'Consistent quality across 3 shipments',
    ],
    duration: '10 weeks to first shipment',
    titleId: 'cs-ind-title',
    descId: 'cs-ind-desc',
    imgId: 'cs-img-ind-j1k2l3',
  },
  {
    id: 'cs-toys',
    industry: 'Toys & Baby Products',
    country: 'Canada',
    flag: '🇨🇦',
    title: 'ASTM-Certified Toy Sourcing for a Canadian Retailer',
    challenge: 'A Canadian toy retailer needed to source educational toys that met ASTM F963 safety standards for the North American market.',
    solution: 'We identified manufacturers with existing ASTM certification, conducted factory audits, and arranged third-party lab testing to confirm compliance before production.',
    results: [
      'ASTM F963 compliance confirmed',
      'Third-party lab testing arranged',
      '15% cost saving vs. previous supplier',
      'Zero compliance issues at customs',
    ],
    duration: '7 weeks to first shipment',
    titleId: 'cs-toys-title',
    descId: 'cs-toys-desc',
    imgId: 'cs-img-toys-m4n5o6',
  },
  {
    id: 'cs-packaging',
    industry: 'Custom Packaging',
    country: 'Netherlands',
    flag: '🇳🇱',
    title: 'Custom Eco-Packaging for a Dutch Cosmetics Brand',
    challenge: 'A Dutch cosmetics brand needed custom eco-friendly packaging that matched their brand identity and met EU sustainability requirements.',
    solution: 'We sourced FSC-certified packaging manufacturers, managed the design and print approval process, and coordinated a consolidated shipment with their product order.',
    results: [
      'FSC-certified materials verified',
      'Brand design approved in 2 revision rounds',
      'Consolidated shipment saved 12% on freight',
      'Delivered 5 days ahead of schedule',
    ],
    duration: '5 weeks to delivery',
    titleId: 'cs-pack-title',
    descId: 'cs-pack-desc',
    imgId: 'cs-img-pack-p7q8r9',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1A3C6E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results for Real Clients
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across industries and countries source smarter, reduce risk, and cut costs.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative min-h-[280px] bg-[#EBF2FA] ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#1A3C6E]/80 text-white text-xs font-semibold px-2 py-1 rounded">
                        {cs.industry}
                      </span>
                      <span className="bg-white/90 text-[#1E293B] text-xs font-semibold px-2 py-1 rounded">
                        {cs.flag} {cs.country}
                      </span>
                    </div>
                  </div>
                  <div className={`p-8 md:p-10 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-[#1E293B] mb-4 leading-snug">
                      {cs.title}
                    </h2>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-[#C0392B] uppercase tracking-wide mb-1">Challenge</p>
                        <p id={cs.descId} className="text-[#475569] text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#1A3C6E] uppercase tracking-wide mb-1">Our Solution</p>
                        <p className="text-[#475569] text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] mb-4">
                      <p className="text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-3 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-[#1A3C6E]" /> Results
                      </p>
                      <ul className="space-y-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-[#475569]">
                            <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs text-[#64748B] mb-4">⏱ {cs.duration}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#1A3C6E] text-sm font-semibold hover:underline"
                    >
                      Start a similar project <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your sourcing project and we'll put together a plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
