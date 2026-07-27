import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PROCESS_STEPS } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, SectionHeader } from "@/components/shared/Section"

const DELIVERABLES = {
  inquiry: "Confirmation email within 1 business day, in English.",
  shortlist: "3–5 supplier profiles with quotes, lead times and risk notes.",
  verify: "Written audit report with photos, video, license and capacity check.",
  sample: "Sample shipment consolidated, feedback cycle, and final quote.",
  produce: "Weekly production status and milestone inspections.",
  ship: "Booking confirmation, shipping documents and tracking until arrival.",
}

export default function HowItWorks() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-page">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow">How it works</p>
          <h1
            id="hiw-h1"
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl"
          >
            A clear, six-step process from inquiry to delivered goods
          </h1>
          <p
            id="hiw-sub"
            className="mt-4 max-w-2xl text-base text-ink-700 md:text-lg"
          >
            Each step has a clear deliverable, a single point of contact and a
            realistic timeline. You always know what is happening and what
            comes next.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x">
          <ol className="grid gap-6 lg:grid-cols-2">
            {PROCESS_STEPS.map((s, idx) => (
              <li
                key={s.id}
                id={`hiw-${s.id}`}
                className="card flex flex-col gap-4 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-8 items-center rounded-full bg-navy px-3 text-xs font-semibold text-white">
                    Step {s.step}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    {idx === 0 ? "Day 1" : `Step ${idx + 1}`}
                  </span>
                </div>
                <h2
                  id={`hiw-${s.id}-title`}
                  className="text-xl font-semibold text-ink-900"
                >
                  {s.title}
                </h2>
                <p
                  id={`hiw-${s.id}-desc`}
                  className="text-sm text-ink-700"
                >
                  {s.desc}
                </p>
                <div className="rounded-lg bg-page p-4 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    What you receive
                  </p>
                  <p className="mt-1 text-ink-700">{DELIVERABLES[s.id]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-page">
        <div className="container-x">
          <SectionHeader
            eyebrow="What good looks like"
            title="What you can expect from working with us"
            subtitle="These are the standards we hold ourselves to on every project. If we ever fall short, tell us — we will make it right."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Reply within 1 business day",
                d: "Your project manager responds in English within 24 hours on working days. No black holes.",
              },
              {
                t: "One source of truth",
                d: "A single shared folder with quotes, samples, reports, shipping docs. Everyone works from the same files.",
              },
              {
                t: "Honest news, even when bad",
                d: "If a supplier slips, we tell you early and propose a plan — not the day before shipment.",
              },
              {
                t: "Independent of the factory",
                d: "We are paid by you. We do not take commissions from suppliers, so our advice is independent.",
              },
              {
                t: "Transparent costing",
                d: "Your quote shows the factory price, our service fee and shipping estimate separately.",
              },
              {
                t: "Written reports you can keep",
                d: "Audit reports and inspection reports are written, photo-supported and yours to keep.",
              },
            ].map((it) => (
              <div key={it.t} className="card p-5">
                <h3 className="text-base font-semibold text-ink-900">{it.t}</h3>
                <p className="mt-2 text-sm text-ink-700">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="Common timelines"
            title="What a typical first project looks like"
            subtitle="These ranges assume a finished product or close-to-finished spec. Custom OEM tooling and certifications can add 2–6 weeks."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-ink-500">
                  <th className="border-b border-border-soft py-3 pr-4">Phase</th>
                  <th className="border-b border-border-soft py-3 pr-4">Typical time</th>
                  <th className="border-b border-border-soft py-3">What you do</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ["Inquiry & shortlist", "3–7 working days", "Approve the suppliers we propose"],
                  ["Sample round", "7–15 days", "Give written feedback on each sample"],
                  ["Final quote & terms", "2–5 days", "Confirm PO, terms and deposit"],
                  ["Mass production", "15–45 days", "Review milestone photos / inspections"],
                  ["Pre-shipment QC", "1–2 days", "Approve shipment or request rework"],
                  ["Shipping (FCL ocean)", "20–35 days transit", "Track with your forwarder or ours"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="border-b border-border-soft py-3 pr-4 font-semibold text-ink-900">
                      {row[0]}
                    </td>
                    <td className="border-b border-border-soft py-3 pr-4">{row[1]}</td>
                    <td className="border-b border-border-soft py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
