import { Link } from "react-router-dom";
import {
  Search, ShieldCheck, FlaskConical, ClipboardCheck, PackageCheck, Ship, Tag, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify factories that match your product, MOQ, and target cost. Where possible, we go direct to the manufacturer rather than through trading companies.",
    bullets: [
      "Product-fit screening across our supplier network",
      "Standardized RFQs sent to 5 – 10 candidate factories",
      "Quote comparison sheet with full cost breakdown",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification &amp; Audit",
    desc: "On-site visits to confirm the factory is real, capable, and compliant — before any deposit is sent.",
    bullets: [
      "Business license and tax ID verification",
      "Production line, capacity, and equipment review",
      "Certifications: ISO, BSCI, Sedex, and product-specific",
    ],
  },
  {
    icon: FlaskConical,
    title: "Sample Handling",
    desc: "We collect, consolidate, and ship samples, and translate your feedback into clear technical changes for the supplier.",
    bullets: [
      "Multi-supplier sample consolidation in our warehouse",
      "Photo and dimension documentation",
      "Round-by-round revision tracking",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Production Follow-up",
    desc: "We track your order from raw material to final packing, with weekly progress updates and photo evidence.",
    bullets: [
      "Production schedule and milestone tracking",
      "Weekly written and photo updates",
      "Early warning on delays and material shortages",
    ],
  },
  {
    icon: PackageCheck,
    title: "Quality Inspection",
    desc: "AQL-based inspections by our independent QC team, with full reports and photo / video evidence.",
    bullets: [
      "Pre-production, in-line, and pre-shipment inspections",
      "AQL 2.5 / 4.0 sampling, customizable checklists",
      "Container loading supervision",
    ],
  },
  {
    icon: Ship,
    title: "Shipping &amp; Logistics",
    desc: "Consolidation, export documents, and freight booking by sea, air, or rail — including DDP options to your door.",
    bullets: [
      "FOB, CIF, DDP terms with vetted forwarders",
      "Consolidation in our China warehouse",
      "Customs documents and HS code support",
    ],
  },
  {
    icon: Tag,
    title: "Private Label &amp; OEM",
    desc: "End-to-end coordination of branded packaging, custom tooling, and certifications for your private label range.",
    bullets: [
      "Tooling and mold management",
      "Custom packaging and artwork production",
      "Certification sourcing (CE, FCC, RoHS, FDA, etc.)",
    ],
  },
];

const Services = () => {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for serious B2B buyers"
        description="We work as your team in China — finding suppliers, verifying factories, controlling quality, and shipping the goods. Pick the services you need; we'll quote each one transparently."
      />

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map(({ icon: Icon, title, desc, bullets }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-border-soft p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2
                      className="text-xl md:text-2xl font-semibold text-brand"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p
                      className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white font-semibold px-6 py-3 text-base hover:bg-accent-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Services;
