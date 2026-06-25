import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-soft mb-5">
              Start a project
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-bone tracking-tight leading-[1.05]">
              Tell us about the work,<br />we will recommend the folder.
            </h2>
            <p className="mt-6 max-w-xl text-bone/75 leading-relaxed">
              Whether you are folding facade panels, HVAC ducts or limited-run
              architectural details, we will help you specify the right
              ARTITECT machine for the brief.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-bone text-ink hover:bg-accent hover:text-bone transition px-8 py-4 text-xs uppercase tracking-[0.25em]"
            >
              Talk to an engineer
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
