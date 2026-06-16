import { Send, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="dark-section py-20 lg:py-28 relative overflow-hidden">
      <div className="dark-section-gradient absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-brand-amber font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
              Ready to Upgrade Your Production?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-md">
              Contact our team for a personalized consultation. We will help you find the perfect folding solution for your specific requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-amber/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-amber" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Us</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-amber/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-amber" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  <p className="text-white font-medium">info@artitectmachinery.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8">
            <h3 className="text-white font-bold text-xl mb-6">Request a Quote</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-amber transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Company</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-amber transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-amber transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Product Interest</label>
                <select className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-amber transition-colors">
                  <option value="">Select a product</option>
                  <option value="double-folding">Double Folding Machine</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-navy-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-amber transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber-dark text-navy-900 font-semibold rounded-lg px-7 py-3.5 text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand-amber/20"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
