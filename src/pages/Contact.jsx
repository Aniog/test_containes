import InquiryForm from '@/components/common/InquiryForm'
import PageHeader from '@/components/common/PageHeader'

const Contact = () => {
  return (
    <>
      <PageHeader
        baseId="contact-page"
        eyebrow="Contact"
        title="Send your sourcing brief and request a free sourcing quote"
        description="The more detail you provide, the easier it is to review supplier options, quality requirements, and the right next steps for your project."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Inquiry guidance
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                Information that helps us review your request clearly
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <li>Product name and specification summary</li>
                <li>Target quantity, MOQ, or forecast volume</li>
                <li>Destination market and shipping preference</li>
                <li>Services needed: sourcing, verification, QC, production, shipping</li>
                <li>Any quality concerns, deadlines, or supplier issues already identified</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                Best fit
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight text-white">
                Suitable for overseas buyers who need local sourcing support in China without building an in-house team.
              </p>
            </div>
          </div>

          <InquiryForm compact />
        </div>
      </section>
    </>
  )
}

export default Contact
