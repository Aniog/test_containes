import PageMeta from '@/components/shared/PageMeta'
import PageIntro from '@/components/site/PageIntro'
import InquiryForm from '@/components/forms/InquiryForm'
import { contactDetails } from '@/content/siteContent'

const ContactPage = () => {
  return (
    <>
      <PageMeta
        title="Contact | SSourcing China"
        description="Contact SSourcing China to discuss supplier search, factory verification, quality inspection, production follow-up, or shipping coordination."
      />
      <main>
        <PageIntro
          eyebrow="Contact"
          title="Send your sourcing brief"
          description="If you are planning a new product search, need supplier verification, or want support during production and shipment, share the details here."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[22rem_minmax(0,1fr)] lg:px-8">
            <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Before you send</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">What helps us review faster</h2>
              <div className="mt-6 space-y-5">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </aside>

            <InquiryForm compact />
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactPage
