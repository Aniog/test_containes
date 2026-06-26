import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSection from "../components/layout/CtaSection.jsx";
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Ship,
  FileCheck,
  Users,
  BarChart3,
  Languages,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    subtitle: "Find the right manufacturer for your product",
    description:
      "We research and shortlist suppliers based on your product specifications, target price, minimum order quantity, and quality standards. Our database covers factories across China's major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Fujian.",
    features: [
      "Market research and supplier identification",
      "Capability and capacity assessment",
      "Initial quotation collection and comparison",
      "Supplier shortlist with pros and cons",
    ],
  },
  {
    icon: Building2,
    title: "Factory Verification",
    subtitle: "Know who you are working with before you commit",
    description:
      "Our team visits factories in person to verify business licenses, production facilities, equipment, quality control systems, and working conditions. You receive a detailed audit report with photos, ratings, and recommendations.",
    features: [
      "On-site factory audit with photo documentation",
      "License and certification verification",
      "Production capacity assessment",
      "Social compliance overview",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    subtitle: "Catch defects before goods leave China",
    description:
      "We conduct inspections at key stages of production: pre-production, in-process, pre-shipment, and container loading. Using AQL sampling standards, we identify defects early and work with the factory on rework or replacement.",
    features: [
      "Pre-shipment inspection (PSI)",
      "During production inspection (DUPRO)",
      "Container loading supervision",
      "Detailed inspection reports with photos",
    ],
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    subtitle: "Stay informed throughout the manufacturing cycle",
    description:
      "Once production begins, we monitor progress with regular factory visits and milestone reports. If delays or issues arise, we intervene immediately to keep your order on track and on specification.",
    features: [
      "Weekly progress reports",
      "Milestone tracking and timeline management",
      "Issue identification and resolution",
      "Raw material and component verification",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    subtitle: "From factory floor to your warehouse",
    description:
      "We manage the logistics chain including freight forwarding, customs documentation, and export clearance. Whether you need sea freight, air freight, or express courier, we coordinate the best option for your timeline and budget.",
    features: [
      "Freight forwarding and booking",
      "Export documentation preparation",
      "Customs clearance support",
      "Delivery tracking and status updates",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance & Documentation",
    subtitle: "Meet regulatory requirements with confidence",
    description:
      "Different markets require different certifications and labeling. We help ensure your products meet the necessary standards for your destination country, including CE, FCC, RoHS, REACH, and FDA where applicable.",
    features: [
      "Certification requirement review",
      "Labeling and packaging compliance",
      "Test report verification",
      "Regulatory update alerts",
    ],
  },
];

const extras = [
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description:
      "A single bilingual point of contact who understands your product, timeline, and expectations.",
  },
  {
    icon: BarChart3,
    title: "Cost Transparency",
    description:
      "Itemized quotations so you understand exactly where your money goes, with no hidden fees.",
  },
  {
    icon: Languages,
    title: "Bilingual Communication",
    description:
      "Fluent English and Mandarin speakers bridge the language gap between you and Chinese suppliers.",
  },
  {
    icon: Truck,
    title: "Flexible Logistics",
    description:
      "We work with multiple freight partners to find the right balance of speed, cost, and reliability.",
  },
];

export default function Services() {
  return (
    <PageLayout title="Our Services">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Our Services
              </h1>
              <p className="text-text-secondary text-base sm:text-lg">
                End-to-end sourcing support for businesses importing from China.
                Choose the services you need, or let us manage the full process.
              </p>
            </div>

            <div className="space-y-10 lg:space-y-14">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start p-6 lg:p-10 rounded-2xl bg-white border border-border-light ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-primary mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-success mt-0.5">&bull;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-alt">
                      <img
                        alt={service.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`service-img-${i}`}
                        data-strk-img={`[service-title-${i}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <span
                      id={`service-title-${i}`}
                      className="sr-only"
                    >
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Included With Every Project
              </h2>
              <p className="text-text-secondary text-base">
                These benefits come standard, no matter which service level you choose.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {extras.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-surface border border-border-light"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
