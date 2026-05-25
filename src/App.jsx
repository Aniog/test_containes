import './App.css'
import { Toaster } from 'sonner'
import Todos from './components/Todos.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex py-10 justify-center">
      <div className="w-full max-w-xl px-4">
        <Todos />
      </div>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App
