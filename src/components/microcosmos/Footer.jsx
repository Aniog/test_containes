import { Microscope } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="flex justify-center mb-4">
          <Microscope className="w-8 h-8 text-cosmos-cyan" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-cosmos-cyan to-cosmos-purple bg-clip-text text-transparent mb-2">
          MicroCosmos
        </h3>
        <p className="text-cosmos-muted text-sm max-w-md mx-auto mb-6">
          Dedicated to revealing the extraordinary beauty hidden in the world too small to see.
        </p>
        <p className="text-cosmos-muted/60 text-xs">
          &copy; 2026 MicroCosmos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
