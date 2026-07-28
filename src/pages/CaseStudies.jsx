import { useEffect, useRef } from "react";
import PageHeader from "@/components/shared/PageHeader";
import CtaSection from "@/components/shared/CtaSection";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const studies = [
  {
    id: "home-goods-retailer",
    industry: "Home & Garden",
    client: "US Home Goods Retailer",
    result: "Reduced sourcing costs by 18% and cut first-order defects from 12% to under 2%.",
    summary:
      "We re-sourced a lighting and décor line from 4 fragmented vendors to 2 verified factories, introduced pre-shipment inspections, and standardized packaging.",
  },
  {
    id: "electronics-brand",
    industry: "Electronics",
    client: "European Electronics Brand",
    result: "Launched 3 new product SKUs in 5 months with full CE documentation.",
    summary:
      "Our team qualified a certified electronics manufacturer, managed tooling, coordinated samples, and tracked production milestones through first shipment.",
  },
  {
    id: "fitness-startup",
    industry: "Sports & Fitness",
    client: "UK Startup — Fitness Products",
    result: "First container shipped on time with zero quality holds.",
    summary:
      "We helped a first-time importer select a factory, refine product specs, negotiate payment terms, and supervise container loading.",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Real sourcing projects and the results we delivered for our clients."
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={containerRef}>
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="flex flex-col overflow-hidden transition hover:shadow-md">
                <img
                  data-strk-img-id="case-study-home-goods-7a3f1c"
                  data-strk-img="[case-title-home-goods] [case-industry-home-goods]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="US Home Goods Retailer"
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="default">
                    <span id="case-industry-home-goods">Home & Garden</span>
                  </Badge>
                  <CardTitle id="case-title-home-goods" className="mt-3 text-xl">
                    US Home Goods Retailer
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="font-semibold text-blue-800">
                    Reduced sourcing costs by 18% and cut first-order defects from 12% to under 2%.
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                    We re-sourced a lighting and décor line from 4 fragmented vendors to 2 verified factories, introduced pre-shipment inspections, and standardized packaging.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden transition hover:shadow-md">
                <img
                  data-strk-img-id="case-study-electronics-2b8e5d"
                  data-strk-img="[case-title-electronics] [case-industry-electronics]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="European Electronics Brand"
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="default">
                    <span id="case-industry-electronics">Electronics</span>
                  </Badge>
                  <CardTitle id="case-title-electronics" className="mt-3 text-xl">
                    European Electronics Brand
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="font-semibold text-blue-800">
                    Launched 3 new product SKUs in 5 months with full CE documentation.
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                    Our team qualified a certified electronics manufacturer, managed tooling, coordinated samples, and tracked production milestones through first shipment.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden transition hover:shadow-md">
                <img
                  data-strk-img-id="case-study-fitness-4c9a0b"
                  data-strk-img="[case-title-fitness] [case-industry-fitness]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="UK Startup — Fitness Products"
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="default">
                    <span id="case-industry-fitness">Sports & Fitness</span>
                  </Badge>
                  <CardTitle id="case-title-fitness" className="mt-3 text-xl">
                    UK Startup — Fitness Products
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="font-semibold text-blue-800">
                    First container shipped on time with zero quality holds.
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                    We helped a first-time importer select a factory, refine product specs, negotiate payment terms, and supervise container loading.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                Want results like these?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Tell us about your product and market. We'll outline a sourcing plan tailored to your goals.
              </p>
              <a
                href="/contact?quote=true"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-blue-800 px-8 text-sm font-semibold text-white transition hover:bg-blue-900"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
