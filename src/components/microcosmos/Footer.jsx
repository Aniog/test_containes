import { Microscope, Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#070b10] border-t border-[#1f2c3a]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center">
              <Microscope className="w-5 h-5 text-[#4ade80]" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#e8eef4]">MicroCosmos</div>
              <div className="text-xs text-[#8a9aab]">The hidden world, magnified</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#8a9aab]">
            <a href="#specimens" className="hover:text-[#4ade80] transition-colors">Specimens</a>
            <a href="#habitats" className="hover:text-[#4ade80] transition-colors">Habitats</a>
            <a href="#gallery" className="hover:text-[#4ade80] transition-colors">Gallery</a>
          </nav>

          <div className="flex items-center gap-4">
            {[Github, Mail, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-[#1f2c3a] flex items-center justify-center text-[#8a9aab] hover:text-[#4ade80] hover:border-[#4ade80]/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1f2c3a] text-center text-xs text-[#8a9aab]">
          © {new Date().getFullYear()} MicroCosmos. A celebration of life too small to see.
        </div>
      </div>
    </footer>
  )
}
