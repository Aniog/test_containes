import React from "react"
import { Link } from "react-router-dom"
import { Users } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl mb-1">
              Acme<span className="text-indigo-400">.</span>
            </p>
            <p className="text-sm">Building great things together.</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <Link to="/contacts" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Users className="w-3.5 h-3.5" />
              View Contacts
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
