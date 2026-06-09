import { Link } from 'react-router-dom'
import { navigationItems } from '@/content/siteContent'

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr,0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            SSourcing China
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Practical sourcing support for overseas buyers working with China.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            We help buyers identify reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping readiness with clear communication.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pages
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <Link className="transition-colors hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <p>Email: hello@ssourcingchina.com</p>
              <p>Based in China, supporting overseas buyers globally</p>
              <p>Inquiry focus: supplier search, verification, QC, production follow-up, shipping coordination</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 SSourcing China. All rights reserved.</p>
          <p>China sourcing support for global buyers.</p>
        </div>
      </div>
    </footer>
  )
}
