import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, Package, ShieldCheck, Wrench } from 'lucide-react';

const faqSections = [
  {
    icon: Package,
    title: 'Orders & Shipping',
    faqs: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 3–5 business days within the US. Express (1–2 days) and international options are available at checkout. All orders ship from our warehouse in Portland, OR.' },
      { q: 'Can I change or cancel my order?', a: 'Orders can be modified or cancelled within 2 hours of placement. After that, the order enters fulfillment and cannot be changed. Contact support immediately if you need to make a change.' },
      { q: 'Do you ship internationally?', a: 'Yes — we ship to over 60 countries. International orders typically arrive within 7–14 business days. Import duties and taxes are the responsibility of the recipient.' },
      { q: 'How do I track my order?', a: 'A tracking number is emailed to you as soon as your order ships. You can also log into your Lumora account and view order status under "My Orders".' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Returns',
    faqs: [
      { q: 'What does the Lumora warranty cover?', a: 'All Lumora cameras come with a 2-year limited warranty covering manufacturing defects in materials and workmanship. Accidental damage, water damage beyond the rated IPX level, and normal wear are not covered.' },
      { q: 'How do I make a warranty claim?', a: 'Contact our support team with your proof of purchase and a description of the issue. We\'ll provide a prepaid shipping label and aim to repair or replace your camera within 10 business days.' },
      { q: 'What is your return policy?', a: 'We offer a 30-day no-questions-asked return policy on all new cameras. The camera must be in original condition with all accessories and packaging. Refunds are processed within 5 business days of receiving the return.' },
      { q: 'Can I extend my warranty?', a: 'Yes — Lumora Care+ extends your coverage to 3 years and adds accidental damage protection. It can be purchased within 60 days of your camera purchase for $199 (X1 Pro), $149 (X1), or $99 (M5).' },
    ],
  },
  {
    icon: Wrench,
    title: 'Repairs & Service',
    faqs: [
      { q: 'Where can I get my camera repaired?', a: 'Lumora has authorized service centers in New York, Los Angeles, Chicago, London, Tokyo, and Sydney. You can also mail your camera to our central repair facility — we cover return shipping on all warranty repairs.' },
      { q: 'How long do repairs take?', a: 'Most repairs are completed within 5–10 business days. Complex sensor or shutter repairs may take up to 15 days. You\'ll receive email updates throughout the process.' },
      { q: 'Do you offer sensor cleaning?', a: 'Yes — sensor cleaning is available at all authorized service centers and by mail-in. The service costs $49 and includes a full camera inspection. Turnaround is typically 3 business days.' },
      { q: 'Can I get a loaner camera during repair?', a: 'Lumora Care+ members are eligible for a loaner camera during repairs lasting more than 5 business days. Contact support to arrange this when you submit your repair request.' },
    ],
  },
  {
    icon: MessageCircle,
    title: 'Technical Support',
    faqs: [
      { q: 'Where can I find the camera manual?', a: 'Full PDF manuals for all Lumora cameras are available on the product pages under the "Downloads" tab. Quick-start guides are also included in the box.' },
      { q: 'How do I update my camera firmware?', a: 'Download the latest firmware from the product page, copy it to a formatted SD card, insert it into your camera, and navigate to Menu > Setup > Firmware Update. The process takes about 3 minutes.' },
      { q: 'My camera won\'t turn on. What should I do?', a: 'First, ensure the battery is fully charged using the supplied charger. If the issue persists, try a battery reset: remove the battery for 30 seconds, reinsert it, and power on. If still unresponsive, contact support.' },
      { q: 'Which memory cards are compatible?', a: 'The X1 Pro uses CFexpress Type B cards (recommended: 512GB+). The X1 uses a single CFexpress slot. The M5 uses standard UHS-II SD cards. We recommend cards rated V60 or higher for video recording.' },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-white font-medium group-hover:text-amber-400 transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-amber-400' : ''}`} />
      </button>
      {open && (
        <p className="text-zinc-400 text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function Support() {
  const [activeSection, setActiveSection] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-zinc-950 pt-16 pb-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">We're Here to Help</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Support Center</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Find answers to common questions, learn about our warranty, or get in touch with our team directly.
        </p>
      </section>

      {/* ── Quick Links ── */}
      <section className="bg-zinc-900 py-12 px-6 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {faqSections.map(({ icon: Icon, title }, i) => (
            <button
              key={title}
              onClick={() => setActiveSection(i)}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-colors ${
                activeSection === i
                  ? 'bg-amber-400/10 border-amber-400/40 text-amber-400'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium text-center leading-tight">{title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            {(() => { const Icon = faqSections[activeSection].icon; return <Icon className="w-5 h-5 text-amber-400" />; })()}
            <h2 className="text-2xl font-bold text-white">{faqSections[activeSection].title}</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6">
            {faqSections[activeSection].faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty Banner ── */}
      <section className="bg-zinc-900 py-16 px-6 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '2-Year Warranty',       body: 'Every Lumora camera ships with a 2-year limited warranty covering manufacturing defects.',         cta: null },
            { title: 'Lumora Care+',           body: 'Extend to 3 years and add accidental damage protection. Starting at $99.',                         cta: 'Learn More' },
            { title: '30-Day Returns',         body: 'Not satisfied? Return any camera within 30 days for a full refund, no questions asked.',            cta: null },
          ].map(({ title, body, cta }) => (
            <div key={title} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6">
              <ShieldCheck className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{body}</p>
              {cta && (
                <button className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">{cta} →</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Still Need Help?</p>
            <h2 className="text-3xl font-bold text-white mb-3">Contact Our Team</h2>
            <p className="text-zinc-400">We typically respond within 4 business hours.</p>
          </div>

          {submitted ? (
            <div className="bg-zinc-900 border border-amber-400/30 rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Message Received</h3>
              <p className="text-zinc-400">Thanks for reaching out. Our support team will get back to you within 4 business hours.</p>
              <button
                onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-6 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400 text-sm">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400 text-sm">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@example.com"
                    className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-sm">Subject</label>
                <select
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a topic…</option>
                  <option>Order & Shipping</option>
                  <option>Warranty Claim</option>
                  <option>Repair Request</option>
                  <option>Technical Support</option>
                  <option>Returns & Refunds</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-sm">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your issue or question in detail…"
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-400 text-zinc-950 font-semibold rounded-full py-3 hover:bg-amber-300 transition-colors mt-1"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Bottom Links ── */}
      <section className="bg-zinc-900 py-12 px-6 border-t border-zinc-800 text-center">
        <p className="text-zinc-400 text-sm mb-4">Looking for something else?</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/specs" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">Full Specifications →</Link>
          <Link to="/cameras" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">Browse Cameras →</Link>
          <Link to="/learn" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">Learning Resources →</Link>
        </div>
      </section>
    </div>
  );
}
