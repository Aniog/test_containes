import { AlertCircle, CheckCircle2 } from "lucide-react";
import { PROBLEMS } from "@/data/content";
import SectionHeader from "@/components/sections/SectionHeader";

export default function ProblemsSection() {
  return (
    <section className="section bg-surface-muted">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Problems We Solve"
              title="The recurring issues we hear from new clients"
              subtitle="These are the situations our clients face when they first contact us — and the work we do to address them."
            />
            <div className="mt-6 inline-flex items-start gap-3 rounded-md bg-accent-light border border-accent/20 p-4">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-ink-soft">
                If you recognize any of these, our free inquiry review will show you
                where to start.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROBLEMS.map((p, i) => (
                <li
                  key={p.title}
                  className="card p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary-light bg-primary-light rounded-md px-2 py-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
