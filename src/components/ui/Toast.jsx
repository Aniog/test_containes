import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'

const icons = {
  success: <CheckCircle size={18} className="text-green-500" />,
  error: <XCircle size={18} className="text-red-500" />,
  info: <Info size={18} className="text-blue-500" />,
}

const colors = {
  success: 'bg-green-50 border-green-200',
  error: 'bg-red-50 border-red-200',
  info: 'bg-blue-50 border-blue-200',
}

const textColors = {
  success: 'text-green-800',
  error: 'text-red-800',
  info: 'text-blue-800',
}

export default function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg ${colors[type]} min-w-72 max-w-sm`}>
      {icons[type]}
      <p className={`text-sm font-medium flex-1 ${textColors[type]}`}>{message}</p>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
        <X size={14} />
      </button>
    </div>
  )
}

let _setToasts = null

export function ToastContainer() {
  const [toasts, setToasts] = useState([])
  _setToasts = setToasts

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      {toasts.map((t) => (
        <Toast key={t.id} message={t.message} type={t.type} onClose={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))} />
      ))}
    </div>
  )
}

export function toast(message, type = 'info') {
  if (_setToasts) {
    const id = Date.now() + Math.random()
    _setToasts((prev) => [...prev, { id, message, type }])
  }
}
