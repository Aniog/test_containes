import ImageLoader from '@/components/site/ImageLoader.jsx'
import PageHero from '@/components/site/PageHero.jsx'
import SectionHeader from '@/components/site/SectionHeader.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'
import { services } from '@/content.js'

const Services = () => (
  <ImageLoader>
    <main>
      <PageHero eyebrow="Services" title="China sourcing services for overseas buyers" description="Use SSourcing China for supplier search, factory verification, sample follow-up, quality inspection, production tracking, and shipping coordination." imageId="services-factory-verification-qc-n46s2" imageAlt="Quality inspector checking goods in a Chinese factory" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Select the support you need" description="Some buyers need end-to-end sourcing. Others need a focused check before placing an order. These service modules can be combined around your project." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-brand-border bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-brand-blue"><Icon className="h-6 w-6" /></div>
                <h2 className="text-xl font-semibold text-brand-navy">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquirySection />
    </main>
  </ImageLoader>
)

export default Services
