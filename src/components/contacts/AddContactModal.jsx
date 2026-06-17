import { useState } from 'react'
import { X, Plus, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { createContact } from '@/api/contacts'

const FIELDS = [
  { key: 'first_name', label: '名字', required: true, type: 'text' },
  { key: 'last_name', label: '姓氏', required: true, type: 'text' },
  { key: 'email', label: '邮箱', type: 'email' },
  { key: 'phone', label: '电话', type: 'tel' },
  { key: 'location', label: '城市/地点', type: 'text' },
  { key: 'country_region_code', label: '国家/地区代码 (如 HK, JP)', type: 'text' },
  { key: 'website', label: '网站 URL', type: 'url' },
  { key: 'facebook', label: 'Facebook URL', type: 'url' },
  { key: 'twitter', label: 'Twitter URL', type: 'url' },
  { key: 'instagram', label: 'Instagram URL', type: 'url' },
  { key: 'youtube', label: 'YouTube URL', type: 'url' },
]

const AddContactModal = ({ onClose, onAdded }) => {
  const [values, setValues] = useState({})
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (key, val) => setValues((v) => ({ ...v, [key]: val }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!values.first_name?.trim() || !values.last_name?.trim()) {
      setError('名字和姓氏为必填项')
      return
    }
    setStatus('submitting')
    try {
      const created = await createContact(values)
      onAdded(created)
      onClose()
    } catch (err) {
      setError(err.message || '添加失败')
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Plus className="w-5 h-5 text-yellow-500" />
            添加新联系人
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-5 space-y-3">
          {FIELDS.map(({ key, label, required, type }) => (
            <div key={key}>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={type}
                value={values[key] || ''}
                onChange={(e) => onChange(key, e.target.value)}
                required={required}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          ))}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex-1 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg text-sm transition-colors disabled:opacity-60"
            >
              {status === 'submitting' ? '添加中...' : '添加联系人'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContactModal
