import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const STUDIES = [
  {
    slug: "kitchenware",
    industry: "Home & Kitchen",
    location: "Yongkang, Zhejiang",
    title: "Helping a US brand launch a stainless steel cookware line",
    summary:
      "Found 3 audited factories, ran two rounds of samples, and coordinated three pre-shipment inspections for a 12-SKU launch.",
    imgId: "case-kitchenware-7d2a91",
    imgRatio: "4x3",
  },
  {
    slug: "fitness",
    industry: "Sports & Fitness",
    location: "Shantou, Guangdong",
    title: "Reducing defect rates from 6.2% to 1.4% for a fitness equipment importer",
    summary:
      "Switched the client to a verified factory and introduced inline inspections, with measurable quality improvement.",
    imgId: "case-fitness-3b8e44",
    imgRatio: "4x3",
  },
  {
    slug: "skincare",
    industry: "Beauty & Personal Care",
    location: "Hangzhou, Zhejiang",
    title: "Managing OEM skincare production for a European private-label brand",
    summary:
      "Coordinated GMP-audited factories, ingredient sourcing, and consolidated shipping to two EU distribution centers.",
    imgId: "case-skincare-9f1c52",
    imgRatio: "4x3",
  },
];

export default function CaseStudiesPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section bg-[#0E2A47] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          light
          eyebrow="Case Studies"
          title="Recent projects we supported end to end"
          subtitle="A few examples of how SSourcing China has helped buyers across industries — from sample to shipment."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STUDIES.map((c, i) => (
            <article
              key={c.slug}
              className="rounded-xl overflow-hidden bg-[#163A5F] border border-white/10 hover:border-white/25 transition-colors"
            >
              <div className="relative">
                <img
                  alt={`${c.title} case study`}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-study-title-${i}] [case-studies-section-subtitle] [case-studies-section-title]`}
                  data-strk-img-ratio={c.imgRatio}
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] font-semibold">
                  <span className="text-[#E8A33D]">{c.industry}</span>
                  <span className="text-white/30">•</span>
                  <span className="flex items-center gap-1 text-white/70"><MapPin className="h-3 w-3" />{c.location}</span>
                </div>
                <h3 id={`case-study-title-${i}`} className="mt-3 font-display text-[20px] font-semibold text-white leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/75">{c.summary}</p>
                <Link to="/case-studies" className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#E8A33D] hover:text-white transition-colors">
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p id="case-studies-section-title" className="sr-only">Recent projects we supported end to end</p>
        <p id="case-studies-section-subtitle" className="sr-only">Case studies of sourcing projects across kitchenware, fitness, and beauty categories</p>

        <div className="mt-12 text-center">
          <Link to="/case-studies" className="btn-primary">
            See all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}