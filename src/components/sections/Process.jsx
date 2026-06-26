import Eyebrow from "../site/Eyebrow";
import Section from "../site/Section";
import { processSteps } from "@/lib/site-data";

export default function Process() {
  return (
    <Section id="process" tone="default" compact={false}>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow>How we work</Eyebrow>
          <h2
            id="process-headline"
            className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.08]"
          >
            From your part
            <br />
            drawing to a signed-off cell.
          </h2>
          <p
            id="process-tagline"
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Our four-step engagement model keeps every project on rails — from
            the first consultation to production sign-off on your floor.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ol className="relative grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {processSteps.map((s, idx) => (
              <li
                key={s.n}
                className="relative pl-14 md:pl-16"
              >
                <span
                  className="absolute left-0 top-0 font-mono text-sm tracking-[0.18em] text-accent"
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <span
                  className="absolute left-12 md:left-14 top-1.5 h-px w-6 bg-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}