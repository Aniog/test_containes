import { CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/home/InquiryForm'
import SectionHeading from '@/components/home/SectionHeading'
import { productCategories } from '@/lib/pageData'

const notes = [
  'OEM and private-label development depends on clear drawings, samples, or reference products.',
  'For regulated products, buyers should share target-market standards before supplier screening.',
  'We can support supplier comparison, sample coordination, packaging review, and order follow-up.',
]

export default function Products() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products we source"
            title="Practical China sourcing across manufacturing categories"
            text="SSourcing China supports overseas buyers sourcing standard goods, custom products, industrial items, packaging, and private-label projects from China."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {productCategories.map((category) => (
              <div key={category} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <p className="text-sm font-bold leading-6 text-slate-800">{category}</p>
              </div>
            ))}
          </div>
          <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-7 text-amber-950">
            <h2 className="text-2xl font-bold text-amber-950">Before we search suppliers</h2>
            <div className="mt-5 grid gap-4">
              {notes.map((note) => (
                <p key={note} className="rounded-2xl bg-white/70 p-4 text-sm leading-6 text-amber-900">{note}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading eyebrow="Start sourcing" title="Send your product category and target quantity" text="We will review whether the request is clear enough for supplier research and what information may be needed before quotation comparison." />
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
