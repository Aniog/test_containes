import { Menu, PhoneCall } from 'lucide-react'

const navigation = ['Products', 'Advantages', 'Process', 'Contact']

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-200/80 bg-steel-50/90 text-machine-900 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 text-machine-950" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-machine-950 text-sm font-bold text-brass-400 shadow-soft">AM</span>
          <span className="text-sm font-semibold tracking-[0.28em] md:text-base">ARTITECT MACHINERY</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-machine-600 transition hover:text-machine-950">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-machine-950 px-5 py-2.5 text-sm font-semibold text-steel-50 shadow-soft transition hover:bg-machine-800 md:flex">
          <PhoneCall className="h-4 w-4 text-brass-400" /> Request quote
        </a>
        <a href="#products" className="rounded-full border border-steel-300 p-2 text-machine-800 md:hidden" aria-label="Open product section">
          <Menu className="h-5 w-5" />
        </a>
      </nav>
    </header>
  )
}
