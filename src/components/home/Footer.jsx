import { Microscope } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 bg-deep border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <Microscope className="w-6 h-6 text-cyan" />
            <span className="text-xl font-bold text-slate-100">MicroCosmos</span>
          </div>
          <p className="text-slate-400 max-w-md mb-6">
            Revealing the extraordinary beauty hidden in the smallest corners of our universe.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span>Microscopy</span>
            <span className="text-slate-700">•</span>
            <span>Science</span>
            <span className="text-slate-700">•</span>
            <span>Discovery</span>
            <span className="text-slate-700">•</span>
            <span>Nature</span>
          </div>
          <p className="mt-8 text-xs text-slate-600">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
