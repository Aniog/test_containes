import { Send } from 'lucide-react'

const InquiryForm = () => (
  <form className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl lg:p-8" onSubmit={(event) => event.preventDefault()}>
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Inquiry form</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Get a Free Sourcing Quote</h2>
      <p className="mt-3 text-sm leading-7 text-slate-700">
        This frontend preview shows the form layout. After design approval, submission handling can be connected.
      </p>
    </div>

    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-slate-800">
        Name
        <input className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Your name" />
      </label>
      <label className="text-sm font-semibold text-slate-800">
        Work email
        <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="name@company.com" />
      </label>
      <label className="text-sm font-semibold text-slate-800">
        Company
        <input className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Company name" />
      </label>
      <label className="text-sm font-semibold text-slate-800">
        Product category
        <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" defaultValue="">
          <option value="" disabled>Select a category</option>
          <option>Electronics and accessories</option>
          <option>Home and kitchen products</option>
          <option>Packaging and labels</option>
          <option>Industrial parts</option>
          <option>Textiles and soft goods</option>
          <option>Other products</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-slate-800 sm:col-span-2">
        What support do you need?
        <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Find new suppliers</option>
          <option>Verify an existing supplier</option>
          <option>Inspect product quality</option>
          <option>Follow production</option>
          <option>Coordinate shipping handoff</option>
          <option>End-to-end sourcing support</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-slate-800 sm:col-span-2">
        Project details
        <textarea className="mt-2 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Share product specifications, target quantity, destination country, timeline, and key concerns." />
      </label>
    </div>

    <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 sm:w-auto">
      Send Inquiry <Send className="h-4 w-4" />
    </button>
  </form>
)

export default InquiryForm
