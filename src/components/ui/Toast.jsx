import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-3 max-w-sm animate-in slide-in-from-bottom-4">
      {isSuccess
        ? <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
        : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
      }
      <p className="text-sm text-slate-700 flex-1">{message}</p>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
