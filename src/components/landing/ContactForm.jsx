import { Send } from 'lucide-react'

const fieldClass = 'mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'

const ContactForm = ({ formData, onChange, onSubmit, successMessage }) => {
  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl md:p-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Contact form</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Tell us how to reach you.</h2>
        <p className="mt-3 leading-7 text-slate-600">
          Submit a message and it will appear in the saved contacts panel for this preview.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">
          Full name
          <input
            className={fieldClass}
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Jordan Lee"
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Email address
          <input
            className={fieldClass}
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="jordan@example.com"
            autoComplete="email"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Company
          <input
            className={fieldClass}
            name="company"
            value={formData.company}
            onChange={onChange}
            placeholder="Northstar Studio"
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Interest
          <select className={fieldClass} name="interest" value={formData.interest} onChange={onChange} required>
            <option value="Project inquiry">Project inquiry</option>
            <option value="Discovery call">Discovery call</option>
            <option value="Partnership">Partnership</option>
            <option value="General question">General question</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-slate-800">
        Message
        <textarea
          className={`${fieldClass} min-h-32 resize-y`}
          name="message"
          value={formData.message}
          onChange={onChange}
          placeholder="Share what you need help with..."
          required
        />
      </label>

      {successMessage && (
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800" role="status">
          {successMessage}
        </div>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:w-auto"
      >
        Save contact
        <Send className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  )
}

export default ContactForm
