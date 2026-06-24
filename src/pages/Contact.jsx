import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lab Notes submission:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-4xl mx-auto relative">
      {/* Micrometer watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal scale lines */}
          {Array.from({ length: 60 }, (_, i) => (
            <g key={`h-${i}`}>
              <line
                x1="100"
                y1={i * 20}
                x2={i % 5 === 0 ? '180' : '140'}
                y2={i * 20}
                stroke="#1A1A1A"
                strokeWidth={i % 5 === 0 ? '1.5' : '0.5'}
              />
              {i % 5 === 0 && (
                <text x="185" y={i * 20 + 4} fontSize="8" fill="#1A1A1A" fontFamily="monospace">
                  {i * 10}μm
                </text>
              )}
            </g>
          ))}
          {/* Vertical scale */}
          <line x1="400" y1="50" x2="400" y2="1150" stroke="#1A1A1A" strokeWidth="0.3" strokeDasharray="8 8" />
          {/* Circle reticle */}
          <circle cx="600" cy="600" r="200" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />
          <circle cx="600" cy="600" r="150" stroke="#1A1A1A" strokeWidth="0.3" fill="none" />
          <circle cx="600" cy="600" r="100" stroke="#1A1A1A" strokeWidth="0.3" fill="none" />
          <line x1="400" y1="600" x2="800" y2="600" stroke="#1A1A1A" strokeWidth="0.3" />
          <line x1="600" y1="400" x2="600" y2="800" stroke="#1A1A1A" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative"
      >
        <p className="font-mono text-xs text-slate uppercase tracking-[0.3em] mb-3">
          Communication
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
          Lab Notes & Feedback
        </h1>
        <p className="text-charcoal text-lg leading-relaxed max-w-2xl">
          Submit your observations, request specific specimen preparations, or
          provide feedback on the collection. All correspondence is reviewed by
          the laboratory director.
        </p>
      </motion.header>

      {/* Form styled as lab report card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 md:p-12"
      >
        {/* Report header */}
        <div className="border-b border-silver/40 pb-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs text-slate uppercase tracking-wider">
                Laboratory Report Card
              </p>
              <p className="font-serif text-lg text-ink mt-1">
                MicroCosmos Research Division
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-slate">Date</p>
              <p className="font-mono text-sm text-ink">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-12 h-12 text-ink mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-ink mb-2">
              Observation Recorded
            </h3>
            <p className="text-charcoal">
              Your lab notes have been submitted successfully. The laboratory
              director will review your correspondence.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs text-slate uppercase tracking-wider mb-3"
                >
                  Observer Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Dr. Jane Doe"
                  className="w-full bg-transparent border-0 border-b-2 border-silver/60 focus:border-ink px-0 py-3 text-ink placeholder:text-silver outline-none transition-colors font-sans text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs text-slate uppercase tracking-wider mb-3"
                >
                  Institutional Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="j.doe@university.edu"
                  className="w-full bg-transparent border-0 border-b-2 border-silver/60 focus:border-ink px-0 py-3 text-ink placeholder:text-silver outline-none transition-colors font-sans text-base"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block font-mono text-xs text-slate uppercase tracking-wider mb-3"
              >
                Subject of Inquiry
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-silver/60 focus:border-ink px-0 py-3 text-ink outline-none transition-colors font-sans text-base appearance-none cursor-pointer"
              >
                <option value="" className="bg-parchment text-charcoal">Select category...</option>
                <option value="specimen-request" className="bg-parchment text-charcoal">Specimen Request</option>
                <option value="observation" className="bg-parchment text-charcoal">Field Observation</option>
                <option value="correction" className="bg-parchment text-charcoal">Taxonomic Correction</option>
                <option value="collaboration" className="bg-parchment text-charcoal">Research Collaboration</option>
                <option value="feedback" className="bg-parchment text-charcoal">General Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs text-slate uppercase tracking-wider mb-3"
              >
                Detailed Notes
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Describe your observation, request, or feedback in detail..."
                className="w-full bg-transparent border-0 border-b-2 border-silver/60 focus:border-ink px-0 py-3 text-ink placeholder:text-silver outline-none transition-colors font-sans text-base resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 font-medium text-sm text-ink hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                Submit Lab Notes
              </button>
            </div>
          </form>
        )}
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid md:grid-cols-3 gap-6 text-center"
      >
        <div className="p-4">
          <p className="font-mono text-xs text-slate uppercase tracking-wider mb-2">
            Laboratory
          </p>
          <p className="text-sm text-charcoal">
            Building 7, Room 312<br />
            Department of Biological Sciences
          </p>
        </div>
        <div className="p-4">
          <p className="font-mono text-xs text-slate uppercase tracking-wider mb-2">
            Office Hours
          </p>
          <p className="text-sm text-charcoal">
            Monday – Friday<br />
            09:00 – 17:00 UTC
          </p>
        </div>
        <div className="p-4">
          <p className="font-mono text-xs text-slate uppercase tracking-wider mb-2">
            Response Time
          </p>
          <p className="text-sm text-charcoal">
            Within 48 hours<br />
            Priority for specimen requests
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
