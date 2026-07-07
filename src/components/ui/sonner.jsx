import { Toaster as Sonner } from 'sonner'

const Toaster = () => {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        style: {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '13px',
          borderRadius: '2px',
          border: '1px solid #E8D5B0',
          padding: '12px 16px',
          background: '#FAF7F2',
          color: '#1C1917',
        },
        duration: 2500,
      }}
    />
  )
}

export { Toaster }
