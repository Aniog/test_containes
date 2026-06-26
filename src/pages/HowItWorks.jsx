import { Link } from "react-router-dom";
import { ArrowRight, FileText, Search, Mail, Factory, Ship, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/data/siteData";
import { useImageLoader } from "@/hooks/useImageLoader";

const stepIcons = [FileText, Search, Mail, Factory, Ship];

export default function HowItWorks() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A clear process from inquiry to delivery
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We manage each step of your China sourcing project so you can focus on selling and growing your business.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((item, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={index} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 last:mb-0">
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-white font-bold mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
                        Step {item.step}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
                        {item.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                      <div className="rounded-xl overflow-hidden shadow-md border border-slate-200">
                        <img
                          data-strk-img-id={`process-img-${index}`}
                          data-strk-img={`[process-title-${index}] [process-desc-${index}]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <h3 id={`process-title-${index}`} className="sr-only">
                        {item.title}
                      </h3>
                      <p id={`process-desc-${index}`} className="sr-only">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <Container>
          <SectionHeading
            label="What to expect"
            title="Transparency at every stage"
            description="You stay informed throughout the project with clear reports, photos, and direct communication."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Written reports",
                description: "Receive supplier comparison sheets, audit reports, and QC inspection summaries with photos."
              },
              {
                title: "Regular updates",
                description: "Your project manager provides status updates at each milestone so there are no surprises."
              },
              {
                title: "Direct communication",
                description: "Talk directly with our English-speaking team by email, phone, or WhatsApp."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <CheckCircle className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-800">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start your sourcing project today
            </h2>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
