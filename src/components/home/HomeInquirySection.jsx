import InquiryForm from "@/components/shared/InquiryForm.jsx";

export default function HomeInquirySection() {
  return (
    <section className="bg-white">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">Start your project</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Get a free sourcing quote
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-muted">
              Tell us about your product. We will reply within one business day with a
              shortlist of factories, sample costs, and a clear next step. No obligation
              to proceed.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-muted">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Response within 24 hours, Monday to Friday
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                English and Mandarin support
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Quote covers sourcing, QC, and shipping options
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm
              sourcePage="home"
              title="Free sourcing quote"
              description="We treat every inquiry as confidential. NDA available on request."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
