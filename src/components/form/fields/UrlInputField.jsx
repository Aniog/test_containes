import { useState } from 'react'
import { Link, X, CheckCircle } from 'lucide-react'

export default function UrlInputField({ label, description, value, onChange, required }) {
  const [inputVal, setInputVal] = useState(value?.storageKey || '')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const url = e.target.value
    setInputVal(url)
    setError(null)
    if (!url.trim()) {
      onChange(null)
      return
    }
    try {
      new URL(url)
      onChange({ storageKey: url, filename: url.split('/').pop() || 'image', storage: 'url', mimeType: 'image/*' })
    } catch {
      setError('请输入有效的 URL 地址')
      onChange(null)
    }
  }

  const handleClear = () => {
    setInputVal('')
    setError(null)
    onChange(null)
  }

  const isValid = value && !error

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && <p className="text-xs text-gray-500">{description}</p>}

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Link className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="url"
          value={inputVal}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className={`w-full pl-9 pr-9 py-2.5 text-sm border rounded-lg outline-none transition-colors bg-white text-gray-800
            ${error ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200' :
              isValid ? 'border-green-400 focus:border-green-500 focus:ring-1 focus:ring-green-200' :
              'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'}`}
        />
        {inputVal && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isValid && value?.storageKey && (
        <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
          <img
            src={value.storageKey}
            alt="preview"
            className="w-12 h-12 object-cover rounded border border-green-200"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
            <span className="text-xs text-green-600 truncate max-w-xs">{value.storageKey}</span>
          </div>
        </div>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
