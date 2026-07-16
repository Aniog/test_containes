import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { products } from '@/data/storefront'
import { useStore } from '@/context/StoreContext'

const SearchPanel = () => {
  const { searchOpen, setSearchOpen } = useStore()

  return (
    <>
      <div
        aria-hidden={!searchOpen}
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-sm transition-all duration-300 ${searchOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setSearchOpen(false)}
      />
      <aside
        aria-hidden={!searchOpen}
        className={`fixed left-1/2 top-6 z-50 w-[min(92vw,40rem)] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-velmora-panel p-5 text-velmora-ivory shadow-velmora transition-all duration-300 ${searchOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">Search edit</p>
            <h2 className="font-serif text-3xl text-velmora-ivory">Discover Velmora</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-velmora-ivory transition-colors duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close search panel"
            onClick={() => setSearchOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-velmora-mist">
          <Search className="h-4 w-4" />
          <span>Popular right now</span>
        </div>

        <div className="mt-5 grid gap-3">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:border-velmora-gold hover:bg-white/10"
              onClick={() => setSearchOpen(false)}
            >
              <div>
                <p className="text-sm uppercase tracking-velmora text-velmora-ivory">{product.name}</p>
                <p className="mt-1 text-sm text-velmora-mist">{product.category}</p>
              </div>
              <p className="text-sm font-semibold text-velmora-gold">${product.price}</p>
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}

export default SearchPanel
