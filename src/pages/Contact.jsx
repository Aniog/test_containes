import ImageLoader from '@/components/site/ImageLoader.jsx'
import PageHero from '@/components/site/PageHero.jsx'
import InquiryForm from '@/components/site/InquiryForm.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import { Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => (
  <ImageLoader>
    <main>
      <PageHero eyebrow="Contact" title="Send a sourcing inquiry" description="Share product details, supplier links, quantities, inspection needs, and shipping questions. SSourcing China will review your brief and suggest practical next steps." imageId="contact-sourcing-consultation-g24d7" imageAlt="Sourcing consultation with product samples and documents" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <div className="rounded-3xl border border-brand-border bg-brand-mist p-8">
              <h2 className="text-2xl font-semibold text-brand-navy">Contact details</h2>
              <div className="mt-6 space-y-4 text-sm text-brand-slate">
                <p className="flex gap-3"><Mail className="h-5 w-5 text-brand-blue" /> inquiries@ssourcingchina.com</p>
                <p className="flex gap-3"><MapPin className="h-5 w-5 text-brand-blue" /> China-based sourcing coordination</p>
                <p className="flex gap-3"><Clock className="h-5 w-5 text-brand-blue" /> Typical reply: within one business day</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-brand-border bg-white p-3 shadow-card">
              <StockImage imgId="contact-shipping-documents-port-s18v4" query="[contact-image-caption] [page-hero-title]" ratio="4x3" width="800" alt="Shipping documents and export coordination" className="h-72 w-full rounded-2xl object-cover" />
              <p id="contact-image-caption" className="px-3 pt-4 text-sm font-medium text-brand-slate">Supplier communication, inspection planning, and shipping document coordination for overseas buyers.</p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  </ImageLoader>
)

export default Contact
