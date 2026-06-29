import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, Star, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Electronics Component Sourcing for IoT Startup",
    client: "UK-based IoT hardware startup",
    location: "Shenzhen, China",
    challenge: "A hardware startup needed to source custom PCBAs and sensor modules at competitive prices for their IoT product line. They had previously been burned by an unreliable supplier and needed rigorous quality assurance.",
    solution: "We identified 5 qualified PCB manufacturers in Shenzhen, conducted on-site audits of 3 shortlisted factories, negotiated pricing, and implemented a multi-stage QC process including incoming material inspection, in-process checks, and final functional testing.",
    result: "40% cost reduction compared to their previous supplier. First shipment achieved 100% defect-free rate. Production lead time reduced from 8 weeks to 4 weeks.",
    tags: ["Supplier Verification", "QC Inspection", "Electronics"],
  },
  {
    title: "Furniture Line Sourcing for US Retailer",
    client: "Mid-size US furniture retailer",
    location: "Guangdong, China",
    challenge: "A US retailer wanted to launch a new line of mid-range home furniture but had no experience sourcing from China. They needed factories capable of meeting US quality standards and compliance requirements.",
    solution: "We conducted comprehensive market research, identified 8 potential furniture manufacturers, audited 3 factories for production capacity and quality systems, negotiated sample production, and managed the entire sampling and approval process.",
    result: "Selected one factory that met all requirements. 15% margin improvement over previous domestic sourcing. Successful launch of 3 product lines within 12 weeks.",
    tags: ["Factory Audit", "Production Monitoring", "Furniture"],
  },
  {
    title: "Packaging Compliance for EU Brand",
    client: "European sustainable goods brand",
    location: "Zhejiang, China",
    challenge: "A European brand needed eco-friendly packaging materials that complied with strict EU regulations. Their previous attempts at direct sourcing resulted in non-compliant materials and wasted investment.",
    solution: "We identified suppliers with relevant FSC and EU compliance certifications, conducted material testing and documentation review, facilitated sample runs, and verified all compliance documentation before mass production.",
    result: "Found fully compliant supplier. All packaging passed EU regulatory review on first submission. Client established a long-term partnership now spanning 2+ years.",
    tags: ["Supplier Sourcing", "Compliance Check", "Packaging"],
  },
  {
    title: "Industrial Equipment for Australian Distributor",
    client: "Australian industrial equipment distributor",
    location: "Zhejiang & Jiangsu, China",
    challenge: "An Australian distributor needed to source industrial pumps and valves with specific technical specifications and Australian standards compliance.",
    solution: "We sourced from 6 qualified manufacturers across Zhejiang and Jiangsu, coordinated technical specification reviews between engineers, facilitated prototype development, and managed quality control throughout production.",
    result: "Successfully sourced 3 product lines with full compliance certification. 25% cost savings. Ongoing production monitoring relationship established.",
    tags: ["Supplier Matching", "Technical QC", "Industrial"],
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-gray-900 to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we've helped businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 md:space-y-16">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{cs.title}</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Client</h3>
                          <p className="text-gray-700">{cs.client}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Solution</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-5">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h3>
                      <p className="text-gray-700 text-sm mb-4">{cs.location}</p>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Results</h3>
                      <div className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-gray-900 font-medium text-sm">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Start Your Success Story
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you source your products from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}