import { strings } from '../../data/strings'

const t = strings.en.breadcrumb

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-2.5">
      <ol className="flex items-center gap-1.5 list-none m-0 p-0 text-xs text-body-text font-body">
        <li>
          <a href="/" className="hover:underline focus-ring rounded">
            {t.home}
          </a>
        </li>
        <li aria-hidden="true" className="text-body-text">&gt;</li>
        <li aria-current="page" className="font-semibold">
          {t.current}
        </li>
      </ol>
    </nav>
  )
}
