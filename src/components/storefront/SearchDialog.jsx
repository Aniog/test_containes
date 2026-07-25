import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { products } from '../../data/storefront'

function SearchDialog({ open, onClose }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  const suggestions = useMemo(() => {
    const value = query.trim().toLowerCase()

    if (!value) {
      return products.slice(0, 4)
    }

    return products.filter((product) => {
      const haystack = [product.name, product.category, product.material, product.shortDescription]
        .join(' ')
        .toLowerCase()

      return haystack.includes(value)
    })
  }, [query])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/shop${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`)
    onClose()
  }

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 py-6 backdrop-blur-sm sm:px-6">
      <div className="w-full max-w-3xl rounded-[2rem] bg-ivory p-6 shadow-velvet sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-editorial text-truffle">Search the collection</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Find your next signature piece</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-mist p-3 text-ink transition-colors duration-300 ease-editorial hover:bg-shell"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-truffle" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search earrings, huggies, gifting..."
              className="w-full rounded-full border border-mist bg-glow py-4 pl-12 pr-5 text-sm text-ink outline-none transition-colors duration-300 ease-editorial placeholder:text-truffle focus:border-champagne"
              autoFocus
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-brass hover:text-ivory"
          >
            Search
          </button>
        </form>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {suggestions.slice(0, 4).map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="rounded-[1.5rem] border border-mist bg-glow p-5 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:shadow-whisper"
            >
              <p className="text-xs uppercase tracking-editorial text-truffle">{product.category}</p>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-luxury text-ink">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-truffle">{product.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchDialog
