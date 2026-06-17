import { useState, useEffect, useCallback } from 'react'
import { BookOpen, Plus, Users, RefreshCw } from 'lucide-react'
import { fetchContacts } from '@/api/contacts'
import ContactCard from '@/components/contacts/ContactCard'
import SearchBar from '@/components/contacts/SearchBar'
import AlphabetFilter from '@/components/contacts/AlphabetFilter'
import AddContactModal from '@/components/contacts/AddContactModal'

const YellowPages = () => {
  const [contacts, setContacts] = useState([])
  const [status, setStatus] = useState('loading')
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')
  const [location, setLocation] = useState('')
  const [letter, setLetter] = useState('')
  const [showAdd, setShowAdd] = useState(false)

  const loadContacts = useCallback(async () => {
    setStatus('loading')
    try {
      const data = await fetchContacts({ search, country, location, letter })
      setContacts(data)
      setStatus('ready')
    } catch (err) {
      console.error('Failed to load contacts:', err)
      setStatus('error')
    }
  }, [search, country, location, letter])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  const handleAdded = (newContact) => {
    setContacts((prev) => [{ id: newContact.id, ...newContact.data }, ...prev])
    loadContacts()
  }

  const activeFilters = [search, country, location, letter].filter(Boolean).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1A1F36] text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 text-gray-900 font-black text-xl w-10 h-10 rounded-lg flex items-center justify-center">
              YP
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">黄页通讯录</h1>
              <p className="text-yellow-400 text-xs">Yellow Pages Directory</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>{contacts.length} 条联系人</span>
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">添加联系人</span>
            </button>
          </div>
        </div>

        {/* Hero strip */}
        <div className="border-t border-white/10 bg-[#141829]">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center text-gray-400 text-sm mb-4">查找联系人 · 浏览目录 · 一键联系</p>
            <SearchBar
              search={search} onSearch={setSearch}
              country={country} onCountry={setCountry}
              location={location} onLocation={setLocation}
            />
          </div>
        </div>
      </header>

      {/* Alphabet filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <AlphabetFilter activeLetter={letter} onSelect={setLetter} />
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600">
              {status === 'loading' ? '加载中...' : `共 ${contacts.length} 条结果`}
              {activeFilters > 0 && (
                <span className="ml-2 text-yellow-600 font-medium">({activeFilters} 个筛选条件)</span>
              )}
            </span>
          </div>
          {activeFilters > 0 && (
            <button
              onClick={() => { setSearch(''); setCountry(''); setLocation(''); setLetter('') }}
              className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              清除筛选
            </button>
          )}
        </div>

        {/* Grid */}
        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse">
                <div className="flex gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded" />
                  <div className="h-3 bg-gray-100 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-16">
            <p className="text-red-500 mb-3">加载失败，请重试</p>
            <button onClick={loadContacts} className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500">
              重新加载
            </button>
          </div>
        )}

        {status === 'ready' && contacts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">未找到联系人</h3>
            <p className="text-gray-400 text-sm mb-4">尝试调整搜索条件或清除筛选</p>
            <button
              onClick={() => setShowAdd(true)}
              className="bg-yellow-400 text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors"
            >
              添加第一个联系人
            </button>
          </div>
        )}

        {status === 'ready' && contacts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1F36] text-gray-400 text-center text-xs py-6 mt-10">
        <p>© 2026 黄页通讯录 Yellow Pages Directory · 版权所有</p>
      </footer>

      {showAdd && (
        <AddContactModal onClose={() => setShowAdd(false)} onAdded={handleAdded} />
      )}
    </div>
  )
}

export default YellowPages
