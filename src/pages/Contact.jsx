import InquiryForm from '../components/InquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const Contact = () => {
  return (
    <main>
      <PageHero
        heroId="contact-hero"
        eyebrow="Contact"
        title="Request a free sourcing quote"
        description="Tell SSourcing China what you want to source, verify, inspect, or ship. We will review the details and suggest practical next steps for your buying project."
        imageId="contact-factory-meeting-qc-9ab732"
        visualHint="international buyer supplier meeting in factory warehouse quality inspection sourcing China"
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-7 text-slate-800 shadow-soft">
            <SectionHeader
              eyebrow="Before submitting"
              title="Helpful details to include"
              description="Clear product and order information makes the first review more useful. If some details are unknown, share your best estimate."
            />
            <ul className="mt-7 space-y-4 text-sm leading-6 text-slate-600">
              <li><strong className="text-slate-800">Product:</strong> photos, drawings, materials, dimensions, or supplier links.</li>
              <li><strong className="text-slate-800">Order:</strong> quantity, target price, sample need, and packaging requirements.</li>
              <li><strong className="text-slate-800">Risk:</strong> supplier concerns, quality issues, compliance needs, or timing pressure.</li>
              <li><strong className="text-slate-800">Shipping:</strong> destination country, port, warehouse, or Amazon FBA requirements.</li>
            </ul>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}

export default Contact
