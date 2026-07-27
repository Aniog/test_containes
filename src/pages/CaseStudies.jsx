import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SectionHeading from "@/components/shared/SectionHeading";
import HelmetSEO from "@/components/shared/HelmetSEO";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const cases = [
  {
    category: "Electronics",
    title: "Improving quality for a US audio brand",
    challenge: "High defect rates and inconsistent communication with a trading company.",
    solution:
      "We sourced a direct manufacturer, conducted inline inspections, and standardized QC checklists.",
    result: "Defect rate dropped from 8% to under 1% within two production runs.",
    metric: "8% → 1%",
    metricLabel: "Defect rate reduction",
    icon: ShieldCheck,
  },
  {
    category: "Home Goods",
    title: "Lowering landed costs for a European furniture importer",
    challenge: "Rising costs and unreliable lead times from an over-relied supplier.",
    solution:
      "Identified a specialized manufacturing region, renegotiated terms, and consolidated shipments.",
    result: "Landed cost reduced by 18% with more predictable delivery windows.",
    metric: "-18%",
    metricLabel: "Landed cost savings",
    icon: TrendingDown,
  },
  {
    category: "Industrial",
    title: "Meeting a tight launch deadline for an Australian machinery startup",
    challenge: "New product launch at risk due to slow tooling approval and unclear milestones.",
    solution:
      "Managed tooling approval, pilot runs, and pre-shipment inspections with weekly updates.",
    result: "Product shipped on time for the launch event.",
    metric: "On time",
    metricLabel: "Launch delivery",
    icon: Clock,
  },
  {
    category: "Consumer Goods",
    title: "Scaling order volume for an e-commerce seller",
    challenge: "Supplier could not keep up with 3x growth in order volume.",
    solution:
      "Qualified a larger factory with better capacity and implemented production follow-up protocols.",
    result: "Order volume tripled without stockouts or quality complaints.",
    metric: "3x",
    metricLabel: "Order volume growth",
    icon: TrendingUp,
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <HelmetSEO
        title="Case Studies | China Sourcing Results | SSourcing China"
        description="Read how SSourcing China helped businesses improve quality, reduce costs, and meet deadlines with reliable Chinese suppliers."
      />

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Case Studies</h1>
            <p className="mt-4 text-lg text-slate-300">
              Real sourcing outcomes for businesses sourcing electronics, home goods, machinery, and consumer products from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Results"
            title="Proven sourcing outcomes"
            description="Each case reflects a common sourcing challenge and how our process delivered measurable improvement."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {cases.map((item) => (
              <Card key={item.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <Badge variant="primary" className="w-fit">
                    {item.category}
                  </Badge>
                  <CardTitle className="mt-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Challenge</p>
                    <p className="text-slate-600">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Solution</p>
                    <p className="text-slate-600">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Result</p>
                    <p className="text-slate-600">{item.result}</p>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-blue-50 p-4">
                    <item.icon className="h-8 w-8 text-blue-700" />
                    <div>
                      <p className="text-2xl font-bold text-blue-700">{item.metric}</p>
                      <p className="text-sm text-blue-800">{item.metricLabel}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-900 p-8 text-center text-white lg:p-12">
            <h3 className="text-2xl font-bold">Ready for your own sourcing win?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Tell us about your product and goals. We will recommend a practical plan based on your category, volume, and timeline.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
