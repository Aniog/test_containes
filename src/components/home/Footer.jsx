import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-white text-xl font-semibold mb-4">ARTITECT MACHINERY</div>
            <p className="text-sm">Precision folding equipment for professionals.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-4">Products</div>
            <ul className="space-y-2 text-sm">
              <li>Double Folding Machines</li>
              <li>Sheet Metal Folders</li>
              <li>Metal Folding Systems</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Engineering</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>info@artitect.com</li>
              <li>+1 (800) 555-0123</li>
              <li>1234 Industrial Way</li>
              <li>Detroit, MI 48201</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer