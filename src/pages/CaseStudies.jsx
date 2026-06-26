import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, TrendingDown, ShieldCheck, Globe2, Factory } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero.jsx";
import InquiryCTA from "@/components/home/InquiryCTA.jsx";

const STUDIES = [
  {
    industry: "Home & Kitchen",
    location: "Yongkang, Zhejiang",
    title: "Helping a US brand launch a stainless steel cookware line",
    summary:
      "A US-based cookware brand needed to launch a 12-SKU stainless steel line for the holiday season. We sourced 3 audited factories, ran two rounds of samples, and coordinated three pre-shipment inspections before the goods left China.",
    results: [
      { icon: ShieldCheck, label: "12 SKUs approved on first PSI" },
      { icon: TrendingDown, label: "16% lower unit cost vs. initial quote" },
      { icon: Factory, label: "2 backup factories verified" },
    ],
    imgId: "case-study-kitchenware-detail-91a4e2",
  },
  {
    industry: "Sports & Fitness",
    location: "Shantou, Guangdong",
    title: "Reducing defect rates from 6.2% to 1.4% for a fitness equipment importer",
    summary:
      "A European fitness equipment importer was receiving recurring weld and paint defects. We re-audited their supplier network, switched their main order to a verified factory, and introduced inline inspections at the 30% and 70% production milestones.",
    results: [
      { icon: TrendingDown, label: "Defect rate: 6.2% → 1.4%" },
      { icon: ShieldCheck, label: "Inline DUPRO inspections added" },
      { icon: Globe2, label: "3 container loads shipped on time" },
    ],
    imgId: "case-study-fitness-detail-72b8f3",
  },
  {
    industry: "Beauty & Personal Care",
    location: "Hangzhou, Zhejiang",
    title: "Managing OEM skincare production for a European private-label brand",
    summary:
      "A European private-label skincare brand needed a GMP-audited factory for a 6-SKU face-care line. We coordinated ingredient sourcing, stability testing, primary packaging, and consolidated shipping to two EU distribution centers.",
    results: [
      { icon: ShieldCheck, label: "GMP-certified factory selected" },
      { icon: Factory, label: "Stability & compatibility testing included" },
      { icon: Globe2, label: "Consolidated shipments to 2 EU DCs" },
    ],
    imgId: "case-study-skincare-detail-53c9d4",
  },
  {
    industry: "Consumer Electronics",
    location: "Shenzhen, Guangdong",
    title: "Consolidating a 5-supplier Bluetooth audio program for a US retailer",
    summary:
      "A US audio brand was managing 5 separate Shenzhen suppliers and shipping them individually. We consolidated their supply chain into one QC and shipping flow, with a single weekly status report and consolidated air freight.",
    results: [
      { icon: TrendingDown, label: "Logistics cost reduced ~22%" },
      { icon: ShieldCheck, label: "Single weekly QC report across 5 factories" },
      { icon: Globe2, label: "Air freight consolidation" },
    ],
    imgId: "case-study-audio-detail-34e0a5",
  },
  {
    industry: "Furniture & Home Improvement",
    location: "Foshan, Guangdong",
    title: "Sourcing FSC-certified flat-pack furniture for an Australian brand",
    summary:
      "An Australian furniture brand needed FSC-certified flat-pack furniture with CE compliance. We sourced from a Foshan factory with FSC chain-of-custody certification and ran PSI with carton-drop and load tests before each container.",
    results: [
      { icon: ShieldCheck, label: "FSC chain-of-custody verified" },
      { icon: Factory, label: "Carton-drop & load tests included" },
      { icon: Globe2, label: "Door-to-door shipping to Sydney" },
    ],
    imgId: "case-study-furniture-detail-15f1b6",
  },
  {
    industry: "Industrial Components",
    location: "Suzhou, Jiangsu",
    title: "Engineering support for a US industrial equipment OEM",
    summary:
      "A US industrial equipment OEM needed a Chinese partner to manufacture precision machined parts. We supported engineering review, PPAP submission, and ongoing DUPRO inspections across 12 part numbers.",
    results: [
      { icon: ShieldCheck, label: "PPAP & APQP documentation" },
      { icon: TrendingDown, label: "12 part numbers, 0 critical defects" },
      { icon: Factory, label: "Quarterly supplier review meetings" },
    ],
    imgId: "case-study-industrial-detail-96a2c7",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="page-fade">
      <PageHero
        eyebrow="Case Studies"
        title="Recent projects we supported end to end"
        subtitle="A selection of sourcing, quality, and shipping engagements across consumer goods, industrial components, and private-label programs."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Case Studies" },
        ]}
        ctaPrimary={{ to: "/contact", label: "Discuss Your Project" }}
        ctaSecondary={{ to: "/services", label: "View Services" }}
      />

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {STUDIES.map((c, i) => (
              <article key={c.title} className="card overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    alt={`${c.title} case study`}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[case-detail-${i}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.12em] font-semibold">
                    <span className="text-[#C8553D]">{c.industry}</span>
                    <span className="text-[#C7BFB1]">•</span>
                    <span className="flex items-center gap-1 text-[#64748B]"><MapPin className="h-3 w-3" />{c.location}</span>
                  </div>
                  <h3 id={`case-detail-${i}-title`} className="mt-3 font-display text-[20px] font-semibold text-[#0F172A] leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#475569]">{c.summary}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {c.results.map((r) => (
                      <div key={r.label} className="rounded-lg bg-[#F6F1EA] border border-[#E5E1D8] p-3">
                        <r.icon className="h-4 w-4 text-[#C8553D]" />
                        <p className="mt-2 text-[12.5px] font-medium text-[#0F172A] leading-snug">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary">
              Start a similar project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}