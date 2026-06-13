import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, TrendingDown, TrendingUp, ShieldCheck,
  Clock, PackageCheck, DollarSign, Users,
} from "lucide-react";

const caseStudies = [
  {
    id: "cs-1",
    client: "US Consumer Electronics Retailer",
    industry: "Consumer Electronics",
    product: "Wireless Earbuds",
    challenge:
      "Client was paying premium prices from a middleman and receiving 8% defect rates on bulk orders. Needed direct supplier access and reliable quality control.",
    approach: [
      "Identified 4 qualified earbud manufacturers in Shenzhen",
      "Conducted on-site factory audits at top 2 candidates",
      "Negotiated direct pricing, cutting out intermediaries",
      "Implemented AQL 2.5 pre-shipment inspection protocol",
    ],
    results: [
      { metric: "22%", label: "Cost Reduction", icon: TrendingDown },
      { metric: "< 1%", label: "Defect Rate", icon: ShieldCheck },
      { metric: "14 Days", label: "Faster Delivery", icon: Clock },
    ],
    testimonial: {
      quote:
        "SSourcing China completely changed our supply chain. We went from dealing with a middleman to working directly with a verified factory. Quality is now consistent and we have cut our costs significantly.",
      author: "Michael Chen",
      role: "Supply Chain Director",
    },
  },
  {
    id: "cs-2",
    client: "European Home & Garden E-commerce Brand",
    industry: "Home & Garden",
    product: "Patio Furniture Sets",
    challenge:
      "Needed a reliable outdoor furniture supplier capable of custom designs and consistent quality across seasonal reorders. Previous supplier had inconsistent finishes and missed deadlines.",
    approach: [
      "Sourced 5 specialized outdoor furniture factories in Foshan",
      "Verified production lines and powder coating capabilities",
      "Developed custom design templates with the chosen factory",
      "Set up monthly production monitoring with milestone checks",
    ],
    results: [
      { metric: "18%", label: "Cost Savings", icon: TrendingDown },
      { metric: "100%", label: "On-Time Delivery", icon: Clock },
      { metric: "3 Designs", label: "New Products Added", icon: PackageCheck },
    ],
    testimonial: {
      quote:
        "Their factory verification process gave us the confidence to switch suppliers. Now we get consistent quality, meet our seasonal deadlines, and our customers love the new designs.",
      author: "Sarah Williams",
      role: "Product Development Lead",
    },
  },
  {
    id: "cs-3",
    client: "Australian Hardware Distributor",
    industry: "Hardware & Tools",
    product: "Power Tool Accessories",
    challenge:
      "Was experiencing high return rates due to inconsistent product quality. Needed a robust quality inspection process but did not have local presence in China.",
    approach: [
      "Identified quality-focused power tool accessory manufacturers",
      "Implemented inline QC checks during production",
      "Established pre-shipment AQL inspection with photos",
      "Created defect classification and rework protocol",
    ],
    results: [
      { metric: "85%", label: "Return Rate Reduction", icon: TrendingDown },
      { metric: "97%", label: "First-Pass Quality", icon: ShieldCheck },
      { metric: "$120K", label: "Saved in Returns", icon: DollarSign },
    ],
    testimonial: {
      quote:
        "The inspection reports with photos are incredibly detailed. We can see exactly what is being checked and make decisions before goods ever leave China. Our return rate has dropped dramatically.",
      author: "James O'Connor",
      role: "Operations Manager",
    },
  },
  {
    id: "cs-4",
    client: "Canadian Fashion Brand",
    industry: "Apparel & Accessories",
    product: "Athleisure Wear Collection",
    challenge:
      "Needed to scale production quickly for a new product line launch. Previous local supplier could not meet volume requirements or competitive pricing.",
    approach: [
      "Sourced specialized sportswear factories in Guangdong",
      "Verified fabric sourcing, dye sublimation, and stitching quality",
      "Negotiated volume pricing for 15,000-unit initial order",
      "Coordinated split production batches to meet launch date",
    ],
    results: [
      { metric: "25%", label: "Lower Unit Cost", icon: TrendingDown },
      { metric: "15K+", label: "Units Produced", icon: PackageCheck },
      { metric: "3x", label: "Revenue Growth", icon: TrendingUp },
    ],
    testimonial: {
      quote:
        "We launched our new collection on time and under budget. The quality of the fabric and stitching exceeded our expectations. We have already placed our next seasonal order.",
      author: "Emily Zhang",
      role: "Founder & CEO",
    },
  },
  {
    id: "cs-5",
    client: "UK Electronics Startup",
    industry: "Electronics",
    product: "Smart Home Sensors",
    challenge:
      "First-time China importer needing guidance on finding suppliers for a custom PCB assembly project with specific certifications.",
    approach: [
      "Sourced certified PCBA manufacturers with FCC/CE experience",
      "Verified certifications and testing lab partnerships",
      "Arranged prototype samples from 3 shortlisted factories",
      "Guided client through first order from deposit to delivery",
    ],
    results: [
      { metric: "$45K", label: "Saved vs. Local Quote", icon: TrendingDown },
      { metric: "CE / FCC", label: "Certifications Obtained", icon: ShieldCheck },
      { metric: "2 Weeks", label: "From Sample to Production", icon: Clock },
    ],
    testimonial: {
      quote:
        "As first-time importers, we were worried about everything. SSourcing China walked us through every step, found the right factory, and our product passed all certifications on the first try.",
      author: "David Patel",
      role: "Co-Founder",
    },
  },
];

export default function CaseStudies() {
  useEffect(() => {
    document.title = "Case Studies | SSourcing China";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/85 to-brand-dark/90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              Real results from real clients. See how we help businesses source
              better, reduce costs, and improve quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 lg:p-8 rounded-xl border border-border bg-white"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <span className="text-xs text-text-muted">
                  Client: {cs.client}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {cs.product} — {cs.challenge.split(". ")[0]}
              </h2>

              {/* Challenge & Approach */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                    Challenge
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                    Our Approach
                  </h3>
                  <ul className="space-y-2">
                    {cs.approach.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {cs.results.map((r) => (
                  <div
                    key={r.label}
                    className="p-4 rounded-lg bg-surface border border-border text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center mx-auto mb-2">
                      <r.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div className="text-2xl font-extrabold text-brand mb-1">
                      {r.metric}
                    </div>
                    <div className="text-text-secondary text-sm">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="p-5 rounded-lg bg-surface border border-border">
                <p className="text-text-secondary text-sm italic leading-relaxed mb-3">
                  "{cs.testimonial.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary text-sm">
                      {cs.testimonial.author}
                    </div>
                    <div className="text-text-muted text-xs">
                      {cs.testimonial.role}, {cs.client}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Want Results Like These?
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            Let us put our experience to work for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-bold hover:bg-accent-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
