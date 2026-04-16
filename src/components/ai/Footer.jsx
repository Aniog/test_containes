import { Cpu } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <Cpu className="w-5 h-5 text-purple-400" />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Explorer
          </span>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Exploring the frontier of Artificial Intelligence · {new Date().getFullYear()}
        </p>
        <div className="flex gap-5 text-sm text-gray-500">
          <span className="hover:text-purple-400 cursor-pointer transition-colors">About</span>
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Research</span>
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </footer>
  )
}
