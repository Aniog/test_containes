import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function SearchDialog() {
  const navigate = useNavigate()
  const { isSearchOpen, closeSearch } = useCart()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedQuery = query.trim()
    navigate(trimmedQuery ? `/shop?query=${encodeURIComponent(trimmedQuery)}` : '/shop')
    closeSearch()
  }

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[85] bg-velmora-noir/60 backdrop-blur-sm transition duration-300',
          isSearchOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeSearch}
      />
      <div
        className={cn(
          'fixed inset-x-4 top-6 z-[90] mx-auto max-w-2xl rounded-[2rem] border border-velmora-line bg-velmora-ivory p-4 shadow-velmora-card transition duration-300 sm:inset-x-6 sm:p-6',
          isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
        )}
        aria-hidden={!isSearchOpen}
      >
        <div className="flex items-center justify-between gap-4 border-b border-velmora-line pb-4">
          <div>
            <p className="text-xs uppercase tracking-brand text-velmora-taupe">Search</p>
            <h2 className="font-display text-3xl text-velmora-ink">Find your next piece</h2>
          </div>
          <button
            type="button"
            onClick={closeSearch}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-taupe" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search earrings, necklaces, huggies..."
              className="h-14 w-full rounded-full border border-velmora-line bg-velmora-pearl pl-12 pr-5 text-sm text-velmora-ink outline-none transition focus:border-velmora-gold"
            />
          </label>
          <Button type="submit" size="lg">
            Search
          </Button>
        </form>
      </div>
    </>
  )
}
