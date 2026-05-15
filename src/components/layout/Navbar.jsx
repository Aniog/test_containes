import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/products', label: '产品中心' },
  { path: '/about', label: '关于我们' },
  { path: '/news', label: '新闻资讯' },
  { path: '/contact', label: '联系我们' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>专业医疗器械制造商 · 品质保证 · 服务全国</span>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>服务热线：400-888-9999</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">星</span>
          </div>
          <div>
            <div className="text-brand-navy font-bold text-lg leading-tight">星闪医疗器械</div>
            <div className="text-brand-text text-xs">有限公司</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === path
                  ? 'text-brand-blue bg-blue-50'
                  : 'text-brand-dark hover:text-brand-blue hover:bg-blue-50'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-brand-blue text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-navy transition-colors"
          >
            获取报价
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="菜单"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-border px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname === path
                  ? 'text-brand-blue bg-blue-50'
                  : 'text-brand-dark hover:text-brand-blue hover:bg-blue-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center"
          >
            获取报价
          </Link>
        </div>
      )}
    </header>
  )
}
