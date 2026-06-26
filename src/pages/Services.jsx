import PageHeader from "@/components/sections/PageHeader";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import CTABanner from "@/components/sections/CTABanner";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="China sourcing services for serious buyers"
        description="From supplier discovery to door delivery — pick the services that fit your project, or use us as your full sourcing department in China."
      />
      <Services withCta={false} />

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                What's included
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                Clear scope, fixed deliverables
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Every engagement is defined in writing. You know exactly which
                steps we cover, what reports you'll receive and how much it
                costs — before any work starts.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-ink">
                <li className="rounded-lg border border-brand-line bg-white p-4">
                  <span className="font-semibold">Scope of work</span> — written
                  brief, target spec sheet, sourcing strategy and timeline.
                </li>
                <li className="rounded-lg border border-brand-line bg-white p-4">
                  <span className="font-semibold">Supplier report</span> —
                  shortlist with company profiles, quotations and pros/cons.
                </li>
                <li className="rounded-lg border border-brand-line bg-white p-4">
                  <span className="font-semibold">Factory audit report</span> —
                  on-site visit photos, capability and compliance findings.
                </li>
                <li className="rounded-lg border border-brand-line bg-white p-4">
                  <span className="font-semibold">Inspection report</span> —
                  AQL results, defect breakdown, photos and recommendations.
                </li>
                <li className="rounded-lg border border-brand-line bg-white p-4">
                  <span className="font-semibold">Shipping pack</span> — booking,
                  HBL/MBL, packing list, commercial invoice and tracking.
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                Pricing
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                Three simple engagement models
              </h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-brand-line bg-white p-6">
                  <h3 className="text-lg font-semibold text-brand-ink">Per-project fee</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    A fixed fee agreed upfront, based on product complexity and
                    scope. Best for one-off sourcing projects or new product
                    launches.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-line bg-white p-6">
                  <h3 className="text-lg font-semibold text-brand-ink">Percentage of order value</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    A small percentage of the FOB order value, typically used
                    for medium and large recurring orders. Aligns our interest
                    with yours.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-line bg-white p-6">
                  <h3 className="text-lg font-semibold text-brand-ink">Monthly retainer</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    A dedicated sourcing manager for ongoing programs with
                    multiple SKUs and shipments. Best for brands building a
                    long-term China supply base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Trust />
      <CTABanner />
    </>
  );
}
