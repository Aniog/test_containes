import PageHeader from "@/components/sections/PageHeader";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From inquiry to delivery — a transparent six-step process"
        description="We follow the same documented process for every buyer, whether it's a first sample or a recurring full-container order."
      />
      <Process />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
            What you receive at each milestone
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            We use email and a shared project workspace to keep all documents,
            photos and updates in one place.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-brand-line">
            <table className="w-full divide-y divide-brand-line text-sm">
              <thead className="bg-brand-bg text-brand-ink">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider md:px-6">Stage</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider md:px-6">Deliverable</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider md:table-cell md:px-6">Typical time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line bg-white text-brand-ink">
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Requirements</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">Sourcing plan & quotation</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">1 business day</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Supplier shortlist</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">Comparative quote sheet, factory profiles</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">5–10 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Factory verification</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">On-site audit report with photos</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">3–7 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Samples</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">Approved sample with sealed spec sheet</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">1–4 weeks</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Production</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">Weekly progress updates, photos / videos</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">30–60 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Inspection</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">AQL inspection report (PDF)</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">1–2 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold md:px-6">Shipping</td>
                  <td className="px-4 py-4 text-brand-muted md:px-6">Booking, B/L, invoice, packing list, tracking</td>
                  <td className="hidden px-4 py-4 text-brand-muted md:table-cell md:px-6">Per Incoterm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ />
      <CTABanner />
    </>
  );
}
