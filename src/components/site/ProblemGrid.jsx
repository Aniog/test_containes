import { CircleAlert, Eye, FileSearch, ShieldCheck } from 'lucide-react'

const icons = [CircleAlert, FileSearch, ShieldCheck, Eye]

const ProblemGrid = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length]

        return (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sky-300">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              {item.description}
            </p>
          </article>
        )
      })}
    </div>
  )
}

export default ProblemGrid
