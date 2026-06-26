import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/data/siteData";

export function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          label="Case Studies"
          title="Results we have delivered for buyers"
          description="Real examples of how we helped clients improve quality, reduce costs, and scale their China supply chains."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-800 bg-blue-50 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {study.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 flex-1">
                {study.solution}
              </p>
              <div className="bg-teal-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-teal-800">
                  Result: {study.result}
                </p>
              </div>
              <div className="flex items-start gap-3 text-slate-500 text-sm">
                <Quote className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <p className="italic">{study.quote}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button variant="outline">
              Read All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
