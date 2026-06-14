import Hero from '@/components/home/Hero'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import ClientLogos from '@/components/home/ClientLogos'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import InquiryForm from '@/components/InquiryForm'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQ />
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow">Start a project</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
                Tell us what you want to source
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Send a few details and our Shenzhen team will reply within 1
                business day. The more you share — specs, target price,
                timeline, certifications — the faster we can shortlist the
                right factories.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  'No commitment to send an inquiry',
                  'Your details stay confidential',
                  'Replies in English or 中文',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm sourcePage="home" />
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
