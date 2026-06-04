import { useState } from 'react';
import { Send, Microscope, Check } from 'lucide-react';

export default function Contact() {
  const [values, setValues] = useState({
    specimenId: '',
    observer: '',
    magnification: '',
    notes: '',
    email: '',
  });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setValues({ specimenId: '', observer: '', magnification: '', notes: '', email: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen parchment-texture paper-grain relative overflow-hidden">
      {/* Micrometer scale watermark */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
        <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="none">
          <pattern id="micrometer" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="100" y2="20" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="0" y1="40" x2="100" y2="40" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="0" y1="60" x2="100" y2="60" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="0" y1="20" x2="0" y2="80" stroke="#1A1A1A" strokeWidth="0.3" />
            <line x1="10" y1="15" x2="10" y2="25" stroke="#1A1A1A" strokeWidth="0.8" />
            <line x1="20" y1="17" x2="20" y2="23" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="30" y1="15" x2="30" y2="25" stroke="#1A1A1A" strokeWidth="0.8" />
            <line x1="40" y1="17" x2="40" y2="23" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="50" y1="15" x2="50" y2="25" stroke="#1A1A1A" strokeWidth="0.8" />
            <line x1="60" y1="17" x2="60" y2="23" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="70" y1="15" x2="70" y2="25" stroke="#1A1A1A" strokeWidth="0.8" />
            <line x1="80" y1="17" x2="80" y2="23" stroke="#1A1A1A" strokeWidth="0.5" />
            <line x1="90" y1="15" x2="90" y2="25" stroke="#1A1A1A" strokeWidth="0.8" />
          </pattern>
          <rect x="0" y="0" width="1200" height="800" fill="url(#micrometer)" />
        </svg>
      </div>

      {/* Page Header */}
      <section className="relative z-10 pt-28 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal-muted mb-3">
            Laboratory Report
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Lab Notes & Feedback
          </h1>
          <p className="font-sans text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed">
            Submit your observations, questions, or feedback using the
            laboratory report form below. Each submission contributes to our
            growing body of citizen-science data.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="glass-strong rounded-2xl p-8 md:p-12 shadow-xl shadow-black/5">
            {/* Report Card Header */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-charcoal/10">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Microscope className="w-5 h-5 text-ink" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-ink leading-none">
                  Observation Report
                </h2>
                <p className="font-sans text-xs text-charcoal-muted">
                  Form No. {String(Date.now()).slice(-6)}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label
                    htmlFor="specimenId"
                    className="block font-sans text-xs font-medium text-charcoal-muted mb-1.5"
                  >
                    Specimen ID
                  </label>
                  <input
                    id="specimenId"
                    name="specimenId"
                    type="text"
                    value={values.specimenId}
                    onChange={onChange}
                    placeholder="e.g. RAD-001"
                    className="input-underline"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="observer"
                    className="block font-sans text-xs font-medium text-charcoal-muted mb-1.5"
                  >
                    Observer Name
                  </label>
                  <input
                    id="observer"
                    name="observer"
                    type="text"
                    value={values.observer}
                    onChange={onChange}
                    placeholder="Your full name"
                    className="input-underline"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label
                    htmlFor="magnification"
                    className="block font-sans text-xs font-medium text-charcoal-muted mb-1.5"
                  >
                    Magnification
                  </label>
                  <input
                    id="magnification"
                    name="magnification"
                    type="text"
                    value={values.magnification}
                    onChange={onChange}
                    placeholder="e.g. 400x"
                    className="input-underline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs font-medium text-charcoal-muted mb-1.5"
                  >
                    Electronic Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="you@institution.edu"
                    className="input-underline"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block font-sans text-xs font-medium text-charcoal-muted mb-1.5"
                >
                  Observation Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  value={values.notes}
                  onChange={onChange}
                  placeholder="Describe your observations, hypotheses, or questions in detail..."
                  className="input-underline resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'success'}
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                    status === 'success'
                      ? 'glass text-charcoal-muted cursor-default'
                      : 'glass-strong text-ink hover:bg-white/60'
                  }`}
                >
                  {status === 'success' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Report Submitted</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Report</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Footer note */}
          <p className="text-center mt-6 font-sans text-xs text-charcoal-muted">
            All observations are recorded with the utmost scientific rigour and
            archived for peer review.
          </p>
        </div>
      </section>
    </div>
  );
}