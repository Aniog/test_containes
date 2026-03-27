import TodoList from '@/components/todos/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <TodoList />
      <footer className="text-center text-xs text-slate-400 mt-12">
        © {new Date().getFullYear()} My Todo App
      </footer>
    </div>
  )
}

export default App
