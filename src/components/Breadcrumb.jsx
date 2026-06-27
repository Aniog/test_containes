export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex items-center text-[12px] text-[color:var(--color-text-body)]">
        <li>
          <a href="/" className="hover:text-[color:var(--color-brand-purple)] hover:underline">Strikingly</a>
        </li>
        <li className="mx-2" aria-hidden="true">&gt;</li>
        <li>
          <span aria-current="page">AI Generators</span>
        </li>
      </ol>
    </nav>
  )
}
