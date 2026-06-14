import React from 'react'
import { Accordion } from '@/components/ui/Accordion'

const FAQ_ITEMS = [
  {
    question: 'What is the difference between a folder and a folding machine?',
    answer:
      'In our line, a folder is a manually fed machine with a single bending beam — ideal for short runs and one-off fabrications. A folding machine adds CNC angle control, recipe memory, and often automated backgauge — designed for repeatable production. The double folding machine adds a second beam so both edges of a panel can be folded in a single pass.',
  },
  {
    question: 'Which machine should I choose for a small fabrication shop?',
    answer:
      'Most independent fabricators start with the AM-M Series metal folder or the AM-MF metal folder machine. Both give you ARTITECT build quality in a footprint that fits a 1500–2500 mm bay, and you can upgrade to CNC later without replacing the bed.',
  },
  {
    question: 'How long does installation and commissioning take?',
    answer:
      'A standard manual folder installs in one day. A CNC sheet metal folding machine takes two to three days on site, including operator training. A full robotic metal folding machine cell is typically commissioned over four to five days.',
  },
  {
    question: 'Do you offer custom tooling and special configurations?',
    answer:
      'Yes. Our applications team routinely designs custom gooseneck tooling, longer beds, and special tonnage ratings for architectural and aerospace customers. Custom configurations ship in 8–14 weeks depending on scope.',
  },
  {
    question: 'What is the warranty and what does it cover?',
    answer:
      'Every new ARTITECT machine ships with a 12-month full-machine warranty covering parts, labor, and on-site service travel. Cast iron beds carry a separate 5-year structural warranty. Extended service contracts are available at quote.',
  },
  {
    question: 'Can I see a machine before I buy?',
    answer:
      'Absolutely. Our Pittsburgh demo floor is open by appointment, and our field engineers can bring a portable demo unit to your shop for a live trial on your own parts. Trials are arranged at no cost for qualified projects.',
  },
]

const FAQ = () => {
  return (
    <section id="faq" className="bg-bg py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-[1.1] tracking-tight text-balance">
              Common questions, before you request a quote.
            </h2>
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              Still deciding which machine fits your shop? Our applications
              team is happy to walk you through the options in a 30-minute
              call — no obligation, no script.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink border-b border-accent pb-1 hover:gap-2.5 transition-all"
            >
              Book a discovery call
            </a>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
