export default function Footer() {
  return (
    <footer className="bg-[#050a0e] border-t border-[#1e3a4a] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-extrabold text-[#f0f8ff] mb-1">
              Micro<span className="text-[#00d4c8]">Cosmos</span>
            </div>
            <p className="text-sm text-[#6b8fa8]">Exploring the invisible universe</p>
          </div>
          <div className="flex gap-8">
            {['About', 'Gallery', 'Specimens', 'Techniques'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#6b8fa8] hover:text-[#00d4c8] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1e3a4a] text-center text-xs text-[#6b8fa8]">
          © 2026 MicroCosmos. A celebration of the microscopic world.
        </div>
      </div>
    </footer>
  )
}
