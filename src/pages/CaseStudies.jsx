import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle, Star, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Reducing Costs for a European Electronics Retailer",
    client: "EuroTech GmbH — Germany",
    challenge: "A German electronics retailer needed to diversify their supply chain and reduce component costs by 25% without sacrificing quality. They had been burned by unreliable suppliers in the past.",
    solution: "We identified 8 qualified manufacturers, conducted factory audits on 4 shortlisted suppliers, and negotiated pricing. The selected supplier passed all quality checks and met the target price point.",
    results: [
      "32% cost reduction on key components",
      "Supplier passed ISO 9001 audit",
      "On-time delivery rate: 98%",
      "Ongoing production monitoring in place",
    ],
    image: "case-study-electronics",
    rating: 5,
  },
  {
    title: "Launching a Home Decor Brand from Scratch",
    client: "UrbanHome Decor — USA",
    challenge: "A first-time importer wanted to launch a home decor brand but had no experience with China sourcing. They needed help finding manufacturers, managing samples, and ensuring product quality.",
    solution: "We managed the entire sourcing process from supplier discovery to final shipment. We found 3 suitable manufacturers, coordinated sample development, and conducted pre-shipment inspections.",
    results: [
      "Successfully launched with 15 SKUs",
      "All products met quality specifications",
      "First shipment delivered on time",
      "Client continues to scale with same suppliers",
    ],
    image: "case-study-homedecor",
    rating: 5,
  },
  {
    title: "Quality Rescue for Auto Parts Importer",
    client: "Mekong Automotive — Vietnam",
    challenge: "An auto parts importer discovered that their existing supplier was substituting lower-grade materials without notice. They needed urgent quality intervention and a backup supplier.",
    solution: "We conducted an emergency factory audit, documented the material substitution, and helped the client transition to a new, verified supplier. We also implemented ongoing production monitoring.",
    results: [
      "Identified and documented material substitution",
      "New supplier passed all quality checks",
      "Zero quality issues in 18 months",
      "Saved estimated $120K in potential losses",
    ],
    image: "case-study-autoparts",
    rating: 5,
  },
  {
    title: "Scaling Production for a Health Food Company",
    client: "PureLife Nutrition — UK",
    challenge: "A UK health food company needed to scale production from small-batch to commercial volumes while maintaining strict quality standards for their supplement line.",
    solution: "We identified GMP-certified manufacturers, facilitated factory audits, managed sample runs, and set up a quality control protocol including regular during-production inspections.",
    results: [
      "Production scaled from 500 to 50,000 units/month",
      "All products met GMP standards",
      "30% lower unit cost at scale",
      "Established long-term supplier relationship",
    ],
    image: "case-study-food",
    rating: 5,
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
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" id="case-studies-hero-title">
              Case Studies
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed" id="case-studies-hero-subtitle">
              Real results from real clients. See how we've helped businesses around the world source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2 block">Case Study</span>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">{cs.title}</h2>
                  <p className="text-sm text-neutral-500 mb-4">{cs.client}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-800 mb-1">The Challenge</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-800 mb-1">Our Solution</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-800 mb-2">Results</h3>
                      <ul className="space-y-1.5">
                        {cs.results.map((result, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div
                    className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-100"
                    data-strk-bg-id={`case-study-img-${i}`}
                    data-strk-bg={`[case-studies-hero-title] [case-study-title-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Create Your Success Story</h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Tell us about your sourcing needs and we'll help you achieve similar results.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-3.5 inline-block">
            Get a Free Quote <ArrowRight className="w-4 h-4 ml-1 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
}