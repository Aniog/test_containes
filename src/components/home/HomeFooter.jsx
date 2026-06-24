import React from 'react'
import { Microscope, Heart } from 'lucide-react'

export default function HomeFooter() {
  return (
    <footer className="py-16 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
              <Microscope className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">MicroCosmos</h3>
              <p className="text-sm text-slate-500">Exploring the unseen world</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a href="#gallery" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
              Gallery
            </a>
            <a href="#features" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
              Features
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
              Top
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400" />
            <span>— celebrating the tiny giants of our world</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
