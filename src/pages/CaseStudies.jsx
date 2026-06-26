import { Link } from "react-router-dom";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/data/siteData";

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Results that speak for themselves
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              See how we helped businesses across industries solve sourcing challenges, improve quality, and grow their supply chains.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-800 bg-blue-50 px-3 py-1 rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    <strong className="text-slate-900">Client:</strong> {study.client}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-red-400">
                      <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-blue-800">
                      <h3 className="font-semibold text-slate-900 mb-2">Solution</h3>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-500">
                      <h3 className="font-semibold text-teal-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> Result
                      </h3>
                      <p className="text-teal-800">{study.result}</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button>
                      Discuss your project <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
                    <Quote className="w-10 h-10 text-blue-400 mb-6" />
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                      "{study.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{study.client}</p>
                      <p className="text-slate-400">{study.industry}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-800">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want results like these?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Tell us about your sourcing challenge and we will prepare a tailored plan.
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
