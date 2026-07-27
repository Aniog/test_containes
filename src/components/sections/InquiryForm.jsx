import React from 'react'
import Button from '@/components/ui/Button'

const fields = [
  ['name', 'Name', 'Your name'],
  ['email', 'Business email', 'name@company.com'],
  ['company', 'Company', 'Company name'],
  ['product', 'Product to source', 'Product name, materials, specifications'],
  ['quantity', 'Estimated quantity', 'Example: 1,000 units'],
]

export default function InquiryForm({ compact = false }) {
  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl shadow-slate-900/10 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(([id, label, placeholder]) => (
          <label key={id} className={id === 'product' ? 'sm:col-span-2' : ''}>
            <span className="text-sm font-semibold text-slate-800">{label}</span>
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder={placeholder} />
          </label>
        ))}
      </div>
      {!compact && (
        <label className="mt-4 block">
          <span className="text-sm font-semibold text-slate-800">Project notes</span>
          <textarea className="mt-2 min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Tell us your target market, quality requirements, destination country, and timeline." />
        </label>
      )}
      <Button as="button" type="button" className="mt-5 w-full">Get a Free Sourcing Quote</Button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-600">Frontend preview form only. Add your preferred contact workflow after design approval.</p>
    </form>
  )
}
