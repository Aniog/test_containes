import { Link } from "react-router-dom";
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/siteData";
import { useImageLoader } from "@/hooks/useImageLoader";

const iconMap = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  Ship
};

export default function Services() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-service China sourcing support
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We provide the local expertise, verification, and quality control you need to buy from China with less risk and better results.
            </p>
          </div>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button>
                        Request this service <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={isEven ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                      <img
                        data-strk-img-id={`service-img-${service.id}`}
                        data-strk-img={`[service-title-${service.id}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <h3
                      id={`service-title-${service.id}`}
                      className="sr-only"
                    >
                      {service.title} in China
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="bg-blue-800 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Tell us about your project and we will recommend the right sourcing support for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get a Free Sourcing Quote
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
