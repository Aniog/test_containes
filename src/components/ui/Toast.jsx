import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'
import { cn } from '@/lib/utils'

let toastQueue = []
let listeners = []

export function toast(message, type = 'info') {
  const id = Date.now() + Math.random()
  const item = { id, message, type }
  toastQueue = [...toastQueue, item]
  listeners.forEach(fn => fn([...toastQueue]))
  setTimeout(() => {
    toastQueue = toastQueue.filter(t => t.id !== id)
    listeners.forEach(fn => fn([...toastQueue]))
  }, 4000)
}

toast.success = (msg) => toast(msg, 'success')
toast.error = (msg) => toast(msg, 'error')
toast.info = (msg) => toast(msg, 'info')

export function Toaster() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    listeners.push(setToasts)
    return () => { listeners = listeners.filter(fn => fn !== setToasts) }
  }, [])

  const icons = {
    success: <CheckCircle size={18} className="text-green-600" />,
    error: <XCircle size={18} className="text-red-600" />,
    info: <Info size={18} className="text-blue-600" />,
  }

  const styles = {
    success: 'border-green-200 bg-green-50',
    error: 'border-red-200 bg-red-50',
    info: 'border-blue-200 bg-blue-50',
  }

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full">
      {toasts.map(t => (
        <div key={t.id} className={cn('flex items-start gap-3 p-4 rounded-lg border shadow-md', styles[t.type])}>
          {icons[t.type]}
          <p className="text-sm text-slate-800 flex-1">{t.message}</p>
          <button onClick={() => {
            toastQueue = toastQueue.filter(x => x.id !== t.id)
            setToasts([...toastQueue])
          }} className="text-slate-400 hover:text-slate-600">
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
