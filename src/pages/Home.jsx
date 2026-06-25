import HomeAdvantages from '@/components/home/HomeAdvantages'
import HomeContactPanel from '@/components/home/HomeContactPanel'
import HomeHero from '@/components/home/HomeHero'
import HomeProductGrid from '@/components/home/HomeProductGrid'
import HomeWorkflow from '@/components/home/HomeWorkflow'
import { navItems } from '@/components/home/home-content'

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="px-6 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-[0_24px_80px_rgba(15,23,42,0.04)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
              ARTITECT MACHINERY
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Elegant sheet metal folding machine presentation
            </p>
          </div>

          <nav aria-label="Primary navigation" className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <HomeHero />
      <HomeProductGrid />
      <HomeAdvantages />
      <HomeWorkflow />
      <HomeContactPanel />
    </div>
  )
}

export default Home
