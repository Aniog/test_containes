const fields = [
  { label: 'Your Name', type: 'text', placeholder: 'Full name' },
  { label: 'Company', type: 'text', placeholder: 'Company name' },
  { label: 'Email', type: 'email', placeholder: 'Work email' },
  { label: 'Phone / WhatsApp', type: 'text', placeholder: 'Optional' },
]

export default function InquiryForm() {
  return (
    <form className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.label} className="block text-sm font-medium text-slate-950">
            <span>{field.label}</span>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="mt-2 w-full rounded-2xl border border-slate-950/15 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-700/45 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </label>
        ))}
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-950">
        <span>Products to Source</span>
        <input
          type="text"
          placeholder="e.g. kitchenware, packaging, metal parts"
          className="mt-2 w-full rounded-2xl border border-slate-950/15 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-700/45 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-slate-950">
        <span>Project Details</span>
        <textarea
          rows="5"
          placeholder="Tell us what you need, target quantity, quality requirements, destination country, and timeline."
          className="mt-2 w-full rounded-2xl border border-slate-950/15 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-700/45 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </label>

      <div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
        <input id="nda" type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-950/20 text-blue-600 focus:ring-blue-600" />
        <label htmlFor="nda" className="text-sm leading-6 text-slate-700/75">
          I would like confidential handling for product details and supplier communications.
        </label>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600-dark"
      >
        Get a Free Sourcing Quote
      </button>
      <p className="mt-3 text-sm text-slate-700/60">Frontend preview only. Submission is not connected yet.</p>
    </form>
  )
}
