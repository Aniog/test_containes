import ImageLoader from '@/components/site/ImageLoader.jsx'
import PageHero from '@/components/site/PageHero.jsx'
import SectionHeader from '@/components/site/SectionHeader.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'
import { processSteps } from '@/content.js'

const HowItWorks = () => (
  <ImageLoader>
    <main>
      <PageHero eyebrow="How it works" title="A structured sourcing process from brief to shipment" description="The process is designed for overseas buyers who need local visibility, supplier communication, verification, QC checks, and organized shipping coordination." imageId="how-it-works-production-follow-up-t81q5" imageAlt="Production follow-up meeting at a factory" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Step-by-step project flow" description="Each checkpoint helps reduce confusion and keeps supplier decisions based on clearer information." />
          <div className="mt-12 grid gap-5">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="grid gap-5 rounded-2xl border border-brand-border bg-white p-6 shadow-sm md:grid-cols-[96px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy font-bold text-white">{number}</div>
                <div><h2 className="text-xl font-semibold text-brand-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-brand-muted">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquirySection />
    </main>
  </ImageLoader>
)

export default HowItWorks
