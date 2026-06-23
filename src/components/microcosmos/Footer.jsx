import { Microscope, Github, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-slate-100">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-400/10 border border-teal-300/30 text-teal-300">
              <Microscope className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">MicroCosmos</span>
          </div>
          <p className="mt-4 text-slate-400 max-w-md leading-relaxed">
            A visual journal of the smallest things — built by photographers,
            biologists, and curious humans who believe wonder still matters.
          </p>
        </div>
        <div>
          <h4 className="text-slate-200 font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li><a href="#explore" className="hover:text-teal-300 transition">Six worlds</a></li>
            <li><a href="#gallery" className="hover:text-teal-300 transition">Gallery</a></li>
            <li><a href="#species" className="hover:text-teal-300 transition">Species</a></li>
            <li><a href="#journal" className="hover:text-teal-300 transition">Journal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-200 font-semibold">Follow</h4>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-teal-300 transition"><Instagram className="h-4 w-4" /> Instagram</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-teal-300 transition"><Twitter className="h-4 w-4" /> Twitter</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-teal-300 transition"><Github className="h-4 w-4" /> GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} MicroCosmos. All photographs are scientific reconstructions.
      </div>
    </footer>
  )
}
