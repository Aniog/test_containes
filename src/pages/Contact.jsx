import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, FlaskConical, Microscope } from 'lucide-react';

const INITIAL_VALUES = {
  observer: '',
  institution: '',
  email: '',
  specimenId: '',
  observation: '',
};

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!values.observer.trim()) {
      setError('Observer name is required.');
      return;
    }
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) {
      setError('A valid email address is required.');
      return;
    }
    if (!values.observation.trim()) {
      setError('Observation notes are required.');
      return;
    }

    setStatus('submitting');

    // Simulate submission with a brief delay
    setTimeout(() => {
      setStatus('success');
      setValues(INITIAL_VALUES);
    }, 1200);
  };

  return (
    <div className="paper-texture">
      {/* Page Header */}
      <section className="border-b border-ink-DEFAULT/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint mb-3">
            Laboratory Communication
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-DEFAULT mb-4">
            Lab Notes & Feedback
          </h1>
          <p className="font-sans text-sm text-ink-muted max-w-2xl leading-relaxed">
            Submit your observations, taxonomic inquiries, or request specimen
            preparation protocols. Each submission is catalogued as a formal
            laboratory report.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        {/* Micrometer watermark background */}
        <div className="relative">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
            <FlaskConical className="w-96 h-96 text-ink-DEFAULT" />
          </div>

          <div className="relative glass-card p-8 md:p-12">
            {/* Lab Report Header */}
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-ink-DEFAULT/10">
              <div className="w-12 h-12 rounded-full bg-ink-DEFAULT flex items-center justify-center">
                <Microscope className="w-6 h-6 text-parchment-DEFAULT" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
                  MicroCosmos Laboratory
                </p>
                <p className="font-serif text-lg font-semibold text-ink-DEFAULT">
                  Observation Report &mdash; Form LR-01
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="observer"
                    className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-1"
                  >
                    Observer Name *
                  </label>
                  <input
                    id="observer"
                    name="observer"
                    type="text"
                    value={values.observer}
                    onChange={handleChange}
                    placeholder="e.g., Dr. Elena Rostova"
                    className="input-underline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="institution"
                    className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-1"
                  >
                    Institution / Affiliation
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    value={values.institution}
                    onChange={handleChange}
                    placeholder="e.g., Max Planck Institute"
                    className="input-underline"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-1"
                  >
                    Electronic Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="observer@institution.edu"
                    className="input-underline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="specimenId"
                    className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-1"
                  >
                    Specimen ID (if applicable)
                  </label>
                  <input
                    id="specimenId"
                    name="specimenId"
                    type="text"
                    value={values.specimenId}
                    onChange={handleChange}
                    placeholder="e.g., RAD-2024-001"
                    className="input-underline"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="observation"
                  className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-1"
                >
                  Observation Notes *
                </label>
                <textarea
                  id="observation"
                  name="observation"
                  rows={6}
                  value={values.observation}
                  onChange={handleChange}
                  placeholder="Describe your microscopic observations, taxonomic questions, or protocol inquiries in detail..."
                  className="input-underline resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4 border-t border-ink-DEFAULT/10">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint">
                  All fields marked * are required
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="glass-btn inline-flex items-center gap-2 text-ink-DEFAULT disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-pulse">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Report</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-4 rounded-lg bg-ink-DEFAULT/5 border border-ink-DEFAULT/10 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-ink-DEFAULT shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-medium text-ink-DEFAULT">
                      Report Submitted Successfully
                    </p>
                    <p className="font-sans text-xs text-ink-muted mt-1">
                      Your observation has been catalogued. You will receive an
                      acknowledgment via electronic mail within 48 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-4 rounded-lg bg-ink-DEFAULT/5 border border-ink-DEFAULT/10 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-ink-DEFAULT shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-ink-DEFAULT">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Protocol Note */}
      <section className="border-t border-ink-DEFAULT/10 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-3 text-center">
            Submission Protocol
          </p>
          <p className="font-serif italic text-sm text-ink-muted text-center leading-relaxed">
            All reports are reviewed by the MicroCosmos curatorial staff within
            48 hours. For urgent taxonomic or histological inquiries, please
            include &ldquo;URGENT&rdquo; in the subject line of your
            observation notes.
          </p>
        </div>
      </section>
    </div>
  );
}