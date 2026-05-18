import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', breed: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', breed: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Contact Us</h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Interested in one of our puppies? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-5">Our Information</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold mb-0.5">Phone</p>
                    <p className="text-stone-800 font-medium">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold mb-0.5">Email</p>
                    <p className="text-stone-800 font-medium">hello@pawsandtails.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold mb-0.5">Location</p>
                    <p className="text-stone-800 font-medium">Austin, Texas</p>
                    <p className="text-stone-500 text-sm">Visits by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Ready to Meet Your Pup?</h3>
              <p className="text-amber-100 text-sm leading-relaxed">
                We welcome visits by appointment. Come meet our puppies in person and see where they're raised. We'd love to show you around!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                <p className="text-stone-600 mb-6">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-amber-700 font-semibold hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="(555) 000-0000"
                      className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Interested Breed
                    </label>
                    <select
                      name="breed"
                      value={form.breed}
                      onChange={onChange}
                      className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                    >
                      <option value="">Select a breed</option>
                      <option>Golden Retriever</option>
                      <option>French Bulldog</option>
                      <option>German Shepherd</option>
                      <option>Labrador Retriever</option>
                      <option>Beagle</option>
                      <option>Poodle</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="Tell us about yourself and what you're looking for in a puppy..."
                    className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full px-6 py-3 text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
