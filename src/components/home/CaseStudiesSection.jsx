import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const cases = [
  {
    id: "electronics-retailer",
    title: "European Electronics Retailer",
    industry: "Consumer Electronics",
    challenge:
      "Needed to find a reliable manufacturer for a new line of Bluetooth speakers with strict EU compliance requirements.",
    result:
      "Identified a certified factory, negotiated 18% cost savings, and delivered 10,000 units within 6 weeks.",
    imgId: "casestudy-elec-1a2b3c",
  },
  {
    id: "fashion-brand",
    title: "US Fashion Accessories Brand",
    industry: "Apparel & Accessories",
    challenge:
      "Required a supplier capable of producing custom-designed bags with consistent quality across multiple SKUs.",
    result:
      "Audited 5 factories, selected the best fit, implemented QC protocols, and reduced defect rate from 12% to 1.5%.",
    imgId: "casestudy-fashion-4d5e6f",
  },
  {
    id: "industrial-distributor",
    title: "Australian Industrial Distributor",
    industry: "Industrial Tools",
    challenge:
      "Sought a cost-effective manufacturer for a range of safety equipment with specific Australian standards certification.",
    result:
      "Found a certified supplier, managed production across 3 factories, and achieved 22% cost reduction.",
    imgId: "casestudy-industrial-7g8h9i",
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="border-t py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real results from real partnerships. See how we&apos;ve helped
            buyers succeed.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.id}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[cs-desc-${c.id}] [cs-title-${c.id}] [cs-subtitle] [cs-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {c.industry}
                </div>
                <h3
                  id={`cs-title-${c.id}`}
                  className="text-lg font-semibold"
                >
                  {c.title}
                </h3>
                <p
                  id={`cs-desc-${c.id}`}
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <strong>Challenge:</strong> {c.challenge}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <strong>Result:</strong> {c.result}
                </p>
              </div>
              <span id="cs-heading" className="hidden">
                Case Studies
              </span>
              <span id="cs-subtitle" className="hidden">
                Real results from real partnerships
              </span>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            View All Case Studies
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}