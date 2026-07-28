import { inquiryFields, siteMeta } from '@/data/siteContent'

const InquiryForm = () => {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-soft md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">Start your inquiry</p>
      <h3 className="mt-3 text-2xl font-bold text-brand-navy">{siteMeta.cta}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Share your product details, quantity, target market, and current sourcing challenges. We will use this
        information to understand your project scope.
      </p>

      <form className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {inquiryFields.map((field) => (
            <label key={field.label} className="block text-sm font-medium text-brand-navy">
              <span className="mb-2 block">{field.label}</span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
              />
            </label>
          ))}
        </div>

        <label className="block text-sm font-medium text-brand-navy">
          <span className="mb-2 block">Requirement Details</span>
          <textarea
            rows="5"
            placeholder="Tell us what you need to source, target quantity, desired specs, and timing."
            className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
          />
        </label>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90"
        >
          {siteMeta.cta}
        </button>
      </form>
    </div>
  )
}

export default InquiryForm
