const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your production?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Get in touch with our team to discuss which ARTITECT double folding machine is right for your facility. We offer custom configurations and complete installation support.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Global Headquarters</h4>
                <p className="text-slate-600">100 Industrial Parkway<br/>Precision City, IN 45012</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Sales Inquiries</h4>
                <p className="text-slate-600">sales@artitectmachinery.com<br/>+1 (800) 555-0199</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Technical Support</h4>
                <p className="text-slate-600">support@artitectmachinery.com<br/>+1 (800) 555-0198</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
                  <input type="text" id="company" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Acme Fabrication" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="interest" className="text-sm font-medium text-slate-700">Primary Interest</label>
                  <select id="interest" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                    <option>ProFold CNC Double Folder</option>
                    <option>Titan Heavy Duty Folder</option>
                    <option>Agile Metal Folder</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="space-y-1.5 border-t border-slate-200 mt-4 pt-4">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors shadow-sm">
                    Submit Request
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-3">We typically respond within 24 business hours.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
