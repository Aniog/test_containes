import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/data/siteData";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          label="How It Works"
          title="A simple, transparent sourcing process"
          description="We keep you informed at every stage, from supplier identification to delivery at your door."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-extrabold text-blue-100 mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100 -ml-4" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/how-it-works">
            <Button variant="outline">See the Full Process</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
