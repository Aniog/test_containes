import { Link } from "react-router-dom";
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/siteData";

const iconMap = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  Ship
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <Container>
        <SectionHeading
          label="Our Services"
          title="End-to-end sourcing support from China"
          description="From the first supplier search to final delivery, we manage the details so you can focus on growing your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-800 transition-colors">
                  <Icon className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-blue-800 hover:text-blue-900"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline">View All Services</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
