import { Link } from "react-router-dom";

export default function CTABanner({
  title = "Ready to source from China with confidence?",
  description = "Tell us about your product. You'll get a clear sourcing plan and an estimated service fee within 1 business day.",
  buttonText = "Get a Free Sourcing Quote",
  buttonTo = "/contact",
}) {
  return (
    <section className="bg-brand-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-white/85 md:text-base">{description}</p>
        </div>
        <Link
          to={buttonTo}
          className="inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-slate-100 md:text-base"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
