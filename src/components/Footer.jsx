import { Brain } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">Artificial Intelligence</span>
        </div>

        <p className="text-gray-500 text-sm text-center">
          Exploring the frontier of machine intelligence. Built with curiosity and code.
        </p>

        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} AI Explorer</p>
      </div>
    </footer>
  )
}

export default Footer
