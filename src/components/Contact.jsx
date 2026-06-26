import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', product: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#c9a44c] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="text-[#a0a0a8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our team will recommend the right machine for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-[#f5f5f5] font-semibold text-lg mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a44c]/10 border border-[#c9a44c]/20 rounded-md flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#c9a44c]" />
                  </div>
                  <div>
                    <div className="text-[#f5f5f5] text-sm font-medium">Phone</div>
                    <div className="text-[#a0a0a8] text-sm">+1 (800) 555-0199</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a44c]/10 border border-[#c9a44c]/20 rounded-md flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#c9a44c]" />
                  </div>
                  <div>
                    <div className="text-[#f5f5f5] text-sm font-medium">Email</div>
                    <div className="text-[#a0a0a8] text-sm">info@artitectmachinery.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a44c]/10 border border-[#c9a44c]/20 rounded-md flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#c9a44c]" />
                  </div>
                  <div>
                    <div className="text-[#f5f5f5] text-sm font-medium">Headquarters</div>
                    <div className="text-[#a0a0a8] text-sm">
                      4820 Industrial Parkway, Building C<br />
                      Cleveland, OH 44125
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#1c1c1f] border border-[#2a2a2e] rounded-lg">
              <h4 className="text-[#f5f5f5] font-semibold text-sm mb-2">Business Hours</h4>
              <p className="text-[#a0a0a8] text-sm leading-relaxed">
                Monday – Friday: 8:00 AM – 6:00 PM EST<br />
                Saturday: 9:00 AM – 1:00 PM EST<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#1c1c1f] border border-[#2a2a2e] rounded-lg p-6 md:p-8 space-y-5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-12 h-12 text-[#c9a44c] mb-4" />
                  <h3 className="text-[#f5f5f5] font-bold text-lg mb-2">Message Sent</h3>
                  <p className="text-[#a0a0a8] text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[#f5f5f5] text-xs font-medium uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-[#141416] border border-[#2a2a2e] rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#66666a] focus:outline-none focus:border-[#c9a44c] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#f5f5f5] text-xs font-medium uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-[#141416] border border-[#2a2a2e] rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#66666a] focus:outline-none focus:border-[#c9a44c] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-[#f5f5f5] text-xs font-medium uppercase tracking-wider mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full bg-[#141416] border border-[#2a2a2e] rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#66666a] focus:outline-none focus:border-[#c9a44c] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-[#f5f5f5] text-xs font-medium uppercase tracking-wider mb-2">
                        Interested Product
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full bg-[#141416] border border-[#2a2a2e] rounded-md px-4 py-3 text-[#f5f5f5] text-sm focus:outline-none focus:border-[#c9a44c] transition-colors appearance-none"
                      >
                        <option value="">Select a product</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folder-machine">Metal Folder Machine</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#f5f5f5] text-xs font-medium uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#141416] border border-[#2a2a2e] rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#66666a] focus:outline-none focus:border-[#c9a44c] transition-colors resize-none"
                      placeholder="Tell us about your project, material types, thickness, and production volume..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#c9a44c] text-[#0a0a0b] font-semibold px-8 py-3.5 rounded-sm hover:bg-[#d4b55e] transition-colors text-sm uppercase tracking-[0.08em]"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
