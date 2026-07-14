import { Zap } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <Zap className="w-5 h-5 text-primary" />
          Launchpad
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Launchpad. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
