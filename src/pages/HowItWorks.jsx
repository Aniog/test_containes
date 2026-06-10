import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import CtaBanner from '@/components/shared/CtaBanner';
import InquiryForm from '@/components/shared/InquiryForm';
import { processSteps } from '@/data/content';

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear 7-step process, from your first email to cargo at your port"
        subtitle="Every step has a named owner, a written deliverable, and a typical timeline. Nothing hidden, nothing improvised."
        bgId="howitworks-bg-9c3d2b"
        bgQuery="[howitworks-hero-subtitle] [howitworks-hero-title]"
      >
        <span id="howitworks-hero-title" className="sr-only">China sourcing process</span>
        <span id="howitworks-hero-subtitle" className="sr-only">From inquiry to delivery</span>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="The process"
            title="Seven steps, one named project manager"
            subtitle="You'll be working with a single point of contact who handles coordination, suppliers, and reports — supported by field auditors in five Chinese provinces."
          />

          <div className="mt-14 relative">
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-[#DDE2EC]" aria-hidden />
            <ol className="space-y-8">
              {processSteps.map((step) => (
                <li key={step.n} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-0 top-2 w-12 h-12 rounded-full bg-[#0B2545] text-white items-center justify-center font-bold text-sm shadow-md">
                    {String(step.n).padStart(2, '0')}
                  </div>
                  <div className="md:hidden w-10 h-10 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs mb-3">
                    {String(step.n).padStart(2, '0')}
                  </div>
                  <div className="card p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-[#1A2230]">{step.title}</h3>
                      <span className="pill">{step.eta}</span>
                    </div>
                    <p className="text-sm md:text-base text-[#3D4A5C] leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Icon.Globe2,
                title: 'You stay in your timezone',
                body: 'All reporting is in English, all timestamps are in your local time, and you can book a video call inside business hours.',
              },
              {
                icon: Icon.FileText,
                title: 'Everything in writing',
                body: 'Supplier quotes, audit reports, inspection reports, shipping docs — saved to a shared folder you can access for the lifetime of the project.',
              },
              {
                icon: Icon.Handshake,
                title: 'No kickbacks, ever',
                body: 'We get paid by you, the buyer — not by suppliers. Our recommendation is based on quality, lead time, and price, not commissions.',
              },
            ].map((c, i) => {
              const IconCmp = c.icon;
              return (
                <div key={i} className="card p-6 md:p-7">
                  <div className="w-11 h-11 rounded-md bg-[#EEF1F6] text-[#0B2545] flex items-center justify-center mb-4">
                    <IconCmp className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#1A2230]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#3D4A5C] leading-relaxed">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Start the process"
                title="Send your product brief, and we'll reply within 1 business day"
                subtitle="Even if you're still at the 'just exploring' stage, a short note about your idea is enough for us to point you in the right direction."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8">
                <InquiryForm idPrefix="howitworks-inquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to talk to a project manager first?"
        subtitle="Send a short note with your product, target quantity, and timeline. We'll come back with a quick assessment and recommended next steps."
      />
    </>
  );
}
