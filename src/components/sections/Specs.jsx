import Eyebrow from "../site/Eyebrow";
import Section from "../site/Section";
import Button from "../site/Button";
import { ArrowUpRight, FileDown } from "lucide-react";
import { specSheet } from "@/lib/site-data";

export default function Specs() {
  return (
    <Section id="specs" tone="muted" compact>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Technical sheet</Eyebrow>
          <h2
            id="specs-headline"
            className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.08]"
          >
            The numbers
            <br />
            that matter.
          </h2>
          <p
            id="specs-sub"
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            A representative spread across the ARTITECT range. Every machine
            can be tuned beyond these baselines — speak to our engineering team
            about your specific part geometry.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#contact" variant="primary" size="md">
              Talk to engineering
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button as="a" href="#contact" variant="outline" size="md">
              <FileDown className="w-4 h-4" />
              Download full catalogue
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-2 px-6 md:px-8 py-4 bg-muted/60 border-b border-border">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                Parameter
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                Value
              </span>
            </div>
            <dl>
              {specSheet.map((row, i) => (
                <div
                  key={row.k}
                  className={
                    "grid grid-cols-2 px-6 md:px-8 py-4 items-center " +
                    (i !== specSheet.length - 1 ? "border-b border-border" : "")
                  }
                >
                  <dt className="text-sm md:text-[15px] text-foreground font-medium">
                    {row.k}
                  </dt>
                  <dd className="font-mono text-sm md:text-[15px] text-foreground/80 text-right md:text-left">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}