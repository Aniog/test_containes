import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { problems } from "@/data/content.js";

const ProblemsSection = () => {
  return (
    <section className="bg-navy-900 text-white">
      <div className="container-page section-pad">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">
              Problems we solve
            </p>
            <h2
              id="problems-title"
              className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white"
            >
              The six reasons China sourcing goes wrong — and how we fix them
            </h2>
            <p
              id="problems-sub"
              className="mt-4 text-base text-white/70 leading-relaxed"
            >
              These are the failure modes we see in the projects our clients
              bring us after a bad first experience. Every one of them is a
              process, not a promise.
            </p>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                A working principle:
              </p>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                If something goes wrong on a project we run, we tell you
                before we tell the factory. Surprises cost money. Honest
                updates save it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {problems.map((p, i) => (
                <li
                  key={p.title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-200">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>PROBLEM {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3
                    id={`problem-${i}-title`}
                    className="mt-2 text-lg font-semibold text-white"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`problem-${i}-body`}
                    className="mt-2 text-sm text-white/75 leading-relaxed"
                  >
                    {p.body}
                  </p>
                  <div className="mt-3 flex items-start gap-2 text-xs text-success-600">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5" />
                    <span className="text-white/70">
                      Handled as a standard step in our process
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
