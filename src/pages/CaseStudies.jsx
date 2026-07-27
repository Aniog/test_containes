import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, TrendingUp, DollarSign, Shield, Clock } from "lucide-react";

const caseStudies = [
  {
    company: "EuroTech Industries",
    industry: "Industrial Equipment",
    country: "Germany",
    challenge: "A German industrial equipment distributor needed to find a reliable manufacturer for precision CNC-machined components. Previous attempts to source from China resulted in inconsistent quality and missed deadlines.",
    solution: "We conducted thorough factory audits of five potential suppliers in Guangdong and Jiangsu provinces. After selecting the best candidate, we implemented a rigorous QC protocol with during-production and pre-shipment inspections.",
    results: [
      { icon: TrendingUp, text: "40% cost reduction compared to European suppliers" },
      { icon: Clock, text: "Consistent on-time delivery (98% on-time rate)" },
      { icon: Shield, text: "Defect rate reduced to under 1.5%" },
    ],
    quote: "SSourcing China's factory audit process gave us the confidence to move forward. The quality has been consistently excellent.",
  },
  {
    company: "GreenHome Brands",
    industry: "Home & Kitchen",
    country: "United States",
    challenge: "A US-based e-commerce brand wanted to source eco-friendly kitchen products but struggled to find suppliers who could meet their sustainability requirements and certifications.",
    solution: "We identified and vetted manufacturers with relevant environmental certifications (FSC, BSCI, OEKO-TEX), coordinated sample development, and managed production monitoring to ensure compliance with sustainability standards.",
    results: [
      { icon: DollarSign, text: "55% cost savings vs. domestic manufacturing" },
      { icon: TrendingUp, text: "Product line expanded from 12 to 45 SKUs" },
      { icon: Shield, text: "All products met US regulatory standards" },
    ],
    quote: "Finding suppliers that take sustainability seriously is challenging. SSourcing China found manufacturers who shared our values without compromising on quality or price.",
  },
  {
    company: "MedTech Supplies Ltd",
    industry: "Medical Devices",
    country: "United Kingdom",
    challenge: "A UK medical supplies company needed to source PPE and diagnostic equipment during a period of high demand. They required suppliers with proper certifications and the capacity to scale quickly.",
    solution: "We fast-tracked supplier verification, prioritizing manufacturers with CE marking, FDA registration, and ISO 13485 certifications. We conducted weekly production monitoring and coordinated air freight to meet urgent delivery timelines.",
    results: [
      { icon: Clock, text: "First delivery in 3 weeks (vs. typical 8-10 weeks)" },
      { icon: Shield, text: "100% compliance with EU medical device regulations" },
      { icon: DollarSign, text: "30% cost savings vs. alternative sourcing channels" },
    ],
    quote: "When we needed to scale up quickly, SSourcing China delivered. Their understanding of medical device regulations was invaluable.",
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
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Client Success Stories</h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl">
              Real results from real partnerships. See how we've helped global buyers source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section space-y-16">
          {caseStudies.map((cs, index) => (
            <div key={cs.company} className="card p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">{cs.industry}</span>
                    <span className="text-xs text-slate-500">{cs.country}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{cs.company}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-2">The Challenge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-2">Our Solution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {cs.results.map((r) => (
                      <div key={r.text} className="flex items-start gap-3">
                        <r.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{r.text}</span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 italic text-slate-600 text-sm">
                    "{cs.quote}"
                  </blockquote>
                </div>
                <div className="flex-1 w-full">
                  <div
                    data-strk-bg-id={`case-bg-${index}`}
                    data-strk-bg={`[case-title-${index}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="w-full aspect-[4/3] rounded-xl bg-slate-200 bg-cover bg-center"
                  />
                  <span id={`case-title-${index}`} className="hidden">{cs.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Be Our Next Success Story</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Let us help you source from China with confidence. Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}