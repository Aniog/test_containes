import PageHeader from "@/components/shared/PageHeader";
import CtaSection from "@/components/shared/CtaSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/data/siteData";
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Settings } from "lucide-react";

const iconMap = {
  search: Search,
  "shield-check": ShieldCheck,
  "clipboard-check": ClipboardCheck,
  factory: Factory,
  ship: Ship,
  settings: Settings,
};

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Practical sourcing support for businesses buying from China."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="transition hover:shadow-md">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
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

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Most clients start with supplier sourcing and factory verification. We can recommend the right scope after a short call or email.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-end">
                <a
                  href="/contact?quote=true"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-800 px-6 text-sm font-medium text-white transition hover:bg-blue-900"
                >
                  Request a Free Quote
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
