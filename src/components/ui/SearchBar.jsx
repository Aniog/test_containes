import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`)
      setQuery('')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-[#E5DFD3] shadow-lg p-4 z-50">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jewelry..."
          className="flex-1 bg-transparent border-b border-[#E5DFD3] py-2 text-sm focus:outline-none focus:border-[#C5A46E] placeholder:text-[#8A7F6D]"
          autoFocus
        />
        <button type="submit" className="p-2 text-[#C5A46E]">
          <Search className="w-4 h-4" />
        </button>
        <button type="button" onClick={onClose} className="p-2 text-[#8A7F6D]">
          <X className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}
