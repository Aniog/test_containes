import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    observer: '',
    institution: '',
    specimenRef: '',
    observation: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          observer: '',
          institution: '',
          specimenRef: '',
          observation: '',
          date: new Date().toISOString().split('T')[0]
        });
      }, 2500);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Subtle Micrometer Watermark Background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" stroke="#1A1A1A" strokeWidth="0.5">
          {/* Micrometer scale markings */}
          {Array.from({ length: 41 }).map((_, i) => (
            <line key={i} x1={i * 10} y1="50" x2={i * 10} y2={i % 5 === 0 ? "70" : "60"} />
          ))}
          {Array.from({ length: 41 }).map((_, i) => (
            <line key={`v-${i}`} x1="50" y1={i * 10} x2={i % 5 === 0 ? "70" : "60"} y2={i * 10} />
          ))}
          {/* Circular micrometer markings */}
          <circle cx="200" cy="200" r="80" />
          <circle cx="200" cy="200" r="100" />
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10) * Math.PI / 180;
            const x1 = 200 + 80 * Math.cos(angle);
            const y1 = 200 + 80 * Math.sin(angle);
            const x2 = 200 + 100 * Math.cos(angle);
            const y2 = 200 + 100 * Math.sin(angle);
            return <line key={`c-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-border-gray">
              <span className="text-sm font-medium tracking-wide text-text-gray">FIELD RECORDS</span>
            </div>
            <h2 className="mb-4">Laboratory Notebook</h2>
            <p className="text-xl text-text-charcoal">
              Record your observations. All entries are catalogued in the institutional archive.
            </p>
          </div>

          {/* Lab Report Card Form */}
          <div className="glass-card p-10 md:p-14 relative">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-text-ink" />
                </div>
                <h3 className="mb-3">Observation Recorded</h3>
                <p className="text-text-charcoal">
                  Your laboratory notes have been entered into the archive.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="lab-form space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="observer" className="block text-xs tracking-[2px] uppercase text-text-gray mb-2">
                      Observer Name
                    </label>
                    <input
                      type="text"
                      id="observer"
                      name="observer"
                      value={formData.observer}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-xs tracking-[2px] uppercase text-text-gray mb-2">
                      Institution
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="Royal Microscopical Society"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="specimenRef" className="block text-xs tracking-[2px] uppercase text-text-gray mb-2">
                      Specimen Reference
                    </label>
                    <input
                      type="text"
                      id="specimenRef"
                      name="specimenRef"
                      value={formData.specimenRef}
                      onChange={handleChange}
                      placeholder="MC-XXXX-XXX"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-xs tracking-[2px] uppercase text-text-gray mb-2">
                      Date of Observation
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="observation" className="block text-xs tracking-[2px] uppercase text-text-gray mb-2">
                    Microscopic Observations
                  </label>
                  <textarea
                    id="observation"
                    name="observation"
                    value={formData.observation}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe cellular morphology, staining characteristics, and any notable features observed under the microscope..."
                    required
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="glass-button w-full md:w-auto px-12 py-4 text-base flex items-center justify-center gap-3 mx-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Recording Entry...</>
                    ) : (
                      <>
                        Submit to Archive
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-text-gray mt-8 tracking-wide">
            All submissions are reviewed by the Curator of Microscopy before permanent accession.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;