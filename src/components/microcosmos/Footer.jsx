import { Microscope, Github, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#05060d] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500">
            <Microscope className="h-3.5 w-3.5 text-slate-950" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-200">
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </div>

        <p className="text-sm text-slate-400">
          © {year} MicroCosmos. Curated under the lens.
        </p>

        <div className="flex items-center gap-4">
          {[Twitter, Instagram, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-slate-400 transition hover:text-cyan-300"
              aria-label="social link"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
