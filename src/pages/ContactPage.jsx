import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'What is your return policy?', a: 'We offer a 30-day hassle-free return policy on all unused items in original packaging. Simply contact our support team and we\'ll arrange a return label.' },
  { q: 'Do you offer free shipping?', a: 'Yes! We offer free standard shipping on all orders over $50 within the US. International shipping rates vary by destination.' },
  { q: 'How do I choose the right goggle size?', a: 'Most adult goggles are one-size-fits-most, but we recommend checking the seal size. Our product pages include fit guides, and our team is happy to help you choose.' },
  { q: 'Are your products competition-approved?', a: 'All our racing gear meets FINA standards for competitive swimming. Look for the "Competition Approved" badge on product pages.' },
  { q: 'Do you offer bulk discounts for swim clubs?', a: 'Absolutely! We have a dedicated club and team program with discounts starting at 10 units. Contact us at clubs@swimgear.com for details.' },
  { q: 'How long does shipping take?', a: 'Standard US shipping takes 3–5 business days. Expedited options (2-day and overnight) are available at checkout. International orders typically arrive in 7–14 business days.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-sky-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-sky-50 transition text-left"
      >
        <span className="font-semibold text-sky-900 text-sm">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-sky-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-sky-500 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 py-4 bg-sky-50 border-t border-sky-100">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-400/30">
            We're Here to Help
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-sky-100 text-lg max-w-xl mx-auto">
            Have a question about gear, an order, or just want to talk swimming? Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-sky-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Mail, title: 'Email Us', lines: ['support@swimgear.com', 'clubs@swimgear.com'] },
              { icon: Phone, title: 'Call Us', lines: ['+1 (800) 794-6327', 'Toll-free within the US'] },
              { icon: MapPin, title: 'Visit Us', lines: ['123 Aquatic Drive', 'Miami, FL 33101'] },
              { icon: Clock, title: 'Hours', lines: ['Mon–Fri: 9am–6pm EST', 'Sat: 10am–4pm EST'] },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-700 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-900 mb-1">{item.title}</div>
                    {item.lines.map((l) => (
                      <div key={l} className="text-slate-500 text-sm">{l}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Send a Message
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-6">Get in Touch</h2>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sky-700 font-semibold text-sm hover:underline bg-transparent border-0 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your name"
                        className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@example.com"
                        className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={onChange} required
                      className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white">
                      <option value="">Select a topic…</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order & Shipping</option>
                      <option value="return">Returns & Refunds</option>
                      <option value="club">Club / Team Discount</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="How can we help you?"
                      className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-none bg-white" />
                  </div>
                  <button type="submit"
                    className="bg-sky-700 hover:bg-sky-800 text-white rounded-full py-3 font-semibold text-sm transition flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map placeholder + extra info */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Find Us
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">Our Location</h2>
            </div>
            <div className="rounded-2xl overflow-hidden bg-sky-100 h-56 flex items-center justify-center border border-sky-200">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-sky-400 mx-auto mb-2" />
                <p className="text-sky-700 font-semibold text-sm">123 Aquatic Drive</p>
                <p className="text-slate-500 text-sm">Miami, FL 33101</p>
              </div>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <h3 className="font-bold text-sky-900 mb-3">Quick Links</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link to="/products" className="text-sky-700 hover:underline font-medium">→ Browse all products</Link></li>
                <li><Link to="/about" className="text-sky-700 hover:underline font-medium">→ Learn about our story</Link></li>
                <li><a href="mailto:support@swimgear.com" className="text-sky-700 hover:underline font-medium">→ Email support directly</a></li>
                <li><a href="tel:+18007946327" className="text-sky-700 hover:underline font-medium">→ Call us toll-free</a></li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <h3 className="font-bold text-sky-900 mb-2">Club & Team Orders</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Outfitting a swim club or school team? We offer bulk pricing, custom branding, and dedicated account management.
              </p>
              <a href="mailto:clubs@swimgear.com" className="text-cyan-700 font-semibold text-sm hover:underline">
                clubs@swimgear.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-50 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to the questions we hear most often.</p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Still have questions?{' '}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sky-700 font-semibold hover:underline bg-transparent border-0 cursor-pointer">
              Send us a message above
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}
