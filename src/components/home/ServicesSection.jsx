import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Settings } from "lucide-react";
import { services } from "@/data/siteData";

const iconMap = {
  search: Search,
  "shield-check": ShieldCheck,
  "clipboard-check": ClipboardCheck,
  factory: Factory,
  ship: Ship,
  settings: Settings,
};

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            End-to-end sourcing support
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From the first supplier search to final delivery, we manage the details that matter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="transition hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
