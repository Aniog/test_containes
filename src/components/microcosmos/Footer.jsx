export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-[rgba(0,229,255,0.1)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#00e5ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                <span className="text-[#050810] font-black">M</span>
              </div>
              <span className="text-white font-black text-2xl">
                Micro<span className="text-[#00e5ff]">Cosmos</span>
              </span>
            </div>
            <p className="text-[#4a6a7a] text-sm max-w-xs">
              Exploring the invisible universe that surrounds us every day.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Gallery', 'Organisms', 'Facts'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#8ab4c8] hover:text-[#00e5ff] text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#4a6a7a] text-xs">
          <p>© 2026 MicroCosmos. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-[#00e5ff]">♥</span> for science enthusiasts
          </p>
        </div>
      </div>
    </footer>
  )
}
