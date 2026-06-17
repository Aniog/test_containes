import { Search, X } from 'lucide-react'
import { COUNTRY_NAMES } from '@/lib/utils'

const SearchBar = ({ search, onSearch, country, onCountry, location, onLocation }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="搜索姓名、邮箱、地点..."
          className="w-full pl-9 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
        {search && (
          <button onClick={() => onSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <select
        value={country}
        onChange={(e) => onCountry(e.target.value)}
        className="py-2.5 px-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white min-w-[140px]"
      >
        <option value="">所有国家/地区</option>
        {Object.entries(COUNTRY_NAMES).map(([code, name]) => (
          <option key={code} value={code}>{code} — {name}</option>
        ))}
      </select>

      <input
        type="text"
        value={location}
        onChange={(e) => onLocation(e.target.value)}
        placeholder="城市/地点..."
        className="py-2.5 px-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-w-[140px]"
      />
    </div>
  )
}

export default SearchBar
