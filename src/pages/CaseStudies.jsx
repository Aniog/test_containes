import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, Quote, TrendingUp, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Helping a US retailer source home goods at scale",
    client: "US-based home goods retailer",
    industry: "Home Goods & Lifestyle",
    challenge: "The client was importing from multiple suppliers with inconsistent quality, late deliveries, and rising costs. They needed a single sourcing partner to consolidate suppliers and improve quality control.",
    solution: "We identified and audited 12 factories across Guangdong and Zhejiang, shortlisted 5, and negotiated consolidated pricing. We implemented a QC protocol with during-production and pre-shipment inspections.",
    result: "40% reduction in product costs, consistent quality across 50 SKUs, and on-time delivery rate improved from 72% to 98%.",
    metrics: [
      { icon: DollarSign, label: "Cost Reduction", value: "40%" },
      { icon: ShieldCheck, label: "On-Time Delivery", value: "98%" },
      { icon: TrendingUp, label: "SKUs Managed", value: "50+" },
    ],
  },
  {
    title: "European startup manufacturing consumer electronics",
    client: "European consumer electronics startup",
    industry: "Consumer Electronics",
    challenge: "A fast-growing startup needed to scale production from prototype to mass production. They had no previous experience manufacturing in China and needed a reliable partner to manage the entire process.",
    solution: "We sourced components from 8 suppliers, managed assembly at a certified factory, and implemented a rigorous 3-stage QC process. Our team provided weekly progress reports and resolved issues in real-time.",
    result: "Zero defect rate across 6 production runs, on-time delivery for all orders, and the startup successfully launched two product lines within 8 months.",
    metrics: [
      { icon: ShieldCheck, label: "Defect Rate", value: "0%" },
      { icon: Clock, label: "Time to Market", value: "8 months" },
      { icon: TrendingUp, label: "Production Runs", value: "6" },
    ],
  },
  {
    title: "Australian distributor sourcing industrial parts",
    client: "Australian industrial parts distributor",
    industry: "Industrial & Manufacturing",
    challenge: "The client was facing long lead times of 12+ weeks from their existing suppliers and wanted to diversify their supply chain to China without compromising on quality.",
    solution: "We identified and audited 8 precision manufacturing factories, negotiated favorable terms, and established a streamlined QC process. We also optimized logistics with consolidated shipping.",
    result: "Lead time reduced from 12 to 6 weeks, 30% cost savings, and the client expanded their product catalog by 40%.",
    metrics: [
      { icon: Clock, label: "Lead Time Reduced", value: "50%" },
      { icon: DollarSign, label: "Cost Savings", value: "30%" },
      { icon: TrendingUp, label: "Catalog Growth", value: "40%" },
    ],
  },
  {
    title: "UK brand sourcing sustainable packaging solutions",
    client: "UK-based sustainable packaging brand",
    industry: "Packaging & Printing",
    challenge: "The client needed eco-friendly packaging manufacturers in China that met strict EU environmental standards and certifications. Previous attempts to find reliable suppliers had failed.",
    solution: "We conducted specialized audits focusing on environmental compliance, material sourcing, and certifications. We shortlisted 4 factories with FSC and ISO 14001 certifications.",
    result: "Successfully launched 3 product lines with certified sustainable packaging, 25% cost reduction compared to local UK suppliers, and full compliance with EU regulations.",
    metrics: [
      { icon: ShieldCheck, label: "Certified Suppliers", value: "4" },
      { icon: DollarSign, label: "Cost Savings", value: "25%" },
      { icon: TrendingUp, label: "Product Lines", value: "3" },
    ],
  },
  {
    title: "Canadian company sourcing medical devices",
    client: "Canadian medical device company",
    industry: "Medical & Healthcare",
    challenge: "The client needed to source medical-grade components with strict quality and regulatory requirements. They required suppliers with ISO 13485 certification and FDA compliance.",
    solution: "We leveraged our network of certified medical device suppliers, conducted rigorous audits focusing on cleanroom standards and quality systems, and managed the entire qualification process.",
    result: "Qualified 3 ISO 13485 certified suppliers, reduced component costs by 35%, and successfully passed all regulatory audits.",
    metrics: [
      { icon: ShieldCheck, label: "ISO Certified Suppliers", value: "3" },
      { icon: DollarSign, label: "Cost Reduction", value: "35%" },
      { icon: TrendingUp, label: "Regulatory Pass Rate", value: "100%" },
    ],
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
      <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Case Studies</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Results That Speak
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real projects, real results. See how we've helped businesses like yours source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((cs, i) => (
              <Card key={i} className="p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <Badge variant="secondary" className="mb-3">{cs.industry}</Badge>
                    <h2 className="text-xl md:text-2xl font-bold text-primary-800 mb-2">{cs.title}</h2>
                    <p className="text-sm text-slate-500 mb-4">{cs.client}</p>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-slate-700 mb-1">The Challenge</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-slate-700 mb-1">Our Solution</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-700 mb-1">The Result</h3>
                      <p className="text-sm text-primary-600 font-medium">{cs.result}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] mb-4">
                      <img
                        data-strk-img-id={`cs-hero-${i}`}
                        data-strk-img={`[cs-title-${i}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt=""
                      />
                    </div>
                    <p id={`cs-title-${i}`} className="sr-only">{cs.title}</p>
                    <div className="space-y-3">
                      {cs.metrics.map((m, j) => (
                        <div key={j} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                          <m.icon className="w-5 h-5 text-primary-600 shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-primary-800">{m.value}</div>
                            <div className="text-xs text-slate-500">{m.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll show you how we can deliver results for your business.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}