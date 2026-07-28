import { useEffect, useRef } from "react";
import PageHeader from "@/components/shared/PageHeader";
import CtaSection from "@/components/shared/CtaSection";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, parseISO } from "date-fns";

const posts = [
  {
    id: "how-to-verify-a-chinese-factory",
    title: "How to Verify a Chinese Factory in 6 Steps",
    excerpt:
      "A practical checklist for confirming a supplier is real, capable, and reliable before you send a deposit.",
    category: "Due Diligence",
    date: "2026-07-15",
  },
  {
    id: "incoterms-explained",
    title: "Incoterms Explained for First-Time Importers",
    excerpt:
      "FOB, CIF, DDP — what they mean, who pays for what, and how to avoid surprises at destination.",
    category: "Shipping",
    date: "2026-07-08",
  },
  {
    id: "qc-checklist",
    title: "A Simple Pre-Shipment Inspection Checklist",
    excerpt:
      "Use this checklist to reduce defects, avoid returns, and protect your brand reputation.",
    category: "Quality Control",
    date: "2026-06-28",
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Practical guides for buying from China, quality control, and logistics."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={containerRef}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col overflow-hidden transition hover:shadow-md">
                <img
                  data-strk-img-id="blog-verify-factory-1d4e7a"
                  data-strk-img="[blog-title-verify] [blog-category-verify]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="How to Verify a Chinese Factory in 6 Steps"
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="secondary">
                    <span id="blog-category-verify">Due Diligence</span>
                  </Badge>
                  <CardTitle id="blog-title-verify" className="mt-3 text-xl">
                    How to Verify a Chinese Factory in 6 Steps
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-base leading-relaxed">
                    A practical checklist for confirming a supplier is real, capable, and reliable before you send a deposit.
                  </CardDescription>
                  <p className="mt-4 text-xs text-slate-500">{format(parseISO("2026-07-15"), "MMMM d, yyyy")}</p>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden transition hover:shadow-md">
                <img
                  data-strk-img-id="blog-incoterms-5f2b9c"
                  data-strk-img="[blog-title-incoterms] [blog-category-incoterms]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Incoterms Explained for First-Time Importers"
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="secondary">
                    <span id="blog-category-incoterms">Shipping</span>
                  </Badge>
                  <CardTitle id="blog-title-incoterms" className="mt-3 text-xl">
                    Incoterms Explained for First-Time Importers
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-base leading-relaxed">
                    FOB, CIF, DDP — what they mean, who pays for what, and how to avoid surprises at destination.
                  </CardDescription>
                  <p className="mt-4 text-xs text-slate-500">{format(parseISO("2026-07-08"), "MMMM d, yyyy")}</p>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden transition hover:shadow-md">
                <img
                  data-strk-img-id="blog-qc-checklist-8a1d3e"
                  data-strk-img="[blog-title-qc] [blog-category-qc]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="A Simple Pre-Shipment Inspection Checklist"
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="secondary">
                    <span id="blog-category-qc">Quality Control</span>
                  </Badge>
                  <CardTitle id="blog-title-qc" className="mt-3 text-xl">
                    A Simple Pre-Shipment Inspection Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-base leading-relaxed">
                    Use this checklist to reduce defects, avoid returns, and protect your brand reputation.
                  </CardDescription>
                  <p className="mt-4 text-xs text-slate-500">{format(parseISO("2026-06-28"), "MMMM d, yyyy")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
