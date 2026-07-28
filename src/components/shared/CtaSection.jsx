import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CtaSection({
  title = "Ready to source from China with confidence?",
  subtitle = "Tell us what you need. We'll match you with qualified suppliers and guide you through every step.",
  primaryLabel = "Get a Free Sourcing Quote",
  secondaryLabel = "Contact Us",
}) {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-navy-100 md:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link to="/contact?quote=true">{primaryLabel}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900 min-w-[160px]">
            <Link to="/contact">{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
