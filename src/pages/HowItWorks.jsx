import { useEffect, useRef } from 'react'
import PageHero from '@/components/PageHero'
import ProcessSection from '@/components/sections/ProcessSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import CtaBanner from '@/components/CtaBanner'
import InquiryForm from '@/components/sections/InquiryForm'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const responsibilities = [
  {
    you: 'Share product specs, target price, MOQ and any reference photos.',
    us: 'Confirm scope, propose a sourcing plan and timeline within one business day.',
  },
  {
    you: 'Review supplier shortlist and choose which to sample.',
    us: 'Screen factories, request quotations and verify business legitimacy in person.',
  },
  {
    you: 'Approve samples and final purchase terms.',
    us: 'Coordinate samples, negotiate pricing, MOQ, payment and delivery terms.',
  },
  {
    you: 'Make agreed milestone payments to the supplier.',
    us: 'Track production weekly and escalate any delays early.',
  },
  {
    you: 'Approve QC report before shipment.',
    us: 'Run AQL inspection, send a detailed photo report, address defects.',
  },
  {
    you: 'Confirm shipping mode (FOB, CIF, DDP) and incoterms.',
    us: 'Book freight, prepare documents and track delivery to your door.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A transparent way to source from China"
        description="No black box. You see every step, every supplier and every report. Here is how a typical project moves from inquiry to delivered goods."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      <ProcessSection />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B6FB8]">
                Roles & responsibilities
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2545] md:text-4xl">
                Who does what on a typical project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We make sure the line between your team and our team is clear from day one, so
                nothing falls through the cracks.
              </p>
              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
                <img
                  alt="Container ship at a Chinese port preparing for export shipment"
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img-id="howitworks-port-img"
                  data-strk-img="[how-port-caption] china port container ship export shipping"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <p
                  id="how-port-caption"
                  className="bg-slate-50 px-5 py-3 text-xs font-medium text-slate-600"
                >
                  Container loading at Ningbo Port — coordinated with our partner freight forwarders.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    <tr>
                      <th className="px-5 py-3">You</th>
                      <th className="px-5 py-3">SSourcing China</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {responsibilities.map((row, idx) => (
                      <tr key={idx} className="align-top">
                        <td className="px-5 py-4">{row.you}</td>
                        <td className="px-5 py-4 text-slate-700">{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemsSection />
      <CtaBanner />
      <InquiryForm />
    </div>
  )
}
