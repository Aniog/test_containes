import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - bodyRect - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e4de]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#1a1f2e] rounded flex items-center justify-center">
            <span className="text-[#b8860b] font-bold text-xl">A</span>
          </div>
          <div>
            <div className="font-bold text-xl tracking-tight text-[#1a1f2e]">ARTITECT</div>
            <div className="text-[10px] text-[#1a1f2e]/60 -mt-1">MACHINERY</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-[#2d3748] hover:text-[#1a1f2e] transition-colors">Products</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-[#2d3748] hover:text-[#1a1f2e] transition-colors">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-[#2d3748] hover:text-[#1a1f2e] transition-colors">Contact</button>
          <Button onClick={() => scrollToSection('contact')} size="sm">Get Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-[#1a1f2e]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#e8e4de] bg-white px-6 py-6 flex flex-col gap-4">
          <button onClick={() => scrollToSection('products')} className="text-left py-2 text-[#2d3748]">Products</button>
          <button onClick={() => scrollToSection('about')} className="text-left py-2 text-[#2d3748]">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-[#2d3748]">Contact</button>
          <Button onClick={() => scrollToSection('contact')} className="mt-2">Get Quote</Button>
        </div>
      )}
    </nav>
  )
}

export default Navigation