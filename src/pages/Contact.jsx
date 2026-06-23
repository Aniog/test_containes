import { Mail, MapPin, MessageSquare } from 'lucide-react'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Contact() {
  return (
    <main className="bg-brand-surface text-brand-ink">
      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><SectionHeading eyebrow="Contact" title="Get a Free Sourcing Quote" desc="Share your sourcing project and we will review your requirements, supplier concerns, inspection needs, or shipping coordination questions." /><div className="mt-8 grid gap-4"><div className="flex gap-4 rounded-2xl border border-brand-border bg-brand-surface p-5"><MapPin className="h-6 w-6 text-brand-teal" /><div><p className="font-bold text-brand-ink">China-side sourcing support</p><p className="mt-1 text-sm text-brand-muted">Supplier communication, factory checks, QC, and logistics coordination.</p></div></div><div className="flex gap-4 rounded-2xl border border-brand-border bg-brand-surface p-5"><Mail className="h-6 w-6 text-brand-teal" /><div><p className="font-bold text-brand-ink">Qualified inquiry focus</p><p className="mt-1 text-sm text-brand-muted">Please include product details, order quantity, and target market where possible.</p></div></div><div className="flex gap-4 rounded-2xl border border-brand-border bg-brand-surface p-5"><MessageSquare className="h-6 w-6 text-brand-teal" /><div><p className="font-bold text-brand-ink">Practical first reply</p><p className="mt-1 text-sm text-brand-muted">We reply with next steps based on your brief, not generic claims.</p></div></div></div></div><InquiryForm /></div></section>
    </main>
  )
}
