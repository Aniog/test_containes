import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import { Send, CheckCircle2, Mail, User, MessageSquare } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.message.trim()) return 'Message is required.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');
    console.log('Submitting contact form:', values);

    const { data: response, error } = await client
      .from('ContactLeads')
      .insert({
        data: {
          name: values.name,
          email: values.email,
          message: values.message,
          submitted_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      console.error('Contact form error:', error, response);
      setErrorMsg(getErrorMessage(response, error));
      setStatus('error');
      return;
    }

    console.log('Contact form submitted successfully:', response);
    setStatus('success');
    setValues({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      {/* Dashed top border */}
      <div className="border-t border-dashed border-slate-800 mb-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
              Let's build something
              <br />
              <span className="text-slate-400">remarkable together.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-sm">
              Whether you're a startup, agency, or enterprise — our team is ready to help you get the most out of ArcaneAI.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email us', value: 'hello@arcaneai.com' },
                { icon: MessageSquare, label: 'Live chat', value: 'Available Mon–Fri, 9am–6pm UTC' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm text-slate-300 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashed decorative box */}
            <div className="mt-12 p-6 border border-dashed border-slate-700 rounded-2xl">
              <p className="text-slate-400 text-sm italic">
                "ArcaneAI cut our website launch time from 3 weeks to 3 hours. The AI understood our brand better than we expected."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full" />
                <div>
                  <div className="text-xs font-semibold text-slate-300">Sarah Chen</div>
                  <div className="text-xs text-slate-500">Head of Marketing, Nexus Labs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message received!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      placeholder="Jane Smith"
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Tell us about your project…"
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold py-3.5 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-900 rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-600 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
