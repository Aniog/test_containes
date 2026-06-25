import { useRef } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";

export default function NotFound() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  return (
    <Section size="lg" tone="paper" className="min-h-[60vh]">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">404</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-brand-navy leading-[1.08]">
            We couldn't find that page.
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-xl">
            The page may have been moved or the link may be out of date. Use
            one of the routes below to keep going.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button to="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact our team
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="not-found-k1l2m3"
              query="warehouse empty shipping container lost in fog logistics"
              ratio="4x3"
              width={1000}
              alt="Empty shipping container in foggy warehouse"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
