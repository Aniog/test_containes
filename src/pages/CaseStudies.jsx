import { Link } from "react-router-dom";
import { Building2, TrendingUp, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

const cases = [
  {
    client: "European Electronics Retailer",
    location: "Germany",
    industry: "Consumer Electronics",
    challenge:
      "The client was sourcing cables and chargers from multiple suppliers with inconsistent quality and long lead times. They needed a consolidated supply base with better cost control.",
    approach: [
      "Audited 8 potential factories in Shenzhen and Dongguan",
      "Shortlisted 3 suppliers meeting CE and ROHS requirements",
      "Implemented pre-shipment inspection on every order",
      "Consolidated shipments to reduce freight costs",
    ],
    result:
      "Reduced sourcing costs by 22% and cut average lead time from 45 to 28 days. Quality complaint rate dropped to under 1%.",
    imgId: "cs-electronics-1a2b3c",
  },
  {
    client: "US Outdoor Gear Brand",
    location: "United States",
    industry: "Sporting Goods",
    challenge:
      "A growing outdoor brand needed to switch tent and backpack manufacturers due to repeated quality failures with their existing supplier.",
    approach: [
      "Conducted on-site audits at 5 tent and bag factories",
      "Tested samples for waterproofing, seam strength, and fabric quality",
      "Established 3 QC checkpoints during production",
      "Created detailed product specification sheets in Chinese",
    ],
    result:
      "Achieved zero quality complaints in the first 12 months. Successfully launched 2 new product lines.",
    imgId: "cs-outdoor-2b3c4d",
  },
  {
    client: "Australian Home Goods Chain",
    location: "Australia",
    industry: "Home & Kitchen",
    challenge:
      "The retailer wanted to expand their private label product range but lacked the resources to find and manage suppliers in China.",
    approach: [
      "Mapped suppliers across kitchenware, storage, and decor categories",
      "Negotiated favorable MOQs and payment terms for trial orders",
      "Managed sampling for 15 SKUs simultaneously",
      "Coordinated consolidated container shipments monthly",
    ],
    result:
      "Expanded product line by 40 SKUs within 6 months. Average product development cycle reduced from 4 months to 8 weeks.",
    imgId: "cs-home-3c4d5e",
  },
  {
    client: "UK Packaging Distributor",
    location: "United Kingdom",
    industry: "Packaging",
    challenge:
      "Needed a reliable source of custom-branded packaging boxes and bottles with consistent color matching and fast turnaround.",
    approach: [
      "Identified 4 packaging specialists with strong printing capabilities",
      "Established Pantone color approval process with physical samples",
      "Set up rolling production schedule to maintain stock levels",
      "Implemented 100% pre-shipment inspection for color and print quality",
    ],
    result:
      "Color consistency improved from 70% to 98% pass rate. Reorder lead time stabilized at 3 weeks.",
    imgId: "cs-packaging-4d5e6f",
  },
  {
    client: "Canadian Machinery Importer",
    location: "Canada",
    industry: "Industrial Machinery",
    challenge:
      "Sourcing precision CNC parts with tight tolerances from China. Previous suppliers had quality drift and poor communication.",
    approach: [
      "Audited machine shops with CMM inspection equipment",
      "Established first-article inspection (FAI) protocol",
      "Created detailed engineering drawings with Chinese annotations",
      "Implemented lot traceability and material certification requirements",
    ],
    result:
      "Dimensional accuracy improved to 99.2% within tolerance. Client placed 3 long-term supply agreements.",
    imgId: "cs-machinery-5e6f7g",
  },
  {
    client: "Nordic Textile Brand",
    location: "Sweden",
    industry: "Textiles & Apparel",
    challenge:
      "Launching a sustainable clothing line and needed certified organic cotton suppliers with transparent supply chains.",
    approach: [
      "Verified GOTS and OEKO-TEX certifications at 6 textile mills",
      "Traced cotton origin to specific cooperative farms",
      "Conducted social compliance audits at sewing factories",
      "Managed dyeing process to meet strict chemical restrictions",
    ],
    result:
      "Successfully launched sustainable line with full traceability documentation. Passed all third-party audits.",
    imgId: "cs-textiles-6f7g8h",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
              Client Case Studies
            </h1>
            <p className="text-lg text-slate-600">
              Real outcomes from businesses that partnered with us to solve their China sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, idx) => (
            <article
              key={idx}
              className="grid lg:grid-cols-2 gap-10 items-start rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[cs-desc-${idx}] [cs-title-${idx}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {c.industry}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs text-slate-500">{c.location}</span>
                </div>
                <h2
                  id={`cs-title-${idx}`}
                  className="text-xl md:text-2xl font-bold text-slate-900 mb-4"
                >
                  {c.client}
                </h2>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1.5">
                      Challenge
                    </h4>
                    <p
                      id={`cs-desc-${idx}`}
                      className="text-slate-600 text-sm leading-relaxed"
                    >
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1.5">
                      Our Approach
                    </h4>
                    <ul className="space-y-1.5">
                      {c.approach.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-800">
                        Result
                      </span>
                    </div>
                    <p className="text-sm text-emerald-800">{c.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to achieve similar results?
          </h2>
          <p className="text-slate-300 mb-8">
            Tell us about your sourcing goals and we will build a plan tailored to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
