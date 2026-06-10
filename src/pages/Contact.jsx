import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import InquiryForm from '@/components/shared/InquiryForm';
import { company } from '@/data/content';

const contactCards = [
  { icon: Icon.Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: Icon.Phone, label: 'Phone / WhatsApp', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: Icon.MessageCircle, label: 'WeChat', value: company.wechat },
  { icon: Icon.Clock, label: 'Office hours', value: company.hours },
];

const officeCards = [
  { city: 'Shenzhen (HQ)', role: 'Project management · QC coordination', address: company.address },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are sourcing — we reply within 1 business day"
        subtitle="A project manager from our Shenzhen office will read your inquiry, do a quick feasibility check, and email you back with next steps. No bots, no sales scripts."
        bgId="contact-bg-3c1b9d"
        bgQuery="[contact-hero-subtitle] [contact-hero-title]"
      >
        <span id="contact-hero-title" className="sr-only">Contact SSourcing China</span>
        <span id="contact-hero-subtitle" className="sr-only">Free sourcing quote</span>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="How to reach us"
                title="Email works best, but here are all the ways to get in touch"
                subtitle="For new projects, please use the inquiry form on the right. For existing orders, contact your project manager directly."
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactCards.map((c, i) => {
                  const IconCmp = c.icon;
                  const Body = (
                    <div className="card p-4 h-full flex items-start gap-3 hover:border-[#0B2545] transition-colors">
                      <div className="w-9 h-9 rounded-md bg-[#EEF1F6] text-[#0B2545] flex items-center justify-center flex-shrink-0">
                        <IconCmp className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-[#6B7A90] font-bold">{c.label}</p>
                        <p className="text-sm font-semibold text-[#1A2230] mt-0.5 break-words">{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={i} href={c.href} className="block">{Body}</a>
                  ) : (
                    <div key={i}>{Body}</div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h3 className="text-base font-bold text-[#1A2230] mb-4">Our office</h3>
                <div className="space-y-3">
                  {officeCards.map((o, i) => (
                    <div key={i} className="card p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon.MapPin className="w-4 h-4 text-[#E8743B]" />
                        <h4 className="text-[15px] font-bold text-[#1A2230]">{o.city}</h4>
                      </div>
                      <p className="text-xs text-[#6B7A90] mb-2">{o.role}</p>
                      <p className="text-sm text-[#3D4A5C] leading-relaxed">{o.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-5 rounded-xl border border-[#DDE2EC] bg-[#F8F9FB]">
                <h3 className="text-[15px] font-bold text-[#1A2230] mb-2 flex items-center gap-2">
                  <Icon.Clock className="w-4 h-4 text-[#0B2545]" />
                  Response SLA
                </h3>
                <ul className="text-sm text-[#3D4A5C] leading-relaxed space-y-1.5">
                  <li>· Inquiry acknowledgement: <span className="font-semibold text-[#1A2230]">within 1 business day</span></li>
                  <li>· First supplier shortlist: <span className="font-semibold text-[#1A2230]">3–5 working days</span></li>
                  <li>· Sample cost & lead time: <span className="font-semibold text-[#1A2230]">included in the shortlist</span></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8 sticky top-24">
                <span className="eyebrow">Sourcing inquiry form</span>
                <h2 className="mt-2 text-2xl font-bold text-[#1A2230]">Get a free sourcing quote</h2>
                <p className="mt-2 text-sm text-[#3D4A5C]">No cost, no commitment. A project manager will reply within 1 business day.</p>
                <div className="mt-6">
                  <InquiryForm idPrefix="contact-inquiry" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'What happens after I submit?', body: 'Your inquiry lands directly in the inbox of a project manager. They read it, do a quick feasibility check, and reply with next steps — typically within 1 business day.' },
              { title: 'Is the initial shortlist really free?', body: 'For most categories, yes. We charge for factory audits, samples, and production follow-up only when you decide to move forward.' },
              { title: 'What if I only need one service?', body: 'Fine by us. Many clients come to us for QC only, or shipping only, and we run those as standalone projects.' },
            ].map((c, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-[16px] font-bold text-[#1A2230]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#3D4A5C] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
