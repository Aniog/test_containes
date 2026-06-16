import { Send, Phone, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-brass-400 uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Upgrade Your Production?
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Contact our team for a personalized consultation. We'll help you
              find the perfect folding machine for your specific requirements.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brass-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brass-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us</p>
                  <p className="text-white font-medium">+1 (555) 234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brass-500/10 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-brass-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">sales@artitectmachinery.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brass-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brass-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">Industrial District, Manufacturing City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-navy-900 mb-6">
              Request a Quote
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-500/30 focus:border-brass-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-500/30 focus:border-brass-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-500/30 focus:border-brass-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Machine of Interest
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brass-500/30 focus:border-brass-500 transition-colors">
                  <option value="">Select a product</option>
                  <option value="double-folder">Double Folding Machine</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="metal-folder-pro">Metal Folder Pro</option>
                  <option value="custom">Custom Configuration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-500/30 focus:border-brass-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brass-500 text-white py-3 rounded-lg font-medium hover:bg-brass-400 transition-colors flex items-center justify-center gap-2"
              >
                Send Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
