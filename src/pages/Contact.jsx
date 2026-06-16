import { useState, useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { submitInquiry } from '@/api'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      await submitInquiry(values)
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setErrorMsg(err.message || "Failed to submit inquiry. Please try again.")
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="contact-bg-pattern"
          data-strk-bg="industrial architecture blueprint metal"
          data-strk-bg-ratio="21x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="contact-title" className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Consult with Our Engineers
          </h1>
          <p id="contact-subtitle" className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to enhance your production line? Reach out for detailed specifications or a customized quote.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="flex-1 p-12 lg:p-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Send a Message</h2>
            
            {status === 'success' ? (
              <div className="bg-sky-50 text-sky-800 p-8 rounded-2xl flex flex-col items-center text-center animate-in fade-in duration-500">
                <CheckCircle2 className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">Inquiry Received</h3>
                <p className="font-light">Thank you for contacting Artitect Machinery. Our engineering team will review your request and contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sky-600 font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={values.name}
                    onChange={(e) => setValues({...values, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={values.email}
                    onChange={(e) => setValues({...values, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="6"
                    value={values.message}
                    onChange={(e) => setValues({...values, message: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700 resize-none"
                    placeholder="Describe your architectural metalwork needs..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-[0.2em] text-xs py-5 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === 'submitting' ? (
                    "Processing..."
                  ) : (
                    <>
                      Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          <div className="md:w-72 lg:w-96 bg-slate-950 p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-8 tracking-tight">Direct Contact</h3>
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">Global Headquarters</p>
                  <p className="text-sm font-light leading-relaxed text-slate-300">
                    1230 Engineering Way<br />
                    Industrial Zone, 45000<br />
                    Germany
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">Sales Support</p>
                  <p className="text-sm font-light text-slate-300">
                    sales@artitect.com<br />
                    +49 (0) 123 4567 89
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">Technical Service</p>
                  <p className="text-sm font-light text-slate-300">
                    service@artitect.com<br />
                    +49 (0) 123 4567 90
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-slate-900">
              <p className="text-[10px] text-slate-600 font-medium">© 2026 ARTITECT MACHINERY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
