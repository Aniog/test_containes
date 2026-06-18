import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, TrendingDown, Clock, ShieldCheck } from "lucide-react";

const caseStudies = [
  {
    id: "cs-furniture-de",
    industry: "Furniture",
    country: "Germany",
    flag: "🇩🇪",
    title: "European Retailer Cuts Sourcing Costs by 28%",
    challenge: "A mid-size furniture importer in Germany was sourcing through a trading company and paying above-market prices. They had experienced two quality incidents in the previous year and needed a more reliable supply chain.",
    solution: "We identified three verified factories in Guangdong and Zhejiang, conducted on-site audits, and negotiated direct factory pricing. We implemented a pre-shipment inspection protocol for every order.",
    result: "28% reduction in unit costs, zero defect shipments over 12 months, and a stable supply relationship with two approved factories.",
    metrics: [
      { icon: TrendingDown, label: "Cost Reduction", value: "28%" },
      { icon: ShieldCheck, label: "Defect Rate", value: "0%" },
      { icon: Clock, label: "Lead Time", value: "Reduced by 2 weeks" },
    ],
    titleId: "cs-furniture-de-title",
    descId: "cs-furniture-de-desc",
    imgId: "cs-furniture-de-img-a1b2c3",
  },
  {
    id: "cs-electronics-us",
    industry: "Electronics",
    country: "United States",
    flag: "🇺🇸",
    title: "US Brand Launches Private Label Electronics Line",
    challenge: "An American e-commerce brand wanted to launch a private label line of smart home accessories. They had no prior experience sourcing from China and needed end-to-end support including FCC compliance.",
    solution: "We sourced three compliant manufacturers, managed the sampling process across four rounds, coordinated FCC testing with a certified lab, and arranged sea freight to an Amazon FBA warehouse.",
    result: "Product launched in 5 months, fully FCC-compliant, with a 4.6-star average rating on Amazon in the first 90 days.",
    metrics: [
      { icon: Clock, label: "Time to Launch", value: "5 months" },
      { icon: ShieldCheck, label: "Compliance", value: "FCC Certified" },
      { icon: TrendingDown, label: "Amazon Rating", value: "4.6 stars" },
    ],
    titleId: "cs-electronics-us-title",
    descId: "cs-electronics-us-desc",
    imgId: "cs-electronics-us-img-d4e5f6",
  },
  {
    id: "cs-apparel-au",
    industry: "Apparel",
    country: "Australia",
    flag: "🇦🇺",
    title: "Australian Fashion Brand Scales Production",
    challenge: "A growing Australian fashion brand needed to scale from 500 to 5,000 units per style while maintaining consistent quality. Their existing factory couldn't handle the volume increase.",
    solution: "We identified a factory with the right capacity and experience in their product category, managed a transition period with parallel production, and implemented a production monitoring schedule.",
    result: "Successful scale-up with on-time delivery across all SKUs, consistent quality, and a 15% reduction in per-unit cost at higher volumes.",
    metrics: [
      { icon: TrendingDown, label: "Cost per Unit", value: "15% lower" },
      { icon: Clock, label: "On-Time Delivery", value: "100%" },
      { icon: ShieldCheck, label: "Quality Consistency", value: "Maintained" },
    ],
    titleId: "cs-apparel-au-title",
    descId: "cs-apparel-au-desc",
    imgId: "cs-apparel-au-img-g7h8i9",
  },
  {
    id: "cs-hardware-uk",
    industry: "Hardware",
    country: "United Kingdom",
    flag: "🇬🇧",
    title: "UK Distributor Diversifies Supplier Base",
    challenge: "A UK hardware distributor was over-reliant on a single Chinese supplier. When that supplier had production issues, it caused stockouts. They needed to qualify two additional backup suppliers.",
    solution: "We audited five candidate factories, shortlisted two that met their technical and compliance requirements, managed sampling, and helped establish a dual-sourcing strategy.",
    result: "Two qualified backup suppliers onboarded within 3 months, eliminating single-supplier dependency and improving supply chain resilience.",
    metrics: [
      { icon: Clock, label: "Onboarding Time", value: "3 months" },
      { icon: ShieldCheck, label: "Suppliers Qualified", value: "2 new" },
      { icon: TrendingDown, label: "Supply Risk", value: "Significantly reduced" },
    ],
    titleId: "cs-hardware-uk-title",
    descId: "cs-hardware-uk-desc",
    imgId: "cs-hardware-uk-img-j1k2l3",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#0D2545] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Case Studies</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Real outcomes from real buyers. These case studies illustrate how we've helped
              businesses across different industries and countries source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-[#F4F6FA] rounded-2xl border border-slate-200 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? "" : ""}`}>
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-[#E8621A] uppercase tracking-wide bg-[#E8621A]/10 px-2 py-1 rounded">{cs.industry}</span>
                      <span className="text-sm text-gray-500">{cs.flag} {cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-[#0D2545] mb-4">{cs.title}</h2>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</h3>
                      <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Our Approach</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Result</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">{cs.result}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-white rounded-lg border border-slate-200 p-3 text-center">
                          <m.icon className="w-4 h-4 text-[#E8621A] mx-auto mb-1" />
                          <div className="text-sm font-bold text-[#0D2545]">{m.value}</div>
                          <div className="text-xs text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-slate-200 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8621A] hover:bg-[#C9541A] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
