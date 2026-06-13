export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-[#1E293B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[#C9A45C] flex items-center justify-center">
              <span className="text-[#0B0F19] font-extrabold text-base leading-none">A</span>
            </div>
            <span className="text-[#F5F5F5] font-bold text-base tracking-wide uppercase">
              ARTITECT MACHINERY
            </span>
          </div>
          <p className="text-[#64748B] text-sm text-center">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#products')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-[#9BA3AF] hover:text-[#C9A45C] text-sm transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-[#9BA3AF] hover:text-[#C9A45C] text-sm transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
