import InquiryForm from '../components/InquiryForm.jsx'

export default function Contact() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">Get a Free Sourcing Quote</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Send your product brief and service needs. We will review the details and respond with practical sourcing next steps.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">What to include</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-6 text-slate-700">
              <li>Product photos, drawings, or reference links</li>
              <li>Target specifications, materials, sizes, and standards</li>
              <li>Estimated quantity and target order timing</li>
              <li>Destination country and packaging or labeling needs</li>
              <li>Whether you need sourcing, verification, QC, follow-up, or shipping coordination</li>
            </ul>
          </aside>
          <InquiryForm source="contact_page" />
        </div>
      </section>
    </main>
  )
}
